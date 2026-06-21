import { Lang } from '../data/translations';
import { Scale, Heart, Phone, Mail } from 'lucide-react';
import MalagasyFlag from './MalagasyFlag';

interface FooterProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

export default function Footer({ lang, t }: FooterProps) {
  const links = lang === 'fr'
    ? [{ label: 'Code Pénal', emoji: '⚖️' }, { label: 'Droit du Travail', emoji: '💼' }, { label: 'Droit Foncier', emoji: '🏠' }, { label: 'Droit de la Famille', emoji: '👨‍👩‍👧' }]
    : [{ label: 'Fehezan-dalàna', emoji: '⚖️' }, { label: 'Lalàna Asa', emoji: '💼' }, { label: 'Lalàna Tany', emoji: '🏠' }, { label: 'Lalàna Fianakaviana', emoji: '👨‍👩‍👧' }];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shadow-lg">
                <Scale className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.siteTitle[lang]}</p>
                <p className="text-slate-500 text-[11px]">{t.siteSubtitle[lang]}</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              {lang === 'fr'
                ? "Application juridique complète de Madagascar. Code Pénal, Droit du Travail, Droit Foncier et Droit de la Famille avec jurisprudence."
                : "Rindranasa ara-dalàna feno ho an'i Madagasikara. Fehezan-dalàna, Lalàna Asa, Lalàna Tany ary Lalàna Fianakaviana miaraka amin'ny jurisprudence."}
            </p>
          </div>

          {/* Domains */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
              {lang === 'fr' ? 'Domaines' : 'Sehatra'}
            </p>
            <div className="space-y-2">
              {links.map((l, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-500 text-xs hover:text-white transition-colors cursor-default">
                  <span>{l.emoji}</span> {l.label}
                </div>
              ))}
            </div>
          </div>

          {/* Creator */}
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
              {lang === 'fr' ? 'Créateur' : 'Mpamorona'}
            </p>
            <p className="text-white text-sm font-bold mb-2">RATOVOSON Navelanizara Romuel</p>
            <div className="space-y-1.5">
              <a href="tel:+261387319628" className="flex items-center gap-2 text-slate-400 text-xs hover:text-[#007A33] transition-colors group">
                <Phone size={12} className="group-hover:scale-110 transition-transform" /> +261 38 731 9628
              </a>
              <a href="mailto:romuelratovoson5@gmail.com" className="flex items-center gap-2 text-slate-400 text-xs hover:text-[#D22630] transition-colors group">
                <Mail size={12} className="group-hover:scale-110 transition-transform" /> romuelratovoson5@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <MalagasyFlag size={22} />
              <span className="text-slate-500 text-[10px]">Repoblikan'i Madagasikara</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-5 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-slate-600 text-[11px]">
              © {new Date().getFullYear()} RATOVOSON Navelanizara Romuel •{' '}
              <span className="inline-flex items-center gap-1">
                {lang === 'fr' ? 'Fait avec' : 'Natao tamin\'ny'}
                <Heart size={10} className="text-[#D22630]" fill="#D22630" />
                {lang === 'fr' ? 'pour Madagascar' : 'ho an\'i Madagasikara'}
              </span>
            </p>
            <p className="text-slate-600 text-[10px] leading-relaxed max-w-sm sm:text-right">
              {t.footerDisclaimer[lang]}
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-1.5">
        <div className="flex-1 bg-white/80" />
        <div className="flex-1 bg-[#D22630]" />
        <div className="flex-1 bg-[#007A33]" />
      </div>
    </footer>
  );
}
