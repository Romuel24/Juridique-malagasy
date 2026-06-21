import { useState, useEffect, useCallback } from 'react';
import { fbRegister, fbLogin, fbLogout, fbOnAuthChange, fbGetUser, fbAddFavorite, fbRemoveFavorite } from '../lib/firebase';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  photoUrl?: string;
  createdAt: string;
}

export interface FavoriteArticle {
  articleId: string;
  domain: 'penal' | 'labor' | 'land' | 'family';
  title_fr: string;
  title_mg: string;
  addedAt: string;
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [favorites, setFavorites] = useState<FavoriteArticle[]>([]);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase auth state
  useEffect(() => {
    const unsub = fbOnAuthChange(async (fbUser) => {
      if (fbUser) {
        try {
          const data = await fbGetUser(fbUser.uid);
          if (data) {
            setUser({ id: fbUser.uid, name: data.name, email: data.email, phone: data.phone || undefined, photoUrl: data.photoUrl || undefined, createdAt: data.createdAt });
            setFavorites(data.favorites || []);
          } else {
            setUser({ id: fbUser.uid, name: fbUser.email?.split('@')[0] || '', email: fbUser.email || '', createdAt: new Date().toISOString() });
            setFavorites([]);
          }
        } catch {
          setUser(null);
          setFavorites([]);
        }
      } else {
        setUser(null);
        setFavorites([]);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const register = useCallback(async (name: string, email: string, password: string, phone?: string, photoUrl?: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const result = await fbRegister(email, password, name, phone, photoUrl);
      setUser({ id: result.uid, name, email, phone, photoUrl, createdAt: new Date().toISOString() });
      setFavorites([]);
      return { success: true };
    } catch (e: any) {
      if (e.code === 'auth/email-already-in-use') return { success: false, error: 'email_exists' };
      if (e.code === 'auth/weak-password') return { success: false, error: 'weak_password' };
      if (e.code === 'auth/invalid-email') return { success: false, error: 'invalid_email' };
      return { success: false, error: e.message || 'unknown' };
    }
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      await fbLogin(email, password);
      return { success: true };
    } catch (e: any) {
      if (e.code === 'auth/user-not-found') return { success: false, error: 'not_found' };
      if (e.code === 'auth/wrong-password' || e.code === 'auth/invalid-credential') return { success: false, error: 'wrong_password' };
      if (e.code === 'auth/invalid-email') return { success: false, error: 'invalid_email' };
      if (e.code === 'auth/too-many-requests') return { success: false, error: 'too_many' };
      return { success: false, error: e.message || 'unknown' };
    }
  }, []);

  const logout = useCallback(async () => {
    try { await fbLogout(); } catch {}
    setUser(null);
    setFavorites([]);
  }, []);

  const addFavorite = useCallback(async (fav: Omit<FavoriteArticle, 'addedAt'>) => {
    if (!user) return;
    const newFav: FavoriteArticle = { ...fav, addedAt: new Date().toISOString() };
    // Optimistic update
    setFavorites(prev => {
      if (prev.some(f => f.articleId === fav.articleId && f.domain === fav.domain)) return prev;
      return [...prev, newFav];
    });
    // Sync to Firestore
    try { await fbAddFavorite(user.id, newFav); } catch {}
  }, [user]);

  const removeFavorite = useCallback(async (articleId: string, domain: string) => {
    if (!user) return;
    const toRemove = favorites.find(f => f.articleId === articleId && f.domain === domain);
    // Optimistic update
    setFavorites(prev => prev.filter(f => !(f.articleId === articleId && f.domain === domain)));
    // Sync to Firestore
    if (toRemove) { try { await fbRemoveFavorite(user.id, toRemove); } catch {} }
  }, [user, favorites]);

  const isFavorite = useCallback((articleId: string, domain: string): boolean => {
    return favorites.some(f => f.articleId === articleId && f.domain === domain);
  }, [favorites]);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    if (!user) return;
    setUser(prev => prev ? { ...prev, ...updates } : prev);
  }, [user]);

  return { user, favorites, loading, register, login, logout, addFavorite, removeFavorite, isFavorite, updateProfile };
}
