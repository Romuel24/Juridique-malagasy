export type Lang = 'fr' | 'mg';

export const translations = {
  // Header
  siteTitle: {
    fr: "Juridique Malagasy",
    mg: "Lalàna Malagasy"
  },
  siteSubtitle: {
    fr: "Votre guide juridique complet de Madagascar",
    mg: "Ny torolalana ara-dalàna feno ho an'i Madagasikara"
  },
  
  // Navigation
  navSearch: {
    fr: "Recherche",
    mg: "Fikarohana"
  },
  navSimulator: {
    fr: "Simulateur",
    mg: "Mpanandrana"
  },
  navExplorer: {
    fr: "Explorateur",
    mg: "Mpitety"
  },
  navGlossary: {
    fr: "Glossaire",
    mg: "Rakibolana"
  },
  navManual: {
    fr: "Manuel",
    mg: "Torolalana"
  },
  navContact: {
    fr: "Contact",
    mg: "Fifandraisana"
  },
  
  // Search
  searchPlaceholder: {
    fr: "Décrivez un événement ou une infraction (ex: vol, meurtre, bagarre...)",
    mg: "Lazao ny zava-nitranga na ny fandikan-dalàna (ohatra: halatra, vonoan'olona, ady...)"
  },
  searchButton: {
    fr: "Rechercher",
    mg: "Karohy"
  },
  searchResults: {
    fr: "Résultats de recherche",
    mg: "Vokatry ny fikarohana"
  },
  noResults: {
    fr: "Aucun résultat trouvé. Essayez d'autres termes.",
    mg: "Tsy misy vokatra hita. Andramo teny hafa."
  },
  searchHint: {
    fr: "Tapez un événement ou une infraction pour trouver l'article correspondant",
    mg: "Soraty ny zava-nitranga na ny fandikan-dalàna mba hahitana ny lahatsoratra mifanaraka"
  },
  
  // Article details
  article: {
    fr: "Article",
    mg: "Lahatsoratra"
  },
  nature: {
    fr: "Nature de l'infraction",
    mg: "Karazana fandikan-dalàna"
  },
  penalty: {
    fr: "Peine encourue",
    mg: "Sazy"
  },
  description: {
    fr: "Description",
    mg: "Famaritana"
  },
  
  // Types
  crime: {
    fr: "Crime",
    mg: "Heloka bevava"
  },
  delit: {
    fr: "Délit",
    mg: "Heloka"
  },
  contravention: {
    fr: "Contravention",
    mg: "Fandikan-dalàna maivana"
  },
  
  // Statistics
  totalArticles: {
    fr: "Articles disponibles",
    mg: "Lahatsoratra misy"
  },
  crimes: {
    fr: "Crimes",
    mg: "Heloka bevava"
  },
  delits: {
    fr: "Délits",
    mg: "Heloka"
  },
  contraventions: {
    fr: "Contraventions",
    mg: "Fandikan-dalàna maivana"
  },
  
  // Manual
  manualTitle: {
    fr: "Manuel d'utilisation",
    mg: "Torolalana fampiasana"
  },
  manualIntro: {
    fr: "Bienvenue dans le guide d'utilisation du Code Pénal Malagasy en ligne.",
    mg: "Tongasoa eto amin'ny torolalana fampiasana ny Fehezan-dalàna Famaizana Malagasy an-tserasera."
  },
  manualStep1Title: {
    fr: "Étape 1 : Décrire l'événement",
    mg: "Dingana 1 : Lazao ny zava-nitranga"
  },
  manualStep1Desc: {
    fr: "Dans la barre de recherche, tapez une description de l'événement ou de l'infraction que vous souhaitez rechercher. Par exemple : \"vol\", \"meurtre\", \"bagarre\", \"escroquerie\".",
    mg: "Ao amin'ny baran'ny fikarohana, soraty ny famaritana ny zava-nitranga na ny fandikan-dalàna tianao hokarohy. Ohatra : \"halatra\", \"vonoan'olona\", \"ady\", \"fitapitahana\"."
  },
  manualStep2Title: {
    fr: "Étape 2 : Consulter les résultats",
    mg: "Dingana 2 : Jereo ny vokatra"
  },
  manualStep2Desc: {
    fr: "Le système affichera les articles correspondants avec leur numéro, leur description et la nature de l'infraction (Crime, Délit ou Contravention).",
    mg: "Ny rafitra dia hampiseho ny lahatsoratra mifanaraka miaraka amin'ny laharan'izy ireo, ny famaritana ary ny karazana fandikan-dalàna (Heloka bevava, Heloka na Fandikan-dalàna maivana)."
  },
  manualStep3Title: {
    fr: "Étape 3 : Comprendre la classification",
    mg: "Dingana 3 : Fantaro ny sokajy"
  },
  manualStep3Desc: {
    fr: "Chaque infraction est classée en trois catégories :",
    mg: "Ny fandikan-dalàna tsirairay dia sokajiana telo :"
  },
  manualCrime: {
    fr: "Crime : Infraction la plus grave (ex : meurtre, viol, vol à main armée). Jugé par la Cour Criminelle. Peines : travaux forcés, réclusion criminelle.",
    mg: "Heloka bevava : Fandikan-dalàna lehibe indrindra (oh : vonoan'olona, fanaolana, halatra miaraka amin'ny fiadiana). Tsaraina eo amin'ny Fitsarana ny heloka bevava. Sazy : asa an-terivozona, figadrana."
  },
  manualDelit: {
    fr: "Délit : Infraction de gravité moyenne (ex : vol simple, escroquerie, coups et blessures). Jugé par le Tribunal Correctionnel. Peines : emprisonnement, amende.",
    mg: "Heloka : Fandikan-dalàna antonony (oh : halatra tsotra, fitapitahana, kapoka sy ratra). Tsaraina eo amin'ny Fitsarana Fanitsiana. Sazy : figadrana, lamandy."
  },
  manualContravention: {
    fr: "Contravention : Infraction la moins grave (ex : tapage nocturne, ivresse publique). Jugé par le Tribunal de Police. Peines : amende.",
    mg: "Fandikan-dalàna maivana : Fandikan-dalàna maivana indrindra (oh : tabataba amin'ny alina, fahamamoana). Tsaraina eo amin'ny Fitsarana Pôlisy. Sazy : lamandy."
  },
  manualStep4Title: {
    fr: "Étape 4 : Changer de langue",
    mg: "Dingana 4 : Ovay ny fiteny"
  },
  manualStep4Desc: {
    fr: "Utilisez le bouton de langue en haut à droite pour basculer entre le Français et le Malagasy.",
    mg: "Ampiasao ny bokotra fiteny eo ambony ankavanana mba hiova fiteny eo amin'ny Frantsay sy ny Malagasy."
  },
  manualStep5Title: {
    fr: "Étape 5 : Envoyer vos commentaires",
    mg: "Dingana 5 : Alefaso ny fanehoan-kevitrao"
  },
  manualStep5Desc: {
    fr: "N'hésitez pas à nous envoyer vos suggestions, critiques ou questions via la section Commentaires.",
    mg: "Aza misalasala mandefa ny sosokevitra, tsikera na fanontaniana amin'ny alalan'ny fizarana Fanehoan-kevitra."
  },
  manualDisclaimer: {
    fr: "⚠️ Avertissement : Ce site est un outil d'aide à la recherche juridique et ne remplace pas le conseil d'un professionnel du droit. Pour toute affaire juridique, consultez un avocat.",
    mg: "⚠️ Fampitandremana : Ity tranonkala ity dia fitaovana fanampiana amin'ny fikarohana ara-dalàna ary tsy manolo ny torohevitry ny mpiasa matihanina ara-dalàna. Ho an'ny raharaha ara-dalàna rehetra, mangataha torohevitra amin'ny mpisolovava."
  },
  
  // Contact / Comments
  contactTitle: {
    fr: "Commentaires & Suggestions",
    mg: "Fanehoan-kevitra & Sosokevitra"
  },
  contactDesc: {
    fr: "Envoyez-nous vos suggestions, critiques ou questions. Votre avis nous aide à améliorer ce service.",
    mg: "Alefaso aminay ny sosokevitra, tsikera na fanontanianao. Ny hevitrao dia manampy anay hanatsara ity tolotra ity."
  },
  contactName: {
    fr: "Votre nom",
    mg: "Ny anaranao"
  },
  contactEmail: {
    fr: "Votre email",
    mg: "Ny mailakao"
  },
  contactSubject: {
    fr: "Sujet",
    mg: "Lohahevitra"
  },
  contactMessage: {
    fr: "Votre message",
    mg: "Ny hafatrao"
  },
  contactSend: {
    fr: "Envoyer le message",
    mg: "Alefaso ny hafatra"
  },
  contactSending: {
    fr: "Envoi en cours...",
    mg: "Alefa..."
  },
  contactSuccess: {
    fr: "Message envoyé avec succès ! Merci pour votre contribution.",
    mg: "Lasa soa aman-tsara ny hafatra ! Misaotra noho ny fandraisanao anjara."
  },
  contactError: {
    fr: "Erreur lors de l'envoi. Veuillez réessayer.",
    mg: "Nisy olana tamin'ny fandefasana. Avereno azafady."
  },
  subjectSuggestion: {
    fr: "Suggestion",
    mg: "Sosokevitra"
  },
  subjectCritique: {
    fr: "Critique",
    mg: "Tsikera"
  },
  subjectQuestion: {
    fr: "Question",
    mg: "Fanontaniana"
  },
  subjectOther: {
    fr: "Autre",
    mg: "Hafa"
  },
  contactNamePlaceholder: {
    fr: "Entrez votre nom",
    mg: "Ampidiro ny anaranao"
  },
  contactEmailPlaceholder: {
    fr: "Entrez votre email",
    mg: "Ampidiro ny mailakao"
  },
  contactMessagePlaceholder: {
    fr: "Écrivez votre message ici...",
    mg: "Soraty eto ny hafatrao..."
  },
  
  // Simulator
  simulatorTitle: {
    fr: "Simulateur d'infraction",
    mg: "Mpanandrana fandikan-dalàna"
  },
  simulatorDesc: {
    fr: "Répondez aux questions pour identifier la nature de l'infraction et les articles applicables.",
    mg: "Valio ny fanontaniana mba hamantarana ny karazana fandikan-dalàna sy ny lahatsoratra mifandraika."
  },
  simulatorStart: {
    fr: "Commencer la simulation",
    mg: "Atombohy ny fanandramana"
  },
  simulatorReset: {
    fr: "Recommencer",
    mg: "Avereno"
  },
  simulatorResult: {
    fr: "Résultat de la simulation",
    mg: "Vokatry ny fanandramana"
  },
  simulatorQuestion: {
    fr: "Question",
    mg: "Fanontaniana"
  },
  simulatorYes: {
    fr: "Oui",
    mg: "Eny"
  },
  simulatorNo: {
    fr: "Non",
    mg: "Tsia"
  },
  simulatorNext: {
    fr: "Suivant",
    mg: "Manaraka"
  },
  simulatorPrev: {
    fr: "Précédent",
    mg: "Teo aloha"
  },
  simulatorCategory: {
    fr: "Catégorie sélectionnée",
    mg: "Sokajy voafidy"
  },

  // Explorer
  explorerTitle: {
    fr: "Explorateur du Code Pénal",
    mg: "Mpitety ny Fehezan-dalàna"
  },
  explorerDesc: {
    fr: "Parcourez tous les articles du Code Pénal classés par catégorie.",
    mg: "Jereo ny lahatsoratra rehetra ao amin'ny Fehezan-dalàna araka ny sokajy."
  },
  explorerAll: {
    fr: "Tous",
    mg: "Rehetra"
  },
  explorerFilter: {
    fr: "Filtrer par type",
    mg: "Sivana araka ny karazana"
  },
  explorerSort: {
    fr: "Trier par",
    mg: "Alamino araka"
  },
  explorerSortArticle: {
    fr: "Numéro d'article",
    mg: "Laharan'ny lahatsoratra"
  },
  explorerSortType: {
    fr: "Type d'infraction",
    mg: "Karazana fandikan-dalàna"
  },
  explorerSortAlpha: {
    fr: "Ordre alphabétique",
    mg: "Araka ny abidy"
  },

  // Glossary
  glossaryTitle: {
    fr: "Glossaire Juridique",
    mg: "Rakibolana Ara-dalàna"
  },
  glossaryDesc: {
    fr: "Définitions des termes juridiques utilisés dans le Code Pénal.",
    mg: "Famaritana ny teny ara-dalàna ampiasaina ao amin'ny Fehezan-dalàna."
  },
  glossarySearch: {
    fr: "Rechercher un terme...",
    mg: "Karohy teny iray..."
  },
  glossaryDefinition: {
    fr: "Définition",
    mg: "Famaritana"
  },
  glossaryExample: {
    fr: "Exemple",
    mg: "Ohatra"
  },
  glossaryRelated: {
    fr: "Articles liés",
    mg: "Lahatsoratra mifandraika"
  },

  // Home
  homeTitle: {
    fr: "Bienvenue sur Juridique Malagasy",
    mg: "Tongasoa eto amin'ny Lalàna Malagasy"
  },
  homeSubtitle: {
    fr: "Accédez facilement aux textes juridiques malgaches",
    mg: "Midira mora amin'ny lalàna malagasy"
  },
  homePenal: {
    fr: "Code Pénal",
    mg: "Fehezan-dalàna Famaizana"
  },
  homePenalDesc: {
    fr: "Crimes, délits, contraventions et leurs sanctions",
    mg: "Heloka bevava, heloka, fandikan-dalàna maivana sy ny saziny"
  },
  homeLabor: {
    fr: "Droit du Travail",
    mg: "Lalàna momba ny Asa"
  },
  homeLaborDesc: {
    fr: "Contrats, salaires, congés, licenciement",
    mg: "Fifanarahana, karama, fialana sasatra, fandroahana"
  },
  homeLand: {
    fr: "Droit Foncier",
    mg: "Lalàna momba ny Tany"
  },
  homeLandDesc: {
    fr: "Propriété, titres, transactions, litiges fonciers",
    mg: "Fananana, titre, fifanakalozana, fifanolanana"
  },
  homeFamily: {
    fr: "Droit de la Famille",
    mg: "Lalàna momba ny Fianakaviana"
  },
  homeFamilyDesc: {
    fr: "Mariage, divorce, enfants, succession + jurisprudence",
    mg: "Fanambadiana, fisarahana, zaza, lova + jurisprudence"
  },
  homeExplore: {
    fr: "Explorer",
    mg: "Tsidiho"
  },

  // Legal domains
  domainPenal: {
    fr: "Code Pénal",
    mg: "Fehezan-dalàna Famaizana"
  },
  domainLabor: {
    fr: "Droit du Travail",
    mg: "Lalàna momba ny Asa"
  },
  domainLand: {
    fr: "Droit Foncier",
    mg: "Lalàna Tany"
  },
  domainFamily: {
    fr: "Droit de la Famille",
    mg: "Lalàna Fianakaviana"
  },
  // Jurisprudence
  jurisprudenceTitle: {
    fr: "Jurisprudence",
    mg: "Jurisprudence"
  },
  jurisprudenceRef: {
    fr: "Référence",
    mg: "Loharano"
  },
  jurisprudenceDate: {
    fr: "Date",
    mg: "Daty"
  },
  
  // Footer
  footerText: {
    fr: "Juridique Malagasy - Votre guide juridique complet",
    mg: "Lalàna Malagasy - Ny torolalana ara-dalàna feno"
  },
  footerDisclaimer: {
    fr: "Ce site est un outil informatif et ne remplace pas le conseil d'un professionnel du droit.",
    mg: "Ity tranonkala ity dia fitaovana fampahalalana ary tsy manolo ny torohevitry ny mpiasa matihanina ara-dalàna."
  },
  
  // Common
  backToSearch: {
    fr: "Retour à la recherche",
    mg: "Hiverina amin'ny fikarohana"
  },
  language: {
    fr: "Français",
    mg: "Malagasy"
  },
  suggestedSearches: {
    fr: "Recherches suggérées",
    mg: "Fikarohana soso-kevitra"
  },
  examples: {
    fr: ["Vol", "Meurtre", "Escroquerie", "Coups", "Viol", "Corruption", "Dahalo"],
    mg: ["Halatra", "Vonoan'olona", "Fitapitahana", "Kapoka", "Fanaolana", "Kolikoly", "Dahalo"]
  }
} as const;
