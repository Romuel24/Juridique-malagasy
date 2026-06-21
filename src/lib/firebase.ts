import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJy0BzEm1xNhDGtn6eUMLDFY7fRAb8VsU",
  authDomain: "juridique-malagasy.firebaseapp.com",
  projectId: "juridique-malagasy",
  storageBucket: "juridique-malagasy.firebasestorage.app",
  messagingSenderId: "628880390393",
  appId: "1:628880390393:web:c266a459820a17e37aca28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ===== AUTH =====
export async function fbRegister(email: string, password: string, name: string, phone?: string, photoUrl?: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const userData: any = { name, email, createdAt: new Date().toISOString(), favorites: [] };
  if (phone) userData.phone = phone;
  if (photoUrl) userData.photoUrl = photoUrl;
  await setDoc(doc(db, 'users', cred.user.uid), userData);
  return { uid: cred.user.uid, name, email };
}

export async function fbLogin(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function fbLogout() {
  await signOut(auth);
}

export function fbOnAuthChange(cb: (user: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}

// ===== FIRESTORE =====
export async function fbGetUser(uid: string) {
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? snap.data() : null;
}

export async function fbAddFavorite(uid: string, fav: any) {
  await updateDoc(doc(db, 'users', uid), { favorites: arrayUnion(fav) });
}

export async function fbRemoveFavorite(uid: string, fav: any) {
  await updateDoc(doc(db, 'users', uid), { favorites: arrayRemove(fav) });
}
