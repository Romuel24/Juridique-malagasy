import { searchArticles, getTypeInfo } from './penalCode';
import { searchLaborArticles } from './laborCode';
import { searchLandArticles } from './landLaw';
import { searchFamilyArticles } from './familyLaw';

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  articles?: { article: string; title: string; domain: string; penalty?: string }[];
  timestamp: Date;
}

// ═══════════════════════════════════════════════════
// SCÉNARIOS NARRATIFS — Phrases complètes détectées
// ═══════════════════════════════════════════════════
interface Scenario {
  patterns: RegExp[];
  domain: string;
  searchTerms: string;
  response: { fr: string; mg: string };
}

const scenarios: Scenario[] = [
  // PÉNAL — situations concrètes
  { patterns: [/on m.a vol/i, /nisy nangalatra/i, /quelqu.un.*vol/i, /j.ai.*(été|ete).*(vol|cambriol)/i, /nahita.*halatra/i],
    domain: 'penal', searchTerms: 'vol voler halatra',
    response: {
      fr: "😔 Je suis désolé d'apprendre que vous avez été victime de vol.\n\n**Voici les étapes à suivre immédiatement :**\n\n1️⃣ **Déposez plainte** au commissariat (117) ou à la gendarmerie (119) le plus vite possible\n2️⃣ **Rassemblez les preuves** : photos, vidéos de surveillance, témoins\n3️⃣ **Listez les objets volés** avec leur valeur estimée\n4️⃣ **Conservez le récépissé** de dépôt de plainte\n\n⚖️ **Ce que dit la loi :**",
      mg: "😔 Mampalahelo ny maheno fa niharan'ny halatra ianao.\n\n**Ireto ny dingana arahina avy hatrany :**\n\n1️⃣ **Mitory** any amin'ny polisy (117) na zandary (119) haingana araka izay azo atao\n2️⃣ **Angòny ny porofo** : sary, horonan-tsary, vavolombelona\n3️⃣ **Lisitry ny zavatra voahalatra** miaraka amin'ny vidiny\n4️⃣ **Tehirizo ny dikatra** fitoriana\n\n⚖️ **Izay lazain'ny lalàna :**"
    }
  },
  { patterns: [/quelqu.un m.a frapp/i, /je me suis fait.*frapp/i, /nisy nikapoka/i, /on m.a.*batt/i, /j.ai.*été.*agressé/i, /niharan.ny herisetra/i],
    domain: 'penal', searchTerms: 'coups blessures violence kapoka',
    response: {
      fr: "🆘 **Si vous êtes en danger immédiat, appelez le 117 (police) ou le 119 (gendarmerie).**\n\n**Ce que vous devez faire :**\n1️⃣ **Allez aux urgences** pour faire constater vos blessures\n2️⃣ **Demandez un certificat médical** — c'est la preuve principale\n3️⃣ **Déposez plainte** avec le certificat médical\n4️⃣ **Identifiez les témoins** s'il y en a\n\n💡 La gravité de la peine dépend de la durée d'incapacité de travail (ITT) :\n• Plus de 20 jours → 2 à 5 ans de prison\n• Moins de 20 jours → 1 mois à 2 ans\n• Sans incapacité → contravention\n\n⚖️ **Article applicable :**",
      mg: "🆘 **Raha misy loza avy hatrany, antsoy ny 117 (polisy) na 119 (zandary).**\n\n**Izay tokony ataonao :**\n1️⃣ **Mankanesa any amin'ny hopitaly** mba hojerena ny ratranao\n2️⃣ **Mangataha taratasy dokotera** — io no porofo lehibe\n3️⃣ **Mitory** miaraka amin'ny taratasy dokotera\n4️⃣ **Tadiavo ny vavolombelona** raha misy\n\n💡 Ny haben'ny sazy dia miankina amin'ny faharetan'ny tsy fahafahana miasa (ITT) :\n• Mihoatra 20 andro → 2-5 taona figadrana\n• Latsaky ny 20 andro → 1 volana - 2 taona\n• Tsy misy ITT → contravention\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  { patterns: [/quelqu.un me menace/i, /je.*(suis|été).*(menac|intimidé)/i, /misy mandrahona/i, /on.*menace.*de.*tuer/i],
    domain: 'penal', searchTerms: 'menace intimidation fandrahonana',
    response: {
      fr: "⚠️ **Les menaces sont un délit puni par la loi.**\n\n**Actions immédiates :**\n1️⃣ **Gardez toutes les preuves** : SMS, messages vocaux, captures d'écran, témoins\n2️⃣ **Ne répondez PAS aux menaces** — ça pourrait aggraver la situation\n3️⃣ **Déposez plainte** au commissariat en apportant vos preuves\n4️⃣ Si menace de mort → vous pouvez demander une **ordonnance de protection**\n\n💡 **Peines encourues par l'auteur :**\n• Menace écrite de mort → réclusion (5-10 ans)\n• Menace verbale → 6 mois à 2 ans\n• Menace avec chantage → peine aggravée\n\n⚖️ **Articles applicables :**",
      mg: "⚠️ **Ny fandrahonana dia heloka sazian'ny lalàna.**\n\n**Zavatra atao avy hatrany :**\n1️⃣ **Tehirizo ny porofo rehetra** : SMS, feo, sary\n2️⃣ **Aza mamaly ny fandrahonana** — mety hanampy tranga izany\n3️⃣ **Mitory** any amin'ny polisy miaraka amin'ny porofo\n4️⃣ Raha fandrahonana famonoana → afaka mangataka **didy fiarovana**\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  // TRAVAIL — situations concrètes
  { patterns: [/mon.*patron.*ne.*paie/i, /pas.*payé/i, /salaire.*retard/i, /tsy mandoa.*karama/i, /karama.*tsy.*voaloa/i, /on.*me.*paie.*pas/i],
    domain: 'labor', searchTerms: 'salaire paiement karama SMIG',
    response: {
      fr: "💰 **Salaire non payé — Vos droits :**\n\n**Ce que dit la loi :**\n• Le salaire doit être payé régulièrement (max 15 jours pour les journaliers, 1 mois pour les mensuels)\n• Aucun salaire ne peut être inférieur au SMIG\n• Le non-paiement est une faute grave de l'employeur\n\n**Marche à suivre :**\n1️⃣ **Envoyez une mise en demeure** écrite à votre employeur (gardez une copie)\n2️⃣ **Si pas de réponse sous 8 jours** → saisissez l'Inspection du Travail (gratuit)\n3️⃣ **L'inspecteur convoquera votre employeur** pour une conciliation\n4️⃣ **Si échec** → Tribunal du Travail\n\n📌 **Important :** Le délai de prescription est de **3 ans** pour réclamer vos salaires impayés.\n\n⚖️ **Articles applicables :**",
      mg: "💰 **Karama tsy voaloa — Ny zonao :**\n\n**Izay lazain'ny lalàna :**\n• Ny karama dia tsy maintsy aloa tsy tapaka (15 andro ho an'ny isan'andro, 1 volana ho an'ny isam-bolana)\n• Tsy misy karama tokony ho ambany noho ny SMIG\n• Ny tsy fandoavana dia fahadisoan'ny mpampiasa lehibe\n\n**Dingana arahina :**\n1️⃣ **Alefaso taratasy fangatahana** an-tsoratra amin'ny mpampiasanao (tehirizo kopia)\n2️⃣ **Raha tsy mamaly ao anatin'ny 8 andro** → mankanesa amin'ny Fisafoana ny Asa (maimaim-poana)\n3️⃣ **Ny mpanara-maso dia hampiantso ny mpampiasanao**\n4️⃣ **Raha tsy mahomby** → Fitsarana momba ny Asa\n\n📌 **Zava-dehibe :** Ny fe-potoana dia **3 taona** hitakiana ny karama tsy voaloa.\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  { patterns: [/j.ai.*été.*(licenci|viré|renvoy)/i, /on m.a.*(licenci|viré|renvoy)/i, /voaroaka.*asa/i, /patron.*licenci/i, /perdre.*emploi/i],
    domain: 'labor', searchTerms: 'licenciement abusif fandroahana indemnité',
    response: {
      fr: "🚨 **Licenciement — Vérifiez vos droits :**\n\n**Un licenciement est ABUSIF si :**\n❌ Pas de motif réel et sérieux\n❌ Pas de lettre de notification écrite\n❌ Pas de préavis respecté\n❌ Licenciement d'une femme enceinte (sauf faute lourde)\n❌ Licenciement pour activité syndicale\n\n**Vos droits en cas de licenciement :**\n✅ Indemnité de licenciement (selon ancienneté)\n✅ Certificat de travail\n✅ Solde de tout compte\n✅ Indemnité de préavis (si non respecté)\n✅ Dommages-intérêts si abusif (jusqu'à 6 mois de salaire)\n\n**Marche à suivre :**\n1️⃣ **Conservez TOUS vos documents** (contrat, bulletins de paie, lettre de licenciement)\n2️⃣ **Saisissez l'Inspection du Travail** dans les 3 ans\n3️⃣ **Conciliation obligatoire** (gratuite)\n4️⃣ **Tribunal du Travail** si la conciliation échoue\n\n⚖️ **Articles applicables :**",
      mg: "🚨 **Fandroahana — Jereo ny zonao :**\n\n**Ny fandroahana dia TSY ARA-DALÀNA raha :**\n❌ Tsy misy antony marina\n❌ Tsy misy taratasy fampilazana an-tsoratra\n❌ Tsy voahaja ny fampilazana mialoha\n❌ Fandroahana vehivavy bevohoka\n❌ Fandroahana noho ny asa sendika\n\n**Ny zonao raha voaroaka :**\n✅ Tambin-karama fandroahana\n✅ Taratasy fanamarinan'asa\n✅ Ny karama sisa rehetra\n✅ Tambin-karama tsy nisy fampilazana mialoha\n✅ Onitra raha tsy ara-dalàna\n\n**Dingana arahina :**\n1️⃣ **Tehirizo ny taratasy REHETRA**\n2️⃣ **Mankanesa amin'ny Fisafoana ny Asa** ao anatin'ny 3 taona\n3️⃣ **Fampihavanana tsy maintsy atao** (maimaim-poana)\n4️⃣ **Fitsarana momba ny Asa** raha tsy mahomby\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  // FONCIER — situations concrètes
  { patterns: [/voisin.*terrain/i, /quelqu.un.*occupe.*terrain/i, /squatt/i, /on.*pris.*terrain/i, /nisy.*naka.*tany/i, /mpiara-monina.*tany/i],
    domain: 'land', searchTerms: 'litige foncier occupation revendication',
    response: {
      fr: "🏠 **Conflit foncier avec un voisin/occupant :**\n\n**Étape 1 — Médiation (recommandé) :**\n• Rendez-vous au **guichet foncier communal**\n• Demandez une **médiation foncière** (gratuite)\n• Le chef de fokontany peut aussi intervenir\n\n**Étape 2 — Si la médiation échoue :**\n• Rassemblez vos preuves (certificat foncier, titre, témoins, photos)\n• Saisissez le **tribunal terrier** de votre localité\n\n**Vos preuves les plus fortes :**\n📜 Titre foncier (inattaquable)\n📋 Certificat foncier (preuve de propriété)\n👥 Témoignages des anciens du village\n📸 Photos datées du terrain\n\n💡 **Conseil :** N'exercez JAMAIS de violence ou de justice personnelle. Cela pourrait se retourner contre vous pénalement.\n\n⚖️ **Articles applicables :**",
      mg: "🏠 **Fifanolanana momba ny tany amin'ny mpifanila/mpipetraka :**\n\n**Dingana 1 — Fampihavanana (tsara indrindra) :**\n• Mankanesa any amin'ny **birao fananana tany ao amin'ny kaominina**\n• Mangataha **fampihavanana** (maimaim-poana)\n• Ny lehiben'ny fokontany dia afaka miditra an-tsehatra koa\n\n**Dingana 2 — Raha tsy mahomby ny fampihavanana :**\n• Angòny ny porofonao (kara-tany, titre, vavolombelona, sary)\n• Mankanesa any amin'ny **fitsarana momba ny tany**\n\n**Porofo matanjaka indrindra :**\n📜 Titre foncier (tsy azo toherina)\n📋 Kara-tany (porofon'ny fananana)\n👥 Filazana avy amin'ny zokiolona\n📸 Sary misy daty\n\n💡 **Torohevitra :** Aza mampiasa herisetra na manao fitsarana manokana mihitsy. Mety hiampanga anao izany.\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  // FAMILLE — situations concrètes
  { patterns: [/je veux divorc/i, /comment divorc/i, /te.*hisaraka/i, /ahoana.*fisarahana/i, /demander.*divorce/i, /procédure.*divorce/i],
    domain: 'family', searchTerms: 'divorce séparation fisarahana',
    response: {
      fr: "💔 **Procédure de divorce à Madagascar :**\n\n**2 types de divorce possibles :**\n\n**1. Divorce par consentement mutuel** (le plus simple) :\n✅ Les deux époux sont d'accord\n✅ Conditions : mariés depuis au moins 2 ans\n✅ Préparez une convention sur : la garde des enfants, la pension alimentaire, le partage des biens\n✅ Délai : quelques mois\n\n**2. Divorce pour faute** (contentieux) :\n• Adultère, abandon du domicile, violences, condamnation pénale\n• Un avocat est fortement recommandé\n• Délai : plus long (6 mois à 2 ans)\n\n**Documents nécessaires :**\n📋 Acte de mariage\n📋 Actes de naissance des enfants\n📋 Pièce d'identité\n📋 Preuves de la faute (si divorce pour faute)\n\n💡 **Conseil :** Le divorce par consentement mutuel est moins cher, plus rapide et moins traumatisant pour les enfants.\n\n⚖️ **Articles applicables :**",
      mg: "💔 **Paiky ny fisarahana eto Madagasikara :**\n\n**Karazana fisarahana 2 :**\n\n**1. Fisarahana ifanarahana** (mora indrindra) :\n✅ Manaiky ny mpivady roa\n✅ Fepetra : efa nanambady 2 taona farafahakeliny\n✅ Omano ny fifanarahana momba : ny zaza, ny pension, ny fizarana fananana\n\n**2. Fisarahana noho ny fahadisoana** :\n• Fijangajangana, fandaozana, herisetra, fanamelohana\n• Tsara ny misy mpisolovava\n\n**Taratasy ilaina :**\n📋 Sora-panambadiana\n📋 Sora-pahaterahan'ny zaza\n📋 Kara-panondro\n📋 Porofon'ny fahadisoana (raha fisarahana noho ny fahadisoana)\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  { patterns: [/mari.*frappe/i, /femme.*batt/i, /violence.*conjugal/i, /herisetra.*tokantrano/i, /violence.*maison/i, /conjoint.*violent/i],
    domain: 'penal', searchTerms: 'violence conjugale coups blessures',
    response: {
      fr: "🆘 **Violence conjugale — Vous n'êtes pas seul(e) !**\n\n**EN CAS DE DANGER IMMÉDIAT :**\n📞 **117** (Police) ou **119** (Gendarmerie)\n🏃 Quittez le domicile si possible\n🏠 Réfugiez-vous chez un proche ou un centre d'accueil\n\n**ENSUITE :**\n1️⃣ Faites constater vos blessures (**certificat médical**)\n2️⃣ **Déposez plainte** au commissariat\n3️⃣ Demandez une **ordonnance de protection** au juge\n4️⃣ Contactez une association d'aide (CECJ Antananarivo)\n\n**CE QUE DIT LA LOI :**\n• Les violences conjugales sont un **DÉLIT** (Art. 309-311)\n• Peine : **2 à 5 ans d'emprisonnement**\n• Le fait d'être conjoint est une **circonstance aggravante**\n• Le juge peut ordonner **l'éloignement du conjoint violent**\n\n💪 **La loi vous protège. Parlez-en.**\n\n⚖️ **Articles applicables :**",
      mg: "🆘 **Herisetra ao an-tokantrano — Tsy irery ianao !**\n\n**RAHA MISY LOZA AVY HATRANY :**\n📞 **117** (Polisy) na **119** (Zandary)\n🏃 Mialà ao an-trano raha azo atao\n🏠 Mankanesa any amin'ny havana na toeram-pandraisan'olona\n\n**AVY EO :**\n1️⃣ Asaivo jerena ny ratranao (**taratasy dokotera**)\n2️⃣ **Mitory** any amin'ny polisy\n3️⃣ Mangataha **didy fiarovana** amin'ny mpitsara\n4️⃣ Mifandraisa amin'ny fikambanana fanampiana\n\n**IZAY LAZAIN'NY LALÀNA :**\n• Ny herisetra ao an-tokantrano dia **HELOKA** (Art. 309-311)\n• Sazy : **2 ka hatramin'ny 5 taona figadrana**\n• Ny maha-mpivady dia **manamafy ny sazy**\n• Ny mpitsara dia afaka mandidy ny **fanesorana ny mpivady mahery setra**\n\n💪 **Ny lalàna no miaro anao.**\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
  // CYBERCRIMINALITÉ
  { patterns: [/arnaq.*internet/i, /escroqu.*en ligne/i, /facebook.*arnaq/i, /pirat.*compte/i, /cyber/i, /fitapitahana.*internet/i, /nisy.*nangalatra.*kaonty/i],
    domain: 'penal', searchTerms: 'cybercriminalité escroquerie internet piratage',
    response: {
      fr: "🌐 **Arnaque/Piratage en ligne :**\n\n**Actions immédiates :**\n1️⃣ **Changez tous vos mots de passe** immédiatement\n2️⃣ **Ne payez PLUS rien** à l'arnaqueur\n3️⃣ **Captures d'écran** de toutes les conversations/transactions\n4️⃣ **Bloquez l'arnaqueur** sur tous les réseaux\n5️⃣ **Déposez plainte** au commissariat avec les preuves\n\n**La loi n° 2014-006 sur la cybercriminalité prévoit :**\n• Escroquerie en ligne : **2 à 10 ans de prison**\n• Usurpation d'identité numérique : **6 mois à 10 ans**\n• Piratage de compte : **1 à 5 ans**\n• Diffamation en ligne : **6 mois à 5 ans**\n\n💡 **Conseil :** Ne communiquez JAMAIS vos codes PIN, mots de passe ou informations bancaires par message.\n\n⚖️ **Articles applicables :**",
      mg: "🌐 **Fitapitahana/Piratage amin'ny Internet :**\n\n**Zavatra atao avy hatrany :**\n1️⃣ **Ovay ny teny miafina rehetra** avy hatrany\n2️⃣ **Aza mandoa intsony** amin'ny mpanao hosoka\n3️⃣ **Saritaka ny resaka/fifanakalozana rehetra**\n4️⃣ **Sakano ny mpanao hosoka** amin'ny tambajotra rehetra\n5️⃣ **Mitory** any amin'ny polisy miaraka amin'ny porofo\n\n💡 **Torohevitra :** Aza mampita ny PIN, teny miafina na fampahalalana ara-bola amin'ny hafatra mihitsy.\n\n⚖️ **Lahatsoratra mifanaraka :**"
    }
  },
];

// ═══════════════════════════════════════════════════
// INTENT PATTERNS (inchangés mais enrichis)
// ═══════════════════════════════════════════════════
interface IntentPattern { keywords: string[]; domain: 'penal' | 'labor' | 'land' | 'family' | 'general'; intentType: 'search' | 'explain' | 'procedure' | 'conseil' | 'greeting' | 'rights' | 'situation'; }

const intentPatterns: IntentPattern[] = [
  { keywords: ['bonjour', 'salut', 'bonsoir', 'hello', 'hi', 'miarahaba', 'manao ahoana', 'akory', 'coucou', 'yo', 'hey'], domain: 'general', intentType: 'greeting' },
  { keywords: ['merci', 'misaotra', 'thank', 'au revoir', 'veloma', 'merci beaucoup', 'misaotra betsaka'], domain: 'general', intentType: 'greeting' },
  { keywords: ['aide', 'aider', 'help', 'ampio', 'fanampiana', 'comment ça marche', 'quoi faire', 'inona atao'], domain: 'general', intentType: 'explain' },
  { keywords: ['mes droits', 'ny zoko', 'droit fondamental', 'constitution', 'citoyen', 'liberté', 'zo fototra'], domain: 'general', intentType: 'rights' },
  { keywords: ['avocat', 'mpisolovava', 'besoin avocat', 'trouver avocat', 'consultation'], domain: 'general', intentType: 'rights' },
  { keywords: ['tribunal', 'fitsarana', 'justice', 'procès', 'jugement', 'cour', 'audience'], domain: 'general', intentType: 'procedure' },
  { keywords: ['prescription', 'délai', 'fe-potoana', 'expire', 'trop tard', 'combien de temps'], domain: 'general', intentType: 'procedure' },
  { keywords: ['que faire', 'inona atao', 'j\'ai été', 'on m\'a', 'victime', 'problème', 'olana', 'comment'], domain: 'general', intentType: 'situation' },
  { keywords: ['je risque', 'inona no sazy', 'quelle peine', 'risque', 'punition', 'prison', 'amende'], domain: 'general', intentType: 'situation' },
  { keywords: ['légal', 'illégal', 'interdit', 'autorisé', 'permis', 'azo atao', 'tsy azo', 'est-ce que', 'peut-on'], domain: 'general', intentType: 'situation' },
  { keywords: ['meurtre', 'tuer', 'tué', 'mort', 'assassinat', 'mamono', 'vonoan'], domain: 'penal', intentType: 'search' },
  { keywords: ['vol', 'voler', 'volé', 'halatra', 'mangalatra', 'cambriolage', 'braquage', 'pickpocket'], domain: 'penal', intentType: 'search' },
  { keywords: ['viol', 'violer', 'agression sexuelle', 'fanaolana', 'abus sexuel'], domain: 'penal', intentType: 'search' },
  { keywords: ['escroquerie', 'arnaque', 'fraude', 'fitapitahana', 'scam', 'tromperie'], domain: 'penal', intentType: 'search' },
  { keywords: ['corruption', 'kolikoly', 'pot-de-vin', 'soudoyer'], domain: 'penal', intentType: 'search' },
  { keywords: ['coups', 'blessures', 'frapper', 'battre', 'bagarre', 'kapoka', 'ratra', 'violence'], domain: 'penal', intentType: 'search' },
  { keywords: ['menace', 'menacer', 'intimidation', 'fandrahonana', 'harcèlement'], domain: 'penal', intentType: 'search' },
  { keywords: ['diffamation', 'calomnie', 'insulte', 'injure', 'fanendrikendrehana', 'réputation'], domain: 'penal', intentType: 'search' },
  { keywords: ['dahalo', 'omby', 'boeuf', 'zebu', 'bétail'], domain: 'penal', intentType: 'search' },
  { keywords: ['drogue', 'stupéfiant', 'cannabis', 'rongony', 'empoisonnement'], domain: 'penal', intentType: 'search' },
  { keywords: ['faux', 'falsification', 'hosoka', 'faux document', 'contrefaçon'], domain: 'penal', intentType: 'search' },
  { keywords: ['incendie', 'feu', 'brûler', 'fandoroana', 'tavy'], domain: 'penal', intentType: 'search' },
  { keywords: ['enlèvement', 'kidnapping', 'séquestration', 'fanagiazana'], domain: 'penal', intentType: 'search' },
  { keywords: ['plainte', 'porter plainte', 'fitarainana', 'dénoncer', 'hitory'], domain: 'penal', intentType: 'procedure' },
  { keywords: ['légitime défense', 'auto-défense', 'se défendre', 'fiarovana'], domain: 'penal', intentType: 'conseil' },
  { keywords: ['garde à vue', 'détention', 'fihazonana', 'arrêté', 'interpellé', 'voasambotra'], domain: 'penal', intentType: 'conseil' },
  { keywords: ['contrat', 'travail', 'emploi', 'embauche', 'fifanarahana', 'asa', 'CDD', 'CDI'], domain: 'labor', intentType: 'search' },
  { keywords: ['salaire', 'karama', 'paiement', 'paie', 'rémunération', 'SMIG'], domain: 'labor', intentType: 'search' },
  { keywords: ['licenciement', 'licencié', 'viré', 'renvoyé', 'fandroahana', 'voaroaka'], domain: 'labor', intentType: 'search' },
  { keywords: ['congé', 'vacances', 'fialan-tsasatra', 'repos', 'maternité', 'maladie'], domain: 'labor', intentType: 'search' },
  { keywords: ['démission', 'démissionner', 'fametraham-pialana', 'quitter'], domain: 'labor', intentType: 'search' },
  { keywords: ['heures supplémentaires', 'overtime', 'ora fanampiny', '40 heures'], domain: 'labor', intentType: 'search' },
  { keywords: ['grève', 'syndicat', 'sendika', 'fitokonana'], domain: 'labor', intentType: 'search' },
  { keywords: ['accident travail', 'loza', 'blessé travail'], domain: 'labor', intentType: 'search' },
  { keywords: ['préavis', 'indemnité', 'tambin-karama', 'fampilazana'], domain: 'labor', intentType: 'search' },
  { keywords: ['inspection travail', 'tribunal travail', 'fisafoana'], domain: 'labor', intentType: 'procedure' },
  { keywords: ['terrain', 'tany', 'propriété foncière', 'parcelle'], domain: 'land', intentType: 'search' },
  { keywords: ['titre foncier', 'certificat foncier', 'kara-tany', 'immatriculation'], domain: 'land', intentType: 'search' },
  { keywords: ['bornage', 'famerana', 'borne', 'limite', 'voisin terrain'], domain: 'land', intentType: 'search' },
  { keywords: ['vente terrain', 'acheter terrain', 'fivarotana tany'], domain: 'land', intentType: 'search' },
  { keywords: ['hypothèque', 'antoka', 'prêt', 'banque', 'dette terrain'], domain: 'land', intentType: 'search' },
  { keywords: ['bail', 'location terrain', 'loyer', 'hofan-tany'], domain: 'land', intentType: 'search' },
  { keywords: ['litige foncier', 'conflit terrain', 'squatter', 'occupation'], domain: 'land', intentType: 'search' },
  { keywords: ['guichet foncier', 'birao', 'conservation foncière'], domain: 'land', intentType: 'procedure' },
  { keywords: ['étranger terrain', 'vahiny tany', 'expatrié', 'investir terrain'], domain: 'land', intentType: 'conseil' },
  { keywords: ['mariage', 'épouser', 'fanambadiana', 'se marier', 'noce'], domain: 'family', intentType: 'search' },
  { keywords: ['divorce', 'séparation', 'fisarahana', 'séparer'], domain: 'family', intentType: 'search' },
  { keywords: ['enfant', 'zaza', 'garde enfant', 'fitantanana', 'pension alimentaire'], domain: 'family', intentType: 'search' },
  { keywords: ['adoption', 'adopter', 'fananganan-jaza'], domain: 'family', intentType: 'search' },
  { keywords: ['paternité', 'filiation', 'firazanana', 'ADN', 'test ADN'], domain: 'family', intentType: 'search' },
  { keywords: ['héritage', 'succession', 'lova', 'héritier', 'testament'], domain: 'family', intentType: 'search' },
  { keywords: ['pension', 'alimentaire', 'fivelomana'], domain: 'family', intentType: 'search' },
  { keywords: ['bigamie', 'abandon famille', 'fandaozana'], domain: 'family', intentType: 'search' },
];

// ═══════════════════════════════════════════════════
// RICH ANSWERS — inchangées
// ═══════════════════════════════════════════════════
const richAnswers: Record<string, { fr: string; mg: string }> = {
  'plainte': { fr: "📋 **Comment porter plainte à Madagascar :**\n\n**1. Où ?**\n• Commissariat (117) en ville\n• Gendarmerie (119) en zone rurale\n• Procureur de la République\n\n**2. Documents :**\n• CIN + preuves (photos, certificat médical, témoins)\n\n**3. Procédure :**\n• Procès-verbal → Récépissé → Enquête\n\n**4. Prescriptions :**\n• Crimes : 10 ans · Délits : 3 ans · Contraventions : 1 an\n\n**5. Bon à savoir :**\n• Droit à un avocat dès le dépôt\n• Urgence : 117 (police) ou 119 (gendarmerie)", mg: "📋 **Fomba hitory eto Madagasikara :**\n\n**1. Aiza ?**\n• Polisy (117) an-tanàn-dehibe\n• Zandary (119) ambanivohitra\n• Prokiorora\n\n**2. Taratasy :**\n• CIN + porofo (sary, taratasy dokotera)\n\n**3. Paika :**\n• Procès-verbal → Dikatra → Fanadihadiana\n\n**4. Fe-potoana :**\n• Heloka bevava : 10 taona · Heloka : 3 taona · Maivana : 1 taona" },
  'avocat': { fr: "⚖️ **Trouver un avocat :**\n\n**Où ?**\n• Barreau d'Antananarivo (Palais de Justice Anosy)\n• Barreaux des autres provinces\n• Cliniques juridiques universitaires\n\n**Tarifs :**\n• Consultation : 20 000 - 100 000 Ar\n• Aide juridictionnelle : GRATUIT (personnes démunies)\n\n**Vos droits :**\n✅ Confidentialité totale\n✅ Droit de choisir votre avocat\n✅ Avocat commis d'office si vous n'en avez pas les moyens\n✅ Obligatoire en matière criminelle", mg: "⚖️ **Mitady mpisolovava :**\n\n**Aiza ?**\n• Barreau Antananarivo (Anosy)\n• Barreau amin'ny faritany\n• Cliniques juridiques\n\n**Sarany :**\n• Torohevitra : 20 000 - 100 000 Ar\n• Fanampiana : MAIMAIM-POANA (olona sahirana)\n\n**Ny zonao :**\n✅ Tsiambaratelo\n✅ Zo hisafidy mpisolovava\n✅ Tsy maintsy misy amin'ny heloka bevava" },
  'garde_vue': { fr: "🔒 **Droits en garde à vue :**\n\n**Durée max :** 48h (24h pour mineurs)\n\n**Vos droits :**\n✅ Connaître les motifs de l'arrestation\n✅ Garder le silence\n✅ Prévenir votre famille\n✅ Voir un médecin\n✅ Être assisté d'un avocat\n✅ Présomption d'innocence\n\n**INTERDIT :**\n❌ Torture\n❌ Dépasser la durée légale\n❌ Empêcher de voir un avocat\n❌ Forcer à signer\n\n**Que faire :** Restez calme, demandez un avocat, ne signez rien sans comprendre.", mg: "🔒 **Zonao raha voahazona :**\n\n**Fe-potoana :** 48 ora (24 ho an'ny ankizy)\n\n**Ny zonao :**\n✅ Fantaro ny antony\n✅ Tsy miteny\n✅ Hampilazana ny fianakaviana\n✅ Hojerena dokotera\n✅ Mpisolovava\n\n**VOARARA :**\n❌ Fampijaliana\n❌ Mihoatra ny fe-potoana\n❌ Manakana mpisolovava\n\n**Atao :** Mipetraha tony, mangataha mpisolovava." },
  'defense': { fr: "🛡️ **Légitime défense :**\n\n**4 conditions :**\n1. Agression réelle (pas imaginaire)\n2. Agression actuelle (en cours)\n3. Réponse proportionnée\n4. Nécessité (fuite impossible)\n\n**Exemples :**\n✅ Se défendre contre un agresseur armé → OK\n❌ Tirer sur quelqu'un qui insulte → NON\n✅ Repousser un cambrioleur la nuit → Présomption\n\n**Résultat :**\n• Si reconnue → acquittement\n• Si excessive → peine réduite", mg: "🛡️ **Fiarovana ara-dalàna :**\n\n**Fepetra 4 :**\n1. Fanafihana tena izy\n2. Fanafihana eo no ho eo\n3. Valin-teny antonony\n4. Ilaina (tsy afaka mandositra)\n\n**Vokany :**\n• Raha ekena → fanafahana\n• Raha tafahoatra → sazy kelikely" },
  'prescription': { fr: "⏰ **Délais de prescription :**\n\n**Pénal :** Crimes 10 ans · Délits 3 ans · Contraventions 1 an\n**Travail :** Salaires impayés 3 ans\n**Foncier :** Terrain titré = imprescriptible · Non titré = 20 ans\n**Famille :** Divorce = pas de prescription · Paternité = 2 ans\n\n📌 Interruptible par plainte ou citation", mg: "⏰ **Fe-potoana :**\n\n**Heloka :** Bevava 10 taona · Heloka 3 · Maivana 1\n**Asa :** Karama 3 taona\n**Tany :** Titre = tsy levona · Tsy titre = 20 taona\n**Fianakaviana :** Fisarahana = tsy misy · Maha-ray = 2 taona" },
  'etranger': { fr: "🌍 **Étranger et terrain :**\n\n**Règle :** Les étrangers NE PEUVENT PAS posséder de terrain.\n\n**Alternatives :**\n1. Bail emphytéotique (99 ans max)\n2. Société de droit malgache\n\n⚠️ Ne jamais acheter au nom d'un prête-nom", mg: "🌍 **Vahiny sy tany :**\n\n**Fitsipika :** Ny vahiny dia TSY AFAKA manana tany.\n\n**Safidy :**\n1. Bail emphytéotique (99 taona)\n2. Orinasa malagasy" },
  'rights': { fr: "🏛️ **Droits fondamentaux (Constitution) :**\n\n👤 Vie, liberté, expression, procès équitable, présomption d'innocence, avocat\n💼 Travail, salaire juste, santé, éducation, grève\n🏠 Propriété, protection contre l'expropriation\n👨‍👩‍👧 Mariage, droits de l'enfant, égalité\n\n📞 Violation → Médiateur de la République, tribunal, CNDH", mg: "🏛️ **Zo fototra (Lalàm-panorenana) :**\n\n👤 Fiainana, fahalalahana, fanehoam-bavaka, fitsarana mangarahara, mpisolovava\n💼 Asa, karama, fahasalamana, fanabeazana, fitokonana\n🏠 Fananana, fiarovana amin'ny fanesoran-tany\n👨‍👩‍👧 Fanambadiana, zon'ny zaza, fitoviana" },
};

// ═══════════════════════════════════════════════════
// CORE ENGINE
// ═══════════════════════════════════════════════════
const domainNames = {
  penal: { fr: 'Code Pénal', mg: 'Fehezan-dalàna Famaizana' },
  labor: { fr: 'Droit du Travail', mg: 'Lalàna momba ny Asa' },
  land: { fr: 'Droit Foncier', mg: 'Lalàna momba ny Tany' },
  family: { fr: 'Droit de la Famille', mg: 'Lalàna momba ny Fianakaviana' },
};

const greetingResponses = {
  fr: ["👋 Bonjour ! Je suis **Zoako**, votre assistant juridique propulsé par Gemini AI.\n\nJe peux :\n📖 Trouver des articles de loi\n💡 Vous conseiller sur vos droits\n📋 Expliquer les procédures\n🏛️ Vous orienter\n\n**Décrivez votre situation ou posez une question !**", "🙏 Merci ! N'hésitez pas si vous avez d'autres questions. Je suis là pour vous aider. 😊"],
  mg: ["👋 Miarahaba ! Izaho **Zoako**, mpanolotsaina ara-dalàna ampiasain'ny Gemini AI.\n\nAfaka :\n📖 Mitady lalàna\n💡 Manoro zonao\n📋 Manazava paika\n🏛️ Mitari-dalana\n\n**Lazao ny toe-javatra na anontanio ahy !**", "🙏 Misaotra ! Aza misalasala raha mbola misy fanontaniana. Eto aho hanampy anao. 😊"],
};

function detectIntent(msg: string): { domain: string; intentType: string; matchedKeywords: string[] } {
  const m = msg.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let best = { domain: 'general', intentType: 'search', matchedKeywords: [] as string[], score: 0 };
  for (const p of intentPatterns) {
    let score = 0; const matched: string[] = [];
    for (const kw of p.keywords) {
      const k = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (m.includes(k)) { score += k.length + 2; matched.push(kw); }
    }
    if (score > best.score) best = { domain: p.domain, intentType: p.intentType, matchedKeywords: matched, score };
  }
  return best;
}

function matchRichAnswer(msg: string, kws: string[]): string | null {
  const all = [...kws.map(k => k.toLowerCase()), ...msg.toLowerCase().split(/\s+/)];
  if (all.some(k => ['avocat', 'mpisolovava'].some(t => k.includes(t)))) return 'avocat';
  if (all.some(k => ['garde à vue', 'détention', 'arrêté', 'voasambotra', 'fihazonana'].some(t => k.includes(t)))) return 'garde_vue';
  if (all.some(k => ['légitime défense', 'auto-défense', 'se défendre', 'fiarovana'].some(t => k.includes(t)))) return 'defense';
  if (all.some(k => ['prescription', 'délai', 'trop tard', 'fe-potoana'].some(t => k.includes(t)))) return 'prescription';
  if (all.some(k => ['étranger', 'vahiny'].some(t => k.includes(t))) && all.some(k => ['terrain', 'tany'].some(t => k.includes(t)))) return 'etranger';
  if (all.some(k => ['mes droits', 'ny zoko', 'droit fondamental', 'constitution', 'citoyen'].some(t => k.includes(t)))) return 'rights';
  if (all.some(k => ['plainte', 'porter plainte', 'fitarainana', 'hitory'].some(t => k.includes(t)))) return 'plainte';
  return null;
}

function searchAllDomains(query: string, preferredDomain?: string) {
  const results: { articles: any[]; domain: string; domainName: any }[] = [];
  const q = query;
  if (!preferredDomain || preferredDomain === 'penal') { const a = searchArticles(q).slice(0, 3); if (a.length) results.push({ articles: a, domain: 'penal', domainName: domainNames.penal }); }
  if (!preferredDomain || preferredDomain === 'labor') { const a = searchLaborArticles(q).slice(0, 3); if (a.length) results.push({ articles: a, domain: 'labor', domainName: domainNames.labor }); }
  if (!preferredDomain || preferredDomain === 'land') { const a = searchLandArticles(q).slice(0, 3); if (a.length) results.push({ articles: a, domain: 'land', domainName: domainNames.land }); }
  if (!preferredDomain || preferredDomain === 'family') { const a = searchFamilyArticles(q).slice(0, 3); if (a.length) results.push({ articles: a, domain: 'family', domainName: domainNames.family }); }
  return results;
}

function getAdvice(domain: string, kws: string[], lang: 'fr' | 'mg'): string {
  const a: Record<string, Record<string, string>> = {
    fr: { penal_violence: "Portez plainte immédiatement et faites constater vos blessures par un médecin (certificat médical).", penal_vol: "Déposez plainte avec tous les détails. Conservez toute preuve. Ne récupérez pas vos biens par la force.", penal_sexuel: "Rendez-vous aux urgences immédiatement pour un examen et déposez plainte. Vous avez le droit d'être accompagné(e).", penal_default: "Consultez un avocat. L'aide juridictionnelle est gratuite pour les personnes démunies. Urgence : 117.", labor_licenciement: "Conservez tous vos documents. Saisissez l'Inspection du Travail (gratuit, obligatoire avant le tribunal).", labor_salaire: "Votre employeur doit payer au moins le SMIG. Saisissez l'Inspection du Travail. Prescription : 3 ans.", labor_default: "Rendez-vous à l'Inspection du Travail. La conciliation est gratuite et obligatoire.", land_titre: "Commencez par un certificat foncier au guichet communal (25 000-50 000 Ar). Plus rapide qu'un titre.", land_litige: "Privilégiez la médiation communale d'abord. Si échec → tribunal terrier avec preuves.", land_default: "Rendez-vous au guichet foncier communal. Jamais de transaction sans vérifier les documents.", family_divorce: "Le divorce par consentement mutuel est le plus simple. Préparez une convention sur la garde et les biens.", family_enfant: "L'intérêt supérieur de l'enfant est la priorité du tribunal.", family_default: "Consultez un avocat en droit de la famille. Cliniques juridiques = consultations gratuites." },
    mg: { penal_violence: "Mitory avy hatrany ary asaivo jerena ny ratranao (taratasy dokotera).", penal_vol: "Mitory ary tehirizo ny porofo. Aza maka ny fananana an-keriny.", penal_sexuel: "Mankanesa any amin'ny hopitaly avy hatrany ary mitory. Manana zo ho tohanan'olona ianao.", penal_default: "Mangataha torohevitra amin'ny mpisolovava. Maimaim-poana ho an'ny sahirana. Maika : 117.", labor_licenciement: "Tehirizo ny taratasy rehetra. Mankanesa amin'ny Fisafoana ny Asa (maimaim-poana).", labor_salaire: "Tsy maintsy mandoa SMIG farafahakeliny ny mpampiasa. Fisafoana ny Asa. Fe-potoana : 3 taona.", labor_default: "Mankanesa amin'ny Fisafoana ny Asa. Maimaim-poana ny fampihavanana.", land_titre: "Manomboka amin'ny kara-tany any amin'ny birao fananana tany (25 000-50 000 Ar).", land_litige: "Fampihavanana eo amin'ny kaominina aloha. Raha tsy mahomby → fitsarana.", land_default: "Mankanesa amin'ny birao fananana tany. Aza manao fifanakalozana tsy jerena taratasy.", family_divorce: "Fisarahana ifanarahana no mora indrindra.", family_enfant: "Ny soa ho an'ny zaza no ambony indrindra.", family_default: "Mangataha torohevitra amin'ny mpisolovava. Cliniques juridiques = maimaim-poana." }
  };
  const adv = a[lang]; const ks = kws.map(k => k.toLowerCase());
  if (domain === 'penal') { if (ks.some(k => ['violence', 'coups', 'blessures', 'frapper', 'kapoka'].includes(k))) return adv.penal_violence; if (ks.some(k => ['vol', 'voler', 'halatra'].includes(k))) return adv.penal_vol; if (ks.some(k => ['viol', 'fanaolana', 'sexuel'].includes(k))) return adv.penal_sexuel; return adv.penal_default; }
  if (domain === 'labor') { if (ks.some(k => ['licenciement', 'licencié', 'fandroahana', 'viré'].includes(k))) return adv.labor_licenciement; if (ks.some(k => ['salaire', 'karama', 'smig'].includes(k))) return adv.labor_salaire; return adv.labor_default; }
  if (domain === 'land') { if (ks.some(k => ['titre', 'certificat', 'kara-tany'].includes(k))) return adv.land_titre; if (ks.some(k => ['litige', 'conflit', 'squatter'].includes(k))) return adv.land_litige; return adv.land_default; }
  if (domain === 'family') { if (ks.some(k => ['divorce', 'séparation', 'fisarahana'].includes(k))) return adv.family_divorce; if (ks.some(k => ['enfant', 'zaza', 'garde', 'pension'].includes(k))) return adv.family_enfant; return adv.family_default; }
  return adv.penal_default;
}

export function generateBotResponse(userMessage: string, lang: 'fr' | 'mg'): ChatMessage {
  const intent = detectIntent(userMessage);
  let text = '';
  let articles: ChatMessage['articles'] = [];

  // 1. Greetings
  if (intent.intentType === 'greeting') {
    text = /merci|misaotra|thank|au revoir|veloma/i.test(userMessage) ? greetingResponses[lang][1] : greetingResponses[lang][0];
    return { id: Date.now().toString(), role: 'bot', text, timestamp: new Date() };
  }

  // 2. SCENARIO matching — phrases complètes (le plus intelligent)
  for (const sc of scenarios) {
    if (sc.patterns.some(p => p.test(userMessage))) {
      text = sc.response[lang];
      // Search articles for this scenario
      const results = searchAllDomains(sc.searchTerms, sc.domain !== 'general' ? sc.domain : undefined);
      if (results.length > 0) {
        const r = results[0];
        const art = r.articles[0];
        const desc = lang === 'fr' ? art.description_fr : art.description_mg;
        text += `\n\n**${art.article} — ${lang === 'fr' ? art.title_fr : art.title_mg}**\n${desc}`;
        if (art.penalty_fr) text += `\n⚖️ **${lang === 'fr' ? 'Peine' : 'Sazy'} :** ${lang === 'fr' ? art.penalty_fr : art.penalty_mg}`;
        articles = r.articles.map((a: any) => ({ article: a.article, title: lang === 'fr' ? a.title_fr : a.title_mg, domain: r.domainName[lang], penalty: a.penalty_fr }));
      }
      return { id: Date.now().toString(), role: 'bot', text, articles: articles.length > 0 ? articles : undefined, timestamp: new Date() };
    }
  }

  // 3. Rich answers (procedures, rights, counsel)
  const richKey = matchRichAnswer(userMessage, intent.matchedKeywords);
  if (richKey && richAnswers[richKey]) {
    return { id: Date.now().toString(), role: 'bot', text: richAnswers[richKey][lang], timestamp: new Date() };
  }

  // 4. Domain-specific article search
  if (intent.domain !== 'general') {
    const query = intent.matchedKeywords.join(' ') || userMessage;
    const results = searchAllDomains(query, intent.domain);

    if (results.length > 0 && results[0].articles.length > 0) {
      const r = results[0]; const art = r.articles[0];
      const desc = lang === 'fr' ? art.description_fr : art.description_mg;
      const domName = r.domainName[lang];

      if (r.domain === 'penal' && art.type) {
        const typeInfo = getTypeInfo(art.type, lang);
        text = lang === 'fr'
          ? `📖 **${domName}**\n\n**${art.article} — ${art.title_fr}**\n${desc}\n\n🏛️ **Classification :** ${typeInfo.label}\n⚖️ **Peine :** ${art.penalty_fr}\n\n💡 **Conseil :** ${getAdvice(r.domain, intent.matchedKeywords, lang)}`
          : `📖 **${domName}**\n\n**${art.article} — ${art.title_mg}**\n${desc}\n\n🏛️ **Sokajy :** ${typeInfo.label}\n⚖️ **Sazy :** ${art.penalty_mg}\n\n💡 **Torohevitra :** ${getAdvice(r.domain, intent.matchedKeywords, lang)}`;
      } else {
        text = lang === 'fr'
          ? `📖 **${domName}**\n\n**${art.article} — ${art.title_fr}**\n${desc}\n\n💡 **Conseil :** ${getAdvice(r.domain, intent.matchedKeywords, lang)}`
          : `📖 **${domName}**\n\n**${art.article} — ${art.title_mg}**\n${desc}\n\n💡 **Torohevitra :** ${getAdvice(r.domain, intent.matchedKeywords, lang)}`;
      }

      // Cross-domain search for related articles
      if (results.length > 1) {
        text += lang === 'fr' ? '\n\n📎 _Voir aussi dans d\'autres domaines :_' : '\n\n📎 _Jereo koa amin\'ny sehatra hafa :_';
        for (let i = 1; i < Math.min(results.length, 3); i++) {
          const cr = results[i]; const ca = cr.articles[0];
          text += `\n• **${cr.domainName[lang]}** — ${ca.article} : ${lang === 'fr' ? ca.title_fr : ca.title_mg}`;
        }
      }

      articles = r.articles.map((a: any) => ({ article: a.article, title: lang === 'fr' ? a.title_fr : a.title_mg, domain: domName, penalty: a.penalty_fr }));
    } else {
      text = lang === 'fr'
        ? `🔍 Pas d'article exact trouvé, mais voici mon conseil :\n\n💡 ${getAdvice(intent.domain, intent.matchedKeywords, lang)}\n\n📌 _Reformulez ou essayez : "comment porter plainte", "mes droits", "trouver un avocat"_`
        : `🔍 Tsy nahita lahatsoratra marina, fa ity ny torohevitro :\n\n💡 ${getAdvice(intent.domain, intent.matchedKeywords, lang)}\n\n📌 _Andramo : "ahoana ny hitory", "ny zoko", "mitady mpisolovava"_`;
    }
    return { id: Date.now().toString(), role: 'bot', text, articles: articles.length > 0 ? articles : undefined, timestamp: new Date() };
  }

  // 5. Explain
  if (intent.intentType === 'explain') {
    text = lang === 'fr'
      ? `📚 **Je suis Zoako, votre assistant juridique propulsé par Gemini AI.**\n\nJe couvre 4 domaines :\n⚖️ **Code Pénal** — crimes, délits, contraventions\n💼 **Droit du Travail** — contrats, salaires, licenciement\n🏠 **Droit Foncier** — terrain, titre, litiges\n👨‍👩‍👧 **Droit de la Famille** — mariage, divorce, garde\n\n**Comment m'utiliser :**\n• Décrivez votre situation : _"Mon patron ne me paie pas"_\n• Posez une question : _"Quelle peine pour un vol ?"_\n• Demandez une procédure : _"Comment porter plainte ?"_\n• Demandez vos droits : _"Mes droits en garde à vue"_`
      : `📚 **Izaho Zoako, mpanolotsaina ara-dalàna ampiasain'ny Gemini AI.**\n\n4 sehatra :\n⚖️ **Fehezan-dalàna** — heloka, sazy\n💼 **Lalàna Asa** — fifanarahana, karama\n🏠 **Lalàna Tany** — tany, titre\n👨‍👩‍👧 **Lalàna Fianakaviana** — fanambadiana, fisarahana\n\n**Fomba fampiasana :**\n• Lazao ny toe-javatra : _"Ny patronako tsy mandoa ahy"_\n• Fanontaniana : _"Inona ny sazy amin'ny halatra ?"_\n• Paika : _"Ahoana ny hitory ?"_`;
    return { id: Date.now().toString(), role: 'bot', text, timestamp: new Date() };
  }

  // 6. Situation — guide them
  if (intent.intentType === 'situation') {
    // Try cross-domain search with the full message
    const results = searchAllDomains(userMessage);
    if (results.length > 0 && results[0].articles.length > 0) {
      const r = results[0]; const art = r.articles[0];
      text = lang === 'fr'
        ? `🔎 D'après votre situation, voici ce que j'ai trouvé :\n\n📖 **${r.domainName[lang]} — ${art.article}**\n**${art.title_fr}**\n${art.description_fr}\n\n💡 **Conseil :** ${getAdvice(r.domain, intent.matchedKeywords.length > 0 ? intent.matchedKeywords : [userMessage], lang)}\n\n📌 _Précisez votre question pour un conseil plus adapté._`
        : `🔎 Araka ny toe-javatra misy anao, ity no hitako :\n\n📖 **${r.domainName[lang]} — ${art.article}**\n**${art.title_mg}**\n${art.description_mg}\n\n💡 **Torohevitra :** ${getAdvice(r.domain, intent.matchedKeywords.length > 0 ? intent.matchedKeywords : [userMessage], lang)}\n\n📌 _Hazavao ny fanontanianao mba hahazoana torohevitra tsara kokoa._`;
      articles = r.articles.slice(0, 3).map((a: any) => ({ article: a.article, title: lang === 'fr' ? a.title_fr : a.title_mg, domain: r.domainName[lang] }));
      return { id: Date.now().toString(), role: 'bot', text, articles, timestamp: new Date() };
    }

    text = lang === 'fr'
      ? `🤝 Pour mieux vous aider, précisez votre situation :\n\n⚖️ **Pénal** : _"On m'a volé mon téléphone"_\n💼 **Travail** : _"Mon patron ne me paie pas"_\n🏠 **Terrain** : _"Mon voisin occupe mon terrain"_\n👨‍👩‍👧 **Famille** : _"Je veux divorcer"_\n\nPlus c'est précis, mieux je peux vous conseiller ! 😊`
      : `🤝 Mba hanampiana anao tsara kokoa, lazao ny toe-javatrao :\n\n⚖️ **Heloka** : _"Nisy nangalatra ny findaiko"_\n💼 **Asa** : _"Ny patronako tsy mandoa ahy"_\n🏠 **Tany** : _"Ny mpiara-monina naka ny taniko"_\n👨‍👩‍👧 **Fianakaviana** : _"Te-hisaraka aho"_\n\nRaha mazava kokoa, tsara kokoa ny torohevitra ! 😊`;
    return { id: Date.now().toString(), role: 'bot', text, timestamp: new Date() };
  }

  // 7. Fallback — try cross-domain search as last resort
  const lastResort = searchAllDomains(userMessage);
  if (lastResort.length > 0 && lastResort[0].articles.length > 0) {
    const r = lastResort[0]; const art = r.articles[0];
    text = lang === 'fr'
      ? `🔎 J'ai trouvé ceci qui pourrait correspondre :\n\n📖 **${r.domainName[lang]} — ${art.article}**\n**${art.title_fr}**\n${art.description_fr}\n\n💡 ${getAdvice(r.domain, [userMessage], lang)}`
      : `🔎 Ity no hitako mety mifanaraka :\n\n📖 **${r.domainName[lang]} — ${art.article}**\n**${art.title_mg}**\n${art.description_mg}\n\n💡 ${getAdvice(r.domain, [userMessage], lang)}`;
    articles = r.articles.slice(0, 3).map((a: any) => ({ article: a.article, title: lang === 'fr' ? a.title_fr : a.title_mg, domain: r.domainName[lang] }));
    return { id: Date.now().toString(), role: 'bot', text, articles, timestamp: new Date() };
  }

  text = lang === 'fr'
    ? `🤔 Je n'ai pas trouvé de réponse exacte. Essayez :\n\n📖 _"Quelle peine pour un vol ?"_\n📋 _"Comment porter plainte ?"_\n💡 _"Mes droits en garde à vue"_\n🏠 _"Mon voisin occupe mon terrain"_\n💼 _"Mon patron ne me paie pas"_\n💔 _"Je veux divorcer"_`
    : `🤔 Tsy nahita valiny marina aho. Andramo :\n\n📖 _"Inona ny sazy amin'ny halatra ?"_\n📋 _"Ahoana ny fomba hitory ?"_\n💡 _"Ny zoko raha voahazona"_\n🏠 _"Ny mpiara-monina naka ny taniko"_\n💼 _"Ny patronako tsy mandoa ahy"_\n💔 _"Te-hisaraka aho"_`;
  return { id: Date.now().toString(), role: 'bot', text, timestamp: new Date() };
}
