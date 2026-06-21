import { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { Lang } from '../data/translations';

export default function OfflineIndicator({ lang }: { lang: Lang }) {
  const [online, setOnline] = useState(navigator.onLine);
  const [showReconnect, setShowReconnect] = useState(false);

  useEffect(() => {
    const goOnline = () => { setOnline(true); setShowReconnect(true); setTimeout(() => setShowReconnect(false), 3000); };
    const goOffline = () => { setOnline(false); setShowReconnect(false); };
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => { window.removeEventListener('online', goOnline); window.removeEventListener('offline', goOffline); };
  }, []);

  if (online && !showReconnect) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] py-1.5 px-4 text-center text-xs font-semibold transition-all anim-stagger-up ${
      online ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
    }`} style={{ animationDelay: '0ms' }}>
      <span className="inline-flex items-center gap-1.5">
        {online ? <Wifi size={12} /> : <WifiOff size={12} />}
        {online
          ? (lang === 'fr' ? 'Connexion rétablie' : 'Miverina ny fifandraisana')
          : (lang === 'fr' ? 'Hors ligne — Les données en cache sont disponibles' : 'Tsy misy Internet — Ny angona voatahiry dia azo ampiasaina')
        }
      </span>
    </div>
  );
}
