import { Lang } from '../data/translations';
import { UserProfile } from '../hooks/useAuth';
import { Home, Scale, MessageSquare, User, Heart } from 'lucide-react';

interface BottomNavProps {
  lang: Lang;
  page: string;
  user: UserProfile | null;
  favCount: number;
  onNavigate: (page: string) => void;
}

export default function BottomNav({ lang, page, user, favCount, onNavigate }: BottomNavProps) {
  const activePage = page === 'home' || page === 'domain' ? 'home' : page;

  const items = [
    { key: 'home', icon: <Home size={20} />, label: lang === 'fr' ? 'Accueil' : 'Fandraisana' },
    ...(user ? [{ key: 'forum', icon: <MessageSquare size={20} />, label: 'Forum' }] : []),
    ...(user ? [{ key: 'lawyers', icon: <Scale size={20} />, label: 'Contacts' }] : []),
    ...(user ? [{ key: 'favorites', icon: <Heart size={20} />, label: lang === 'fr' ? 'Favoris' : 'Tiana', badge: favCount }] : []),
    { key: user ? 'profile' : 'auth', icon: <User size={20} />, label: user ? 'Profil' : (lang === 'fr' ? 'Compte' : 'Kaonty') },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[55] bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 safe-area-bottom">
      <div className="flex items-center justify-around px-1 py-1">
        {items.map(item => {
          const active = activePage === item.key;
          return (
            <button key={item.key} onClick={() => onNavigate(item.key === 'home' ? 'search' : item.key)}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl transition-all ${active ? 'text-[#007A33]' : 'text-slate-400'}`}>
              <div className="relative">
                {item.icon}
                {'badge' in item && (item as any).badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{(item as any).badge > 9 ? '9+' : (item as any).badge}</span>
                )}
              </div>
              <span className={`text-[9px] mt-0.5 font-medium ${active ? 'text-[#007A33]' : 'text-slate-400'}`}>{item.label}</span>
              {active && <div className="w-4 h-0.5 bg-[#007A33] rounded-full mt-0.5" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
