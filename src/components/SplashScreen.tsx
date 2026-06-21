import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => setExiting(true), 3000);
    const t5 = setTimeout(() => onComplete(), 3600);
    return () => { [t1,t2,t3,t4,t5].forEach(clearTimeout); };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden ${exiting ? 'splash-exit' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 splash-bg" />

      {/* Concentric rings */}
      {[0, 1, 2].map(i => (
        <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full border-2 splash-ring" style={{
            width: `${120 + i * 40}px`, height: `${120 + i * 40}px`,
            borderColor: i % 2 === 0 ? 'rgba(210,38,48,0.15)' : 'rgba(0,122,51,0.15)',
            animationDelay: `${i * 0.4}s`
          }} />
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <div key={i} className="absolute rounded-full" style={{
            width: `${3 + Math.random() * 5}px`, height: `${3 + Math.random() * 5}px`,
            left: `${5 + Math.random() * 90}%`, bottom: '-5%',
            backgroundColor: i % 3 === 0 ? '#D22630' : i % 3 === 1 ? '#007A33' : '#ffffff',
            opacity: 0.2 + Math.random() * 0.5,
            animation: `splash-particles ${2.5 + Math.random() * 3}s ease-out ${0.3 + Math.random() * 2.5}s infinite`,
          }} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Logo */}
        <div className="splash-logo splash-logo-pulse mb-6">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#D22630] to-[#007A33] blur-2xl opacity-40" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shadow-2xl border border-white/10">
              <Scale className="text-white drop-shadow-lg" size={48} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-9 h-9 rounded-xl bg-white shadow-xl flex items-center justify-center" style={{ animation: 'bounce-in 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.2s both' }}>
              <svg width="20" height="14" viewBox="0 0 450 300" className="rounded-sm">
                <rect x="0" y="0" width="150" height="300" fill="#FFFFFF" />
                <rect x="150" y="0" width="300" height="150" fill="#D22630" />
                <rect x="150" y="150" width="300" height="150" fill="#007A33" />
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="splash-text text-2xl sm:text-4xl font-extrabold text-white tracking-wide mb-1 text-center">
          Juridique Malagasy
        </h1>
        <p className="splash-subtitle text-xs sm:text-sm text-white/50 font-medium mb-6 text-center tracking-widest uppercase">
          Lalàna Malagasy
        </p>

        {/* Flag stripes */}
        <div className="flex gap-1.5 mb-6">
          <div className="splash-flag-1 h-1 w-14 sm:w-20 rounded-full bg-white/70" />
          <div className="splash-flag-2 h-1 w-14 sm:w-20 rounded-full bg-[#D22630]" />
          <div className="splash-flag-3 h-1 w-14 sm:w-20 rounded-full bg-[#007A33]" />
        </div>

        {/* Animated tagline */}
        <div className="h-5 mb-6 overflow-hidden">
          <p className={`text-xs text-white/40 text-center transition-all duration-500 ${phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {phase < 2 ? '⚖️ Code Pénal • 💼 Droit du Travail' : phase < 3 ? '🏠 Droit Foncier • 👨‍👩‍👧 Droit de la Famille' : '🤖 Zoako (Gemini AI) • ❤️ Favoris'}
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-white splash-dot-1" />
          <div className="w-2 h-2 rounded-full bg-[#D22630] splash-dot-2" />
          <div className="w-2 h-2 rounded-full bg-[#007A33] splash-dot-3" />
        </div>

        {/* Progress bar */}
        <div className="w-44 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#D22630] via-white/80 to-[#007A33] rounded-full splash-progress" />
        </div>

        {/* Creator credit */}
        <p className="mt-6 text-[10px] text-white/20 tracking-wide">by RATOVOSON Navelanizara Romuel</p>
      </div>
    </div>
  );
}
