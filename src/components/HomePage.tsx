import { Lang } from '../data/translations';
import { Scale, Briefcase, MapPin, Users, ChevronRight, Shield, Gavel, Sparkles, Search, MessageCircle, Heart, TrendingUp, Phone, MessageSquare } from 'lucide-react';
import MalagasyFlag from './MalagasyFlag';
import { penalArticles } from '../data/penalCode';
import { laborArticles } from '../data/laborCode';
import { landArticles } from '../data/landLaw';
import { familyArticles } from '../data/familyLaw';

type LegalDomain = 'penal' | 'labor' | 'land' | 'family';

interface HomePageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
  onSelectDomain: (domain: LegalDomain) => void;
}

export default function HomePage({ lang, t, onSelectDomain }: HomePageProps) {
  const totalArticles = penalArticles.length + laborArticles.length + landArticles.length + familyArticles.length;

  const domains = [
    { id: 'penal' as LegalDomain, icon: <Scale size={30} className="text-red-500" />, bgColor: 'bg-gradient-to-br from-red-50 to-red-100/50', borderColor: 'border-red-200/70', iconBg: 'bg-red-100', accentColor: '#D22630', title: t.homePenal[lang], desc: t.homePenalDesc[lang], count: penalArticles.length },
    { id: 'labor' as LegalDomain, icon: <Briefcase size={30} className="text-blue-500" />, bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100/50', borderColor: 'border-blue-200/70', iconBg: 'bg-blue-100', accentColor: '#2563eb', title: t.homeLabor[lang], desc: t.homeLaborDesc[lang], count: laborArticles.length },
    { id: 'land' as LegalDomain, icon: <MapPin size={30} className="text-emerald-500" />, bgColor: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50', borderColor: 'border-emerald-200/70', iconBg: 'bg-emerald-100', accentColor: '#007A33', title: t.homeLand[lang], desc: t.homeLandDesc[lang], count: landArticles.length },
    { id: 'family' as LegalDomain, icon: <Users size={30} className="text-purple-500" />, bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100/50', borderColor: 'border-purple-200/70', iconBg: 'bg-purple-100', accentColor: '#7c3aed', title: t.homeFamily[lang], desc: t.homeFamilyDesc[lang], count: familyArticles.length, badge: { fr: '+ Jurisprudence', mg: '+ Jurisprudence' } },
  ];

  const features = [
    { icon: <MessageCircle size={20} />, title: { fr: 'Zoako — IA Gemini', mg: 'Zoako — IA Gemini' }, desc: { fr: 'Assistant juridique intelligent', mg: 'Mpanolotsaina marani-tsaina' } },
    { icon: <Phone size={20} />, title: { fr: 'Contacts urgence', mg: 'Fifandraisana maika' }, desc: { fr: 'Police, gendarmerie, avocats', mg: 'Polisy, zandary, mpisolovava' } },
    { icon: <MessageSquare size={20} />, title: { fr: 'Forum', mg: 'Forum' }, desc: { fr: 'Entraide communautaire', mg: 'Fifanampiana' } },
    { icon: <Search size={20} />, title: { fr: 'Recherche & Simulateur', mg: 'Fikarohana & Mpanandrana' }, desc: { fr: '200+ articles de loi', mg: '200+ lahatsoratra lalàna' } },
    { icon: <Shield size={20} />, title: { fr: 'Bilingue 🇫🇷 🇲🇬', mg: 'Roa fiteny 🇫🇷 🇲🇬' }, desc: { fr: 'Français et malagasy', mg: 'Frantsay sy malagasy' } },
    { icon: <Heart size={20} />, title: { fr: 'Favoris & Profil', mg: 'Tiana & Profil' }, desc: { fr: 'Compte gratuit Firebase', mg: 'Kaonty maimaim-poana' } },
  ];

  const howItWorks = lang === 'fr'
    ? [{ n: '1', t: 'Choisissez un domaine', d: 'Code Pénal, Droit du Travail, Foncier ou Famille' }, { n: '2', t: 'Utilisez un outil', d: 'Recherche, Explorateur, Simulateur ou Glossaire' }, { n: '3', t: 'Obtenez des réponses', d: 'Articles, conseils et procédures détaillées' }]
    : [{ n: '1', t: 'Safidio ny sehatra', d: 'Fehezan-dalàna, Asa, Tany na Fianakaviana' }, { n: '2', t: 'Ampiasao ny fitaovana', d: 'Fikarohana, Mpitety, Mpanandrana na Rakibolana' }, { n: '3', t: 'Mahazoa valiny', d: 'Lahatsoratra, torohevitra sy paika' }];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 page-enter">
      {/* Hero */}
      <div className="text-center mb-8 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center mb-5">
          <div className="relative float-anim">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D22630] to-[#007A33] blur-2xl opacity-25 pointer-events-none" />
            <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shadow-2xl glow-pulse">
              <Scale className="text-white drop-shadow-md" size={40} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-white shadow-lg flex items-center justify-center animate-bounce-in" style={{ animationDelay: '500ms' }}>
              <MalagasyFlag size={20} />
            </div>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">{t.homeTitle[lang]}</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={14} className="text-amber-400" />
          <p className="text-slate-500 text-sm sm:text-base">{t.homeSubtitle[lang]}</p>
          <Sparkles size={14} className="text-amber-400" />
        </div>
        {/* Stats bar */}
        <div className="inline-flex items-center gap-4 bg-white rounded-full px-5 py-2 border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 anim-stagger-up" style={{ animationDelay: '150ms' }}>
          <span className="flex items-center gap-1"><TrendingUp size={14} className="text-[#007A33]" />{totalArticles} {lang === 'fr' ? 'articles' : 'lahatsoratra'}</span>
          <span className="w-px h-4 bg-slate-200" />
          <span>4 {lang === 'fr' ? 'domaines' : 'sehatra'}</span>
          <span className="w-px h-4 bg-slate-200" />
          <span className="flex items-center gap-1"><Gavel size={12} className="text-[#D22630]" />{lang === 'fr' ? 'Jurisprudence' : 'Jurisprudence'}</span>
        </div>
      </div>

      {/* How it works */}
      <div className="grid grid-cols-3 gap-3 mb-8 anim-stagger-up" style={{ animationDelay: '100ms' }}>
        {howItWorks.map((step, i) => (
          <div key={i} className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="w-9 h-9 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center text-white text-sm font-bold">{step.n}</div>
            <p className="text-xs font-bold text-slate-900 mb-0.5">{step.t}</p>
            <p className="text-[10px] text-slate-500 leading-snug">{step.d}</p>
          </div>
        ))}
      </div>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {domains.map((domain, idx) => (
          <button key={domain.id} onClick={() => onSelectDomain(domain.id)}
            className={`anim-stagger-up card-hover relative group text-left p-5 rounded-2xl border-2 ${domain.borderColor} ${domain.bgColor} transition-all duration-300 hover:shadow-xl overflow-hidden`}
            style={{ animationDelay: `${200 + idx * 80}ms` }}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer pointer-events-none" />
            <div className="absolute top-0 left-0 w-1 h-full rounded-r transition-all duration-300 group-hover:w-1.5 pointer-events-none" style={{ backgroundColor: domain.accentColor }} />
            {domain.badge && <span className="absolute top-3 right-3 px-2 py-0.5 bg-purple-600 text-white text-[9px] font-bold rounded-full shadow-lg pointer-events-none">{domain.badge[lang]}</span>}
            <div className="flex items-start gap-3.5 relative">
              <div className={`shrink-0 w-12 h-12 rounded-xl ${domain.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300`}>{domain.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-slate-900 mb-0.5">{domain.title}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{domain.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-md border border-white/50">{domain.count} {lang === 'fr' ? 'articles' : 'lahatsoratra'}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:translate-x-1 transition-all duration-300">
                    {t.homeExplore[lang]}<ChevronRight size={14} className="group-hover:text-[#007A33]" />
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Features grid */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-7 anim-stagger-up overflow-hidden relative" style={{ animationDelay: '550ms' }}>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#D22630]/5 to-[#007A33]/5 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-base font-bold text-slate-900 mb-5 text-center relative">{lang === 'fr' ? '✨ Fonctionnalités' : '✨ Ny tombontsoa'}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative">
          {features.map((f, idx) => (
            <div key={idx} className="text-center group anim-stagger-scale" style={{ animationDelay: `${600 + idx * 60}ms` }}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D22630]/10 to-[#007A33]/10 text-[#007A33] mb-2 group-hover:scale-110 transition-all duration-300">{f.icon}</div>
              <h4 className="font-semibold text-slate-900 mb-0.5 text-xs">{f.title[lang]}</h4>
              <p className="text-[10px] text-slate-500 leading-snug">{f.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Powered by badge */}
      <div className="mt-6 flex flex-col items-center gap-3 anim-stagger-up" style={{ animationDelay: '900ms' }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
          <span className="text-[10px] text-slate-400">{lang === 'fr' ? 'Propulsé par' : 'Ampiasain\'ny'}</span>
          <span className="text-[11px] font-bold bg-gradient-to-r from-blue-600 via-red-500 to-amber-500 bg-clip-text text-transparent">Google Gemini AI</span>
          <span className="text-[10px] text-slate-400">•</span>
          <span className="text-[10px] font-semibold text-[#FF6600]">Firebase</span>
        </div>
        <p className="text-[10px] text-slate-400 max-w-md mx-auto text-center">
          ⚠️ {lang === 'fr' ? "Ce site est un outil informatif et ne remplace pas le conseil d'un professionnel du droit." : "Ity tranonkala ity dia fitaovana fampahalalana ary tsy manolo ny torohevitry ny matihanina ara-dalàna."}
        </p>
        <p className="text-[9px] text-slate-300">
          © {new Date().getFullYear()} RATOVOSON Navelanizara Romuel
        </p>
      </div>
    </div>
  );
}
