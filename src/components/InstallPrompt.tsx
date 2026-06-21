import { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { Lang } from '../data/translations';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt({ lang }: { lang: Lang }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) { setInstalled(true); return; }
    const dismissed = sessionStorage.getItem('pwa_dismissed');
    if (dismissed) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShow(true), 5000);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => { setInstalled(true); setShow(false); });
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setInstalled(true);
    setShow(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShow(false);
    sessionStorage.setItem('pwa_dismissed', 'true');
  };

  if (installed || !show || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-3 right-3 sm:left-auto sm:right-4 sm:w-[360px] z-[55] anim-stagger-up" style={{ animationDelay: '0ms' }}>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 relative">
        <button onClick={handleDismiss} className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-600 transition-colors"><X size={16} /></button>
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shadow-md">
            <Smartphone className="text-white" size={22} />
          </div>
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">
              {lang === 'fr' ? 'Installer l\'application' : 'Apetraho ny rindranasa'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
              {lang === 'fr' ? 'Accès rapide, fonctionne hors-ligne' : 'Fidirana haingana, miasa tsy misy Internet'}
            </p>
            <div className="flex gap-2">
              <button onClick={handleInstall}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-lg text-xs hover:opacity-90 active:scale-95 transition-all shadow-md">
                <Download size={14} />{lang === 'fr' ? 'Installer' : 'Apetraho'}
              </button>
              <button onClick={handleDismiss}
                className="px-3 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium rounded-lg text-xs hover:bg-slate-200 transition-colors">
                {lang === 'fr' ? 'Plus tard' : 'Aoriana'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
