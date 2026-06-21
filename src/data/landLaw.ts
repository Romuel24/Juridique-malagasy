export type LandCategory = 'propriete' | 'titre' | 'transaction' | 'litige' | 'domaine' | 'succession';

export interface Jurisprudence {
  reference: string;
  date: string;
  summary_fr: string;
  summary_mg: string;
}

export interface LandArticle {
  article: string;
  title_fr: string;
  title_mg: string;
  description_fr: string;
  description_mg: string;
  category: LandCategory;
  keywords: string[];
  jurisprudence?: Jurisprudence[];
}

export const landArticles: LandArticle[] = [
  // PROPRIÉTÉ
  {
    article: "Loi 2005-019, Art. 1",
    title_fr: "Droit de propriété foncière",
    title_mg: "Zo amin'ny fananana tany",
    description_fr: "Toute personne physique ou morale de nationalité malagasy peut être propriétaire foncier à Madagascar.",
    description_mg: "Ny olona rehetra na fikambanana malagasy dia afaka manana tany any Madagasikara.",
    category: "propriete",
    keywords: ["propriété", "propriétaire", "fananana", "tany", "droit", "ownership"]
  },
  {
    article: "Loi 2005-019, Art. 2",
    title_fr: "Propriété foncière des étrangers",
    title_mg: "Fananana tany ho an'ny vahiny",
    description_fr: "Les personnes physiques et morales étrangères ne peuvent acquérir des terrains qu'à titre de bail emphytéotique d'une durée maximale de 99 ans.",
    description_mg: "Ny vahiny dia afaka mahazo tany amin'ny alalan'ny hofan-tany (bail) maharitra 99 taona farafahabetsany.",
    category: "propriete",
    keywords: ["étranger", "vahiny", "bail", "emphytéotique", "99 ans", "location"]
  },
  {
    article: "Loi 2005-019, Art. 3",
    title_fr: "Types de propriété foncière",
    title_mg: "Karazana fananana tany",
    description_fr: "La propriété foncière peut être individuelle, collective ou en indivision. Elle peut porter sur le sol et/ou les constructions.",
    description_mg: "Ny fananana tany dia mety ho an'ny tsirairay, iombonana na tsy zaraina. Mety ho ny tany sy/na ny trano.",
    category: "propriete",
    keywords: ["individuelle", "collective", "indivision", "tsirairay", "iombonana", "type"]
  },
  {
    article: "Loi 2006-031, Art. 5",
    title_fr: "Propriété foncière non titrée (PPNT)",
    title_mg: "Fananana tany tsy misy titre (PPNT)",
    description_fr: "La propriété foncière non titrée est constituée par l'appropriation et la mise en valeur d'un terrain conformément aux usages locaux.",
    description_mg: "Ny fananana tany tsy misy titre dia miorina amin'ny fakana sy fampiasana tany araka ny fomba eo an-toerana.",
    category: "propriete",
    keywords: ["non titré", "PPNT", "tsy misy titre", "appropriation", "mise en valeur", "coutume"]
  },

  // TITRE FONCIER
  {
    article: "Loi 2005-019, Art. 15",
    title_fr: "Certificat foncier",
    title_mg: "Kara-tany",
    description_fr: "Le certificat foncier est un document officiel délivré par le guichet foncier communal, reconnaissant les droits de propriété sur un terrain non titré.",
    description_mg: "Ny kara-tany dia taratasy ofisialy omen'ny birao fananana tany, manaiky ny zo amin'ny tany tsy misy titre.",
    category: "titre",
    keywords: ["certificat", "kara-tany", "guichet foncier", "document", "reconnaissance"],
    jurisprudence: [
      { reference: "Tribunal Terrier Antananarivo, Jugement n° 178/2019", date: "2019-06-20", summary_fr: "Le certificat foncier délivré par le guichet foncier communal constitue une preuve suffisante de propriété pour les terrains non titrés.", summary_mg: "Ny kara-tany omen'ny birao fananana tany dia porofo ampy amin'ny fananana tany tsy misy titre." }
    ]
  },
  {
    article: "Loi 2005-019, Art. 16",
    title_fr: "Titre foncier",
    title_mg: "Titre foncier",
    description_fr: "Le titre foncier est le document officiel définitif constatant le droit de propriété sur un immeuble immatriculé. Il est inattaquable.",
    description_mg: "Ny titre foncier dia taratasy ofisialy farany mampiseho ny zo amin'ny tany voasoratra. Tsy azo toherina izany.",
    category: "titre",
    keywords: ["titre foncier", "immatriculation", "définitif", "inattaquable", "officiel"],
    jurisprudence: [
      { reference: "Cour Suprême, Arrêt n° 256/2017", date: "2017-09-30", summary_fr: "Le titre foncier est inattaquable et prime sur tout autre document, y compris les actes de vente antérieurs non inscrits.", summary_mg: "Ny titre foncier dia tsy azo toherina ary ambony noho ny taratasy hafa rehetra, anisan'izany ny taratasy fivarotana taloha tsy voasoratra." }
    ]
  },
  {
    article: "Loi 2005-019, Art. 17",
    title_fr: "Procédure d'immatriculation",
    title_mg: "Fomba fahazoana titre",
    description_fr: "L'immatriculation foncière est la procédure permettant d'établir un titre foncier sur un terrain. Elle comprend : la demande, le bornage, l'enquête et l'inscription.",
    description_mg: "Ny immatriculation dia fomba hahazoana titre foncier. Misy: fangatahana, famerana, fanadihadiana ary fanoratana.",
    category: "titre",
    keywords: ["immatriculation", "procédure", "bornage", "famerana", "enquête", "inscription"]
  },
  {
    article: "Loi 2005-019, Art. 18",
    title_fr: "Bornage du terrain",
    title_mg: "Famerana tany",
    description_fr: "Le bornage est l'opération qui consiste à déterminer et à matérialiser les limites d'un terrain par la pose de bornes.",
    description_mg: "Ny famerana dia asa famaritana sy fametrahana ny fetran'ny tany amin'ny alalan'ny borne.",
    category: "titre",
    keywords: ["bornage", "famerana", "bornes", "limites", "délimitation", "terrain"]
  },
  {
    article: "Loi 2005-019, Art. 19",
    title_fr: "Conservation foncière",
    title_mg: "Fitehirizana tany",
    description_fr: "La conservation foncière est le service chargé de tenir les registres fonciers et de délivrer les titres et certificats.",
    description_mg: "Ny fitehirizana tany dia sampana miadidy ny rejisitra fananana tany sy ny fanomezana titre sy certificat.",
    category: "titre",
    keywords: ["conservation", "fitehirizana", "registre", "service", "administration"]
  },

  // TRANSACTIONS
  {
    article: "Loi 2005-019, Art. 30",
    title_fr: "Vente de terrain",
    title_mg: "Fivarotana tany",
    description_fr: "La vente d'un terrain titré ou certifié doit être constatée par acte authentique établi par un notaire ou par acte sous seing privé.",
    description_mg: "Ny fivarotana tany misy titre na certificat dia tsy maintsy atao amin'ny taratasy ofisialy na taratasy sonia.",
    category: "transaction",
    keywords: ["vente", "fivarotana", "achat", "acte", "notaire", "transaction"],
    jurisprudence: [
      { reference: "Cour d'Appel Antananarivo, Arrêt n° 189/2020", date: "2020-07-14", summary_fr: "La vente d'un terrain titré sans acte authentique est nulle. L'acquéreur ne peut se prévaloir d'un simple acte sous seing privé non enregistré.", summary_mg: "Ny fivarotana tany misy titre tsy misy taratasy ofisialy dia foana. Ny mpividy dia tsy afaka mitaky amin'ny taratasy tsotra tsy voasoratra." },
      { reference: "Tribunal Terrier Antsirabe, Jugement n° 98/2021", date: "2021-04-22", summary_fr: "La double vente d'un même terrain est sanctionnée pénalement et civilement. Le premier acquéreur inscrit au livre foncier est prioritaire.", summary_mg: "Ny fivarotana tany indroa dia saziana ara-pitsarana. Ny mpividy voalohany voasoratra ao amin'ny boky fananana tany no ambony." }
    ]
  },
  {
    article: "Loi 2005-019, Art. 31",
    title_fr: "Mutation de propriété",
    title_mg: "Famindrana fananana",
    description_fr: "Toute mutation de propriété foncière doit être inscrite au livre foncier. La mutation n'est opposable aux tiers qu'après cette inscription.",
    description_mg: "Ny famindrana fananana tany rehetra dia tsy maintsy soratana ao amin'ny boky fananana tany. Ny famindrana dia tsy manankery raha tsy efa voasoratra.",
    category: "transaction",
    keywords: ["mutation", "famindrana", "inscription", "livre foncier", "transfert"]
  },
  {
    article: "Loi 2005-019, Art. 32",
    title_fr: "Donation de terrain",
    title_mg: "Fanomezana tany",
    description_fr: "La donation d'un terrain doit être constatée par acte notarié. Elle est irrévocable sauf pour cause d'ingratitude.",
    description_mg: "Ny fanomezana tany dia tsy maintsy atao amin'ny taratasy notaire. Tsy azo averina izany afa-tsy raha tsy misy tsy fankasitrahana.",
    category: "transaction",
    keywords: ["donation", "fanomezana", "don", "gratuit", "notaire", "irrévocable"]
  },
  {
    article: "Loi 2005-019, Art. 33",
    title_fr: "Hypothèque",
    title_mg: "Antoka tany",
    description_fr: "L'hypothèque est un droit réel grevant un immeuble pour garantir le paiement d'une dette. Elle doit être inscrite au livre foncier.",
    description_mg: "Ny antoka tany dia zo mametra ny tany ho antoka amin'ny trosa. Tsy maintsy soratana ao amin'ny boky fananana tany izany.",
    category: "transaction",
    keywords: ["hypothèque", "antoka", "garantie", "dette", "trosa", "prêt", "banque"],
    jurisprudence: [{ reference: "Cour d'Appel Antananarivo, Arrêt n° 234/2018", date: "2018-11-20", summary_fr: "L'hypothèque non inscrite au livre foncier est inopposable aux tiers. La banque ne peut saisir le terrain si l'hypothèque n'est pas publiée.", summary_mg: "Ny antoka tsy voasoratra ao amin'ny boky fananana tany dia tsy manankery amin'ny olon-kafa. Ny banky dia tsy afaka misambotra ny tany raha tsy navoaka ny antoka." }]
  },
  {
    article: "Loi 2005-019, Art. 34",
    title_fr: "Location de terrain (Bail)",
    title_mg: "Hofan-tany",
    description_fr: "Le bail est un contrat par lequel le propriétaire concède à une autre personne la jouissance d'un terrain contre un loyer.",
    description_mg: "Ny hofan-tany dia fifanarahana izay anomezan'ny tompony olona hafa ny fampiasana ny tany misy hofany.",
    category: "transaction",
    keywords: ["bail", "location", "hofan-tany", "loyer", "locataire", "propriétaire"]
  },

  // DOMAINE DE L'ÉTAT
  {
    article: "Loi 2008-014, Art. 3",
    title_fr: "Domaine public de l'État",
    title_mg: "Fananana iombonan'ny fanjakana",
    description_fr: "Le domaine public comprend les biens affectés à l'usage du public ou à un service public. Il est inaliénable et imprescriptible.",
    description_mg: "Ny fananana iombonana dia ny fananana ho fampiasan'ny vahoaka na ho an'ny serivisy. Tsy azo amidy na levona.",
    category: "domaine",
    keywords: ["domaine public", "État", "fanjakana", "inaliénable", "imprescriptible"]
  },
  {
    article: "Loi 2008-014, Art. 5",
    title_fr: "Domaine privé de l'État",
    title_mg: "Fananana tsy miankina amin'ny fanjakana",
    description_fr: "Le domaine privé de l'État comprend les terrains qui lui appartiennent et peuvent être aliénés ou loués.",
    description_mg: "Ny fananana tsy miankina dia ny tany an'ny fanjakana azo amidy na hofaina.",
    category: "domaine",
    keywords: ["domaine privé", "État", "fanjakana", "aliénable", "location"]
  },
  {
    article: "Loi 2008-014, Art. 7",
    title_fr: "Attribution de terrain domanial",
    title_mg: "Fanomezana tany fanjakana",
    description_fr: "L'attribution de terrains domaniaux peut se faire par vente, bail ou concession selon les conditions fixées par décret.",
    description_mg: "Ny fanomezana tany fanjakana dia azo atao amin'ny fivarotana, hofana na fanomezana araka ny fepetra voalazan'ny didim-pitondrana.",
    category: "domaine",
    keywords: ["attribution", "domanial", "fanomezana", "vente", "concession", "État"]
  },

  // SUCCESSION
  {
    article: "Code Civil, Art. 745",
    title_fr: "Succession foncière",
    title_mg: "Lova tany",
    description_fr: "À la mort du propriétaire, les terrains sont transmis à ses héritiers selon les règles de la succession légale ou testamentaire.",
    description_mg: "Rehefa maty ny tompony, ny tany dia afindra amin'ny mpandova araka ny lalàna na ny didim-pananana.",
    category: "succession",
    keywords: ["succession", "lova", "héritier", "mpandova", "décès", "héritage"]
  },
  {
    article: "Code Civil, Art. 746",
    title_fr: "Indivision successorale",
    title_mg: "Tsy fizarana lova",
    description_fr: "Les héritiers sont en indivision sur les biens de la succession jusqu'au partage. Chaque héritier peut demander le partage.",
    description_mg: "Ny mpandova dia miara-mitana ny fananana lova mandra-pizarana. Ny mpandova tsirairay dia afaka mangataka fizarana.",
    category: "succession",
    keywords: ["indivision", "tsy fizarana", "partage", "fizarana", "héritier"]
  },
  {
    article: "Code Civil, Art. 747",
    title_fr: "Partage de terrain",
    title_mg: "Fizarana tany",
    description_fr: "Le partage d'un terrain en succession peut être fait à l'amiable ou judiciairement. Il doit être inscrit au livre foncier.",
    description_mg: "Ny fizarana tany lova dia azo atao am-pihavanana na amin'ny fitsarana. Tsy maintsy soratana ao amin'ny boky fananana tany izany.",
    category: "succession",
    keywords: ["partage", "fizarana", "amiable", "judiciaire", "inscription"]
  },

  // LITIGES FONCIERS
  {
    article: "Loi 2005-019, Art. 50",
    title_fr: "Tribunal terrier",
    title_mg: "Fitsarana momba ny tany",
    description_fr: "Les litiges fonciers relèvent de la compétence du tribunal terrier ou du tribunal civil selon la nature du terrain.",
    description_mg: "Ny fifanolanana momba ny tany dia an'ny fitsarana momba ny tany na ny fitsarana sivily araka ny karazan'ny tany.",
    category: "litige",
    keywords: ["tribunal terrier", "fitsarana", "litige", "compétence", "contentieux"]
  },
  {
    article: "Loi 2005-019, Art. 51",
    title_fr: "Action en revendication",
    title_mg: "Fitakiana fananana tany",
    description_fr: "L'action en revendication permet au propriétaire de réclamer son terrain contre tout détenteur. Elle est imprescriptible pour les terrains titrés.",
    description_mg: "Ny fitakiana fananana dia mamela ny tompony hitaky ny taniny amin'izay mitana azy. Tsy levona izany ho an'ny tany misy titre.",
    category: "litige",
    keywords: ["revendication", "fitakiana", "propriétaire", "détenteur", "action"],
    jurisprudence: [
      { reference: "Cour Suprême, Arrêt n° 312/2018", date: "2018-10-15", summary_fr: "L'occupation prolongée d'un terrain titré ne confère aucun droit au possesseur. Le titre foncier reste imprescriptible.", summary_mg: "Ny fipetrahana ela amin'ny tany misy titre dia tsy manome zo amin'ny mpipetraka. Ny titre foncier dia tsy levona." }
    ]
  },
  {
    article: "Loi 2005-019, Art. 52",
    title_fr: "Bornage contentieux",
    title_mg: "Famerana ifanolanana",
    description_fr: "En cas de contestation des limites, le tribunal peut ordonner un bornage judiciaire avec intervention d'un géomètre.",
    description_mg: "Raha misy fifanolanana momba ny fetra, ny fitsarana dia afaka mandidy famerana misy géomètre.",
    category: "litige",
    keywords: ["bornage", "famerana", "contestation", "limites", "géomètre", "judiciaire"],
    jurisprudence: [{ reference: "Tribunal Terrier Antsirabe, Jugement n° 45/2017", date: "2017-07-14", summary_fr: "Le bornage judiciaire prévaut sur le bornage amiable antérieur en cas de contestation. Le géomètre assermenté doit être présent.", summary_mg: "Ny famerana ara-pitsarana dia ambony noho ny famerana am-pihavanana teo aloha raha misy fifanolanana. Ny géomètre voasoratra dia tsy maintsy eo." }]
  },
  {
    article: "Loi 2005-019, Art. 53",
    title_fr: "Opposition à immatriculation",
    title_mg: "Fanoherana ny immatriculation",
    description_fr: "Toute personne qui prétend avoir des droits sur un terrain en cours d'immatriculation peut former opposition.",
    description_mg: "Ny olona rehetra milaza manana zo amin'ny tany am-panatanterahana immatriculation dia afaka manohitra.",
    category: "litige",
    keywords: ["opposition", "fanoherana", "immatriculation", "droits", "contestation"]
  },
  {
    article: "Loi 2006-031, Art. 20",
    title_fr: "Médiation foncière communale",
    title_mg: "Fampihavanana momba ny tany ao amin'ny kaominina",
    description_fr: "Le guichet foncier communal peut organiser une médiation pour résoudre les conflits fonciers à l'amiable.",
    description_mg: "Ny birao fananana tany dia afaka mandamina fampihavanana mba hamahana ny fifanolanana momba ny tany.",
    category: "litige",
    keywords: ["médiation", "fampihavanana", "guichet foncier", "conflit", "amiable"]
  },
  // ARTICLES SUPPLEMENTAIRES
  {
    article: "Loi 2005-019, Art. 35",
    title_fr: "Servitudes",
    title_mg: "Fepetra fampiasana tany",
    description_fr: "Les servitudes sont des charges imposées sur un immeuble pour l'usage et l'utilité d'un immeuble appartenant à un autre propriétaire. Elles peuvent être légales ou conventionnelles.",
    description_mg: "Ny servitudes dia adidy apetraka amin'ny tany ho fampiasan'ny tany an'ny tompony hafa. Mety ho ara-dalàna na ara-pifanarahana izy.",
    category: "propriete",
    keywords: ["servitude", "charge", "passage", "fepetra", "fampiasana", "droit de passage", "voisin"]
  },
  {
    article: "Loi 2005-019, Art. 40",
    title_fr: "Expropriation pour cause d'utilité publique",
    title_mg: "Fanesoran-tany noho ny soa iombonana",
    description_fr: "L'expropriation pour cause d'utilité publique ne peut être prononcée que moyennant une juste et préalable indemnité. La procédure est réglementée par la loi.",
    description_mg: "Ny fanesoran-tany noho ny soa iombonana dia tsy azo atao raha tsy misy onitra ara-drariny sy mialoha. Ny paika dia voafehin'ny lalàna.",
    category: "propriete",
    keywords: ["expropriation", "utilité publique", "indemnité", "fanesoran-tany", "soa iombonana", "État"],
    jurisprudence: [
      { reference: "Cour Suprême, Arrêt n° 89/2020", date: "2020-06-12", summary_fr: "L'expropriation sans indemnité préalable est nulle. Le propriétaire a droit à une indemnité correspondant à la valeur vénale du terrain.", summary_mg: "Ny fanesoran-tany tsy misy onitra mialoha dia foana. Ny tompony dia manana zo amin'ny onitra mifanaraka amin'ny vidin'ny tany." }
    ]
  },
  {
    article: "Loi 2005-019, Art. 22",
    title_fr: "Prescription acquisitive (terrain non titré)",
    title_mg: "Fahazoana tany noho ny fipetrahana ela",
    description_fr: "L'occupation paisible, continue et non équivoque d'un terrain non titré pendant une durée de 20 ans au moins confère des droits de propriété à l'occupant.",
    description_mg: "Ny fipetrahana milamina, tsy tapaka ary mazava amin'ny tany tsy misy titre mandritra ny 20 taona farafahakeliny dia manome zo amin'ny fananana ny mpipetraka.",
    category: "propriete",
    keywords: ["prescription", "acquisitive", "20 ans", "occupation", "paisible", "fipetrahana", "ela", "non titré"]
  },
  {
    article: "Loi 2005-019, Art. 36",
    title_fr: "Droit de préemption",
    title_mg: "Zo hividy mialoha",
    description_fr: "En cas de vente d'un terrain, les copropriétaires, les voisins ou l'État peuvent exercer un droit de préemption dans les conditions fixées par la loi.",
    description_mg: "Rehefa amidy ny tany, ny mpiara-manana, ny mpifanila na ny fanjakana dia afaka mampiasa ny zo hividy mialoha araka ny fepetra voalazan'ny lalàna.",
    category: "transaction",
    keywords: ["préemption", "priorité", "achat", "hividy", "mialoha", "copropriétaire", "voisin"]
  },
  {
    article: "Ord. 62-023, Art. 4",
    title_fr: "Mise en valeur obligatoire",
    title_mg: "Fampivoarana tany tsy maintsy atao",
    description_fr: "Tout terrain concédé par l'État doit être mis en valeur dans un délai déterminé, sous peine de retrait de la concession.",
    description_mg: "Ny tany rehetra omen'ny fanjakana dia tsy maintsy amboarina ao anatin'ny fe-potoana voafaritra, raha tsy izany dia esorina ny fanomezana.",
    category: "domaine",
    keywords: ["mise en valeur", "concession", "État", "fampivoarana", "fanjakana", "retrait", "délai"]
  },
];

