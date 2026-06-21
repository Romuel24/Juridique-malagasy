import { Lang } from '../data/translations';
import { Scale, MessageSquare, Home, Menu, X, Info, Sun, Moon, User, Heart, LogOut, Award, Settings } from 'lucide-react';
import { useState } from 'react';
import { Theme } from '../hooks/useTheme';
import { UserProfile } from '../hooks/useAuth';
import MalagasyFlag from './MalagasyFlag';
import FrenchFlag from './FrenchFlag';

type Page = 'search' | 'manual' | 'contact' | 'about' | 'auth' | 'favorites' | 'lawyers' | 'profile' | 'forum';

interface HeaderProps {
  lang: Lang;
  toggleLang: () => void;
  theme: Theme;
  toggleTheme: () => void;
  page: Page;
  setPage: (page: Page) => void;
  t: typeof import('../data/translations').translations;
  user: UserProfile | null;
  favCount: number;
  onLogout: () => void;
}

const staggerDelays = ['0ms', '50ms', '100ms', '150ms', '200ms', '250ms'];

export default function Header({ lang, toggleLang, theme, toggleTheme, page, setPage, t, user, favCount, onLogout }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems: { key: Page; icon: React.ReactNode; label: string }[] = [
    { key: 'search', icon: <Home size={16} />, label: lang === 'fr' ? 'Accueil' : 'Fandraisana' },
    ...(user ? [{ key: 'forum' as Page, icon: <MessageSquare size={16} />, label: 'Forum' }] : []),
    ...(user ? [{ key: 'lawyers' as Page, icon: <Award size={16} />, label: lang === 'fr' ? 'Contacts' : 'Fifandraisana' }] : []),
    { key: 'about', icon: <Info size={16} />, label: lang === 'fr' ? 'À propos' : 'Momba' },
  ];

  const handleNav = (key: Page) => { setPage(key); setMenuOpen(false); setUserMenuOpen(false); };

  return (
    <header className="relative z-50">
      <div className="flex h-1.5">
        <div className="flex-1 bg-white dark:bg-slate-700" />
        <div className="flex-1 bg-[#D22630]" />
        <div className="flex-1 bg-[#007A33]" />
      </div>

      <div className="bg-slate-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <button className="flex items-center gap-3 group" onClick={() => handleNav('search')}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Scale className="text-white" size={22} />
              </div>
              <div className="hidden sm:block text-left">
                <h1 className="text-white font-bold text-base leading-tight tracking-tight">{t.siteTitle[lang]}</h1>
                <p className="text-slate-500 text-[11px]">{t.siteSubtitle[lang]}</p>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button key={item.key} onClick={() => handleNav(item.key)}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${page === item.key ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                  {item.icon}{item.label}
                  {page === item.key && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#007A33] rounded-full pointer-events-none" />}
                </button>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-1.5">
              {/* Favorites (if logged in) */}
              {user && (
                <button onClick={() => handleNav('favorites')}
                  className={`relative p-2 rounded-lg transition-all duration-200 ${page === 'favorites' ? 'bg-white/15 text-red-400' : 'text-slate-400 hover:text-red-400 hover:bg-white/10'}`}>
                  <Heart size={18} fill={page === 'favorites' ? 'currentColor' : 'none'} />
                  {favCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      {favCount > 9 ? '9+' : favCount}
                    </span>
                  )}
                </button>
              )}

              {/* Theme toggle */}
              <button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-90 transition-all duration-200 text-white"
                title={theme === 'light' ? 'Mode nuit' : 'Mode jour'}>
                {theme === 'light' ? <Moon size={17} /> : <Sun size={17} className="text-amber-300" />}
              </button>

              {/* Language toggle — MG with malagasy flag, FR with french flag */}
              <button onClick={toggleLang} className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white text-xs font-medium">
                {lang === 'fr' ? <><MalagasyFlag size={16} /><span>MG</span></> : <><FrenchFlag size={16} /><span>FR</span></>}
              </button>

              {/* User avatar / Login */}
              <div className="relative">
                {user ? (
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center text-white text-sm font-bold hover:scale-110 active:scale-95 transition-all ring-2 ring-white/20 overflow-hidden">
                    {user.photoUrl ? <img src={user.photoUrl} alt="" className="w-full h-full object-cover" /> : user.name.charAt(0).toUpperCase()}
                  </button>
                ) : (
                  <button onClick={() => handleNav('auth')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200 text-white text-xs font-medium">
                    <User size={16} />
                    <span className="hidden sm:inline">{lang === 'fr' ? 'Connexion' : 'Hiditra'}</span>
                  </button>
                )}

                {/* User dropdown */}
                {userMenuOpen && user && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[60] anim-stagger-up" style={{ animationDelay: '0ms' }}>
                    <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 truncate">{user.email}</p>
                    </div>
                    <button onClick={() => { handleNav('profile'); }} className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <Settings size={16} className="text-slate-400" />
                      {lang === 'fr' ? 'Mon Profil' : 'Ny mombamombako'}
                    </button>
                    <button onClick={() => { handleNav('favorites'); }} className="flex items-center gap-3 w-full px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <Heart size={16} className="text-red-400" />
                      {lang === 'fr' ? 'Mes Favoris' : 'Ny tiako'}{favCount > 0 && <span className="ml-auto text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-bold">{favCount}</span>}
                    </button>
                    <button onClick={() => { onLogout(); setUserMenuOpen(false); }} className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors border-t border-slate-100 dark:border-slate-700">
                      <LogOut size={16} />
                      {lang === 'fr' ? 'Déconnexion' : 'Hivoaka'}
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-90 transition-all duration-200">
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl z-[60]">
          {navItems.map((item, idx) => (
            <button key={item.key} onClick={() => handleNav(item.key)} style={{ animationDelay: staggerDelays[idx] }}
              className={`anim-stagger-left flex items-center gap-3 w-full px-6 py-3.5 text-sm font-medium transition-all duration-200
                ${page === item.key ? 'bg-white/10 text-white border-l-2 border-[#007A33]' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
              {item.icon}{item.label}
            </button>
          ))}
          {user && (
            <button onClick={() => handleNav('favorites')} style={{ animationDelay: staggerDelays[4] }}
              className="anim-stagger-left flex items-center gap-3 w-full px-6 py-3.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white border-t border-slate-700/50">
              <Heart size={16} className="text-red-400" />{lang === 'fr' ? 'Mes Favoris' : 'Ny tiako'}
              {favCount > 0 && <span className="ml-auto text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold">{favCount}</span>}
            </button>
          )}
          {!user && (
            <button onClick={() => handleNav('auth')} style={{ animationDelay: staggerDelays[4] }}
              className="anim-stagger-left flex items-center gap-3 w-full px-6 py-3.5 text-sm font-medium text-emerald-300 hover:bg-white/5 border-t border-slate-700/50">
              <User size={16} />{lang === 'fr' ? 'Connexion / Inscription' : 'Hiditra / Hisoratra anarana'}
            </button>
          )}
          <button onClick={toggleTheme} style={{ animationDelay: staggerDelays[5] }}
            className="anim-stagger-left flex items-center gap-3 w-full px-6 py-3.5 text-sm font-medium text-slate-300 hover:bg-white/5 border-t border-slate-700/50">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} className="text-amber-300" />}
            {theme === 'light' ? (lang === 'fr' ? 'Mode nuit' : 'Aizina') : (lang === 'fr' ? 'Mode jour' : 'Mazava')}
          </button>
        </div>
      )}
    </header>
  );
}
