import { useState } from 'react';
import { Lang } from '../data/translations';
import {
  BookOpen, Search, Compass, Zap, BookText, MessageCircle, Heart,
  User, Moon, Sun, Globe, AlertTriangle, ChevronDown, ChevronUp,
  Scale, Briefcase, MapPin, Users, HelpCircle, CheckCircle, ArrowRight,
  Star, Smartphone, Shield, Lock
} from 'lucide-react';

interface ManualPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

interface Section {
  id: string;
  icon: React.ReactNode;
  color: string;
  title: { fr: string; mg: string };
  content: React.ReactNode;
}

export default function ManualPage({ lang }: ManualPageProps) {
  const [openSection, setOpenSection] = useState<string | null>('getting-started');

  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  // Visual mini-card helper
  const MiniCard = ({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) => (
    <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shrink-0`}>{icon}</div>
      <span className="text-xs font-medium text-slate-700">{label}</span>
    </div>
  );

  const StepBlock = ({ num, title, desc }: { num: number; title: string; desc: string }) => (
    <div className="flex gap-3 items-start">
      <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center text-white text-sm font-bold">{num}</div>
      <div><p className="text-sm font-bold text-slate-900 mb-0.5">{title}</p><p className="text-xs text-slate-600 leading-relaxed">{desc}</p></div>
    </div>
  );

  const Tip = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 bg-emerald-50 rounded-lg p-3 border border-emerald-200 mt-3">
      <CheckCircle size={16} className="text-emerald-600 mt-0.5 shrink-0" />
      <p className="text-xs text-emerald-800 leading-relaxed">{text}</p>
    </div>
  );

  const sections: Section[] = [
    // 1. Démarrer
    {
      id: 'getting-started',
      icon: <Star size={20} className="text-white" />,
      color: 'from-[#D22630] to-[#007A33]',
      title: { fr: "🚀 Bien démarrer", mg: "🚀 Fanombohana tsara" },
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Juridique Malagasy est votre guide juridique complet de Madagascar. L'application couvre 4 domaines du droit et vous offre des outils puissants pour comprendre vos droits."
              : "Lalàna Malagasy dia torolalana ara-dalàna feno ho an'i Madagasikara. Ny rindranasa dia mirakitra sehatra ara-dalàna 4 ary manome fitaovana mahery vaika mba hahatakarana ny zonao."}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <MiniCard icon={<Scale size={16} className="text-red-500" />} label={lang === 'fr' ? 'Code Pénal' : 'Fehezan-dalàna'} color="bg-red-100" />
            <MiniCard icon={<Briefcase size={16} className="text-blue-500" />} label={lang === 'fr' ? 'Droit du Travail' : 'Lalàna Asa'} color="bg-blue-100" />
            <MiniCard icon={<MapPin size={16} className="text-emerald-500" />} label={lang === 'fr' ? 'Droit Foncier' : 'Lalàna Tany'} color="bg-emerald-100" />
            <MiniCard icon={<Users size={16} className="text-purple-500" />} label={lang === 'fr' ? 'Droit de la Famille' : 'Lalàna Fianakaviana'} color="bg-purple-100" />
          </div>
          <Tip text={lang === 'fr' ? "Astuce : Depuis l'accueil, cliquez sur un domaine pour accéder à tous ses outils (recherche, explorateur, simulateur, glossaire)." : "Toro-hevitra : Avy eo amin'ny fandraisana, tsindrio ny sehatra iray mba hidirana amin'ny fitaovana rehetra (fikarohana, mpitety, mpanandrana, rakibolana)."} />
        </div>
      )
    },
    // 2. Compte utilisateur
    {
      id: 'account',
      icon: <User size={20} className="text-white" />,
      color: 'from-blue-500 to-blue-700',
      title: { fr: "👤 Créer un compte & Se connecter", mg: "👤 Mamorona kaonty & Hiditra" },
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Créez un compte gratuit pour débloquer des fonctionnalités exclusives :"
              : "Mamorona kaonty maimaim-poana mba hanokafana ny tombontsoa manokana :"}
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-700"><Heart size={14} className="text-red-500 shrink-0" />{lang === 'fr' ? 'Sauvegarder vos articles favoris' : 'Tehirizo ny lahatsoratra tianao'}</div>
            <div className="flex items-center gap-2 text-sm text-slate-700"><MessageCircle size={14} className="text-emerald-500 shrink-0" />{lang === 'fr' ? 'Accéder au chatbot Zoako' : 'Miditra amin\'ny chatbot Zoako'}</div>
            <div className="flex items-center gap-2 text-sm text-slate-700"><Star size={14} className="text-amber-500 shrink-0" />{lang === 'fr' ? 'Historique personnalisé' : 'Tantara manokana'}</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">{lang === 'fr' ? "Comment s'inscrire :" : "Fomba hisoratana anarana :"}</p>
            <StepBlock num={1} title={lang === 'fr' ? "Cliquer sur \"Connexion\"" : "Tsindrio \"Hiditra\""} desc={lang === 'fr' ? "Le bouton se trouve en haut à droite de la barre de navigation." : "Ny bokotra dia eo ambony ankavanana amin'ny baran'ny navigasiona."} />
            <StepBlock num={2} title={lang === 'fr' ? "Choisir \"Créer un compte\"" : "Safidio \"Mamorona kaonty\""} desc={lang === 'fr' ? "Remplissez votre nom, email et mot de passe (minimum 6 caractères)." : "Fenoy ny anaranao, mailaka ary teny miafina (6 litera farafahakeliny)."} />
            <StepBlock num={3} title={lang === 'fr' ? "C'est prêt !" : "Vita !"} desc={lang === 'fr' ? "Vous êtes connecté. Vos favoris et le chatbot sont maintenant disponibles." : "Tafiditra ianao. Ny tianao sy ny chatbot dia azo ampiasaina izao."} />
          </div>
          <Tip text={lang === 'fr' ? "Votre session reste active même si vous fermez le navigateur. Pour vous déconnecter, cliquez sur votre avatar puis \"Déconnexion\"." : "Ny session-nao dia mbola misy na dia manidy ny navigateur aza ianao. Mba hivoaka, tsindrio ny avatar-nao dia \"Hivoaka\"."} />
        </div>
      )
    },
    // 3. Les 4 outils
    {
      id: 'tools',
      icon: <Compass size={20} className="text-white" />,
      color: 'from-emerald-500 to-emerald-700',
      title: { fr: "🔧 Les 4 outils de chaque domaine", mg: "🔧 Ny fitaovana 4 isaky ny sehatra" },
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Chaque domaine juridique possède 4 onglets puissants :"
              : "Ny sehatra ara-dalàna tsirairay dia manana onglets 4 mahery vaika :"}
          </p>
          {/* Search */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center"><Search size={16} className="text-red-600" /></div><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? '🔍 Recherche' : '🔍 Fikarohana'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Tapez un mot-clé, un événement ou une situation. Le système recherche dans les titres, descriptions et mots-clés de chaque article. Les résultats sont classés par pertinence." : "Soraty teny iray, zava-nitranga na toe-javatra. Ny rafitra dia mitady ao amin'ny lohateny, famaritana ary teny fototra. Ny vokatra dia alamina araka ny maha-mifanaraka azy."}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {(lang === 'fr' ? ['vol', 'licenciement', 'terrain', 'divorce'] : ['halatra', 'fandroahana', 'tany', 'fisarahana']).map(ex => (
                <span key={ex} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-md font-medium">{ex}</span>
              ))}
            </div>
          </div>
          {/* Explorer */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center"><Compass size={16} className="text-blue-600" /></div><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? '📚 Explorateur' : '📚 Mpitety'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Parcourez TOUS les articles du domaine. Filtrez par catégorie (ex : Crimes, Délits, Contraventions pour le pénal). Utilisez la barre de filtre pour affiner les résultats." : "Jereo ny lahatsoratra REHETRA ao amin'ny sehatra. Sivano araka ny sokajy (oh : Heloka bevava, Heloka, Fandikan-dalàna). Ampiasao ny baran'ny sivana mba hanamafisana ny vokatra."}</p>
          </div>
          {/* Simulator */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center"><Zap size={16} className="text-amber-600" /></div><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? '⚡ Simulateur' : '⚡ Mpanandrana'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Répondez à des questions guidées pour identifier automatiquement les articles de loi applicables à votre situation. Le simulateur vous pose 2 à 3 questions simples puis affiche les résultats." : "Valio ny fanontaniana mitarika mba hamantarana ho azy ny lahatsoratra lalàna mifanaraka amin'ny toe-javatra misy anao. Ny mpanandrana dia manontany 2 ka hatramin'ny 3 fanontaniana tsotra dia mampiseho ny vokatra."}</p>
          </div>
          {/* Glossary */}
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center"><BookText size={16} className="text-purple-600" /></div><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? '📖 Glossaire' : '📖 Rakibolana'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Dictionnaire des termes juridiques utilisés dans le domaine. Chaque terme est défini en français et en malagasy, avec des exemples concrets quand c'est possible." : "Rakibolana momba ny teny ara-dalàna ampiasaina ao amin'ny sehatra. Ny teny tsirairay dia faritana amin'ny teny frantsay sy malagasy, miaraka amin'ny ohatra mazava raha azo atao."}</p>
          </div>
          <Tip text={lang === 'fr' ? "Les 4 onglets sont disponibles dans chacun des 4 domaines juridiques. Soit 16 outils au total !" : "Ny onglets 4 dia misy ao amin'ny sehatra ara-dalàna 4 tsirairay. Izany hoe fitaovana 16 izy rehetra !"} />
        </div>
      )
    },
    // 4. Chatbot
    {
      id: 'chatbot',
      icon: <MessageCircle size={20} className="text-white" />,
      color: 'from-violet-500 to-violet-700',
      title: { fr: "🤖 Zoako — Assistant juridique IA (Gemini)", mg: "🤖 Zoako — Mpanolotsaina IA (Gemini)" },
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-2 bg-violet-50 rounded-lg p-3 border border-violet-200">
            <Lock size={14} className="text-violet-600 mt-0.5 shrink-0" />
            <p className="text-xs text-violet-800">{lang === 'fr' ? "Le chatbot est réservé aux utilisateurs connectés. Créez un compte gratuit pour y accéder." : "Ny chatbot dia natokana ho an'ny mpampiasa tafiditra. Mamorona kaonty maimaim-poana mba hidirana aminy."}</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Zoako est votre assistant juridique propulsé par Google Gemini AI. Il comprend vos questions en langage naturel, cite les articles de loi et vous donne des conseils personnalisés."
              : "Zoako dia mpanolotsaina ara-dalàna ampiasain'ny Google Gemini AI. Azony ny fanontanianao amin'ny teny voajanahary, milaza ny andininy ary manome torohevitra manokana."}
          </p>
          <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">{lang === 'fr' ? "Ce que Zoako peut faire :" : "Izay azon'i Zoako atao :"}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(lang === 'fr' ? [
              { e: '📖', t: 'Trouver des articles de loi' },
              { e: '💡', t: 'Expliquer vos droits fondamentaux' },
              { e: '📋', t: 'Détailler les procédures (plainte, inspection...)' },
              { e: '⚖️', t: 'Informer sur la légitime défense' },
              { e: '🔒', t: 'Expliquer vos droits en garde à vue' },
              { e: '⏰', t: 'Préciser les délais de prescription' },
              { e: '🆘', t: 'Guider en cas de violence conjugale' },
              { e: '🌍', t: 'Droits fonciers des étrangers' },
              { e: '🏛️', t: 'Orienter vers les institutions' },
              { e: '👨‍⚖️', t: 'Aider à trouver un avocat' },
            ] : [
              { e: '📖', t: 'Mitady lahatsoratra lalàna' },
              { e: '💡', t: 'Manazava ny zo fototra' },
              { e: '📋', t: 'Ny paika (fitoriana, fisafoana...)' },
              { e: '⚖️', t: 'Fiarovana ara-dalàna' },
              { e: '🔒', t: 'Zo rehefa voahazona' },
              { e: '⏰', t: 'Fe-potoana' },
              { e: '🆘', t: 'Herisetra ao an-tokantrano' },
              { e: '🌍', t: 'Zon\'ny vahiny amin\'ny tany' },
              { e: '🏛️', t: 'Fitarihana mankany amin\'ny sampana' },
              { e: '👨‍⚖️', t: 'Fanampiana hitady mpisolovava' },
            ]).map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg text-xs text-slate-700">
                <span className="text-base">{item.e}</span> {item.t}
              </div>
            ))}
          </div>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">{lang === 'fr' ? "Exemples de questions :" : "Ohatra fanontaniana :"}</p>
            <div className="space-y-1.5">
              {(lang === 'fr' ? [
                '"Que risque-t-on pour un vol ?"',
                '"Comment porter plainte ?"',
                '"Mon patron ne me paie pas, que faire ?"',
                '"Quels sont mes droits en garde à vue ?"',
                '"Comment obtenir un titre foncier ?"',
                '"Je veux divorcer, quelles sont les étapes ?"',
              ] : [
                '"Inona no sazy amin\'ny halatra ?"',
                '"Ahoana ny fomba hitory ?"',
                '"Ny patronako tsy mandoa ahy, inona no atao ?"',
                '"Inona ny zoko raha voahazona ?"',
                '"Ahoana ny hahazoana titre foncier ?"',
                '"Te-hisaraka aho, inona ny dingana ?"',
              ]).map((q, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                  <ArrowRight size={10} className="text-emerald-500 shrink-0" /><span className="italic">{q}</span>
                </div>
              ))}
            </div>
          </div>
          <Tip text={lang === 'fr' ? "Le bouton du chatbot est en bas à droite de l'écran (bulle verte/rouge). Cliquez dessus pour ouvrir la conversation !" : "Ny bokotra chatbot dia eo ambany ankavanana amin'ny efijery (boribory mena/maintso). Tsindrio izy mba hanokafana ny resaka !"} />
        </div>
      )
    },
    // 5. Favoris
    {
      id: 'favorites',
      icon: <Heart size={20} className="text-white" />,
      color: 'from-red-500 to-red-700',
      title: { fr: "❤️ Articles favoris", mg: "❤️ Lahatsoratra tiana" },
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Sauvegardez les articles importants pour les retrouver facilement plus tard."
              : "Tehirizo ny lahatsoratra manan-danja mba hahitana azy mora aoriana."}
          </p>
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
            <StepBlock num={1} title={lang === 'fr' ? "Connectez-vous" : "Midira"} desc={lang === 'fr' ? "Les favoris nécessitent un compte utilisateur." : "Ny tiana dia mila kaonty."} />
            <StepBlock num={2} title={lang === 'fr' ? "Cliquez sur le cœur ♥" : "Tsindrio ny fo ♥"} desc={lang === 'fr' ? "Le bouton cœur se trouve à droite de chaque article dans la recherche et l'explorateur." : "Ny bokotra fo dia eo ankavanana amin'ny lahatsoratra tsirairay ao amin'ny fikarohana sy mpitety."} />
            <StepBlock num={3} title={lang === 'fr' ? "Retrouvez vos favoris" : "Jereo ny tianao"} desc={lang === 'fr' ? "Cliquez sur l'icône ♥ dans la barre de navigation ou dans le menu de votre profil." : "Tsindrio ny kisary ♥ eo amin'ny baran'ny navigasiona na eo amin'ny profil-nao."} />
          </div>
          <Tip text={lang === 'fr' ? "Vos favoris sont organisés par domaine juridique et affichent la date d'ajout. Vous pouvez les supprimer à tout moment." : "Ny tianao dia voalamina araka ny sehatra ara-dalàna ary mampiseho ny daty nampidirana. Afaka mamafa azy ianao amin'ny fotoana rehetra."} />
        </div>
      )
    },
    // 6. Classification
    {
      id: 'classification',
      icon: <Shield size={20} className="text-white" />,
      color: 'from-amber-500 to-amber-700',
      title: { fr: "⚖️ Comprendre les classifications", mg: "⚖️ Fahatakarana ny sokajy" },
      content: (
        <div className="space-y-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'fr'
              ? "Le droit pénal malgache classe les infractions en trois catégories selon leur gravité :"
              : "Ny lalàna famaizana malagasy dia misokajy ny fandikan-dalàna araka ny habeny :"}
          </p>
          <div className="space-y-3">
            <div className="rounded-xl p-4 border-l-4 border-l-red-500 bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 mb-2"><AlertTriangle size={18} className="text-red-600" /><h4 className="font-bold text-red-800 text-sm">{lang === 'fr' ? 'CRIME — Heloka bevava' : 'HELOKA BEVAVA — Crime'}</h4></div>
              <p className="text-xs text-red-700 leading-relaxed mb-2">{lang === 'fr' ? "Infraction la plus grave. Jugée par la Cour Criminelle." : "Fandikan-dalàna lehibe indrindra. Tsaraina eo amin'ny Fitsarana ny Heloka Bevava."}</p>
              <p className="text-xs text-red-600"><strong>{lang === 'fr' ? 'Peines :' : 'Sazy :'}</strong> {lang === 'fr' ? 'Travaux forcés, réclusion criminelle, peine de mort (moratoire)' : 'Asa an-terivozona, figadrana, fanamelohana ho faty (misy fampiatoana)'}</p>
              <p className="text-xs text-red-600 mt-1"><strong>{lang === 'fr' ? 'Exemples :' : 'Ohatra :'}</strong> {lang === 'fr' ? 'Meurtre, viol, vol à main armée, dahalo' : 'Vonoan\'olona, fanaolana, halatra an-keriny, dahalo'}</p>
            </div>
            <div className="rounded-xl p-4 border-l-4 border-l-amber-500 bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-2 mb-2"><AlertTriangle size={18} className="text-amber-600" /><h4 className="font-bold text-amber-800 text-sm">{lang === 'fr' ? 'DÉLIT — Heloka' : 'HELOKA — Délit'}</h4></div>
              <p className="text-xs text-amber-700 leading-relaxed mb-2">{lang === 'fr' ? "Gravité intermédiaire. Jugé par le Tribunal Correctionnel." : "Antonony. Tsaraina eo amin'ny Fitsarana Fanitsiana."}</p>
              <p className="text-xs text-amber-600"><strong>{lang === 'fr' ? 'Peines :' : 'Sazy :'}</strong> {lang === 'fr' ? 'Emprisonnement (1 mois à 10 ans), amende' : 'Figadrana (1 volana ka hatramin\'ny 10 taona), lamandy'}</p>
              <p className="text-xs text-amber-600 mt-1"><strong>{lang === 'fr' ? 'Exemples :' : 'Ohatra :'}</strong> {lang === 'fr' ? 'Vol simple, escroquerie, coups et blessures, diffamation' : 'Halatra tsotra, fitapitahana, kapoka sy ratra, fanendrikendrehana'}</p>
            </div>
            <div className="rounded-xl p-4 border-l-4 border-l-blue-500 bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-2 mb-2"><CheckCircle size={18} className="text-blue-600" /><h4 className="font-bold text-blue-800 text-sm">{lang === 'fr' ? 'CONTRAVENTION — Fandikan-dalàna maivana' : 'FANDIKAN-DALÀNA MAIVANA — Contravention'}</h4></div>
              <p className="text-xs text-blue-700 leading-relaxed mb-2">{lang === 'fr' ? "Infraction la moins grave. Jugée par le Tribunal de Police." : "Maivana indrindra. Tsaraina eo amin'ny Fitsarana Pôlisy."}</p>
              <p className="text-xs text-blue-600"><strong>{lang === 'fr' ? 'Peines :' : 'Sazy :'}</strong> {lang === 'fr' ? 'Amende, emprisonnement court (1 à 30 jours)' : 'Lamandy, figadrana fohy (1 ka hatramin\'ny 30 andro)'}</p>
              <p className="text-xs text-blue-600 mt-1"><strong>{lang === 'fr' ? 'Exemples :' : 'Ohatra :'}</strong> {lang === 'fr' ? 'Tapage nocturne, ivresse publique, jet de pierres' : 'Tabataba alina, fahamamoana, fitorahana vato'}</p>
            </div>
          </div>
        </div>
      )
    },
    // 7. Langue & thème
    {
      id: 'settings',
      icon: <Globe size={20} className="text-white" />,
      color: 'from-cyan-500 to-cyan-700',
      title: { fr: "🌐 Langue, thème & installation", mg: "🌐 Fiteny, loko & fametrahana" },
      content: (
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><Globe size={16} className="text-cyan-600" /><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Changer de langue' : 'Ovay ny fiteny'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Cliquez sur le bouton \"MG\" ou \"FR\" en haut à droite pour basculer entre le français et le malagasy. Toute l'interface, les articles et le chatbot s'adaptent automatiquement." : "Tsindrio ny bokotra \"MG\" na \"FR\" eo ambony ankavanana mba hiova fiteny eo amin'ny frantsay sy malagasy. Ny fampiharana rehetra, ny lahatsoratra ary ny chatbot dia miova ho azy."}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><Moon size={16} className="text-indigo-600" /><Sun size={16} className="text-amber-500" /><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Mode nuit / jour' : 'Aizina / Mazava'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Cliquez sur l'icône lune 🌙 ou soleil ☀️ dans la barre de navigation. Le thème est sauvegardé et se réapplique automatiquement. Le mode nuit réduit la fatigue oculaire." : "Tsindrio ny kisary volana 🌙 na masoandro ☀️ eo amin'ny baran'ny navigasiona. Ny loko dia voatahiry ary averina ho azy. Ny maizina dia mampihena ny havizanana maso."}</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2"><Smartphone size={16} className="text-emerald-600" /><h4 className="text-sm font-bold text-slate-900">{lang === 'fr' ? 'Installer sur votre téléphone' : 'Apetraho amin\'ny findainao'}</h4></div>
            <p className="text-xs text-slate-600 leading-relaxed">{lang === 'fr' ? "Sur Android/Chrome : Menu ⋮ → \"Ajouter à l'écran d'accueil\". L'application fonctionnera comme une app native, même hors connexion." : "Amin'ny Android/Chrome : Menu ⋮ → \"Ampio eo amin'ny efijery\". Ny rindranasa dia hiasa toy ny app, na tsy misy Internet aza."}</p>
          </div>
        </div>
      )
    },
    // 8. FAQ
    {
      id: 'faq',
      icon: <HelpCircle size={20} className="text-white" />,
      color: 'from-rose-500 to-rose-700',
      title: { fr: "❓ Questions fréquentes (FAQ)", mg: "❓ Fanontaniana matetika (FAQ)" },
      content: (
        <div className="space-y-3">
          {(lang === 'fr' ? [
            { q: "Ce site remplace-t-il un avocat ?", a: "Non. Ce site est un outil d'information juridique. Pour toute affaire sérieuse, consultez un avocat professionnel. L'aide juridictionnelle est gratuite pour les personnes démunies." },
            { q: "Les articles sont-ils à jour ?", a: "Nous nous efforçons de maintenir la base de données à jour. Cependant, vérifiez toujours auprès d'un professionnel pour les cas importants." },
            { q: "Mes données sont-elles sécurisées ?", a: "Vos données sont stockées localement sur votre appareil (localStorage). Elles ne sont pas envoyées à un serveur externe." },
            { q: "Le chatbot donne-t-il des avis juridiques ?", a: "Non. Zoako fournit des informations générales via l'IA Gemini et vous oriente. Il ne remplace pas un conseil juridique professionnel." },
            { q: "Puis-je utiliser le site hors ligne ?", a: "Oui, si vous l'installez comme application (PWA). Les articles et le glossaire seront disponibles hors connexion." },
            { q: "Le site est-il gratuit ?", a: "Oui, entièrement gratuit. Créé par RATOVOSON Navelanizara Romuel pour rendre le droit accessible à tous les Malgaches." },
            { q: "Comment signaler une erreur ?", a: "Utilisez la section Contact pour nous envoyer vos corrections, suggestions ou critiques. Votre aide améliore le site !" },
          ] : [
            { q: "Ity tranonkala ity ve manolo mpisolovava ?", a: "Tsia. Fitaovana fampahalalana ara-dalàna ity. Ho an'ny raharaha lehibe, mangataha torohevitra amin'ny mpisolovava matihanina." },
            { q: "Vaovao ve ny lahatsoratra ?", a: "Ezahinay ny manavao ny tahirin-kevitra. Kanefa, hamarino foana amin'ny matihanina ho an'ny raharaha lehibe." },
            { q: "Voaaro ve ny angon-drakitro ?", a: "Ny angon-drakitrao dia voatahiry eo amin'ny fitaovanao (localStorage). Tsy alefa any amin'ny serveur ivelany." },
            { q: "Manome hevitra ara-dalàna ve ny chatbot ?", a: "Tsia. Zoako dia manome fampahalalana amin'ny IA Gemini ary mitari-dalana. Tsy manolo torohevitra matihanina izy." },
            { q: "Azo ampiasaina tsy misy Internet ve ?", a: "Eny, raha apetraka ho rindranasa (PWA). Ny lahatsoratra sy rakibolana dia azo ampiasaina tsy misy Internet." },
            { q: "Maimaim-poana ve ny tranonkala ?", a: "Eny, maimaim-poana tanteraka. Noforonin'i RATOVOSON Navelanizara Romuel mba hanamorana ny lalàna ho an'ny Malagasy rehetra." },
            { q: "Ahoana ny hilazana fahadisoana ?", a: "Ampiasao ny fizarana Fifandraisana mba handefasana ny fanitsiana, sosokevitra na tsikera. Ny fanampianao dia manatsara ny tranonkala !" },
          ]).map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-3.5">
                <p className="text-sm font-bold text-slate-900 mb-1.5 flex items-start gap-2">
                  <HelpCircle size={14} className="text-rose-500 mt-0.5 shrink-0" />{faq.q}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <BookOpen className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {lang === 'fr' ? "Manuel d'utilisation" : "Torolalana fampiasana"}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {lang === 'fr'
            ? "Apprenez à utiliser toutes les fonctionnalités de Juridique Malagasy"
            : "Ianaro ny fampiasana ny tombontsoa rehetra ao amin'ny Lalàna Malagasy"}
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 anim-stagger-up" style={{ animationDelay: '80ms' }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => { setOpenSection(s.id); setTimeout(() => document.getElementById(`section-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${openSection === s.id ? 'bg-[#007A33] text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            {s.title[lang]}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((section, idx) => (
          <div key={section.id} id={`section-${section.id}`} className="anim-stagger-up" style={{ animationDelay: `${(idx + 1) * 60}ms` }}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden card-hover">
              <button onClick={() => toggle(section.id)} className="w-full text-left px-5 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                <div className={`shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-md`}>{section.icon}</div>
                <h3 className="flex-1 text-base font-bold text-slate-900">{section.title[lang]}</h3>
                <div className="shrink-0 text-slate-400">
                  {openSection === section.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              {openSection === section.id && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100 page-enter">
                  {section.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 anim-stagger-up" style={{ animationDelay: '700ms' }}>
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">{lang === 'fr' ? 'Avertissement important' : 'Fampitandremana lehibe'}</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              {lang === 'fr'
                ? "Ce site est un outil d'aide à la recherche juridique et ne remplace pas le conseil d'un professionnel du droit. Pour toute affaire juridique sérieuse, consultez un avocat. L'aide juridictionnelle est disponible gratuitement pour les personnes à faibles revenus."
                : "Ity tranonkala ity dia fitaovana fanampiana amin'ny fikarohana ara-dalàna ary tsy manolo ny torohevitry ny mpiasa matihanina ara-dalàna. Ho an'ny raharaha ara-dalàna rehetra, mangataha torohevitra amin'ny mpisolovava. Ny fanampiana ara-dalàna dia maimaim-poana ho an'ny olona kely fidiram-bola."}
            </p>
          </div>
        </div>
      </div>

      {/* Creator */}
      <div className="mt-4 text-center anim-stagger-up" style={{ animationDelay: '800ms' }}>
        <p className="text-xs text-slate-400">
          {lang === 'fr' ? 'Créé par' : 'Namorona'} <strong className="text-slate-500">RATOVOSON Navelanizara Romuel</strong> • +261 38 731 9628
        </p>
      </div>
    </div>
  );
}
