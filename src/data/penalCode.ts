export type InfractionType = 'crime' | 'délit' | 'contravention';

export interface Jurisprudence {
  reference: string;
  date: string;
  summary_fr: string;
  summary_mg: string;
}

export interface PenalArticle {
  article: string;
  title_fr: string;
  title_mg: string;
  description_fr: string;
  description_mg: string;
  type: InfractionType;
  penalty_fr: string;
  penalty_mg: string;
  keywords: string[];
  jurisprudence?: Jurisprudence[];
}

export const penalArticles: PenalArticle[] = [
  // ============================================================
  // DISPOSITIONS PRÉLIMINAIRES (Art. 1-4)
  // ============================================================
  {
    article: "Art. 1",
    title_fr: "Classification des infractions",
    title_mg: "Sokajin'ny fandikan-dalàna",
    description_fr: "L'infraction que les lois punissent de peines de police est une contravention. L'infraction que les lois punissent de peines correctionnelles est un délit. L'infraction que les lois punissent d'une peine afflictive ou infamante est un crime.",
    description_mg: "Ny fandikan-dalàna sazian'ny lalàna amin'ny sazy pôlisy dia contravention. Ny saziana amin'ny sazy fanitsiana dia délit. Ny saziana amin'ny sazy mafy dia crime.",
    type: "délit",
    penalty_fr: "Disposition préliminaire — classification",
    penalty_mg: "Fepetra mialoha — sokajy",
    keywords: ["classification", "infraction", "crime", "délit", "contravention", "sokajy", "fandikan-dalàna"]
  },
  {
    article: "Art. 2",
    title_fr: "Tentative de crime",
    title_mg: "Fikasana hanao heloka bevava",
    description_fr: "Toute tentative de crime qui aura été manifestée par un commencement d'exécution, si elle n'a pas été suspendue ou si elle n'a manqué son effet que par des circonstances indépendantes de la volonté de son auteur, est considérée comme le crime même.",
    description_mg: "Ny fikasana hanao heloka bevava izay niseho tamin'ny fanombohana fanatanterahana, raha tsy nampitsaharina na tsy tontosa noho ny toe-javatra tsy miankina amin'ny sitrapon'ny mpanao, dia heverina ho heloka bevava ihany.",
    type: "crime",
    penalty_fr: "Même peine que le crime tenté",
    penalty_mg: "Sazy mitovy amin'ny heloka nokasaina",
    keywords: ["tentative", "fikasana", "commencement", "exécution", "fanombohana", "essai"]
  },
  {
    article: "Art. 4",
    title_fr: "Principe de légalité des peines",
    title_mg: "Fitsipika momba ny ara-dalànan'ny sazy",
    description_fr: "Nulle contravention, nul délit, nul crime, ne peuvent être punis de peines qui n'étaient pas prononcées par la loi avant qu'ils fussent commis. Nul ne peut être puni qu'en vertu d'une loi promulguée et publiée antérieurement. Nul ne peut être puni deux fois pour le même fait.",
    description_mg: "Tsy misy fandikan-dalàna azo saziana amin'ny sazy tsy voalaza tao amin'ny lalàna talohan'ny nanaovana azy. Tsy misy olona saziana indroa noho ny asa iray ihany.",
    type: "délit",
    penalty_fr: "Principe fondamental",
    penalty_mg: "Fitsipika fototra",
    keywords: ["légalité", "non rétroactivité", "principe", "fitsipika", "constitution", "droits"]
  },

  // ============================================================
  // LIVRE I — PEINES (Art. 6-53)
  // ============================================================
  {
    article: "Art. 7",
    title_fr: "Peines afflictives et infamantes",
    title_mg: "Sazy mafy sy mahamenatra",
    description_fr: "Les peines afflictives et infamantes sont : 1° La mort ; 2° Les travaux forcés à perpétuité ; 3° La déportation ; 4° Les travaux forcés à temps ; 5° La détention ; 6° La réclusion.",
    description_mg: "Ny sazy mafy sy mahamenatra dia : 1° Fahafatesana ; 2° Asa an-terivozona mandrakizay ; 3° Sesitany ; 4° Asa an-terivozona voafetra ; 5° Fihazonana ; 6° Figadrana.",
    type: "crime",
    penalty_fr: "Échelle des peines criminelles",
    penalty_mg: "Laharan'ny sazy heloka bevava",
    keywords: ["peine", "mort", "travaux forcés", "réclusion", "détention", "sazy", "fahafatesana"]
  },
  {
    article: "Art. 12",
    title_fr: "Exécution de la peine de mort",
    title_mg: "Fanatanterahana ny sazy mahafaty",
    description_fr: "Tout condamné à mort sera fusillé. (Note : un moratoire de fait est en vigueur à Madagascar depuis 1958.)",
    description_mg: "Ny voaheloka ho faty dia tifirina. (Fanamarihana : misy fampiatoana hatramin'ny 1958 eto Madagasikara.)",
    type: "crime",
    penalty_fr: "Peine de mort (moratoire en vigueur)",
    penalty_mg: "Sazy mahafaty (misy fampiatoana)",
    keywords: ["peine de mort", "exécution", "fusillé", "moratoire", "sazy mahafaty"]
  },
  {
    article: "Art. 19",
    title_fr: "Travaux forcés à temps",
    title_mg: "Asa an-terivozona voafetra",
    description_fr: "La condamnation à la peine des travaux forcés à temps sera prononcée pour cinq ans au moins, et vingt ans au plus.",
    description_mg: "Ny sazy asa an-terivozona voafetra dia dimy taona farafahakeliny ka roapolo taona farafahabetsany.",
    type: "crime",
    penalty_fr: "5 à 20 ans de travaux forcés",
    penalty_mg: "5 ka hatramin'ny 20 taona asa an-terivozona",
    keywords: ["travaux forcés", "5 ans", "20 ans", "asa an-terivozona", "temps"]
  },
  {
    article: "Art. 40",
    title_fr: "Emprisonnement correctionnel",
    title_mg: "Figadrana fanitsiana",
    description_fr: "La durée de la peine d'emprisonnement sera de un mois à dix ans, sauf les cas de récidive ou autres où la loi aura déterminé d'autres limites. La peine de un jour est de 24 heures. Celle de un mois est de 30 jours.",
    description_mg: "Ny faharetan'ny figadrana dia iray volana ka hatramin'ny folo taona, raha tsy hoe miverina manao heloka na toe-javatra hafa voalazan'ny lalàna.",
    type: "délit",
    penalty_fr: "1 mois à 10 ans d'emprisonnement",
    penalty_mg: "1 volana ka hatramin'ny 10 taona figadrana",
    keywords: ["emprisonnement", "correctionnel", "figadrana", "mois", "ans", "durée"]
  },
  {
    article: "Art. 462-463",
    title_fr: "Circonstances atténuantes",
    title_mg: "Toe-javatra mampihamaivana",
    description_fr: "Les cours et tribunaux pourront déclarer des circonstances atténuantes. Si le crime est passible de mort, la cour appliquera les travaux forcés. En matière correctionnelle, la peine pourra être abaissée jusqu'à la moitié du minimum légal.",
    description_mg: "Ny fitsarana dia afaka milaza fa misy toe-javatra mampihamaivana. Raha heloka bevava saziana ho faty, dia ho asa an-terivozona. Amin'ny heloka, ny sazy dia azo ahena hatramin'ny antsasaky ny farany ambany.",
    type: "crime",
    penalty_fr: "Réduction possible des peines",
    penalty_mg: "Azo ahena ny sazy",
    keywords: ["circonstances atténuantes", "réduction", "mampihamaivana", "peine réduite"]
  },

  // ============================================================
  // LIVRE II — CRIMES ET DÉLITS CONTRE LA CHOSE PUBLIQUE
  // ============================================================
  // Sûreté de l'État
  {
    article: "Art. 78-83",
    title_fr: "Atteinte à la sûreté extérieure de l'État",
    title_mg: "Fanimban'ny filaminana ivelany",
    description_fr: "Sera coupable d'atteinte à la sûreté extérieure de l'État tout Malgache ou étranger qui aura, par des actes hostiles non approuvés par le Gouvernement, exposé Madagascar à une déclaration de guerre, ou qui aura livré des secrets de la défense nationale.",
    description_mg: "Meloka amin'ny fanimban'ny filaminana ivelany izay rehetra nanao asa fahavalo tsy nankatoavin'ny Governemanta, na namoaka tsiambaratelon'ny fiarovam-pirenena.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité ou peine de mort",
    penalty_mg: "Asa an-terivozona mandrakizay na sazy mahafaty",
    keywords: ["sûreté", "état", "trahison", "espionnage", "secret", "défense", "fanjakana", "tsiambaratelo"]
  },
  {
    article: "Art. 91",
    title_fr: "Atteinte à la sûreté intérieure de l'État",
    title_mg: "Fanimban'ny filaminana anatiny",
    description_fr: "Les crimes tendant à troubler l'État par la guerre civile, en armant les citoyens les uns contre les autres, ou contre l'autorité légitime.",
    description_mg: "Ny heloka bevava mikasa hanakorontana ny fanjakana amin'ny ady an-trano, amin'ny fampiasana fiadiana eo amin'ny vahoaka.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité ou peine de mort",
    penalty_mg: "Asa an-terivozona mandrakizay na sazy mahafaty",
    keywords: ["sûreté intérieure", "guerre civile", "rébellion", "complot", "coup d'état", "fikomiana", "terrorisme"]
  },
  {
    article: "Art. 92",
    title_fr: "Levée de troupes armées",
    title_mg: "Fanangonana miaramila",
    description_fr: "Seront punis de mort, ceux qui auront levé ou fait lever des troupes armées, engagé ou enrôlé des soldats, ou leur auront fourni des armes ou munitions, sans ordre ni autorisation du pouvoir légitime.",
    description_mg: "Saziana ho faty izay nanangona na nampiasa miaramila, na nanome fiadiana na bala, tsy nahazo alalana.",
    type: "crime",
    penalty_fr: "Peine de mort (moratoire)",
    penalty_mg: "Sazy mahafaty (misy fampiatoana)",
    keywords: ["troupes", "armées", "miaramila", "armes", "munitions", "insurrection"]
  },

  // Fonctionnaires publics
  {
    article: "Art. 114",
    title_fr: "Abus d'autorité par un fonctionnaire",
    title_mg: "Fanararaotam-pahefana ataon'ny mpiasam-panjakana",
    description_fr: "Lorsqu'un fonctionnaire public aura ordonné ou commis quelque acte arbitraire, attentatoire soit à la liberté individuelle, soit aux droits civiques d'un ou plusieurs citoyens.",
    description_mg: "Rehefa misy mpiasam-panjakana nandidy na nanao asa tsy refesi-mandidy manimba ny fahalalahana na ny zon'ny olom-pirenena.",
    type: "délit",
    penalty_fr: "Dégradation civique et emprisonnement",
    penalty_mg: "Fanesorana eo amin'ny zo sy figadrana",
    keywords: ["abus", "autorité", "fonctionnaire", "arbitraire", "mpiasam-panjakana", "fanararaotana"]
  },
  {
    article: "Art. 119",
    title_fr: "Détention arbitraire",
    title_mg: "Fitanana tsy ara-dalàna",
    description_fr: "Les fonctionnaires qui auront retenu ou fait retenir une personne dans un lieu de détention non déterminé par la loi, seront punis de la dégradation civique.",
    description_mg: "Ny mpiasam-panjakana nitana olona tamin'ny toerana tsy voalazan'ny lalàna dia saziana amin'ny fanesorana zo sivily.",
    type: "délit",
    penalty_fr: "Dégradation civique",
    penalty_mg: "Fanesorana zo sivily",
    keywords: ["détention", "arbitraire", "fonctionnaire", "fitanana", "tsy ara-dalàna"]
  },

  // Corruption
  {
    article: "Art. 174",
    title_fr: "Corruption passive de fonctionnaire",
    title_mg: "Kolikoly noraisin'ny mpiasam-panjakana",
    description_fr: "Tout fonctionnaire public qui aura agréé ou sollicité des offres ou promesses, ou reçu des dons ou présents, pour faire un acte de sa fonction, même juste, sera puni d'un emprisonnement de 2 à 10 ans et d'une amende double de la valeur reçue.",
    description_mg: "Ny mpiasam-panjakana nanaiky na nangataka vola na fanomezana mba hanaovana ny asany, dia saziana figadrana 2 ka hatramin'ny 10 taona sy lamandy avo roa heny.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 10 ans et amende",
    penalty_mg: "Figadrana 2 ka hatramin'ny 10 taona sy lamandy",
    keywords: ["corruption", "pot-de-vin", "kolikoly", "fonctionnaire", "mpiasam-panjakana", "soudoyer", "bakchich"],
    jurisprudence: [
      { reference: "Pôle Anti-Corruption, Jugement n° 78/2022", date: "2022-02-15", summary_fr: "La corruption passive d'un fonctionnaire de police ayant accepté de l'argent pour libérer un détenu est punie de 5 ans d'emprisonnement.", summary_mg: "Ny kolikoly nataon'ny polisy nandray vola mba hanafahana voafonja dia saziana 5 taona figadrana." }
    ]
  },
  {
    article: "Art. 175",
    title_fr: "Corruption active",
    title_mg: "Kolikoly nataon'ny olona",
    description_fr: "Quiconque aura contraint ou tenté de contraindre par voie de fait ou menaces, ou corrompu ou tenté de corrompre par promesses, offres, dons ou présents, un fonctionnaire public, sera puni des mêmes peines.",
    description_mg: "Izay rehetra nanery na nandrahona, na nanome kolikoly amin'ny fampanantenana, fanomezana na vola, mpiasam-panjakana, dia saziana mitovy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 10 ans et amende",
    penalty_mg: "Figadrana 2 ka hatramin'ny 10 taona sy lamandy",
    keywords: ["corruption active", "corrupteur", "kolikoly", "contraindre", "menacer"]
  },
  {
    article: "Art. 169-170",
    title_fr: "Détournement de fonds publics",
    title_mg: "Fanangonana vola fanjakana",
    description_fr: "Tout fonctionnaire ou comptable public qui aura détourné ou soustrait des deniers publics ou privés, des effets en tenant lieu, des pièces, titres, actes ou effets mobiliers qui étaient entre ses mains en vertu de ses fonctions.",
    description_mg: "Ny mpiasam-panjakana na mpitantam-bola naka na nampiasa vilana ny vola na fananana miankina amin'ny fanjakana izay notanany noho ny asany.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 20 ans)",
    penalty_mg: "Asa an-terivozona 5 ka hatramin'ny 20 taona",
    keywords: ["détournement", "fonds publics", "argent public", "vola fanjakana", "fanangonana", "caisse"]
  },

  // Résistance et outrages
  {
    article: "Art. 209-210",
    title_fr: "Rébellion",
    title_mg: "Fanoherana an-keriny",
    description_fr: "Toute attaque, toute résistance avec violence et voies de fait envers les officiers ministériels, les gardes champêtres ou la force publique, agissant pour l'exécution des lois, des ordres ou ordonnances de l'autorité publique.",
    description_mg: "Ny fanafihana na fanoherana an-keriny atao amin'ny mpiasam-panjakana na mpitandro filaminana manao ny asany.",
    type: "délit",
    penalty_fr: "Emprisonnement de 6 mois à 2 ans",
    penalty_mg: "Figadrana 6 volana ka hatramin'ny 2 taona",
    keywords: ["rébellion", "résistance", "fanoherana", "violence", "autorité", "force publique"]
  },
  {
    article: "Art. 222-224",
    title_fr: "Outrages envers les fonctionnaires",
    title_mg: "Fanevatevana mpiasam-panjakana",
    description_fr: "Tout outrage fait par paroles, gestes, menaces, écrits ou dessins non rendus publics, à un magistrat, un officier ministériel ou un agent de la force publique dans l'exercice de ses fonctions.",
    description_mg: "Ny fanevatevana amin'ny teny, fihetsika, fandrahonana, soratra atao amin'ny mpitsara, mpiasam-panjakana na mpitandro filaminana eo am-panatanterahana ny asany.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 mois à 1 an et amende",
    penalty_mg: "Figadrana 1 volana ka hatramin'ny 1 taona sy lamandy",
    keywords: ["outrage", "fonctionnaire", "police", "gendarme", "magistrat", "fanevatevana", "mpiasam-panjakana", "insulte"]
  },
  {
    article: "Art. 228",
    title_fr: "Évasion de détenu",
    title_mg: "Fandosiran'ny voafonja",
    description_fr: "Toute personne qui, étant légalement détenue, se sera évadée ou aura tenté de s'évader, sera punie d'un emprisonnement de trois mois à trois ans.",
    description_mg: "Izay voafonja ara-dalàna nandositra na nikasa handositra dia saziana figadrana telo volana ka hatramin'ny telo taona.",
    type: "délit",
    penalty_fr: "Emprisonnement de 3 mois à 3 ans",
    penalty_mg: "Figadrana 3 volana ka hatramin'ny 3 taona",
    keywords: ["évasion", "détenu", "prison", "fandosirana", "voafonja", "fonja", "fuir"]
  },

  // Faux
  {
    article: "Art. 139-142",
    title_fr: "Faux en écriture publique",
    title_mg: "Hosoka amin'ny taratasy ofisialy",
    description_fr: "Tout fonctionnaire ou officier public qui, dans l'exercice de ses fonctions, aura commis un faux par altération d'actes, d'écritures ou de signatures, ou par supposition de personnes, sera puni des travaux forcés à perpétuité.",
    description_mg: "Ny mpiasam-panjakana nanao hosoka tamin'ny fanovana taratasy ofisialy, sonia, na anarana sandoka, dia saziana asa an-terivozona mandrakizay.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité",
    penalty_mg: "Asa an-terivozona mandrakizay",
    keywords: ["faux", "écriture publique", "falsification", "hosoka", "taratasy", "contrefaçon", "faux document"]
  },
  {
    article: "Art. 147-150",
    title_fr: "Faux en écriture privée",
    title_mg: "Hosoka amin'ny taratasy tsy miankina",
    description_fr: "Toute personne qui aura commis un faux en écriture privée de commerce ou de banque sera punie de la réclusion de 5 à 10 ans.",
    description_mg: "Izay rehetra nanao hosoka amin'ny taratasy tsy miankina dia saziana figadrana 5 ka hatramin'ny 10 taona.",
    type: "crime",
    penalty_fr: "Réclusion de 5 à 10 ans",
    penalty_mg: "Figadrana 5 ka hatramin'ny 10 taona",
    keywords: ["faux", "écriture privée", "hosoka", "banque", "commerce", "fausse signature"]
  },
  {
    article: "Art. 151",
    title_fr: "Usage de faux",
    title_mg: "Fampiasana hosoka",
    description_fr: "Quiconque aura fait usage d'un acte faux sera puni comme s'il était l'auteur du faux.",
    description_mg: "Izay nampiasa taratasy hosoka dia saziana toy ny namorona ny hosoka.",
    type: "délit",
    penalty_fr: "Mêmes peines que le faux lui-même",
    penalty_mg: "Sazy mitovy amin'ny hosoka",
    keywords: ["usage", "faux", "document", "hosoka", "fampiasana", "fausse pièce", "faux diplôme"]
  },

  // Faux témoignage
  {
    article: "Art. 361-363",
    title_fr: "Faux témoignage",
    title_mg: "Fijoroana vavolombelona tsy marina",
    description_fr: "Le faux témoignage en matière criminelle sera puni de la réclusion. En matière correctionnelle, de 2 à 5 ans d'emprisonnement. En matière de police, de 1 à 3 ans.",
    description_mg: "Ny fijoroana tsy marina amin'ny heloka bevava dia saziana figadrana. Amin'ny heloka, 2 ka hatramin'ny 5 taona. Amin'ny pôlisy, 1 ka hatramin'ny 3 taona.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 5 ans (délit) / réclusion (crime)",
    penalty_mg: "Figadrana 2-5 taona (heloka) / figadrana (heloka bevava)",
    keywords: ["faux témoignage", "parjure", "mentir", "tribunal", "vavolombelona", "tsy marina"]
  },

  // ============================================================
  // LIVRE III — CRIMES ET DÉLITS CONTRE LES PERSONNES
  // ============================================================
  // Meurtre et assassinat
  {
    article: "Art. 295",
    title_fr: "Meurtre",
    title_mg: "Vonoan'olona",
    description_fr: "L'homicide commis volontairement est qualifié meurtre.",
    description_mg: "Ny famonoana olona an-tsitrapo dia atao hoe meurtre.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité",
    penalty_mg: "Asa an-terivozona mandrakizay",
    keywords: ["meurtre", "tuer", "mort", "assassinat", "homicide", "mamono", "vonoan'olona", "fahafatesana", "tué", "poignarder", "arme", "couteau"],
    jurisprudence: [
      { reference: "Cour Criminelle Antananarivo, Arrêt n° 87/2019", date: "2019-05-14", summary_fr: "La simple intention de donner la mort, même sans préméditation, suffit à qualifier l'acte de meurtre au sens de l'article 295.", summary_mg: "Ny fikasana hamono fotsiny, na tsy voaomana mialoha aza, dia ampy hamaritana ny asa ho vonoan'olona araka ny andininy 295." },
      { reference: "Cour Suprême, Arrêt n° 214/2017", date: "2017-11-22", summary_fr: "L'usage d'une arme blanche lors d'une altercation ayant entraîné la mort constitue un meurtre et non un homicide involontaire.", summary_mg: "Ny fampiasana fiadiana tamin'ny ady nahatonga fahafatesana dia vonoan'olona fa tsy homicide involontaire." }
    ]
  },
  {
    article: "Art. 296",
    title_fr: "Assassinat (meurtre avec préméditation)",
    title_mg: "Famonoana olona an-tsokosoko",
    description_fr: "Le meurtre commis avec préméditation ou guet-apens constitue l'assassinat.",
    description_mg: "Ny vonoan'olona natao tamin'ny fikasana mialoha na otrika dia assassinat.",
    type: "crime",
    penalty_fr: "Peine de mort (moratoire)",
    penalty_mg: "Sazy mahafaty (misy fampiatoana)",
    keywords: ["assassinat", "préméditation", "guet-apens", "meurtre prémédité", "planifié", "otrika", "nikasa"]
  },
  {
    article: "Art. 297",
    title_fr: "Préméditation et guet-apens — définition",
    title_mg: "Famaritana ny fikasana mialoha sy otrika",
    description_fr: "La préméditation consiste dans le dessein formé, avant l'action, de commettre un crime. Le guet-apens consiste à attendre un individu dans un ou divers lieux pour lui donner la mort ou exercer sur lui des actes de violence.",
    description_mg: "Ny préméditation dia fikasana voaomana mialoha ny fanaovana heloka. Ny otrika dia fiandrasana olona amin'ny toerana iray na maro mba hamonoana azy na hanatanterahana herisetra aminy.",
    type: "délit",
    penalty_fr: "Circonstance aggravante (définition)",
    penalty_mg: "Toe-javatra manamafy sazy",
    keywords: ["préméditation", "guet-apens", "otrika", "fikasana", "dessein", "piège"]
  },
  {
    article: "Art. 299",
    title_fr: "Parricide",
    title_mg: "Famonoana ray aman-dreny",
    description_fr: "Est qualifié parricide le meurtre des père, mère ou autres ascendants légitimes.",
    description_mg: "Ny parricide dia famonoana ny ray, ny reny na ny razana ara-dalàna.",
    type: "crime",
    penalty_fr: "Peine de mort (moratoire)",
    penalty_mg: "Sazy mahafaty (misy fampiatoana)",
    keywords: ["parricide", "père", "mère", "parent", "ascendant", "ray", "reny", "ray aman-dreny"],
    jurisprudence: [{ reference: "Cour Criminelle Fianarantsoa, Arrêt n° 34/2016", date: "2016-09-18", summary_fr: "Un fils ayant tué sa mère lors d'une dispute familiale est reconnu coupable de parricide malgré l'absence de préméditation.", summary_mg: "Zanaka lahy namono ny reniny nandritra ny ady tao an-tokantrano dia hita meloka amin'ny parricide na tsy nisy fikasana mialoha aza." }]
  },
  {
    article: "Art. 300",
    title_fr: "Infanticide",
    title_mg: "Famonoana zaza vao teraka",
    description_fr: "Le meurtre d'un enfant nouveau-né est qualifié infanticide.",
    description_mg: "Ny famonoana zaza vao teraka dia atao hoe infanticide.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité",
    penalty_mg: "Asa an-terivozona mandrakizay",
    keywords: ["infanticide", "nouveau-né", "bébé", "enfant", "zaza", "teraka"]
  },
  {
    article: "Art. 301",
    title_fr: "Empoisonnement",
    title_mg: "Fanondroana poizina",
    description_fr: "L'empoisonnement est l'attentat à la vie d'une personne, par l'effet de substances qui peuvent donner la mort plus ou moins promptement, de quelque manière que ces substances aient été employées ou administrées.",
    description_mg: "Ny empoisonnement dia fikasana hamono olona amin'ny alalan'ny zava-mahafaty, na inona na inona fomba nampiasana na nanomezana izany.",
    type: "crime",
    penalty_fr: "Peine de mort (moratoire)",
    penalty_mg: "Sazy mahafaty (misy fampiatoana)",
    keywords: ["empoisonnement", "poison", "substance", "toxique", "poizina", "zava-mahafaty"],
    jurisprudence: [{ reference: "Cour Criminelle Toamasina, Arrêt n° 67/2015", date: "2015-03-25", summary_fr: "L'empoisonnement par arsenic dans la nourriture du conjoint constitue un assassinat puni de la peine de mort (commuée en travaux forcés à perpétuité).", summary_mg: "Ny fanondroana poizina arsenic tao amin'ny sakafon'ny vady dia assassinat saziana ho faty (novàna ho asa an-terivozona mandrakizay)." }]
  },

  // Coups et blessures
  {
    article: "Art. 309",
    title_fr: "Coups et blessures volontaires (ITT > 20 jours)",
    title_mg: "Kapoka sy ratra an-tsitrapo (tsy afaka miasa > 20 andro)",
    description_fr: "Tout individu qui, volontairement, aura fait des blessures ou porté des coups, ou commis toute autre violence ou voie de fait, s'il est résulté de ces sortes de violences une maladie ou incapacité de travail personnel pendant plus de vingt jours.",
    description_mg: "Izay rehetra nandratra na nikapoka an-tsitrapo, ka nahatonga aretina na tsy fahafahana miasa mihoatra ny 20 andro.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 5 ans et amende de 360 000 à 5 400 000 Ar",
    penalty_mg: "Figadrana 2-5 taona sy lamandy 360 000 ka hatramin'ny 5 400 000 Ar",
    keywords: ["coups", "blessures", "frapper", "violence", "bagarre", "battre", "kapoka", "ratra", "nikapoka"]
  },
  {
    article: "Art. 311",
    title_fr: "Coups et blessures volontaires (ITT ≤ 20 jours)",
    title_mg: "Kapoka sy ratra an-tsitrapo (tsy afaka miasa ≤ 20 andro)",
    description_fr: "Si les violences n'ont occasionné aucune maladie ou incapacité de travail de l'espèce mentionnée à l'article 309, le coupable sera puni de 1 à 3 ans d'emprisonnement et d'une amende.",
    description_mg: "Raha tsy nahatonga aretina na tsy fahafahana miasa mihoatra ny 20 andro ny herisetra, dia saziana figadrana 1-3 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 3 ans et amende",
    penalty_mg: "Figadrana 1-3 taona sy lamandy",
    keywords: ["coups légers", "blessure légère", "gifle", "altercation", "kapoka maivana"]
  },
  {
    article: "Art. 309 al. 2",
    title_fr: "Coups mortels (sans intention de tuer)",
    title_mg: "Kapoka nahatonga fahafatesana (tsy nikasa hamono)",
    description_fr: "Si les coups portés ou les blessures faites volontairement, mais sans intention de donner la mort, l'ont pourtant occasionnée, le coupable sera puni des travaux forcés à temps.",
    description_mg: "Raha ny kapoka na ratra an-tsitrapo, nefa tsy nikasa hamono, no nahatonga fahafatesana, dia saziana asa an-terivozona.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 20 ans)",
    penalty_mg: "Asa an-terivozona 5-20 taona",
    keywords: ["coups mortels", "mort accidentelle", "kapoka", "fahafatesana", "bagarre mortelle"]
  },

  // Homicide involontaire
  {
    article: "Art. 319",
    title_fr: "Homicide involontaire",
    title_mg: "Vonoan'olona tsy nahy",
    description_fr: "Quiconque, par maladresse, imprudence, inattention, négligence ou inobservation des règlements, aura commis involontairement un homicide, sera puni d'un emprisonnement de trois mois à deux ans et d'une amende.",
    description_mg: "Izay namono olona tsy nahy noho ny tsy fitandremana, tsy fahamalinana na tsy fanajana ny fitsipika dia saziana figadrana 3 volana ka hatramin'ny 2 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 3 mois à 2 ans et amende",
    penalty_mg: "Figadrana 3 volana ka hatramin'ny 2 taona sy lamandy",
    keywords: ["homicide involontaire", "accident mortel", "négligence", "imprudence", "tsy nahy", "tsy fitandremana", "loza"]
  },
  {
    article: "Art. 320",
    title_fr: "Blessures involontaires",
    title_mg: "Ratra tsy nahy",
    description_fr: "S'il n'est résulté du défaut d'adresse ou de précaution que des blessures ou coups, le coupable sera puni d'un emprisonnement de un mois à un an et d'une amende, ou de l'une de ces deux peines seulement.",
    description_mg: "Raha ratra na kapoka fotsiny no vokatry ny tsy fitandremana, dia saziana figadrana 1 volana ka hatramin'ny 1 taona sy lamandy, na ny iray amin'ireo sazy ireo ihany.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 mois à 1 an et amende",
    penalty_mg: "Figadrana 1 volana - 1 taona sy lamandy",
    keywords: ["blessure involontaire", "accident", "négligence", "ratra tsy nahy", "tsy fitandremana"]
  },

  // Crimes sexuels
  {
    article: "Art. 331-332",
    title_fr: "Viol",
    title_mg: "Fanaolana",
    description_fr: "Quiconque aura commis le crime de viol sera puni des travaux forcés à temps. Si le crime a été commis sur la personne d'un enfant au-dessous de l'âge de quinze ans accomplis, le coupable subira le maximum de la peine des travaux forcés à temps.",
    description_mg: "Izay nanao fanaolana dia saziana asa an-terivozona. Raha zaza latsaky ny 15 taona no niharan'izany, dia ny sazy faratampony no ampiharina.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5-20 ans), maximum si victime < 15 ans",
    penalty_mg: "Asa an-terivozona 5-20 taona, faratampony raha zaza < 15 taona",
    keywords: ["viol", "violer", "agression sexuelle", "abus sexuel", "fanaolana", "forcer", "contrainte sexuelle", "mineur"],
    jurisprudence: [
      { reference: "Cour Criminelle Toamasina, Arrêt n° 45/2020", date: "2020-03-18", summary_fr: "L'absence de consentement est l'élément constitutif essentiel du viol, indépendamment de la relation entre auteur et victime.", summary_mg: "Ny tsy faneken'ny niharan-doza no singa lehibe amin'ny fanaolana, na inona na inona ny fifandraisan'ny mpanao sy ny niharan-doza." }
    ]
  },
  {
    article: "Art. 331 (attentat à la pudeur)",
    title_fr: "Attentat à la pudeur avec violence",
    title_mg: "Fanafihana mahamenatra an-keriny",
    description_fr: "Tout attentat à la pudeur, consommé ou tenté avec violence contre des individus de l'un ou de l'autre sexe, sera puni de la réclusion.",
    description_mg: "Ny fanafihana mahamenatra an-keriny na ny fikasana hanao izany dia saziana figadrana.",
    type: "crime",
    penalty_fr: "Réclusion (5 à 10 ans)",
    penalty_mg: "Figadrana 5-10 taona",
    keywords: ["attentat pudeur", "attouchement", "obscénité", "mahamenatra", "harcèlement"]
  },

  // Enlèvement et séquestration
  {
    article: "Art. 341-344",
    title_fr: "Enlèvement et séquestration",
    title_mg: "Fanagiazana sy fitanana olona an-keriny",
    description_fr: "Ceux qui, sans ordre des autorités constituées, et hors les cas où la loi ordonne de saisir des prévenus, auront arrêté, détenu ou séquestré des personnes quelconques, seront punis des travaux forcés à temps.",
    description_mg: "Izay nisambotra, nitana na nanagiana olona tsy nahazo baiko avy amin'ny manam-pahefana dia saziana asa an-terivozona.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 20 ans)",
    penalty_mg: "Asa an-terivozona 5-20 taona",
    keywords: ["enlèvement", "séquestration", "kidnapping", "otage", "fanagiazana", "fitanana"]
  },

  // Menaces
  {
    article: "Art. 305-308",
    title_fr: "Menaces",
    title_mg: "Fandrahonana",
    description_fr: "Toute menace d'attentat contre les personnes ou les propriétés, faite par écrit ou par un ordre de la parole, sera punie. La menace de mort sera punie de 1 à 3 ans d'emprisonnement et d'une amende.",
    description_mg: "Ny fandrahonana famonoana na herisetra atao an-tsoratra na am-bava dia saziana figadrana 1-3 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 3 ans et amende",
    penalty_mg: "Figadrana 1-3 taona sy lamandy",
    keywords: ["menace", "menacer", "intimidation", "fandrahonana", "menace de mort"]
  },

  // Diffamation et injure
  {
    article: "Art. 368-370",
    title_fr: "Diffamation",
    title_mg: "Fanendrikendrehana",
    description_fr: "Toute allégation ou imputation d'un fait qui porte atteinte à l'honneur ou à la considération de la personne ou du corps auquel le fait est imputé est une diffamation.",
    description_mg: "Ny filazana na fiampangana manimba ny voninahitry ny olona na ny fikambanana dia fanendrikendrehana.",
    type: "délit",
    penalty_fr: "Emprisonnement de 6 mois à 2 ans et amende",
    penalty_mg: "Figadrana 6 volana - 2 taona sy lamandy",
    keywords: ["diffamation", "calomnie", "honneur", "réputation", "fanendrikendrehana", "manimba voninahitra"],
    jurisprudence: [{ reference: "Tribunal Correctionnel Antananarivo, Jugement n° 156/2019", date: "2019-08-12", summary_fr: "La publication d'accusations fausses sur Facebook contre un commerçant constitue une diffamation publique punie de 6 mois d'emprisonnement.", summary_mg: "Ny famoahana fiampangana sandoka tao amin'ny Facebook momba ny mpivarotra dia fanendrikendrehana imasom-bahoaka saziana 6 volana figadrana." }]
  },
  {
    article: "Art. 371",
    title_fr: "Injure",
    title_mg: "Fanevatevana",
    description_fr: "Toute expression outrageante, termes de mépris ou invective qui ne renferme l'imputation d'aucun fait est une injure.",
    description_mg: "Ny teny manala baraka, fanazimbana na fanevatevana tsy misy fiampangana dia injure.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 6 mois et amende",
    penalty_mg: "Figadrana 1-6 volana sy lamandy",
    keywords: ["injure", "insulte", "outrage", "mépris", "fanevatevana", "fanazimbana"]
  },

  // ============================================================
  // LIVRE III — CRIMES ET DÉLITS CONTRE LES PROPRIÉTÉS
  // ============================================================
  // Vol
  {
    article: "Art. 379",
    title_fr: "Vol — définition",
    title_mg: "Halatra — famaritana",
    description_fr: "Quiconque a soustrait frauduleusement une chose qui ne lui appartient pas est coupable de vol.",
    description_mg: "Izay rehetra naka an-tsokosoko zavatra tsy azy dia meloka amin'ny halatra.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 5 ans et amende",
    penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["vol", "voler", "dérober", "subtiliser", "halatra", "mangalatra", "pickpocket", "larcin"],
    jurisprudence: [
      { reference: "Tribunal Correctionnel Antananarivo, Jugement n° 342/2021", date: "2021-06-10", summary_fr: "Le vol de téléphone portable dans un lieu public est qualifié de vol simple et puni d'emprisonnement de 1 à 5 ans.", summary_mg: "Ny halatra finday eny amin'ny toerana imasom-bahoaka dia halatra tsotra saziana figadrana 1-5 taona." }
    ]
  },
  {
    article: "Art. 381",
    title_fr: "Vol domestique",
    title_mg: "Halatra ataon'ny mpiasa an-trano",
    description_fr: "Le vol commis par un domestique ou un homme de service à gages, dans la maison de son maître, ou chez celui qui l'emploie, sera puni d'un emprisonnement de 2 à 5 ans.",
    description_mg: "Ny halatra ataon'ny mpiasa an-trano ao amin'ny tompony dia saziana figadrana 2-5 taona.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 5 ans",
    penalty_mg: "Figadrana 2-5 taona",
    keywords: ["vol domestique", "employé", "serviteur", "mpiasa", "halatra mpiasa"]
  },
  {
    article: "Art. 382",
    title_fr: "Vol avec violences",
    title_mg: "Halatra miaraka amin'ny herisetra",
    description_fr: "Si le vol a été commis avec violence ou menace de se servir de ses armes, il sera puni des travaux forcés à temps.",
    description_mg: "Raha natao tamin'ny herisetra na fandrahonana amin'ny fiadiana ny halatra dia saziana asa an-terivozona.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 20 ans)",
    penalty_mg: "Asa an-terivozona 5-20 taona",
    keywords: ["vol violence", "braquage", "vol à main armée", "agression", "halatra", "herisetra", "vol armé"]
  },
  {
    article: "Art. 388",
    title_fr: "Vol avec effraction / escalade / nuit / maison habitée",
    title_mg: "Halatra miaraka amin'ny fanapotehana / alina / trano ipetrahana",
    description_fr: "Le vol commis avec deux des circonstances suivantes : la nuit, par deux ou plusieurs personnes, avec effraction ou escalade, dans une maison habitée, sera puni de la réclusion.",
    description_mg: "Ny halatra natao miaraka amin'ny toe-javatra roa amin'ireto : alina, roa na mihoatra ny olona, fanapotehana na fiakaran-drindrina, tao an-trano ipetrahana, dia saziana figadrana.",
    type: "crime",
    penalty_fr: "Réclusion (5 à 10 ans) ou travaux forcés selon circonstances",
    penalty_mg: "Figadrana 5-10 taona na asa an-terivozona araka ny toe-javatra",
    keywords: ["cambriolage", "effraction", "vol nuit", "maison", "halatra alina", "fanapotehana", "escalade"]
  },
  {
    article: "Art. 388 al. 6-7",
    title_fr: "Vol de bœufs / Dahalo",
    title_mg: "Halatra omby / Dahalo",
    description_fr: "Le vol de bœufs commis la nuit en bande avec usage d'armes ou de violence sera puni des travaux forcés à perpétuité. Si le vol est commis avec des actes de barbarie, il est passible de la peine de mort.",
    description_mg: "Ny halatra omby natao alina an-tokony miaraka amin'ny fiadiana na herisetra dia saziana asa an-terivozona mandrakizay. Raha natao tamin'ny habibiana dia sazy mahafaty.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité ou peine de mort",
    penalty_mg: "Asa an-terivozona mandrakizay na sazy mahafaty",
    keywords: ["dahalo", "vol boeuf", "boeuf", "omby", "halatra omby", "zebu", "bétail", "razzia"],
    jurisprudence: [
      { reference: "Cour Criminelle Fianarantsoa, Arrêt n° 112/2018", date: "2018-08-25", summary_fr: "Le vol de zébus en bande organisée avec armes à feu constitue un crime passible de travaux forcés à perpétuité.", summary_mg: "Ny halatra omby an-tokony miaraka amin'ny basy dia heloka bevava saziana asa an-terivozona mandrakizay." }
    ]
  },

  // Escroquerie
  {
    article: "Art. 405",
    title_fr: "Escroquerie",
    title_mg: "Fitapitahana",
    description_fr: "Quiconque, soit en faisant usage de faux noms ou de fausses qualités, soit en employant des manœuvres frauduleuses pour persuader l'existence de fausses entreprises, se sera fait remettre des fonds, des meubles ou des obligations, sera puni d'un emprisonnement de 1 à 5 ans et d'une amende.",
    description_mg: "Izay nampiasa anarana sandoka na toetra sandoka, na nanao tetika hosoka mba hahazoana vola, fananana na taratasy, dia saziana figadrana 1-5 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 5 ans et amende de 360 000 à 27 000 000 Ar",
    penalty_mg: "Figadrana 1-5 taona sy lamandy 360 000 - 27 000 000 Ar",
    keywords: ["escroquerie", "arnaque", "fraude", "tromperie", "fitapitahana", "fandrika", "hosoka", "scam"],
    jurisprudence: [
      { reference: "Cour d'Appel Antananarivo, Arrêt n° 198/2020", date: "2020-10-05", summary_fr: "L'utilisation de faux documents pour obtenir un prêt bancaire constitue une escroquerie.", summary_mg: "Ny fampiasana taratasy hosoka mba hahazoana findramam-bola dia fitapitahana." }
    ]
  },

  // Abus de confiance
  {
    article: "Art. 406-408",
    title_fr: "Abus de confiance",
    title_mg: "Fanararaotana fitokisana",
    description_fr: "Quiconque aura détourné ou dissipé, au préjudice des propriétaires, possesseurs ou détenteurs, des effets, deniers, marchandises, billets ou autres écrits contenant obligation, qui ne lui avaient été remis qu'à titre de mandat, dépôt, louage ou prêt à usage.",
    description_mg: "Izay naka na nandany ny fananana napetraka taminy amin'ny maha-mandataire, mpitahiry, mpanofana na mpampindrana azy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 5 ans et amende",
    penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["abus confiance", "détournement", "confiance", "mandat", "fitokisana", "fanararaotana"]
  },

  // Recel
  {
    article: "Art. 460-461",
    title_fr: "Recel",
    title_mg: "Fanafenana entana halatra",
    description_fr: "Ceux qui, sciemment, auront recélé, en tout ou en partie, des choses enlevées, détournées ou obtenues à l'aide d'un crime ou d'un délit, seront punis des peines prévues par l'article 401. L'amende pourra être élevée jusqu'à la moitié de la valeur des objets recelés.",
    description_mg: "Izay nahalala fa nitana entana azo avy amin'ny heloka dia saziana. Ny lamandy dia azo akarina hatramin'ny antsasaky ny vidin'ny entana voafina.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 5 ans et amende",
    penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["recel", "dissimuler", "cacher", "entana halatra", "fanafenana", "receler", "objet volé"]
  },

  // Extorsion
  {
    article: "Art. 400",
    title_fr: "Extorsion",
    title_mg: "Fanerena hahazoana zavatra",
    description_fr: "Quiconque aura extorqué, par force, violence ou contrainte, la signature ou la remise d'un écrit, d'un acte, d'un titre, d'une pièce quelconque contenant obligation, sera puni des travaux forcés à temps.",
    description_mg: "Izay nahazo amin'ny herisetra sonia, taratasy, na taratasy misy adidy dia saziana asa an-terivozona.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 10 ans)",
    penalty_mg: "Asa an-terivozona 5-10 taona",
    keywords: ["extorsion", "racket", "chantage", "rançon", "fanerena", "fandrahonana"]
  },

  // Incendie
  {
    article: "Art. 434-435",
    title_fr: "Incendie volontaire",
    title_mg: "Fandoroana an-tsitrapo",
    description_fr: "Quiconque aura volontairement mis le feu à des édifices, navires, bateaux, magasins ou chantiers, ou à des forêts, bois, récoltes sur pied, sera puni des travaux forcés à perpétuité si les lieux incendiés sont habités.",
    description_mg: "Izay nandoro an-tsitrapo trano, sambo, magazay, ala, vokatra dia saziana asa an-terivozona mandrakizay raha misy mponina ny toerana.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité (habité) / à temps (non habité)",
    penalty_mg: "Asa an-terivozona mandrakizay (misy mponina) / voafetra (tsy misy)",
    keywords: ["incendie", "feu", "brûler", "pyromane", "fandoroana", "afo", "mandoro"]
  },

  // Destruction
  {
    article: "Art. 434-459",
    title_fr: "Destructions et dégradations",
    title_mg: "Fandravana sy fahasimbana",
    description_fr: "La destruction, la dégradation ou le dommage causé volontairement aux propriétés mobilières et immobilières d'autrui constitue un délit ou un crime selon la gravité.",
    description_mg: "Ny fandravana, fahasimbana na faharatrana an-tsitrapo amin'ny fananan'ny hafa dia heloka araka ny habeny.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 à 5 ans et amende",
    penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["destruction", "dégradation", "vandalisme", "casser", "fandravana", "fahasimbana", "saccager"]
  },

  // Association de malfaiteurs
  {
    article: "Art. 265-268",
    title_fr: "Association de malfaiteurs",
    title_mg: "Fikambanana manao ratsy",
    description_fr: "Toute association formée, quelle que soit sa durée ou le nombre de ses membres, dans le but de préparer ou de commettre des crimes contre les personnes ou les propriétés, constitue un crime.",
    description_mg: "Ny fikambanana rehetra natao mba hanomanana na hanaovana heloka bevava amin'ny olona na fananana dia heloka bevava.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps",
    penalty_mg: "Asa an-terivozona",
    keywords: ["association malfaiteurs", "bande", "gang", "organisation criminelle", "fikambanana", "complice"]
  },

  // Non-assistance
  {
    article: "Art. 63 al. 3",
    title_fr: "Non-dénonciation de crime",
    title_mg: "Tsy filazana heloka",
    description_fr: "Quiconque, ayant connaissance d'un crime, n'en aura pas informé les autorités, sera puni d'un emprisonnement d'un mois à trois ans et d'une amende.",
    description_mg: "Izay nahalala heloka bevava ka tsy nilaza tamin'ny manam-pahefana dia saziana figadrana iray volana ka hatramin'ny telo taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 1 mois à 3 ans et amende",
    penalty_mg: "Figadrana 1 volana - 3 taona sy lamandy",
    keywords: ["non-dénonciation", "tsy filazana", "connaissance", "crime", "signaler"]
  },

  // Abandon de famille
  {
    article: "Art. 357",
    title_fr: "Abandon de famille",
    title_mg: "Fandaozana tokantrano",
    description_fr: "L'abandon du domicile conjugal sans motif grave ou le refus de pourvoir aux besoins de la famille pendant plus de 2 mois est puni d'emprisonnement de 3 mois à 1 an et d'amende.",
    description_mg: "Ny fandaozana ny tokantrano tsy misy antony lehibe na ny tsy fiantohana ny fiainan'ny fianakaviana mihoatra ny 2 volana dia saziana figadrana 3 volana - 1 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 3 mois à 1 an et amende",
    penalty_mg: "Figadrana 3 volana - 1 taona sy lamandy",
    keywords: ["abandon", "famille", "pension", "fianakaviana", "fandaozana", "tokantrano", "obligation alimentaire"]
  },

  // Bigamie
  {
    article: "Art. 340",
    title_fr: "Bigamie",
    title_mg: "Fanambadiana indroa",
    description_fr: "Quiconque, étant engagé dans les liens du mariage, en aura contracté un autre avant la dissolution du premier, sera puni d'un emprisonnement de six mois à trois ans et d'une amende.",
    description_mg: "Izay manambady nefa mbola tsy tapaka ny fanambadiana voalohany ka manambady indray dia saziana figadrana 6 volana - 3 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 6 mois à 3 ans et amende",
    penalty_mg: "Figadrana 6 volana - 3 taona sy lamandy",
    keywords: ["bigamie", "mariage", "second mariage", "fanambadiana", "roa vady"]
  },

  // ============================================================
  // ARTICLES COMPLEMENTAIRES — Complicité, Excuses, Mineurs, etc.
  // ============================================================

  // Complicité
  {
    article: "Art. 59-60",
    title_fr: "Complicité",
    title_mg: "Fiaraha-miasa amin'ny heloka",
    description_fr: "Les complices d'un crime ou d'un délit seront punis de la même peine que les auteurs. Seront punis comme complices ceux qui, par dons, promesses, menaces, abus d'autorité, auront provoqué l'action ou donné des instructions ; ceux qui auront procuré des armes ou instruments ; ceux qui auront aidé ou assisté l'auteur.",
    description_mg: "Ny mpiray tsikombakomba amin'ny heloka dia saziana mitovy amin'ny mpanao. Heverina ho mpiray tsikombakomba ireo nanome fanomezana, fampanantenana, fandrahonana, na fanararaotam-pahefana ; ireo nanome fiadiana na fitaovana ; ireo nanampy ny mpanao.",
    type: "délit",
    penalty_fr: "Mêmes peines que l'auteur principal",
    penalty_mg: "Sazy mitovy amin'ny mpanao voalohany",
    keywords: ["complicité", "complice", "aide", "assistance", "tsikombakomba", "mpiray", "provocation", "instruction"]
  },

  // Légitime défense
  {
    article: "Art. 328-329",
    title_fr: "Légitime défense",
    title_mg: "Fiarovana ara-dalàna",
    description_fr: "Il n'y a ni crime ni délit, lorsque l'homicide, les blessures et les coups étaient commandés par la nécessité actuelle de la légitime défense de soi-même ou d'autrui. Sont compris dans le cas de nécessité actuelle de défense : la défense de nuit contre l'escalade ou l'effraction des clôtures, murs ou entrée d'une maison habitée.",
    description_mg: "Tsy misy heloka bevava na heloka rehefa ny vonoan'olona, ratra na kapoka dia noho ny filana hiaro tena na hiaro ny hafa. Ao anatin'ny fiarovana ny : fiarovana amin'ny alina amin'ny fiakaran-drindrina na fanapotehana varavarana.",
    type: "délit",
    penalty_fr: "Cause de justification — pas de peine",
    penalty_mg: "Antony fanamarinana — tsy misy sazy",
    keywords: ["légitime défense", "auto-défense", "se défendre", "fiarovana", "nécessité", "nuit", "effraction"],
    jurisprudence: [
      { reference: "Cour Criminelle Antananarivo, Arrêt n° 156/2021", date: "2021-09-20", summary_fr: "La légitime défense nocturne contre un cambrioleur dans une maison habitée est présumée. L'accusé qui a blessé l'intrus a été acquitté.", summary_mg: "Ny fiarovana ara-dalàna amin'ny alina amin'ny mpangalatra ao an-trano dia heverina ho marina. Ny voampanga nandratra ny mpiditra dia nafaka." }
    ]
  },

  // Excuses atténuantes — provocation
  {
    article: "Art. 321-326",
    title_fr: "Excuses atténuantes — Provocation",
    title_mg: "Fanamaivanan-tsazy — Fanentanana",
    description_fr: "Le meurtre, les blessures et les coups sont excusables s'ils ont été provoqués par des coups ou violences graves envers les personnes. L'homicide commis par l'époux sur l'autre conjoint surpris en flagrant délit d'adultère au domicile conjugal est excusable.",
    description_mg: "Ny vonoan'olona, ratra sy kapoka dia azo alàna tsiny raha noho ny kapoka na herisetra mafy. Ny famonoana ataon'ny mpivady amin'ny iray hafa tratra eo amin'ny fijangajangana ao an-trano dia azo alàna tsiny.",
    type: "délit",
    penalty_fr: "Réduction de peine : travaux forcés → emprisonnement 1-5 ans",
    penalty_mg: "Fampihenana sazy : asa an-terivozona → figadrana 1-5 taona",
    keywords: ["excuse", "provocation", "adultère", "fijangajangana", "fanentanana", "atténuante"]
  },

  // Avortement
  {
    article: "Art. 317",
    title_fr: "Avortement",
    title_mg: "Fanalan-jaza",
    description_fr: "Quiconque, par aliments, breuvages, médicaments, violences, ou par tout autre moyen, aura procuré l'avortement d'une femme enceinte, qu'elle y ait consenti ou non, sera puni de la réclusion. La même peine sera prononcée contre la femme qui se sera procuré l'avortement à elle-même.",
    description_mg: "Izay nampiasa sakafo, zava-pisotro, fanafody, herisetra na fomba hafa mba hanalan-jaza vehivavy bevohoka, na nanaiky izany na tsia, dia saziana figadrana. Mitovy ny sazy amin'ny vehivavy nanala-jaza ny tenany.",
    type: "crime",
    penalty_fr: "Réclusion (5 à 10 ans)",
    penalty_mg: "Figadrana 5-10 taona",
    keywords: ["avortement", "avorter", "grossesse", "fanalan-jaza", "bevohoka", "fausse couche", "interrompre"],
    jurisprudence: [
      { reference: "Cour Criminelle Antananarivo, Arrêt n° 89/2018", date: "2018-04-12", summary_fr: "L'avortement pratiqué par une personne non qualifiée ayant entraîné la mort de la mère est requalifié en homicide involontaire en concours avec avortement.", summary_mg: "Ny fanalan-jaza nataon'ny olona tsy matihanina ka nahatonga ny fahafatesan'ny reny dia novàna ho homicide involontaire sy fanalan-jaza." }
    ]
  },

  // Castration
  {
    article: "Art. 316",
    title_fr: "Castration",
    title_mg: "Fanapotehana firaisana",
    description_fr: "Toute personne coupable du crime de castration subira la peine des travaux forcés à perpétuité. Si la mort en est résultée avant l'expiration des quarante jours, le coupable subira la peine de mort.",
    description_mg: "Izay meloka tamin'ny fanapotehana firaisana dia saziana asa an-terivozona mandrakizay. Raha maty alohan'ny 40 andro ny niharan-doza dia sazy mahafaty.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité / mort si décès dans 40 jours",
    penalty_mg: "Asa an-terivozona mandrakizay / mahafaty raha maty ao anatin'ny 40 andro",
    keywords: ["castration", "mutilation", "fanapotehana", "travaux forcés"]
  },

  // Enlèvement de mineur
  {
    article: "Art. 354-356",
    title_fr: "Enlèvement de mineur",
    title_mg: "Fanagiazana ankizy",
    description_fr: "Quiconque, par fraude ou violence, aura enlevé ou fait enlever des mineurs de moins de dix-huit ans, sera puni de la réclusion. Si le mineur enlevé a moins de quinze ans, la peine sera celle des travaux forcés à temps.",
    description_mg: "Izay nangalatra na nampiangalatra ankizy latsaky ny 18 taona amin'ny hosoka na herisetra dia saziana figadrana. Raha latsaky ny 15 taona ny zaza dia asa an-terivozona.",
    type: "crime",
    penalty_fr: "Réclusion / travaux forcés à temps si < 15 ans",
    penalty_mg: "Figadrana / asa an-terivozona raha < 15 taona",
    keywords: ["enlèvement mineur", "kidnapping enfant", "mineur", "ankizy", "fanagiazana", "rapt"]
  },

  // Proxénétisme
  {
    article: "Art. 334-334 bis",
    title_fr: "Proxénétisme",
    title_mg: "Fampandehanana janga",
    description_fr: "Sera puni d'un emprisonnement de deux à cinq ans et d'une amende quiconque aura aidé, assisté ou protégé la prostitution d'autrui, ou en aura tiré profit, ou aura embauché, entraîné ou détourné une personne en vue de la prostitution.",
    description_mg: "Saziana figadrana 2-5 taona sy lamandy izay nanampy, niaro na nahazo tombony tamin'ny fivarotan-tenan'ny hafa, na nitaona olona ho amin'ny fivarotan-tena.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 5 ans et amende",
    penalty_mg: "Figadrana 2-5 taona sy lamandy",
    keywords: ["proxénétisme", "prostitution", "débauche", "exploitation sexuelle", "janga", "fivarotan-tena"],
    jurisprudence: [
      { reference: "Tribunal Correctionnel Antananarivo, Jugement n° 267/2020", date: "2020-06-18", summary_fr: "La location d'un appartement en connaissance de cause pour la prostitution constitue un acte de proxénétisme par aide ou assistance.", summary_mg: "Ny fanofana trano amim-pahalalana ho an'ny fivarotan-tena dia proxénétisme amin'ny fanampiana." }
    ]
  },

  // Traite des personnes (Loi 2007-038)
  {
    article: "Art. 333 ter (Loi 2007-038)",
    title_fr: "Traite des personnes",
    title_mg: "Fanondranana olona",
    description_fr: "La traite des personnes consiste dans le recrutement, le transport, le transfert, l'hébergement ou l'accueil de personnes, par la menace ou l'usage de la force, l'enlèvement, la fraude, la tromperie, l'abus d'autorité ou de vulnérabilité, aux fins d'exploitation.",
    description_mg: "Ny fanondranana olona dia ny fandraisana, fitaterana, famindrana, fampiantranoana olona amin'ny fandrahonana, herisetra, hosoka na fanararaotana mba hanararaotan'ny hafa.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 10 ans) / perpétuité si mineur",
    penalty_mg: "Asa an-terivozona 5-10 taona / mandrakizay raha ankizy",
    keywords: ["traite", "personnes", "exploitation", "trafic", "fanondranana", "esclavage", "servitude"]
  },

  // Exploitation sexuelle d'enfant (Loi 2007-038)
  {
    article: "Art. 334 quater (Loi 2007-038)",
    title_fr: "Exploitation sexuelle d'enfant",
    title_mg: "Fanararaotana ara-nofo ankizy",
    description_fr: "L'exploitation sexuelle est punie de 5 à 10 ans d'emprisonnement et d'une amende de 4 000 000 à 20 000 000 Ar. Si commise sur un enfant de moins de 15 ans, la peine est celle des travaux forcés à temps.",
    description_mg: "Ny fanararaotana ara-nofo dia saziana 5-10 taona figadrana sy lamandy 4 000 000 - 20 000 000 Ar. Raha ankizy latsaky ny 15 taona, asa an-terivozona.",
    type: "crime",
    penalty_fr: "Emprisonnement 5-10 ans / travaux forcés si < 15 ans",
    penalty_mg: "Figadrana 5-10 taona / asa an-terivozona raha < 15 taona",
    keywords: ["exploitation sexuelle", "enfant", "pédophilie", "abus enfant", "ankizy", "tourisme sexuel"]
  },

  // Inceste (Loi 2007-038)
  {
    article: "Art. 335.3 (Loi 2007-038)",
    title_fr: "Inceste",
    title_mg: "Firaisana tamin'ny havana akaiky",
    description_fr: "Tout rapport sexuel entre proches parents ou alliés jusqu'au 3ème degré inclus, dont le mariage est prohibé par la loi, ou tout abus sexuel commis par le père, la mère ou une personne ayant autorité parentale sur un enfant est qualifié d'inceste. Puni des travaux forcés à temps si commis sur un enfant.",
    description_mg: "Ny firaisana eo amin'ny havana akaiky ka hatramin'ny laharana faha-3, na fanararaotana ataon'ny ray na reny amin'ny zanaka, dia inceste. Saziana asa an-terivozona raha ankizy.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (enfant) / 5-10 ans emprisonnement (autre)",
    penalty_mg: "Asa an-terivozona (ankizy) / figadrana 5-10 taona (hafa)",
    keywords: ["inceste", "havana", "parent", "enfant", "firaisana", "abus familial"]
  },

  // Violences sur enfant — circonstance aggravante
  {
    article: "Art. 312",
    title_fr: "Violences sur mineur de 15 ans",
    title_mg: "Herisetra amin'ny ankizy latsaky ny 15 taona",
    description_fr: "Les peines pour coups et blessures sont aggravées lorsque la victime est un enfant de moins de 15 ans. Le maximum de la peine est porté au double si l'auteur est un ascendant ou une personne ayant autorité sur l'enfant.",
    description_mg: "Ny sazy amin'ny kapoka sy ratra dia mafy kokoa rehefa ankizy latsaky ny 15 taona no niharan-doza. Roa heny ny sazy raha ny ray aman-dreny na olona manana fahefana no mpanao.",
    type: "délit",
    penalty_fr: "Peine doublée si auteur = ascendant/autorité",
    penalty_mg: "Sazy avo roa heny raha ray aman-dreny/manana fahefana",
    keywords: ["violence enfant", "maltraitance", "mineur", "enfant battu", "herisetra ankizy", "zaza", "15 ans"]
  },

  // Banqueroute
  {
    article: "Art. 402-404",
    title_fr: "Banqueroute frauduleuse",
    title_mg: "Bankiraotra hosoka",
    description_fr: "Le commerçant qui, en état de cessation de paiement, aura soustrait ses livres, détourné ou dissimulé une partie de son actif, ou reconnu frauduleusement des dettes fictives, sera déclaré banqueroutier frauduleux et puni des travaux forcés à temps.",
    description_mg: "Ny mpivarotra tsy afaka mandoa ny trosany, naka ny bokiny, nanafina ny fananany, na nanaiky trosa sandoka, dia banqueroutier hosoka ka saziana asa an-terivozona.",
    type: "crime",
    penalty_fr: "Travaux forcés à temps (5 à 20 ans)",
    penalty_mg: "Asa an-terivozona 5-20 taona",
    keywords: ["banqueroute", "faillite", "dette", "commerce", "trosa", "frauduleuse", "commerçant"]
  },

  // Fausse monnaie
  {
    article: "Art. 132-138",
    title_fr: "Fausse monnaie",
    title_mg: "Vola sandoka",
    description_fr: "Ceux qui auront contrefait ou altéré les monnaies d'or ou d'argent ayant cours légal, ou participé à l'émission ou exposition de ces monnaies contrefaites ou altérées, seront punis des travaux forcés à perpétuité.",
    description_mg: "Izay nanamboatra na nanova vola manankery, na nandray anjara tamin'ny famoahana na fampisehoana vola sandoka dia saziana asa an-terivozona mandrakizay.",
    type: "crime",
    penalty_fr: "Travaux forcés à perpétuité",
    penalty_mg: "Asa an-terivozona mandrakizay",
    keywords: ["fausse monnaie", "contrefaçon", "vola sandoka", "monnaie", "falsifier", "billet"]
  },

  // Usurpation de fonction
  {
    article: "Art. 258",
    title_fr: "Usurpation de fonctions publiques",
    title_mg: "Fitondrana andraikitra tsy an'ny tena",
    description_fr: "Quiconque, sans titre, se sera immiscé dans des fonctions publiques, civiles ou militaires, ou aura fait les actes d'une de ces fonctions, sera puni d'un emprisonnement de deux à cinq ans.",
    description_mg: "Izay niditra tamin'ny asam-panjakana tsy nahazo alalana, na nanao ny asan'ny mpiasam-panjakana, dia saziana figadrana 2-5 taona.",
    type: "délit",
    penalty_fr: "Emprisonnement de 2 à 5 ans",
    penalty_mg: "Figadrana 2-5 taona",
    keywords: ["usurpation", "fonction", "imposteur", "fitondrana", "faux policier", "faux fonctionnaire", "se faire passer"]
  },

  // Dénonciation calomnieuse
  {
    article: "Art. 373",
    title_fr: "Dénonciation calomnieuse",
    title_mg: "Fiampangana tsy marina",
    description_fr: "Quiconque aura, par quelque voie que ce soit, fait une dénonciation calomnieuse contre un ou plusieurs individus aux officiers de justice ou de police, sera puni d'un emprisonnement de six mois à cinq ans et d'une amende.",
    description_mg: "Izay nanao fiampangana tsy marina tamin'ny manam-pahefana momba olona iray na maro dia saziana figadrana 6 volana - 5 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 6 mois à 5 ans et amende",
    penalty_mg: "Figadrana 6 volana - 5 taona sy lamandy",
    keywords: ["dénonciation", "calomnie", "fausse accusation", "fiampangana", "tsy marina", "accuser faussement"]
  },

  // Attentat aux mœurs — outrage public à la pudeur
  {
    article: "Art. 330",
    title_fr: "Outrage public à la pudeur",
    title_mg: "Fanaovana mahamenatra eny imasom-bahoaka",
    description_fr: "Toute personne qui aura commis un outrage public à la pudeur sera punie d'un emprisonnement de trois mois à deux ans et d'une amende.",
    description_mg: "Izay nanao zavatra mahamenatra eny imasom-bahoaka dia saziana figadrana 3 volana - 2 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 3 mois à 2 ans et amende",
    penalty_mg: "Figadrana 3 volana - 2 taona sy lamandy",
    keywords: ["outrage pudeur", "exhibitionnisme", "indécent", "nudité", "obscène", "mahamenatra", "imasom-bahoaka"]
  },

  // Non-assistance à personne en danger
  {
    article: "Art. 63 bis",
    title_fr: "Non-assistance à personne en péril",
    title_mg: "Tsy fanampiana olona am-pahasahiranana",
    description_fr: "Quiconque s'abstient volontairement de porter à une personne en péril l'assistance que, sans risque pour lui ou pour les tiers, il pouvait lui prêter, sera puni d'un emprisonnement de trois mois à cinq ans et d'une amende.",
    description_mg: "Izay tsy manampy an-tsitrapo olona eo am-pahasahiranana nefa afaka nanao izany tsy misy loza ho azy dia saziana figadrana 3 volana - 5 taona sy lamandy.",
    type: "délit",
    penalty_fr: "Emprisonnement de 3 mois à 5 ans et amende",
    penalty_mg: "Figadrana 3 volana - 5 taona sy lamandy",
    keywords: ["non-assistance", "danger", "secours", "aide", "tsy manampy", "pahasahiranana", "laisser mourir", "péril"]
  },

  // ══════════════════════════════════════
  // LOIS SPÉCIALES MODERNES
  // ══════════════════════════════════════

  // ---- CYBERCRIMINALITÉ (Loi n° 2014-006) ----
  {
    article: "Art. 4 (Loi 2014-006)",
    title_fr: "Accès illicite à un système informatique",
    title_mg: "Fidirana tsy ara-dalàna amin'ny rafitra informatika",
    description_fr: "Le fait d'accéder ou de se maintenir, frauduleusement, dans tout ou partie d'un système de traitement automatisé de données est puni d'un emprisonnement de un à cinq ans et d'une amende de 2 000 000 à 100 000 000 Ariary.",
    description_mg: "Ny fidirana na fipetrahana hosoka ao amin'ny rafitra fanodinana angon-drakitra dia saziana figadrana 1-5 taona sy lamandy 2 000 000 - 100 000 000 Ar.",
    type: "délit", penalty_fr: "Emprisonnement 1-5 ans + amende 2 000 000 - 100 000 000 Ar", penalty_mg: "Figadrana 1-5 taona sy lamandy 2 000 000 - 100 000 000 Ar",
    keywords: ["piratage", "hacking", "informatique", "système", "accès illicite", "cybercriminalité", "ordinateur", "données", "internet"]
  },
  {
    article: "Art. 12 (Loi 2014-006)",
    title_fr: "Falsification de données informatiques",
    title_mg: "Fanovana angon-drakitra informatika",
    description_fr: "Le fait de produire, vendre, importer, détenir, diffuser un équipement, programme informatique ou toute donnée conçus ou spécialement adaptés pour commettre des infractions informatiques est puni d'un emprisonnement de un à cinq ans et d'une amende.",
    description_mg: "Ny famoronana, fivarotana, fanafarana, fitanana, fampielezana fitaovana na programa informatika natao hanao heloka informatika dia saziana figadrana 1-5 taona sy lamandy.",
    type: "délit", penalty_fr: "Emprisonnement 1-5 ans + amende", penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["falsification", "données", "informatique", "virus", "malware", "logiciel", "programme", "piratage"]
  },
  {
    article: "Art. 19 (Loi 2014-006)",
    title_fr: "Usurpation d'identité numérique",
    title_mg: "Fitondrana mombamomba olona hafa amin'ny internet",
    description_fr: "Quiconque aura sciemment, sur un support informatique ou électronique, usurpé l'identité de toute personne physique ou morale, en vue de troubler sa tranquillité ou de porter atteinte à son honneur, sera puni de six mois à dix ans d'emprisonnement et d'une amende de 600 000 à 18 000 000 Ariary.",
    description_mg: "Izay mampiasa ny mombamomban'olona hafa amin'ny internet na elektronika mba hanakorontanana na hanimba ny lazany dia saziana figadrana 6 volana - 10 taona sy lamandy 600 000 - 18 000 000 Ar.",
    type: "délit", penalty_fr: "Emprisonnement 6 mois-10 ans + amende", penalty_mg: "Figadrana 6 volana-10 taona sy lamandy",
    keywords: ["usurpation", "identité", "numérique", "internet", "faux profil", "réseaux sociaux", "facebook", "cyber"]
  },
  {
    article: "Art. 20 (Loi 2014-006)",
    title_fr: "Diffamation et injure en ligne",
    title_mg: "Fanendrikendrehana sy fanevatevana amin'ny internet",
    description_fr: "La diffamation commise par le biais d'un support informatique ou électronique est punie d'un emprisonnement de six mois à cinq ans et d'une amende de 2 000 000 à 100 000 000 Ariary.",
    description_mg: "Ny fanendrikendrehana atao amin'ny internet na elektronika dia saziana figadrana 6 volana - 5 taona sy lamandy 2 000 000 - 100 000 000 Ar.",
    type: "délit", penalty_fr: "Emprisonnement 6 mois-5 ans + amende 2 000 000 - 100 000 000 Ar", penalty_mg: "Figadrana 6 volana-5 taona sy lamandy",
    keywords: ["diffamation", "injure", "internet", "en ligne", "réseaux sociaux", "facebook", "cyber", "harcèlement"]
  },
  {
    article: "Art. 23 (Loi 2014-006)",
    title_fr: "Pédopornographie en ligne",
    title_mg: "Fampisehoana sary vetaveta ankizy amin'ny internet",
    description_fr: "Quiconque aura attenté aux mœurs en excitant, favorisant ou facilitant la débauche, la corruption ou la prostitution enfantine par l'utilisation d'un support informatique ou électronique, est puni des travaux forcés à temps.",
    description_mg: "Izay manosika, manohana na manamora ny fijangajangana, kolikoly na fivarotan-tenan'ankizy amin'ny internet dia saziana asa an-terivozona.",
    type: "crime", penalty_fr: "Travaux forcés à temps (5-20 ans)", penalty_mg: "Asa an-terivozona (5-20 taona)",
    keywords: ["pédopornographie", "enfant", "pornographie", "internet", "exploitation", "mineur", "sary vetaveta", "ankizy"]
  },
  {
    article: "Art. 24 (Loi 2014-006)",
    title_fr: "Sollicitation sexuelle de mineur en ligne",
    title_mg: "Fangatahana firaisana amin'ny ankizy amin'ny internet",
    description_fr: "Le fait pour un majeur de faire des propositions sexuelles à un mineur en utilisant un moyen de communication électronique est puni de 2 à 5 ans d'emprisonnement et de 2 000 000 à 10 000 000 Ariary d'amende. Si suivies d'une rencontre : 5 à 10 ans.",
    description_mg: "Ny fanaovan'ny lehibe tolotra firaisana amin'ny ankizy amin'ny internet dia saziana figadrana 2-5 taona sy lamandy 2 000 000 - 10 000 000 Ar. Raha narahin'ny fihaonana : 5-10 taona.",
    type: "délit", penalty_fr: "Emprisonnement 2-5 ans (10 ans si rencontre) + amende", penalty_mg: "Figadrana 2-5 taona (10 raha fihaonana) sy lamandy",
    keywords: ["sollicitation", "mineur", "internet", "prédateur", "grooming", "ankizy", "réseaux sociaux"]
  },

  // ---- STUPÉFIANTS (Loi n° 97-039) ----
  {
    article: "Art. 97-039",
    title_fr: "Trafic de stupéfiants",
    title_mg: "Varotra zava-mahadomelina",
    description_fr: "L'importation, l'exportation, la fabrication, la production, le transport, la détention et l'offre de stupéfiants ou de substances psychotropes sont punis des travaux forcés à temps et d'une amende. La peine est aggravée en cas de récidive ou de bande organisée.",
    description_mg: "Ny fanafarana, famokarana, fitaterana, fitanana sy fivarotana zava-mahadomelina dia saziana asa an-terivozona sy lamandy. Mafy kokoa ny sazy raha miverina na atao an-tokony.",
    type: "crime", penalty_fr: "Travaux forcés à temps + amende", penalty_mg: "Asa an-terivozona sy lamandy",
    keywords: ["drogue", "stupéfiant", "cannabis", "rongony", "trafic", "zava-mahadomelina", "psychotrope", "cocaïne", "héroïne"],
    jurisprudence: [
      { reference: "Cour Criminelle Toamasina, Arrêt n° 34/2021", date: "2021-02-28", summary_fr: "Le transport de 5 kg de cannabis est qualifié de trafic de stupéfiants et puni de 10 ans de travaux forcés.", summary_mg: "Ny fitaterana 5 kg rongony dia varotra zava-mahadomelina ka saziana 10 taona asa an-terivozona." }
    ]
  },
  {
    article: "Art. 97-039 (usage)",
    title_fr: "Usage de stupéfiants",
    title_mg: "Fampiasana zava-mahadomelina",
    description_fr: "L'usage illicite de stupéfiants ou de substances psychotropes est puni d'un emprisonnement de deux mois à un an et d'une amende, ou de l'une de ces deux peines seulement.",
    description_mg: "Ny fampiasana tsy ara-dalàna zava-mahadomelina dia saziana figadrana 2 volana - 1 taona sy lamandy, na ny iray amin'ireo sazy ireo ihany.",
    type: "délit", penalty_fr: "Emprisonnement 2 mois-1 an + amende", penalty_mg: "Figadrana 2 volana-1 taona sy lamandy",
    keywords: ["drogue", "usage", "consommation", "cannabis", "rongony", "fumeur", "zava-mahadomelina"]
  },

  // ---- BLANCHIMENT DE CAPITAUX (Loi n° 2018-043) ----
  {
    article: "Loi 2018-043",
    title_fr: "Blanchiment de capitaux",
    title_mg: "Fanadiovana vola maloto",
    description_fr: "Le blanchiment de capitaux est le fait de faciliter la justification mensongère de l'origine des biens ou des revenus de l'auteur d'un crime ou d'un délit ayant procuré un profit direct ou indirect. Puni de 5 à 10 ans d'emprisonnement et d'une amende.",
    description_mg: "Ny fanadiovana vola maloto dia ny fanamorana ny fanamarinana sandoka ny niavian'ny fananana na ny tombony azon'ny mpanao heloka. Saziana figadrana 5-10 taona sy lamandy.",
    type: "crime", penalty_fr: "Emprisonnement 5-10 ans + amende + confiscation", penalty_mg: "Figadrana 5-10 taona sy lamandy sy fanesoran-javatra",
    keywords: ["blanchiment", "capitaux", "argent sale", "vola maloto", "recycler", "fanadiovana", "produit crime"]
  },
  {
    article: "Loi 2018-043 (financement terrorisme)",
    title_fr: "Financement du terrorisme",
    title_mg: "Famatsiam-bola ho an'ny fampihorohoroana",
    description_fr: "Le fait de financer une entreprise terroriste, de fournir, de réunir ou de gérer des fonds, des valeurs ou des biens dans l'intention de les voir utilisés ou en sachant qu'ils seront utilisés à des fins terroristes est puni de 10 à 20 ans d'emprisonnement.",
    description_mg: "Ny fanomezana vola na fananana ho an'ny fikasana fampihorohoroana dia saziana figadrana 10-20 taona.",
    type: "crime", penalty_fr: "Emprisonnement 10-20 ans", penalty_mg: "Figadrana 10-20 taona",
    keywords: ["terrorisme", "financement", "fampihorohoroana", "bombe", "attentat", "terreur", "extrémisme"]
  },

  // ---- TERRORISME (Loi n° 2014-005) ----
  {
    article: "Loi 2014-005",
    title_fr: "Actes de terrorisme",
    title_mg: "Asan'ny fampihorohoroana",
    description_fr: "Sont qualifiés actes de terrorisme les infractions intentionnellement en relation avec une entreprise individuelle ou collective ayant pour but de troubler gravement l'ordre public par l'intimidation ou la terreur. Punis des travaux forcés à perpétuité.",
    description_mg: "Antsoina hoe asan'ny fampihorohoroana ny heloka natao an-tsitrapo miaraka amin'ny fikambanana mikasa hanakorontana mafy ny filaminam-bahoaka amin'ny fandrahonana na fampihorohoroana. Saziana asa an-terivozona mandrakizay.",
    type: "crime", penalty_fr: "Travaux forcés à perpétuité", penalty_mg: "Asa an-terivozona mandrakizay",
    keywords: ["terrorisme", "terreur", "bombe", "attentat", "fampihorohoroana", "extrémisme", "organisation terroriste"]
  },

  // ---- CORRUPTION (Loi n° 2016-020 / Pôle Anti-Corruption) ----
  {
    article: "Art. 174.1 (Loi 2016-020)",
    title_fr: "Enrichissement illicite",
    title_mg: "Fananana harena tsy ara-dalàna",
    description_fr: "Le fait pour un agent public de ne pas pouvoir justifier, après mise en demeure, l'origine d'un accroissement substantiel de son patrimoine, par rapport à ses revenus légitimes, est puni de 5 à 10 ans d'emprisonnement et d'une amende.",
    description_mg: "Ny tsy fahafahan'ny mpiasam-panjakana manamarina ny niavian'ny fitomboan'ny fananany mihoatra ny karamany dia saziana figadrana 5-10 taona sy lamandy.",
    type: "crime", penalty_fr: "Emprisonnement 5-10 ans + amende + confiscation", penalty_mg: "Figadrana 5-10 taona sy lamandy sy fanesoran-javatra",
    keywords: ["enrichissement illicite", "fananana", "harena", "tsy ara-dalàna", "corruption", "patrimoine", "fonctionnaire"],
    jurisprudence: [
      { reference: "Pôle Anti-Corruption, Arrêt n° 45/2023", date: "2023-04-10", summary_fr: "Un haut fonctionnaire ne pouvant justifier l'acquisition de 3 immeubles et 2 véhicules de luxe avec son salaire a été condamné à 7 ans pour enrichissement illicite.", summary_mg: "Mpiasam-panjakana ambony tsy afaka nanamarina ny fividianana trano 3 sy fiara 2 tamin'ny karamany dia nohelohina 7 taona noho ny fananana harena tsy ara-dalàna." }
    ]
  },
  {
    article: "Art. 183.1 (Loi 2016-020)",
    title_fr: "Trafic d'influence",
    title_mg: "Fanaovana kolikoly amin'ny hery",
    description_fr: "Sera puni d'un emprisonnement de deux à dix ans et d'une amende quiconque aura sollicité ou agréé, directement ou indirectement, des offres, des promesses, des dons ou des avantages, pour abuser de son influence réelle ou supposée en vue de faire obtenir des décisions favorables.",
    description_mg: "Saziana figadrana 2-10 taona sy lamandy izay nangataka na nandray fanomezana mba hampiasana ny heriny tena izy na heverina hahazoana fanapahan-kevitra tsara.",
    type: "délit", penalty_fr: "Emprisonnement 2-10 ans + amende", penalty_mg: "Figadrana 2-10 taona sy lamandy",
    keywords: ["trafic influence", "influence", "kolikoly", "faveur", "décision", "piston", "hery"]
  },

  // ---- VIOLENCE BASÉE SUR LE GENRE (Loi n° 2019-008) ----
  {
    article: "Loi 2019-008",
    title_fr: "Violences basées sur le genre",
    title_mg: "Herisetra mifototra amin'ny maha-lahy na maha-vavy",
    description_fr: "Toute forme de violence physique, sexuelle, psychologique, économique ou patrimoniale fondée sur le genre est punie d'emprisonnement et d'amende. Les peines sont aggravées lorsque la victime est le conjoint, un mineur ou une personne vulnérable.",
    description_mg: "Ny herisetra rehetra ara-batana, ara-nofo, ara-tsaina, ara-bola mifototra amin'ny maha-lahy na maha-vavy dia saziana figadrana sy lamandy. Mafy kokoa ny sazy rehefa mpivady, ankizy na olona tsy afa-manoatra no niharan-doza.",
    type: "délit", penalty_fr: "Emprisonnement aggravé + amende", penalty_mg: "Figadrana mafy kokoa sy lamandy",
    keywords: ["violence genre", "violence conjugale", "femme battue", "herisetra", "mpivady", "vehivavy", "harcèlement"],
    jurisprudence: [
      { reference: "Tribunal Correctionnel Antananarivo, Jugement n° 512/2022", date: "2022-08-15", summary_fr: "Un mari condamné à 3 ans d'emprisonnement pour violences conjugales répétées ayant causé des blessures graves à son épouse.", summary_mg: "Lehilahy iray nohelohina 3 taona figadrana noho ny herisetra tao an-tokantrano nahatonga ratra mafy tamin'ny vadiny." }
    ]
  },

  // ---- ARMES (Loi n° 69-011) ----
  {
    article: "Loi 69-011",
    title_fr: "Détention illicite d'armes",
    title_mg: "Fitanana fiadiana tsy ara-dalàna",
    description_fr: "La détention, le port, le transport d'armes à feu sans autorisation est punie d'un emprisonnement de un à cinq ans et d'une amende. La peine est aggravée en cas d'armes de guerre.",
    description_mg: "Ny fitanana, fitondrana, fitaterana basy tsy nahazoana alalana dia saziana figadrana 1-5 taona sy lamandy. Mafy kokoa ny sazy raha fiadiam-piadiana.",
    type: "délit", penalty_fr: "Emprisonnement 1-5 ans + amende", penalty_mg: "Figadrana 1-5 taona sy lamandy",
    keywords: ["armes", "fiadiana", "basy", "fusil", "pistolet", "munitions", "détention", "port d'armes", "illégal"]
  },

  // ---- TORTURE (Loi n° 2008-008) ----
  {
    article: "Loi 2008-008",
    title_fr: "Torture et traitements inhumains",
    title_mg: "Fampijaliana sy fitsaboana tsy mendrika",
    description_fr: "Tout acte par lequel une douleur ou des souffrances aiguës, physiques ou mentales, sont intentionnellement infligées à une personne, notamment par un agent public, aux fins d'obtenir des aveux ou des renseignements, est puni des travaux forcés à temps.",
    description_mg: "Ny asa rehetra fanaovana fijaliana na fahoriana mafy, ara-batana na ara-tsaina, an-tsitrapo amin'ny olona, indrindra ataon'ny mpiasam-panjakana, mba hahazoana fieken-keloka na vaovao, dia saziana asa an-terivozona.",
    type: "crime", penalty_fr: "Travaux forcés à temps (5-20 ans)", penalty_mg: "Asa an-terivozona (5-20 taona)",
    keywords: ["torture", "traitement inhumain", "fampijaliana", "cruauté", "souffrance", "aveux", "police", "gendarmerie"]
  },

  // ============================================================
  // LIVRE IV — CONTRAVENTIONS (Art. 464-476)
  // ============================================================
  {
    article: "Art. 472 §13",
    title_fr: "Tapages nocturnes",
    title_mg: "Tabataba amin'ny alina",
    description_fr: "Les auteurs ou complices de bruits, tapages ou attroupements injurieux ou nocturnes troublant la tranquillité des habitants seront punis d'une amende de 400 à 30 000 Ariary et d'un emprisonnement de 1 à 10 jours.",
    description_mg: "Ny mpanao tabataba alina manakorontana ny fiadanan'ny mponina dia saziana lamandy 400 - 30 000 Ar sy figadrana 1-10 andro.",
    type: "contravention",
    penalty_fr: "Amende de 400 à 30 000 Ar et emprisonnement 1-10 jours",
    penalty_mg: "Lamandy 400 - 30 000 Ar sy figadrana 1-10 andro",
    keywords: ["tapage", "bruit", "nocturne", "nuisance sonore", "tabataba", "korontana", "alina"]
  },
  {
    article: "Art. 473 §11",
    title_fr: "Voies de fait et violences légères",
    title_mg: "Herisetra maivana",
    description_fr: "Les auteurs ou complices de rixes, voies de fait ou violences légères, pourvu que les coups portés n'aient entraîné aucune incapacité de travail, seront punis d'une amende de 2 000 à 100 000 Ariary et d'un emprisonnement de 1 à 29 jours.",
    description_mg: "Ny mpanao herisetra maivana tsy nahatonga tsy fahafahana miasa dia saziana lamandy 2 000 - 100 000 Ar sy figadrana 1-29 andro.",
    type: "contravention",
    penalty_fr: "Amende de 2 000 à 100 000 Ar et emprisonnement 1-29 jours",
    penalty_mg: "Lamandy 2 000 - 100 000 Ar sy figadrana 1-29 andro",
    keywords: ["voie de fait", "bousculade", "violence légère", "herisetra maivana", "rixe"]
  },
  {
    article: "Art. 472 §17",
    title_fr: "Divagation d'animaux dangereux",
    title_mg: "Firenireny biby mampidi-doza",
    description_fr: "Ceux qui auront laissé divaguer des fous ou des furieux étant sous leur garde, ou des animaux malfaisants ou féroces ; ceux qui auront excité ou n'auront pas retenu leurs chiens lorsqu'ils attaquent ou poursuivent les passants.",
    description_mg: "Izay namela biby mampidi-doza na adala hirenireny, na tsy nitana ny alika nanafika na nanenjika mpandeha.",
    type: "contravention",
    penalty_fr: "Amende de 400 à 30 000 Ar et emprisonnement 1-10 jours",
    penalty_mg: "Lamandy 400 - 30 000 Ar sy figadrana 1-10 andro",
    keywords: ["divagation", "animal", "biby", "chien", "alika", "animal dangereux", "firenireny"]
  },
  {
    article: "Art. 472 §20",
    title_fr: "Jet de pierres et d'immondices",
    title_mg: "Fitorahana vato sy loto",
    description_fr: "Ceux qui auront jeté des pierres ou d'autres corps durs ou des immondices contre les maisons, édifices ou clôtures d'autrui, ou dans les jardins ou enclos.",
    description_mg: "Izay nitora-bato na zavatra mafy na loto tamin'ny trano, rindrina na fefy.",
    type: "contravention",
    penalty_fr: "Amende de 400 à 30 000 Ar et emprisonnement 1-10 jours",
    penalty_mg: "Lamandy 400 - 30 000 Ar sy figadrana 1-10 andro",
    keywords: ["jet pierre", "lancer", "projectile", "vato", "fitorahana", "immondices"]
  },
  {
    article: "Art. 473 §6",
    title_fr: "Sorcellerie et charlatanisme",
    title_mg: "Mosavy sy ody",
    description_fr: "Les gens qui font métier de deviner, de pronostiquer, d'expliquer les songes, ceux qui détiennent les ody, ceux qui se parent de la qualité de sorciers pour influencer les populations.",
    description_mg: "Ireo manao asan'ny mpanandro, mpamily, mpanazava nofy, ireo mitana ody, ireo milaza ho mpamosavy mba hanaovana hery amin'ny vahoaka.",
    type: "contravention",
    penalty_fr: "Amende de 2 000 à 100 000 Ar et emprisonnement 1-29 jours",
    penalty_mg: "Lamandy 2 000 - 100 000 Ar sy figadrana 1-29 andro",
    keywords: ["sorcellerie", "charlatanisme", "sorcier", "mosavy", "ody", "mpanandro", "magie", "devin"]
  },
  {
    article: "Art. 472 §22",
    title_fr: "Obstruction de la voie publique",
    title_mg: "Fanakanana ny lalana",
    description_fr: "Ceux qui auront embarrassé la voie publique en y déposant ou en y laissant sans nécessité des matériaux ou des choses qui empêchent ou diminuent la liberté ou la sûreté du passage.",
    description_mg: "Izay nametraka entana na zavatra tsy ilaina eny amin'ny lalana ka manakana na mampihena ny fahalalahana sy ny fiarovana amin'ny fandehanan'ny olona.",
    type: "contravention",
    penalty_fr: "Amende de 400 à 30 000 Ar et emprisonnement 1-10 jours",
    penalty_mg: "Lamandy 400 - 30 000 Ar sy figadrana 1-10 andro",
    keywords: ["obstruction", "voie publique", "lalana", "passage", "encombrement"]
  },
  {
    article: "Art. 473 §5",
    title_fr: "Vagabondage",
    title_mg: "Fandrifiana",
    description_fr: "Ceux qui sont sans sources avouables de revenus et qui volontairement, n'exercent habituellement ni métier ni profession.",
    description_mg: "Ireo tsy manana loharanon-karena ekena ary an-tsitrapo tsy mba manao asa na haitao.",
    type: "contravention",
    penalty_fr: "Amende de 2 000 à 100 000 Ar et emprisonnement 1-29 jours",
    penalty_mg: "Lamandy 2 000 - 100 000 Ar sy figadrana 1-29 andro",
    keywords: ["vagabondage", "sans emploi", "oisiveté", "fandrifiana", "mendiant"]
  },
  {
    article: "Art. 473 §7",
    title_fr: "Jeux de hasard illicites",
    title_mg: "Lalao kisendrasendra tsy ara-dalàna",
    description_fr: "Ceux qui, sans autorisation, auront établi ou tenu dans les lieux publics des jeux de loterie ou d'autres jeux de hasard.",
    description_mg: "Izay nametraka na nitantana lalao kisendrasendra tsy nahazoana alalana eny amin'ny toerana imasom-bahoaka.",
    type: "contravention",
    penalty_fr: "Amende de 2 000 à 100 000 Ar et emprisonnement 1-29 jours",
    penalty_mg: "Lamandy 2 000 - 100 000 Ar sy figadrana 1-29 andro",
    keywords: ["jeu hasard", "loterie", "pari", "lalao", "kisendrasendra", "gambling"]
  },
  {
    article: "Art. 474",
    title_fr: "Récidive de contraventions",
    title_mg: "Famerenana fandikan-dalàna maivana",
    description_fr: "En cas de récidive des contraventions, la peine d'emprisonnement sera obligatoirement prononcée. En ce qui concerne le tapage nocturne (Art. 472 §13), la récidive emportera délit et sera punie de 1 à 6 mois d'emprisonnement.",
    description_mg: "Raha miverina ny fandikan-dalàna maivana, ny figadrana dia tsy maintsy asiana. Ny tabataba alina (Art. 472 §13) miverina dia heloka ka saziana 1-6 volana figadrana.",
    type: "contravention",
    penalty_fr: "Emprisonnement obligatoire / délit si récidive tapage",
    penalty_mg: "Figadrana tsy azo ihodivirana / heloka raha miverina tabataba",
    keywords: ["récidive", "contravention", "famerenana", "aggravation", "tapage récidive"]
  },
];

export function searchArticles(query: string): PenalArticle[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (searchTerms.length === 0) return [];

  const scored = penalArticles.map(article => {
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

export function getTypeInfo(type: InfractionType, lang: 'fr' | 'mg') {
  const info = {
    crime: {
      fr: { label: 'Crime', description: 'Infraction la plus grave, jugée par la Cour Criminelle', color: 'red' },
      mg: { label: 'Heloka bevava', description: 'Heloka lehibe indrindra, tsaraina eo amin\'ny Fitsarana ny Heloka Bevava', color: 'red' }
    },
    délit: {
      fr: { label: 'Délit', description: 'Infraction intermédiaire, jugée par le Tribunal Correctionnel', color: 'amber' },
      mg: { label: 'Heloka', description: 'Heloka antonony, tsaraina eo amin\'ny Fitsarana Fanitsiana', color: 'amber' }
    },
    contravention: {
      fr: { label: 'Contravention', description: 'Infraction la moins grave, jugée par le Tribunal de Police', color: 'blue' },
      mg: { label: 'Fandikan-dalàna maivana', description: 'Heloka maivana indrindra, tsaraina eo amin\'ny Fitsarana Pôlisy', color: 'blue' }
    }
  };
  return info[type][lang];
}
