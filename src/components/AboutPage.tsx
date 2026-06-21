import { Lang } from '../data/translations';
import { User, Phone, Mail, Scale, Heart, Code, Globe, Shield, BookOpen } from 'lucide-react';
import MalagasyFlag from './MalagasyFlag';

interface AboutPageProps {
  lang: Lang;
}

export default function AboutPage({ lang }: AboutPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 page-enter">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <Scale className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {lang === 'fr' ? 'À propos' : 'Momba'}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {lang === 'fr'
            ? 'Informations sur le site et son créateur'
            : 'Fampahalalana momba ny tranonkala sy ny namorona azy'}
        </p>
      </div>

      {/* Creator Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-6 anim-stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="bg-gradient-to-r from-[#D22630] to-[#007A33] p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
            <User size={40} className="text-white" />
          </div>
          <h3 className="text-white font-extrabold text-xl tracking-tight">
            RATOVOSON Navelanizara Romuel
          </h3>
          <p className="text-white/80 text-sm font-medium mt-1">
            {lang === 'fr' ? 'Créateur du site' : 'Namorona ny tranonkala'}
          </p>
        </div>

        <div className="p-6 space-y-4">
          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="tel:+261387319628" className="card-hover flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#007A33] transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#007A33]/10 flex items-center justify-center">
                <Phone size={20} className="text-[#007A33]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">{lang === 'fr' ? 'Téléphone' : 'Finday'}</p>
                <p className="text-sm font-bold text-slate-900">+261 38 731 9628</p>
              </div>
            </a>

            <a href="mailto:romuelratovoson5@gmail.com" className="card-hover flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#D22630] transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#D22630]/10 flex items-center justify-center">
                <Mail size={20} className="text-[#D22630]" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Email</p>
                <p className="text-sm font-bold text-slate-900 break-all">romuelratovoson5@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Bio */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-4 border border-slate-200">
            <p className="text-sm text-slate-700 leading-relaxed">
              {lang === 'fr'
                ? 'Ce site a été conçu et développé par RATOVOSON Navelanizara Romuel dans le but de rendre le droit malgache accessible à tous les citoyens de Madagascar. Il couvre le Code Pénal, le Droit du Travail, le Droit Foncier et le Droit de la Famille avec jurisprudence.'
                : 'Ity tranonkala ity dia noforonin\'i RATOVOSON Navelanizara Romuel mba hanamorana ny fahalalana ny lalàna malagasy ho an\'ny olom-pirenena rehetra. Mirakitra ny Fehezan-dalàna Famaizana, ny Lalàna momba ny Asa, ny Lalàna momba ny Tany ary ny Lalàna momba ny Fianakaviana miaraka amin\'ny jurisprudence.'}
            </p>
          </div>
        </div>
      </div>

      {/* About the app */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6 anim-stagger-up" style={{ animationDelay: '200ms' }}>
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Globe size={20} className="text-[#007A33]" />
          {lang === 'fr' ? 'À propos de Juridique Malagasy' : 'Momba ny Lalàna Malagasy'}
        </h3>

        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? 'Juridique Malagasy est une application web et mobile qui permet de consulter et rechercher facilement les textes juridiques malgaches. L\'application est disponible en français et en malagasy.'
              : 'Lalàna Malagasy dia rindranasa amin\'ny internet sy finday ahafahana mijery sy mitady mora ny lalàna malagasy. Azo ampiasaina amin\'ny teny frantsay sy malagasy.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: <Scale size={18} />, title: { fr: 'Code Pénal', mg: 'Fehezan-dalàna Famaizana' }, desc: { fr: '50+ articles - Crimes, délits, contraventions', mg: '50+ lahatsoratra - Heloka bevava, heloka, fandikan-dalàna' } },
              { icon: <Code size={18} />, title: { fr: 'Droit du Travail', mg: 'Lalàna momba ny Asa' }, desc: { fr: '35+ articles - Contrats, salaires, congés', mg: '35+ lahatsoratra - Fifanarahana, karama, fialan-tsasatra' } },
              { icon: <Shield size={18} />, title: { fr: 'Droit Foncier', mg: 'Lalàna momba ny Tany' }, desc: { fr: '25+ articles - Propriété, titres, transactions', mg: '25+ lahatsoratra - Fananana, titre, fifanakalozana' } },
              { icon: <BookOpen size={18} />, title: { fr: 'Droit de la Famille', mg: 'Lalàna Fianakaviana' }, desc: { fr: '30+ articles + Jurisprudence', mg: '30+ lahatsoratra + Jurisprudence' } },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D22630]/10 to-[#007A33]/10 flex items-center justify-center text-[#007A33] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{item.title[lang]}</p>
                  <p className="text-[11px] text-slate-500">{item.desc[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fonctionnalités */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6 anim-stagger-up" style={{ animationDelay: '300ms' }}>
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          {lang === 'fr' ? 'Fonctionnalités' : 'Ny tombontsoa'}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { emoji: '🔍', label: { fr: 'Recherche', mg: 'Fikarohana' } },
            { emoji: '📚', label: { fr: 'Exploration', mg: 'Fitety' } },
            { emoji: '⚡', label: { fr: 'Simulateur', mg: 'Mpanandrana' } },
            { emoji: '📖', label: { fr: 'Glossaire', mg: 'Rakibolana' } },
            { emoji: '🇲🇬', label: { fr: 'Bilingue', mg: 'Roa fiteny' } },
            { emoji: '📱', label: { fr: 'Mobile', mg: 'Finday' } },
            { emoji: '⚖️', label: { fr: 'Jurisprudence', mg: 'Jurisprudence' } },
            { emoji: '💬', label: { fr: 'Contact', mg: 'Fifandraisana' } },
          ].map((f, i) => (
            <div key={i} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-2xl">{f.emoji}</span>
              <p className="text-[11px] font-semibold text-slate-700 mt-1">{f.label[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ❤️ Soutenir le projet */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6 anim-stagger-up" style={{ animationDelay: '400ms' }}>
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-3">
            <Heart className="text-white" size={24} fill="white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            {lang === 'fr' ? 'Soutenir le projet' : 'Tohano ny tetik\'asa'}
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {lang === 'fr'
              ? 'Ce site est 100% gratuit. Si vous souhaitez nous aider à le maintenir et l\'améliorer, vous pouvez faire un don.'
              : 'Ity tranonkala ity dia 100% maimaim-poana. Raha te-hanampy amin\'ny fitantanana sy fanatsarana azy ianao dia afaka manao fanomezana.'}
          </p>
        </div>

        <div className="space-y-3">
          {/* MVola */}
          <a href="tel:0387319628" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#FF6600]/5 to-[#FF6600]/10 rounded-xl border border-[#FF6600]/20 hover:border-[#FF6600]/50 transition-all group">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#FF6600] flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-lg">M</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#FF6600] transition-colors">MVola</p>
              <p className="text-base font-extrabold text-[#FF6600] tracking-wide">038 73 196 28</p>
              <p className="text-[10px] text-slate-500">RATOVOSON Navelanizara Romuel</p>
            </div>
            <div className="shrink-0 w-9 h-9 rounded-lg bg-[#FF6600] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={16} />
            </div>
          </a>

          {/* Airtel Money */}
          <a href="tel:0333893660" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#ED1C24]/5 to-[#ED1C24]/10 rounded-xl border border-[#ED1C24]/20 hover:border-[#ED1C24]/50 transition-all group">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#ED1C24] flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-sm">A</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900 group-hover:text-[#ED1C24] transition-colors">Airtel Money</p>
              <p className="text-base font-extrabold text-[#ED1C24] tracking-wide">033 38 936 60</p>
              <p className="text-[10px] text-slate-500">RATOVOSON Navelanizara Romuel</p>
            </div>
            <div className="shrink-0 w-9 h-9 rounded-lg bg-[#ED1C24] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={16} />
            </div>
          </a>
        </div>

        <p className="text-[10px] text-slate-400 text-center mt-3">
          {lang === 'fr' ? '🙏 Merci pour votre soutien ! Chaque don compte.' : '🙏 Misaotra ny fanampianao ! Manan-danja ny fanomezana tsirairay.'}
        </p>
      </div>

      {/* Flag & disclaimer */}
      <div className="text-center anim-stagger-up" style={{ animationDelay: '500ms' }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <MalagasyFlag size={32} />
          <span className="text-sm font-bold text-slate-700">Repoblikan'i Madagasikara</span>
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto mb-2">
          {lang === 'fr'
            ? '⚠️ Ce site est un outil informatif et ne remplace pas le conseil d\'un professionnel du droit.'
            : '⚠️ Ity tranonkala ity dia fitaovana fampahalalana ary tsy manolo ny torohevitry ny matihanina ara-dalàna.'}
        </p>
        <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
          {lang === 'fr' ? 'Fait avec' : 'Natao tamin\'ny'}
          <Heart size={12} className="text-[#D22630]" fill="#D22630" />
          {lang === 'fr' ? 'par RATOVOSON Navelanizara Romuel' : 'nataon\'i RATOVOSON Navelanizara Romuel'}
        </p>
      </div>
    </div>
  );
}