export const landCategories: Record<LandCategory, { fr: string; mg: string; icon: string }> = {
  propriete: { fr: "Droit de propriété", mg: "Zo fananana", icon: "🏠" },
  titre: { fr: "Titres & Certificats", mg: "Titre sy Kara-tany", icon: "📜" },
  transaction: { fr: "Transactions", mg: "Fifanakalozana", icon: "🤝" },
  domaine: { fr: "Domaine de l'État", mg: "Fananana fanjakana", icon: "🏛️" },
  succession: { fr: "Succession", mg: "Lova", icon: "👨‍👩‍👧‍👦" },
  litige: { fr: "Litiges fonciers", mg: "Fifanolanana", icon: "⚖️" }
};

export function searchLandArticles(query: string): LandArticle[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (searchTerms.length === 0) return [];

  const scored = landArticles.map(article => {
    let score = 0;
    const allText = [
      ...article.keywords,
      article.title_fr.toLowerCase(),
      article.title_mg.toLowerCase(),
      article.description_fr.toLowerCase(),
      article.description_mg.toLowerCase(),
      article.article.toLowerCase(),
    ];

    for (const term of searchTerms) {
      for (const keyword of article.keywords) {
        if (keyword.toLowerCase() === term) score += 10;
        else if (keyword.toLowerCase().includes(term)) score += 5;
      }
      for (const text of allText) {
        if (text.includes(term)) score += 2;
      }
    }
    return { article, score };
  });

  return scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).map(s => s.article);
}
