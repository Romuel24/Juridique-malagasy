export type LaborCategory = 'contrat' | 'salaire' | 'conge' | 'licenciement' | 'syndicat' | 'securite' | 'litige';

export interface Jurisprudence {
  reference: string;
  date: string;
  summary_fr: string;
  summary_mg: string;
}

export interface LaborArticle {
  article: string;
  title_fr: string;
  title_mg: string;
  description_fr: string;
  description_mg: string;
  category: LaborCategory;
  keywords: string[];
  jurisprudence?: Jurisprudence[];
}

export const laborArticles: LaborArticle[] = [
  // CONTRAT DE TRAVAIL
  {
    article: "Art. 6",
    title_fr: "Définition du contrat de travail",
    title_mg: "Famaritana ny fifanarahana asa",
    description_fr: "Le contrat de travail est une convention par laquelle une personne s'engage à mettre son activité professionnelle sous la direction et l'autorité d'une autre personne qui s'oblige à lui payer une rémunération.",
    description_mg: "Ny fifanarahana asa dia fifanekena izay anoloran'ny olona iray ny asany matihanina eo ambany fitarihan'ny olona iray hafa izay manaiky handoa karama azy.",
    category: "contrat",
    keywords: ["contrat", "travail", "emploi", "embauche", "fifanarahana", "asa", "recrutement", "engagement"]
  },
  {
    article: "Art. 7",
    title_fr: "Forme du contrat de travail",
    title_mg: "Endriky ny fifanarahana asa",
    description_fr: "Le contrat de travail peut être verbal ou écrit. Il est constaté dans les formes qu'il convient aux parties d'adopter.",
    description_mg: "Ny fifanarahana asa dia mety ho am-bava na an-tsoratra. Ny endriny dia arakaraka izay ifanarahan'ny roa tonta.",
    category: "contrat",
    keywords: ["contrat écrit", "contrat verbal", "forme", "fifanarahana", "an-tsoratra", "am-bava"]
  },
  {
    article: "Art. 8",
    title_fr: "Contrat à durée déterminée (CDD)",
    title_mg: "Fifanarahana voafetra fe-potoana (CDD)",
    description_fr: "Le contrat de travail à durée déterminée est un contrat dont le terme est fixé à l'avance par les parties. Sa durée ne peut excéder deux ans, renouvellement compris.",
    description_mg: "Ny CDD dia fifanarahana voafetra mialoha ny fe-potoany. Tsy tokony hihoatra ny roa taona ny faharetany, miaraka amin'ny fanavaozana.",
    category: "contrat",
    keywords: ["CDD", "durée déterminée", "temporaire", "voafetra", "fe-potoana", "contrat temporaire", "2 ans"],
    jurisprudence: [
      { reference: "Tribunal du Travail Antananarivo, Jugement n° 156/2019", date: "2019-07-12", summary_fr: "Un CDD renouvelé au-delà de 2 ans est automatiquement requalifié en CDI, avec les droits afférents pour le salarié.", summary_mg: "Ny CDD nohavaozina mihoatra ny 2 taona dia lasa CDI ho azy, miaraka amin'ny zo rehetra ho an'ny mpiasa." }
    ]
  },
  {
    article: "Art. 9",
    title_fr: "Contrat à durée indéterminée (CDI)",
    title_mg: "Fifanarahana tsy voafetra fe-potoana (CDI)",
    description_fr: "Le contrat de travail à durée indéterminée peut cesser à tout moment par la volonté de l'une des parties, sous réserve du préavis prévu par la loi.",
    description_mg: "Ny CDI dia azo tapahina amin'ny fotoana rehetra araka ny sitrapon'ny andaniny iray, miaraka amin'ny fampilazana mialoha voalazan'ny lalàna.",
    category: "contrat",
    keywords: ["CDI", "durée indéterminée", "permanent", "tsy voafetra", "maharitra", "contrat permanent"]
  },
  {
    article: "Art. 10",
    title_fr: "Période d'essai",
    title_mg: "Vanim-potoana fisedrana",
    description_fr: "Toute embauche peut être soumise à une période d'essai dont la durée ne peut excéder six mois. Cette période peut être renouvelée une fois.",
    description_mg: "Ny fandraisana mpiasa dia azo apetraka amin'ny fisedrana tsy mihoatra ny enim-bolana. Azo havaozina indray mandeha io fe-potoana io.",
    category: "contrat",
    keywords: ["essai", "période d'essai", "fisedrana", "6 mois", "test", "probation", "vanim-potoana"]
  },
  {
    article: "Art. 11",
    title_fr: "Contrat d'apprentissage",
    title_mg: "Fifanarahana fiofanana",
    description_fr: "Le contrat d'apprentissage est un contrat par lequel un employeur s'engage à assurer une formation professionnelle méthodique à un apprenti.",
    description_mg: "Ny fifanarahana fiofanana dia fifanekena izay aneken'ny mpampiasa hanome fiofanana matihanina ho an'ny mpianatra.",
    category: "contrat",
    keywords: ["apprentissage", "formation", "apprenti", "fiofanana", "mpianatra", "stage", "stagiaire"]
  },

  // SALAIRE
  {
    article: "Art. 53",
    title_fr: "Droit au salaire",
    title_mg: "Zo amin'ny karama",
    description_fr: "Tout travail mérite salaire. Le salaire doit être payé en monnaie ayant cours légal.",
    description_mg: "Ny asa rehetra dia mendrika karama. Ny karama dia tsy maintsy aloa amin'ny vola manankery ara-dalàna.",
    category: "salaire",
    keywords: ["salaire", "paiement", "karama", "vola", "rémunération", "paie", "solde"]
  },
  {
    article: "Art. 54",
    title_fr: "SMIG - Salaire Minimum",
    title_mg: "SMIG - Karama farany ambany",
    description_fr: "Le salaire minimum interprofessionnel garanti (SMIG) est fixé par décret. Aucun salaire ne peut être inférieur au SMIG.",
    description_mg: "Ny karama farany ambany (SMIG) dia feran'ny didim-pitondrana. Tsy misy karama tokony ho ambany noho ny SMIG.",
    category: "salaire",
    keywords: ["SMIG", "minimum", "salaire minimum", "karama ambany", "seuil", "plancher"],
    jurisprudence: [
      { reference: "Cour d'Appel Antananarivo, Arrêt n° 67/2020", date: "2020-04-20", summary_fr: "L'employeur qui verse un salaire inférieur au SMIG est condamné à régulariser les arriérés et à payer des dommages-intérêts.", summary_mg: "Ny mpampiasa mandoa karama ambany noho ny SMIG dia voatery mandoa ny trosa rehetra sy onitra." }
    ]
  },
  {
    article: "Art. 55",
    title_fr: "Périodicité du paiement",
    title_mg: "Fotoana fandoavana karama",
    description_fr: "Le salaire doit être payé à intervalles réguliers ne pouvant excéder quinze jours pour les travailleurs payés à l'heure ou à la journée, et un mois pour les employés.",
    description_mg: "Ny karama dia tsy maintsy aloa amin'ny fotoana tsy mihoatra ny 15 andro ho an'ny mpiasa isan'ora na isan'andro, ary iray volana ho an'ny mpiasa.",
    category: "salaire",
    keywords: ["paiement", "périodicité", "mensuel", "fandoavana", "volana", "quinzaine", "paie"]
  },
  {
    article: "Art. 56",
    title_fr: "Bulletin de paie",
    title_mg: "Taratasy karama",
    description_fr: "L'employeur est tenu de délivrer au travailleur, au moment du paiement, un bulletin de paie détaillant les éléments de sa rémunération.",
    description_mg: "Ny mpampiasa dia tsy maintsy manome ny mpiasa, amin'ny fotoana fandoavana, taratasy karama mampiseho ny antsipiriany.",
    category: "salaire",
    keywords: ["bulletin", "paie", "fiche", "taratasy karama", "détail", "slip"]
  },
  {
    article: "Art. 57",
    title_fr: "Heures supplémentaires",
    title_mg: "Ora fanampiny",
    description_fr: "Les heures effectuées au-delà de la durée légale du travail donnent lieu à une majoration de salaire. Le taux de majoration est fixé par voie réglementaire.",
    description_mg: "Ny ora mihoatra ny fotoana ara-dalàna dia miteraka fitomboana karama. Ny tahan'ny fitomboana dia feran'ny lalàna.",
    category: "salaire",
    keywords: ["heures supplémentaires", "overtime", "ora fanampiny", "majoration", "surplus", "extra"]
  },
  {
    article: "Art. 58",
    title_fr: "Retenues sur salaire",
    title_mg: "Fisintonana amin'ny karama",
    description_fr: "Les retenues sur salaire ne peuvent excéder la quotité saisissable fixée par la loi. Les amendes disciplinaires sont interdites.",
    description_mg: "Ny fisintonana amin'ny karama dia tsy tokony hihoatra ny fetra voalazan'ny lalàna. Ny lamandy famaizana dia voarara.",
    category: "salaire",
    keywords: ["retenue", "déduction", "fisintonana", "saisie", "prélèvement"]
  },

  // CONGÉS
  {
    article: "Art. 84",
    title_fr: "Congé annuel payé",
    title_mg: "Fialana sasatra isan-taona",
    description_fr: "Tout travailleur a droit à un congé payé à la charge de l'employeur, à raison de deux jours et demi ouvrables par mois de service effectif.",
    description_mg: "Ny mpiasa rehetra dia manana zo amin'ny fialan-tsasatra aloan'ny mpampiasa, 2,5 andro isam-bolana niasana.",
    category: "conge",
    keywords: ["congé", "vacances", "fialan-tsasatra", "annuel", "payé", "repos", "2.5 jours"]
  },
  {
    article: "Art. 85",
    title_fr: "Congé de maternité",
    title_mg: "Fialana sasatra fiterahana",
    description_fr: "La femme salariée a droit à un congé de maternité de quatorze semaines, dont huit semaines après l'accouchement. Ce congé est rémunéré.",
    description_mg: "Ny vehivavy mpiasa dia manana zo amin'ny fialan-tsasatra fiterahana 14 herinandro, 8 herinandro aorian'ny fiterahana. Aloa io fialana sasatra io.",
    category: "conge",
    keywords: ["maternité", "grossesse", "accouchement", "fiterahana", "bevohoka", "femme", "14 semaines"],
    jurisprudence: [
      { reference: "Tribunal du Travail Antananarivo, Jugement n° 234/2020", date: "2020-09-15", summary_fr: "Le refus d'accorder le congé de maternité constitue une faute grave de l'employeur ouvrant droit à des dommages-intérêts.", summary_mg: "Ny fandavana ny fialan-tsasatra fiterahana dia fahadisoan'ny mpampiasa lehibe manome zo amin'ny onitra." }
    ]
  },
  {
    article: "Art. 86",
    title_fr: "Congé de paternité",
    title_mg: "Fialana sasatra ho an'ny ray",
    description_fr: "Le père salarié a droit à un congé de paternité de dix jours ouvrables à l'occasion de la naissance de son enfant.",
    description_mg: "Ny ray mpiasa dia manana zo amin'ny fialan-tsasatra 10 andro amin'ny fotoana fahaterahan'ny zanany.",
    category: "conge",
    keywords: ["paternité", "père", "naissance", "ray", "fahaterahan", "10 jours"]
  },
  {
    article: "Art. 87",
    title_fr: "Congé maladie",
    title_mg: "Fialana sasatra aretina",
    description_fr: "Le travailleur malade a droit à un congé maladie sur présentation d'un certificat médical. La durée et les indemnités sont fixées par la loi.",
    description_mg: "Ny mpiasa marary dia manana zo amin'ny fialan-tsasatra aretina rehefa misy taratasy dokotera. Ny faharetany sy ny tambin-karama dia voafaritry ny lalàna.",
    category: "conge",
    keywords: ["maladie", "malade", "aretina", "marary", "médical", "certificat", "arrêt"]
  },
  {
    article: "Art. 88",
    title_fr: "Jours fériés",
    title_mg: "Andro tsy iasana",
    description_fr: "Les jours fériés légaux sont chômés et payés. Tout travail effectué pendant ces jours donne droit à une majoration de salaire.",
    description_mg: "Ny andro tsy iasana ara-dalàna dia aloa. Ny asa atao amin'ireo andro ireo dia miteraka fitomboana karama.",
    category: "conge",
    keywords: ["férié", "chômé", "andro tsy iasana", "fête", "repos", "majoration"]
  },
  {
    article: "Art. 89",
    title_fr: "Congés exceptionnels",
    title_mg: "Fialana sasatra manokana",
    description_fr: "Des congés exceptionnels payés sont accordés pour événements familiaux : mariage (3 jours), décès d'un proche (3 jours), naissance (3 jours).",
    description_mg: "Ny fialan-tsasatra manokana aloa dia omena amin'ny toe-javatra ara-pianakaviana : fanambadiana (3 andro), fahafatesana (3 andro), fahaterahana (3 andro).",
    category: "conge",
    keywords: ["exceptionnel", "mariage", "décès", "manokana", "fanambadiana", "fahafatesana", "événement"]
  },

  // LICENCIEMENT
  {
    article: "Art. 15",
    title_fr: "Préavis de licenciement",
    title_mg: "Fampilazana mialoha ny fandroahana",
    description_fr: "En cas de licenciement, l'employeur doit respecter un préavis dont la durée varie selon l'ancienneté du travailleur.",
    description_mg: "Raha misy fandroahana, ny mpampiasa dia tsy maintsy manaja ny fampilazana mialoha izay miova arakaraka ny faharetan'ny mpiasa.",
    category: "licenciement",
    keywords: ["préavis", "licenciement", "fampilazana", "fandroahana", "délai", "notification"]
  },
  {
    article: "Art. 16",
    title_fr: "Licenciement pour motif personnel",
    title_mg: "Fandroahana noho ny antony manokana",
    description_fr: "Le licenciement pour motif personnel doit être justifié par une cause réelle et sérieuse liée à la personne du salarié.",
    description_mg: "Ny fandroahana noho ny antony manokana dia tsy maintsy voamarina amin'ny antony tena izy sy lehibe mifandraika amin'ny mpiasa.",
    category: "licenciement",
    keywords: ["licenciement personnel", "faute", "antony manokana", "motif", "cause", "discipline"]
  },
  {
    article: "Art. 17",
    title_fr: "Licenciement pour motif économique",
    title_mg: "Fandroahana noho ny antony ara-bola",
    description_fr: "Le licenciement pour motif économique est celui effectué pour des raisons économiques, technologiques ou structurelles.",
    description_mg: "Ny fandroahana ara-bola dia izay atao noho ny antony ara-toekarena, teknolojia na rafitra.",
    category: "licenciement",
    keywords: ["économique", "restructuration", "ara-bola", "compression", "réduction", "effectif"]
  },
  {
    article: "Art. 18",
    title_fr: "Licenciement abusif",
    title_mg: "Fandroahana tsy ara-dalàna",
    description_fr: "Est abusif le licenciement effectué sans motif légitime ou en violation des procédures légales. Il ouvre droit à des dommages-intérêts.",
    description_mg: "Tsy ara-dalàna ny fandroahana atao tsy misy antony marina na mandika ny paika ara-dalàna. Izany dia manome zo amin'ny onitra.",
    category: "licenciement",
    keywords: ["abusif", "injustifié", "tsy ara-dalàna", "dommages", "intérêts", "onitra", "illégal"],
    jurisprudence: [
      { reference: "Cour Suprême, Arrêt n° 301/2018", date: "2018-12-10", summary_fr: "Le licenciement d'un salarié sans lettre de notification motivée constitue un licenciement abusif ouvrant droit à 6 mois de salaire en dommages-intérêts.", summary_mg: "Ny fandroahana mpiasa tsy misy taratasy fampilazana misy antony dia fandroahana tsy ara-dalàna manome zo amin'ny karama 6 volana ho onitra." },
      { reference: "Tribunal du Travail Antsirabe, Jugement n° 89/2021", date: "2021-03-05", summary_fr: "Le licenciement d'une femme enceinte est présumé abusif sauf faute lourde prouvée par l'employeur.", summary_mg: "Ny fandroahana vehivavy bevohoka dia heverina ho tsy ara-dalàna raha tsy hita ny fahadisoana lehibe porofoin'ny mpampiasa." }
    ]
  },
  {
    article: "Art. 19",
    title_fr: "Indemnité de licenciement",
    title_mg: "Tambin-karama fandroahana",
    description_fr: "Le travailleur licencié a droit à une indemnité de licenciement calculée sur la base de son ancienneté et de son dernier salaire.",
    description_mg: "Ny mpiasa voaroaka dia manana zo amin'ny tambin-karama kajiana arakaraka ny faharetany sy ny karamany farany.",
    category: "licenciement",
    keywords: ["indemnité", "compensation", "tambin-karama", "ancienneté", "calcul", "severance"]
  },
  {
    article: "Art. 20",
    title_fr: "Démission",
    title_mg: "Fametraham-pialana",
    description_fr: "Le travailleur peut démissionner à tout moment sous réserve de respecter le préavis prévu. La démission doit être libre et non équivoque.",
    description_mg: "Ny mpiasa dia afaka mametra-pialana amin'ny fotoana rehetra raha manaja ny fampilazana mialoha. Ny fametraham-pialana dia tsy maintsy an-tsitrapo.",
    category: "licenciement",
    keywords: ["démission", "départ", "fametraham-pialana", "volontaire", "quitter", "partir"]
  },

  // SYNDICAT
  {
    article: "Art. 125",
    title_fr: "Liberté syndicale",
    title_mg: "Fahalalahana amin'ny sendika",
    description_fr: "Les travailleurs ont le droit de se constituer en syndicat et d'y adhérer librement pour la défense de leurs intérêts.",
    description_mg: "Ny mpiasa dia manana zo hanangana sendika sy hiditra aminy malalaka mba hiarovana ny tombontsoany.",
    category: "syndicat",
    keywords: ["syndicat", "liberté syndicale", "sendika", "adhésion", "association", "union"]
  },
  {
    article: "Art. 126",
    title_fr: "Protection des délégués syndicaux",
    title_mg: "Fiarovana ny solontenan'ny sendika",
    description_fr: "Les délégués syndicaux bénéficient d'une protection contre le licenciement. Leur licenciement nécessite l'autorisation de l'inspecteur du travail.",
    description_mg: "Ny solontenan'ny sendika dia voaaro amin'ny fandroahana. Ny fandroahana azy dia mila fankatoavan'ny mpanara-maso ny asa.",
    category: "syndicat",
    keywords: ["délégué", "protection", "solontena", "fiarovana", "représentant", "inspecteur"]
  },
  {
    article: "Art. 127",
    title_fr: "Droit de grève",
    title_mg: "Zo amin'ny fitokonana",
    description_fr: "Le droit de grève est reconnu et s'exerce dans le cadre des lois qui le réglementent. Il ne peut entraîner la rupture du contrat de travail.",
    description_mg: "Ny zo amin'ny fitokonana dia ekena ary ampiharina ao anatin'ny lalàna. Tsy tokony hanapaka ny fifanarahana asa izany.",
    category: "syndicat",
    keywords: ["grève", "fitokonana", "arrêt travail", "mouvement", "revendication", "protestation"]
  },
  {
    article: "Art. 128",
    title_fr: "Négociation collective",
    title_mg: "Fifampiraharahana iombonana",
    description_fr: "Les conventions collectives sont négociées entre les organisations syndicales de travailleurs et les employeurs ou leurs organisations.",
    description_mg: "Ny fifanarahana iombonana dia ifampiraharahana eo amin'ny sendikan'ny mpiasa sy ny mpampiasa na ny fikambanan'izy ireo.",
    category: "syndicat",
    keywords: ["négociation", "convention collective", "fifampiraharahana", "accord", "dialogue social"]
  },

  // SÉCURITÉ AU TRAVAIL
  {
    article: "Art. 100",
    title_fr: "Obligation de sécurité",
    title_mg: "Adidy amin'ny fiarovana",
    description_fr: "L'employeur est tenu de prendre les mesures nécessaires pour assurer la sécurité et protéger la santé des travailleurs.",
    description_mg: "Ny mpampiasa dia tsy maintsy mandray fepetra ilaina mba hiantohana ny fiarovana sy ny fahasalaman'ny mpiasa.",
    category: "securite",
    keywords: ["sécurité", "santé", "fiarovana", "fahasalamana", "protection", "mesures"]
  },
  {
    article: "Art. 101",
    title_fr: "Accident du travail",
    title_mg: "Loza mitranga eo am-piasana",
    description_fr: "Est considéré comme accident du travail tout accident survenu par le fait ou à l'occasion du travail.",
    description_mg: "Heverina ho loza mitranga eo am-piasana ny loza rehetra mitranga noho ny asa na mandritra ny asa.",
    category: "securite",
    keywords: ["accident", "travail", "loza", "blessure", "incapacité", "indemnisation"],
    jurisprudence: [
      { reference: "Cour d'Appel Toamasina, Arrêt n° 145/2019", date: "2019-11-28", summary_fr: "L'accident survenu sur le trajet domicile-travail est assimilé à un accident du travail et ouvre droit à indemnisation.", summary_mg: "Ny loza mitranga eo amin'ny lalana avy any an-trano mankany am-piasana dia heverina ho loza eo am-piasana ka manome zo amin'ny fanonerana." }
    ]
  },
  {
    article: "Art. 102",
    title_fr: "Maladie professionnelle",
    title_mg: "Aretina noho ny asa",
    description_fr: "Les maladies professionnelles sont celles contractées du fait de l'exercice d'une activité professionnelle. Elles donnent droit à réparation.",
    description_mg: "Ny aretina noho ny asa dia ireo azo avy amin'ny fanaovana asa matihanina. Manome zo amin'ny fanonerana izany.",
    category: "securite",
    keywords: ["maladie professionnelle", "aretina", "asa", "réparation", "indemnisation"]
  },
  {
    article: "Art. 103",
    title_fr: "Hygiène et salubrité",
    title_mg: "Fahadiovana sy fahasalamana",
    description_fr: "Les établissements doivent être tenus dans un état constant de propreté et présenter les conditions d'hygiène nécessaires.",
    description_mg: "Ny toeram-piasana dia tsy maintsy voatana madio mandrakariva ary manana ny fepetra fahadiovana ilaina.",
    category: "securite",
    keywords: ["hygiène", "propreté", "fahadiovana", "salubrité", "conditions", "environnement"]
  },

  // LITIGES
  {
    article: "Art. 130",
    title_fr: "Inspection du travail",
    title_mg: "Fisafoana ny asa",
    description_fr: "L'inspection du travail est chargée de veiller à l'application des dispositions légales relatives au travail.",
    description_mg: "Ny fisafoana ny asa dia miadidy ny fanaraha-maso ny fampiharana ny lalàna momba ny asa.",
    category: "litige",
    keywords: ["inspection", "contrôle", "fisafoana", "fanaraha-maso", "autorité", "inspecteur"]
  },
  {
    article: "Art. 131",
    title_fr: "Tribunal du travail",
    title_mg: "Fitsarana momba ny asa",
    description_fr: "Les litiges individuels de travail relèvent de la compétence du tribunal du travail.",
    description_mg: "Ny fifanolanana amin'ny asa tsirairay dia amin'ny fitsarana momba ny asa.",
    category: "litige",
    keywords: ["tribunal", "litige", "fitsarana", "conflit", "recours", "jugement"]
  },
  {
    article: "Art. 132",
    title_fr: "Conciliation",
    title_mg: "Fampihavanana",
    description_fr: "Avant toute saisine du tribunal, les parties doivent tenter une conciliation devant l'inspecteur du travail.",
    description_mg: "Alohan'ny hitondrana any amin'ny fitsarana, ny roa tonta dia tsy maintsy manandrana fampihavanana eo anatrehan'ny mpanara-maso.",
    category: "litige",
    keywords: ["conciliation", "médiation", "fampihavanana", "règlement", "amiable", "inspecteur"]
  },
  {
    article: "Art. 133",
    title_fr: "Prescription des actions",
    title_mg: "Fahafoanan'ny fitoriana",
    description_fr: "Les actions en paiement de salaire se prescrivent par trois ans à compter de la date à laquelle le salaire était dû.",
    description_mg: "Ny fitakiana karama dia foana rehefa afaka telo taona manomboka amin'ny daty tokony nandoavana ny karama.",
    category: "litige",
    keywords: ["prescription", "délai", "fahafoanan", "3 ans", "action", "recours"]
  },
  // ARTICLES SUPPLEMENTAIRES
  {
    article: "Art. 12",
    title_fr: "Clause de non-concurrence",
    title_mg: "Fepetra tsy fifaninana",
    description_fr: "Le contrat de travail peut contenir une clause de non-concurrence. Cette clause doit être limitée dans le temps et dans l'espace, et doit prévoir une contrepartie financière pour le salarié.",
    description_mg: "Ny fifanarahana asa dia mety misy fepetra tsy fifaninana. Io fepetra io dia tsy maintsy voafetra amin'ny fotoana sy toerana, ary tsy maintsy misy tambin-karama ho an'ny mpiasa.",
    category: "contrat",
    keywords: ["non-concurrence", "clause", "fepetra", "fifaninana", "restriction", "concurrence"]
  },
  {
    article: "Art. 22",
    title_fr: "Rupture du contrat pendant la période d'essai",
    title_mg: "Fanapahana fifanarahana mandritra ny fisedrana",
    description_fr: "Pendant la période d'essai, chacune des parties peut rompre le contrat sans préavis ni indemnité. La rupture abusive de la période d'essai peut donner lieu à des dommages-intérêts.",
    description_mg: "Mandritra ny fisedrana, ny andaniny tsirairay dia afaka manapaka ny fifanarahana tsy misy fampilazana mialoha na tambin-karama. Ny fanapahana tsy ara-dalàna dia mety hiteraka onitra.",
    category: "contrat",
    keywords: ["essai", "rupture", "fanapahana", "fisedrana", "sans préavis", "abusif"]
  },
  {
    article: "Art. 62",
    title_fr: "Durée légale du travail",
    title_mg: "Faharetan'ny asa ara-dalàna",
    description_fr: "La durée légale du travail est fixée à quarante heures par semaine. Les heures effectuées au-delà donnent lieu à une majoration de salaire.",
    description_mg: "Ny faharetan'ny asa ara-dalàna dia efapolo ora isan-kerinandro. Ny ora mihoatra dia miteraka fitomboana karama.",
    category: "salaire",
    keywords: ["durée", "40 heures", "semaine", "herinandro", "ora", "faharetana", "légale"],
    jurisprudence: [
      { reference: "Tribunal du Travail Antananarivo, Jugement n° 178/2022", date: "2022-05-10", summary_fr: "Un employeur imposant 60 heures hebdomadaires sans majoration est condamné à régulariser les arriérés d'heures supplémentaires sur 3 ans.", summary_mg: "Mpampiasa nanery 60 ora isan-kerinandro tsy nisy fitomboana dia voatery mandoa ny trosa ora fanampiny nandritra ny 3 taona." }
    ]
  },
  {
    article: "Art. 70",
    title_fr: "Travail de nuit",
    title_mg: "Asa alina",
    description_fr: "Le travail de nuit est celui effectué entre 22 heures et 5 heures du matin. Il donne lieu à une majoration de salaire. Le travail de nuit des femmes et des enfants est réglementé.",
    description_mg: "Ny asa alina dia izay atao eo anelanelan'ny 10 ora alina sy 5 ora maraina. Miteraka fitomboana karama izany. Ny asa alina ataon'ny vehivavy sy ankizy dia voafehin'ny lalàna.",
    category: "salaire",
    keywords: ["nuit", "alina", "22 heures", "majoration", "nocturne", "femme", "enfant"]
  },
  {
    article: "Art. 93",
    title_fr: "Repos hebdomadaire",
    title_mg: "Fialan-tsasatra isan-kerinandro",
    description_fr: "Tout travailleur a droit à un repos hebdomadaire d'au moins 24 heures consécutives, en principe le dimanche.",
    description_mg: "Ny mpiasa rehetra dia manana zo amin'ny fialan-tsasatra isan-kerinandro 24 ora misesy farafahakeliny, amin'ny alahady raha azo atao.",
    category: "conge",
    keywords: ["repos", "hebdomadaire", "dimanche", "alahady", "24 heures", "fialan-tsasatra"]
  },
  {
    article: "Art. 105",
    title_fr: "Harcèlement au travail",
    title_mg: "Fanenjehana eo am-piasana",
    description_fr: "Le harcèlement moral ou sexuel au travail est interdit. L'employeur est tenu de prendre toutes les mesures nécessaires pour prévenir et sanctionner les faits de harcèlement.",
    description_mg: "Ny fanenjehana ara-tsaina na ara-nofo eo am-piasana dia voarara. Ny mpampiasa dia tsy maintsy mandray fepetra rehetra ilaina mba hisorohana sy hanasaziana ny fanenjehana.",
    category: "securite",
    keywords: ["harcèlement", "moral", "sexuel", "fanenjehana", "interdit", "voarara", "prévenir"],
    jurisprudence: [
      { reference: "Cour d'Appel Antananarivo, Arrêt n° 234/2021", date: "2021-09-15", summary_fr: "Le harcèlement moral caractérisé par des humiliations répétées devant les collègues justifie la prise d'acte de la rupture par le salarié.", summary_mg: "Ny fanenjehana ara-tsaina amin'ny fanalam-baraka miverimberina eo anatrehan'ny mpiara-miasa dia manamarina ny fanapahan-kevitry ny mpiasa hiala." }
    ]
  },
  {
    article: "Art. 110",
    title_fr: "Travail des enfants",
    title_mg: "Asan'ny ankizy",
    description_fr: "L'emploi des enfants de moins de 15 ans est interdit. Les enfants de 15 à 18 ans ne peuvent être employés que dans des travaux légers non dangereux, avec l'autorisation de l'inspecteur du travail.",
    description_mg: "Ny fampiasana ankizy latsaky ny 15 taona dia voarara. Ny ankizy 15-18 taona dia tsy azo ampianarina afa-tsy amin'ny asa maivana tsy mampidi-doza, miaraka amin'ny fankatoavan'ny mpanara-maso ny asa.",
    category: "securite",
    keywords: ["enfant", "mineur", "ankizy", "15 ans", "18 ans", "interdit", "travail enfant", "voarara"]
  },
  // ══════════════════════════════════════
  // NOUVEAUX ARTICLES — ENRICHISSEMENT
  // ══════════════════════════════════════
  { article: "Art. 2", title_fr: "Champ d'application du Code du Travail", title_mg: "Sehatra fampiharana ny Fehezan-dalàna momba ny Asa", description_fr: "Le présent Code régit les relations de travail entre les travailleurs et les employeurs exerçant leur activité professionnelle à Madagascar, quels que soient la race, le sexe, la nationalité des parties.", description_mg: "Ity Fehezan-dalàna ity dia mifehy ny fifandraisana eo amin'ny mpiasa sy ny mpampiasa manao ny asany eto Madagasikara, na inona na inona ny firazanana, ny maha-lahy na maha-vavy, ny zom-pirenena.", category: "contrat", keywords: ["champ", "application", "sehatra", "travailleur", "employeur", "Madagascar"] },
  { article: "Art. 3", title_fr: "Interdiction du travail forcé", title_mg: "Fandrarana ny asa an-tery", description_fr: "Le travail forcé ou obligatoire est interdit de façon absolue. Toute personne qui l'exige sera punie conformément à la loi pénale.", description_mg: "Ny asa an-tery dia voarara tanteraka. Izay mitaky izany dia saziana araka ny lalàna famaizana.", category: "contrat", keywords: ["travail forcé", "interdit", "obligatoire", "asa an-tery", "voarara", "esclavage"], jurisprudence: [{ reference: "Tribunal du Travail Antananarivo, Jugement n° 89/2021", date: "2021-04-15", summary_fr: "L'emploi de domestiques sans rémunération sous prétexte de logement et nourriture constitue du travail forcé.", summary_mg: "Ny fampiasana mpanampy an-trano tsy misy karama amin'ny antony fonenana sy sakafo dia asa an-tery." }] },
  { article: "Art. 4", title_fr: "Interdiction de la discrimination", title_mg: "Fandrarana ny fanavakavahana", description_fr: "Toute discrimination en matière d'emploi et de profession fondée sur la race, la couleur, le sexe, la religion, l'opinion politique, l'ascendance nationale ou l'origine sociale est interdite.", description_mg: "Ny fanavakavahana rehetra amin'ny asa sy ny matihanina mifototra amin'ny firazanana, loko, maha-lahy na vavy, fivavahana, hevitra politika, fiaviana dia voarara.", category: "contrat", keywords: ["discrimination", "interdit", "fanavakavahana", "race", "sexe", "religion", "égalité"] },
  { article: "Art. 23", title_fr: "Modification du contrat de travail", title_mg: "Fanovana ny fifanarahana asa", description_fr: "Toute modification substantielle du contrat de travail nécessite l'accord du salarié. Le refus du salarié ne constitue pas un motif de licenciement.", description_mg: "Ny fanovana lehibe ny fifanarahana asa dia mila faneken'ny mpiasa. Ny fandavan'ny mpiasa dia tsy antony hanaovana fandroahana.", category: "contrat", keywords: ["modification", "contrat", "accord", "salarié", "fanovana", "fifanarahana", "refus"] },
  { article: "Art. 25", title_fr: "Clause de mobilité", title_mg: "Fepetra momba ny fifindra-toerana", description_fr: "La clause de mobilité doit être prévue dans le contrat. La mutation du salarié dans un lieu géographiquement éloigné doit être justifiée par l'intérêt de l'entreprise et ne doit pas porter atteinte à sa vie personnelle.", description_mg: "Ny fepetra momba ny fifindra-toerana dia tsy maintsy voalaza ao amin'ny fifanarahana. Ny famindrana ny mpiasa any amin'ny toerana lavitra dia tsy maintsy voamarina ary tsy tokony hanimba ny fiainany manokana.", category: "contrat", keywords: ["mobilité", "mutation", "transfert", "fifindra-toerana", "clause", "lieu"] },
  { article: "Art. 59", title_fr: "Gratification et prime", title_mg: "Tambin-karama sy vola fanampiny", description_fr: "Les gratifications, primes et indemnités qui sont versées régulièrement et de façon constante constituent un élément du salaire. L'employeur ne peut les supprimer unilatéralement.", description_mg: "Ny tambin-karama, vola fanampiny sy onitra aloa tsy tapaka dia anisan'ny karama. Ny mpampiasa dia tsy afaka manaisotra azy ireo irery.", category: "salaire", keywords: ["gratification", "prime", "bonus", "13ème mois", "tambin-karama", "indemnité", "vola fanampiny"], jurisprudence: [{ reference: "Cour d'Appel Antananarivo, Arrêt n° 156/2022", date: "2022-08-20", summary_fr: "Le 13ème mois versé pendant 3 années consécutives devient un droit acquis du salarié et ne peut être supprimé.", summary_mg: "Ny karama faha-13 aloa nandritra ny 3 taona misesy dia lasa zon'ny mpiasa ka tsy azo esorina." }] },
  { article: "Art. 64", title_fr: "Travail le dimanche", title_mg: "Asa amin'ny alahady", description_fr: "Le repos hebdomadaire est obligatoire le dimanche. Le travail le dimanche n'est autorisé que dans les cas prévus par décret. Il donne lieu à une majoration de 40% du salaire horaire.", description_mg: "Ny fialan-tsasatra isan-kerinandro dia tsy maintsy amin'ny alahady. Ny asa alahady dia azo atao amin'ny tranga voalazan'ny didim-pitondrana ihany. Miteraka fitomboana 40% ny karama isan'ora izany.", category: "salaire", keywords: ["dimanche", "alahady", "repos", "majoration", "40%", "travail dimanche", "hebdomadaire"] },
  { article: "Art. 67", title_fr: "Égalité de rémunération hommes-femmes", title_mg: "Fitovian'ny karaman'ny lehilahy sy vehivavy", description_fr: "À conditions égales de travail, de qualification professionnelle et de rendement, le salaire est égal pour tous les travailleurs, quels que soient leur origine, leur sexe et leur âge.", description_mg: "Raha mitovy ny fepetra fiasana, ny fahaiza-manao ary ny vokatra, ny karama dia mitovy ho an'ny mpiasa rehetra, na inona na inona ny fiaviana, ny maha-lahy na vavy ary ny taona.", category: "salaire", keywords: ["égalité", "rémunération", "homme", "femme", "fitoviana", "karama", "sexe", "discrimination"] },
  { article: "Art. 14", title_fr: "Durée du préavis", title_mg: "Faharetan'ny fampilazana mialoha", description_fr: "La durée du préavis est fixée comme suit : travailleurs payés à l'heure ou à la journée : 8 jours ; travailleurs payés à la quinzaine : 15 jours ; travailleurs payés au mois : 1 mois ; cadres et assimilés : 3 mois.", description_mg: "Ny faharetan'ny fampilazana mialoha dia toy izao : mpiasa isan'ora na isan'andro : 8 andro ; isan-tapabolana : 15 andro ; isam-bolana : 1 volana ; mpitantana : 3 volana.", category: "licenciement", keywords: ["préavis", "durée", "8 jours", "15 jours", "1 mois", "3 mois", "cadre", "fampilazana", "faharetana"] },
  { article: "Art. 21", title_fr: "Calcul de l'indemnité de licenciement", title_mg: "Fomba fikajiana ny tambin-karama fandroahana", description_fr: "L'indemnité de licenciement est calculée sur la base de 10 jours de salaire par année d'ancienneté pour les 3 premières années, puis 15 jours par année au-delà. Elle est plafonnée à 6 mois de salaire.", description_mg: "Ny tambin-karama fandroahana dia kajiana amin'ny fototra 10 andro karama isaky ny taona niasana ho an'ny 3 taona voalohany, avy eo 15 andro isaky ny taona. Ferana amin'ny karama 6 volana farafahabetsany.", category: "licenciement", keywords: ["indemnité", "calcul", "ancienneté", "10 jours", "15 jours", "6 mois", "tambin-karama", "fikajiana"], jurisprudence: [{ reference: "Cour Suprême, Arrêt n° 267/2020", date: "2020-11-10", summary_fr: "L'indemnité de licenciement se calcule sur le dernier salaire brut, incluant les primes régulières et les avantages en nature.", summary_mg: "Ny tambin-karama fandroahana dia kajiana amin'ny karama brut farany, ao anatin'izany ny vola fanampiny tsy tapaka sy ny tombontsoa ara-javatra." }] },
  { article: "Art. 16 bis", title_fr: "Licenciement pour faute lourde", title_mg: "Fandroahana noho ny fahadisoana lehibe", description_fr: "La faute lourde est celle qui rend immédiatement et définitivement impossible le maintien du lien contractuel. Elle prive le salarié de l'indemnité de licenciement et du préavis. Exemples : vol, violence, ivresse au travail, abandon de poste.", description_mg: "Ny fahadisoana lehibe dia izay mahatonga ny tsy azo itohizana ny fifandraisana avy hatrany. Tsy mahazo tambin-karama fandroahana na fampilazana mialoha ny mpiasa. Ohatra : halatra, herisetra, fahamamoana eo am-piasana, fandaozana toerana.", category: "licenciement", keywords: ["faute lourde", "grave", "vol", "violence", "ivresse", "abandon poste", "fahadisoana lehibe", "halatra", "herisetra"] },
  { article: "Art. 90", title_fr: "Congé pour événement familial", title_mg: "Fialan-tsasatra noho ny zava-nitranga ara-pianakaviana", description_fr: "Le travailleur bénéficie de congés payés pour événements familiaux : mariage du travailleur (3 jours), mariage d'un enfant (1 jour), décès du conjoint ou d'un enfant (3 jours), décès d'un parent (1 jour), naissance (3 jours).", description_mg: "Ny mpiasa dia mahazo fialan-tsasatra aloa amin'ny zava-nitranga ara-pianakaviana : fanambadian'ny mpiasa (3 andro), fanambadian'ny zanaka (1 andro), fahafatesan'ny vady na zanaka (3 andro), fahafatesan'ny ray aman-dreny (1 andro), fahaterahana (3 andro).", category: "conge", keywords: ["événement familial", "mariage", "décès", "naissance", "3 jours", "1 jour", "fialan-tsasatra", "fanambadiana", "fahafatesana"] },
  { article: "Art. 95", title_fr: "Congé sans solde", title_mg: "Fialan-tsasatra tsy aloa", description_fr: "Le travailleur peut demander un congé sans solde pour convenances personnelles. L'employeur peut l'accorder ou le refuser. La durée n'est pas imputée sur le congé annuel payé.", description_mg: "Ny mpiasa dia afaka mangataka fialan-tsasatra tsy aloa noho ny antony manokana. Ny mpampiasa dia afaka manaiky na mandà. Ny faharetany dia tsy isaina amin'ny fialan-tsasatra isan-taona.", category: "conge", keywords: ["sans solde", "convenances", "permission", "tsy aloa", "personnelles", "demande"] },
  { article: "Art. 120", title_fr: "Délégués du personnel", title_mg: "Solontenan'ny mpiasa", description_fr: "Dans tout établissement employant habituellement plus de 10 salariés, des délégués du personnel sont obligatoirement élus. Ils sont chargés de présenter les réclamations individuelles et collectives des travailleurs.", description_mg: "Ny orinasa mampiasa mpiasa mihoatra ny 10 dia tsy maintsy mifidy solontenan'ny mpiasa. Izy ireo dia miadidy ny fanolorana ny fitarainana manokana sy iombonan'ny mpiasa.", category: "syndicat", keywords: ["délégués", "personnel", "élection", "10 salariés", "solontena", "réclamation", "représentant"] },
  { article: "Art. 122", title_fr: "Protection des délégués du personnel", title_mg: "Fiarovana ny solontenan'ny mpiasa", description_fr: "Le licenciement d'un délégué du personnel ne peut intervenir qu'après autorisation de l'inspecteur du travail. Le licenciement sans cette autorisation est nul de plein droit.", description_mg: "Ny fandroahana solontenan'ny mpiasa dia tsy azo atao raha tsy nahazo alalana avy amin'ny mpanara-maso ny asa. Ny fandroahana tsy misy izany alalana izany dia foana.", category: "syndicat", keywords: ["protection", "délégué", "autorisation", "inspecteur", "fiarovana", "solontena", "nul"], jurisprudence: [{ reference: "Cour d'Appel Antananarivo, Arrêt n° 89/2023", date: "2023-05-20", summary_fr: "Le licenciement d'un délégué du personnel sans autorisation de l'inspection du travail est nul et ouvre droit à réintégration et indemnités.", summary_mg: "Ny fandroahana solontenan'ny mpiasa tsy nahazo alalana avy amin'ny Fisafoana dia foana ka manome zo amin'ny famerenana sy onitra." }] },
  { article: "Art. 129", title_fr: "Procédure de conciliation obligatoire", title_mg: "Paiky ny fampihavanana tsy maintsy atao", description_fr: "Tout différend individuel de travail doit, avant d'être porté devant le tribunal, faire l'objet d'une tentative de conciliation devant l'inspecteur du travail. Le procès-verbal de non-conciliation est nécessaire pour saisir le tribunal.", description_mg: "Ny fifanolanana manokana momba ny asa dia tsy maintsy mandalo fampihavanana eo anatrehan'ny mpanara-maso alohan'ny mankany amin'ny fitsarana. Ny procès-verbal tsy fahombiazana no ilaina mba hankany amin'ny fitsarana.", category: "litige", keywords: ["conciliation", "obligatoire", "inspecteur", "tribunal", "fampihavanana", "procès-verbal", "différend"] },
  { article: "Art. 134", title_fr: "Prescription des litiges du travail", title_mg: "Fe-potoana amin'ny fifanolanana momba ny asa", description_fr: "Les actions naissant du contrat de travail se prescrivent par 3 ans à compter de la date à laquelle le droit a été ouvert. Pour les salaires, la prescription court à compter de chaque échéance.", description_mg: "Ny fitoriana avy amin'ny fifanarahana asa dia foana rehefa afaka 3 taona manomboka amin'ny daty nivoahan'ny zo. Ho an'ny karama, ny fe-potoana dia manomboka amin'ny fotoana fandoavana tsirairay.", category: "litige", keywords: ["prescription", "3 ans", "litiges", "travail", "fe-potoana", "salaire", "action", "échéance"] },
  { article: "Art. 75", title_fr: "Obligation de sécurité de l'employeur", title_mg: "Adidy amin'ny fiarovana ataon'ny mpampiasa", description_fr: "L'employeur doit assurer la sécurité et protéger la santé physique et mentale des travailleurs. Il doit fournir les équipements de protection individuelle nécessaires et former les travailleurs aux risques liés à leur poste.", description_mg: "Ny mpampiasa dia tsy maintsy miantoka ny fiarovana sy miaro ny fahasalamana ara-batana sy ara-tsain'ny mpiasa. Tsy maintsy manome ny fitaovam-piarovana manokana ilaina izy ary manofana ny mpiasa momba ny loza.", category: "securite", keywords: ["sécurité", "santé", "protection", "équipement", "EPI", "formation", "fiarovana", "fahasalamana", "adidy"] },
  { article: "Art. 104", title_fr: "Indemnisation de l'accident du travail", title_mg: "Fanonerana ny loza eo am-piasana", description_fr: "En cas d'accident du travail, le travailleur a droit à la prise en charge des soins médicaux, au maintien du salaire pendant la période d'incapacité temporaire, et à une rente en cas d'incapacité permanente.", description_mg: "Raha misy loza eo am-piasana, ny mpiasa dia manana zo amin'ny fikarakarana ara-pitsaboana, ny fitohizan'ny karama mandritra ny tsy fahafahana miasa vonjimaika, ary vola raha tsy afaka miasa maharitra.", category: "securite", keywords: ["accident", "indemnisation", "soins", "rente", "incapacité", "fanonerana", "loza", "pitsaboana", "karama"] },
  { article: "Art. 80", title_fr: "Registre de l'employeur", title_mg: "Rejistran'ny mpampiasa", description_fr: "Tout employeur doit tenir un registre du personnel mentionnant l'identité, la date d'embauche, le poste, le salaire et la date de sortie de chaque travailleur. Ce registre doit être présenté à l'inspecteur du travail.", description_mg: "Ny mpampiasa rehetra dia tsy maintsy mitana rejisitry ny mpiasa mampiseho ny mombamomba, ny daty nidirana, ny toerana, ny karama ary ny daty nivoahana. Io rejisitra io dia tsy maintsy aseho amin'ny mpanara-maso ny asa.", category: "contrat", keywords: ["registre", "personnel", "employeur", "rejisitra", "mpampiasa", "inspecteur", "identité"] },
];

export const laborCategories: Record<LaborCategory, { fr: string; mg: string; icon: string }> = {
  contrat: { fr: "Contrat de travail", mg: "Fifanarahana asa", icon: "📝" },
  salaire: { fr: "Salaire & Rémunération", mg: "Karama", icon: "💰" },
  conge: { fr: "Congés", mg: "Fialana sasatra", icon: "🏖️" },
  licenciement: { fr: "Licenciement & Démission", mg: "Fandroahana", icon: "🚪" },
  syndicat: { fr: "Syndicat & Grève", mg: "Sendika", icon: "✊" },
  securite: { fr: "Sécurité au travail", mg: "Fiarovana", icon: "⛑️" },
  litige: { fr: "Litiges", mg: "Fifanolanana", icon: "⚖️" }
};

export function searchLaborArticles(query: string): LaborArticle[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (searchTerms.length === 0) return [];

  const scored = laborArticles.map(article => {
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
