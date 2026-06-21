import { useState, useCallback } from 'react';
import { translations, Lang } from './data/translations';
import { useTheme } from './hooks/useTheme';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LegalDomainPage from './components/LegalDomainPage';
import ManualPage from './components/ManualPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import AuthPage from './components/AuthPage';
import FavoritesPage from './components/FavoritesPage';
import LawyerDirectory from './components/LawyerDirectory';
import ProfilePage from './components/ProfilePage';
import ForumPage from './components/ForumPage';
import Footer from './components/Footer';
import InstallPrompt from './components/InstallPrompt';
import SplashScreen from './components/SplashScreen';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import OfflineIndicator from './components/OfflineIndicator';
import BottomNav from './components/BottomNav';

type Page = 'home' | 'domain' | 'manual' | 'contact' | 'about' | 'auth' | 'favorites' | 'lawyers' | 'profile' | 'forum';
type LegalDomain = 'penal' | 'labor' | 'land' | 'family';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [lang, setLang] = useState<Lang>('fr');
  const [page, setPage] = useState<Page>('home');
  const [selectedDomain, setSelectedDomain] = useState<LegalDomain | null>(null);
  const [pageKey, setPageKey] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { user, favorites, register, login, logout, addFavorite, removeFavorite, isFavorite, updateProfile } = useAuth();
  const t = translations;

  const toggleLang = () => setLang(prev => prev === 'fr' ? 'mg' : 'fr');
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  const navigateTo = (newPage: Page) => {
    setPageKey(prev => prev + 1);
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDomain = (domain: LegalDomain) => { setSelectedDomain(domain); navigateTo('domain'); };
  const handleBackToHome = () => { setSelectedDomain(null); navigateTo('home'); };
  const handlePageChange = (newPage: string) => {
    if (newPage === 'search') { setSelectedDomain(null); navigateTo('home'); }
    else navigateTo(newPage as Page);
  };

  const handleToggleFavorite = (article: any, domain: string) => {
    if (!user) { navigateTo('auth'); return; }
    if (isFavorite(article.article, domain)) removeFavorite(article.article, domain);
    else addFavorite({ articleId: article.article, domain: domain as any, title_fr: article.title_fr, title_mg: article.title_mg });
  };

  const handleLogin = async (email: string, password: string) => { const r = await login(email, password); if (r.success) navigateTo('home'); return r; };
  const handleRegister = async (name: string, email: string, password: string, phone?: string, photoUrl?: string) => { const r = await register(name, email, password, phone, photoUrl); if (r.success) navigateTo('home'); return r; };
  const handleLogout = () => { logout(); navigateTo('home'); };

  if (showSplash) return <SplashScreen onComplete={handleSplashComplete} />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Header lang={lang} toggleLang={toggleLang} theme={theme} toggleTheme={toggleTheme}
        page={page === 'home' || page === 'domain' ? 'search' as any : page}
        setPage={handlePageChange} t={t} user={user} favCount={favorites.length} onLogout={handleLogout} />
      
      {/* Main content with bottom padding for mobile nav */}
      <main className="flex-1 relative z-0 pb-16 md:pb-0" key={pageKey}>
        {page === 'home' && <HomePage lang={lang} t={t} onSelectDomain={handleSelectDomain} />}
        {page === 'domain' && selectedDomain && <div className="page-enter"><LegalDomainPage domain={selectedDomain} lang={lang} t={t} onBack={handleBackToHome} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} /></div>}
        {page === 'manual' && <div className="page-enter"><ManualPage lang={lang} t={t} /></div>}
        {page === 'contact' && <div className="page-enter"><ContactPage lang={lang} t={t} /></div>}
        {page === 'about' && <AboutPage lang={lang} />}
        {page === 'auth' && <AuthPage lang={lang} onLogin={handleLogin} onRegister={handleRegister} onClose={() => navigateTo('home')} />}
        {page === 'favorites' && <FavoritesPage lang={lang} favorites={favorites} onRemove={removeFavorite} onBack={() => navigateTo('home')} />}
        {page === 'lawyers' && <LawyerDirectory lang={lang} onBack={() => navigateTo('home')} />}
        {page === 'profile' && user && <ProfilePage lang={lang} user={user} onBack={() => navigateTo('home')} onUpdate={updateProfile} />}
        {page === 'forum' && <ForumPage lang={lang} user={user} onBack={() => navigateTo('home')} onLogin={() => navigateTo('auth')} />}
      </main>

      <div className="hidden md:block"><Footer lang={lang} t={t} /></div>
      
      {/* Mobile bottom navigation */}
      <BottomNav lang={lang} page={page} user={user} favCount={favorites.length} onNavigate={handlePageChange} />
      
      <InstallPrompt lang={lang} />
      <Chatbot lang={lang} user={user} onRequestLogin={() => navigateTo('auth')} />
      <ScrollToTop />
      <OfflineIndicator lang={lang} />
    </div>
  );
}
