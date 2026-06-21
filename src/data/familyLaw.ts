export type FamilyCategory = 'mariage' | 'divorce' | 'enfant' | 'filiation' | 'adoption' | 'succession' | 'pension';

export interface Jurisprudence {
  reference: string;
  date: string;
  summary_fr: string;
  summary_mg: string;
}

export interface FamilyArticle {
  article: string;
  title_fr: string;
  title_mg: string;
  description_fr: string;
  description_mg: string;
  category: FamilyCategory;
  keywords: string[];
  jurisprudence?: Jurisprudence[];
}

export const familyArticles: FamilyArticle[] = [
  // MARIAGE
  {
    article: "Loi 2007-022, Art. 2",
    title_fr: "Définition du mariage",
    title_mg: "Famaritana ny fanambadiana",
    description_fr: "Le mariage est l'union légitime d'un homme et d'une femme en vue de vivre ensemble et de fonder une famille.",
    description_mg: "Ny fanambadiana dia firaisana ara-dalàna eo amin'ny lehilahy sy vehivavy mba hiara-monina sy hanorina fianakaviana.",
    category: "mariage",
    keywords: ["mariage", "fanambadiana", "union", "époux", "mari", "femme", "couple"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 125/2015",
        date: "2015-06-15",
        summary_fr: "Le mariage coutumier non transcrit à l'état civil ne produit pas les effets juridiques du mariage civil.",
        summary_mg: "Ny fanambadiana ara-pomba tsy voasoratra dia tsy manana ny vokany ara-dalàna."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 3",
    title_fr: "Âge minimum du mariage",
    title_mg: "Taona farafahakeliny amin'ny fanambadiana",
    description_fr: "L'homme ne peut contracter mariage avant 18 ans révolus, la femme avant 18 ans révolus. Une dispense d'âge peut être accordée par le tribunal pour motif grave.",
    description_mg: "Ny lehilahy dia tsy mahazo manambady raha tsy feno 18 taona, toy izany koa ny vehivavy. Ny fitsarana dia afaka manome alalana raha misy antony lehibe.",
    category: "mariage",
    keywords: ["âge", "taona", "18 ans", "minimum", "dispense", "mineur"],
    jurisprudence: [
      {
        reference: "Tribunal de Première Instance Antananarivo, Jugement n° 458/2018",
        date: "2018-03-22",
        summary_fr: "La dispense d'âge peut être accordée en cas de grossesse, sous réserve du consentement des parents.",
        summary_mg: "Ny alalana momba ny taona dia azo omena raha bevohoka, raha manaiky ny ray aman-dreny."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 5",
    title_fr: "Consentement au mariage",
    title_mg: "Fanekena ny fanambadiana",
    description_fr: "Le mariage n'est valable que si les deux époux ont donné librement leur consentement. Tout mariage forcé est nul.",
    description_mg: "Ny fanambadiana dia tsy manan-kery raha tsy manaiky an-tsitrapo ny mpivady roa. Ny fanambadiana an-tery dia foana.",
    category: "mariage",
    keywords: ["consentement", "fanekena", "libre", "volontaire", "forcé", "an-tery"],
    jurisprudence: [
      {
        reference: "Cour d'Appel Antananarivo, Arrêt n° 89/2019",
        date: "2019-11-08",
        summary_fr: "Le mariage contracté sous la contrainte physique ou morale peut être annulé dans les deux ans suivant la célébration.",
        summary_mg: "Ny fanambadiana natao an-tery dia azo foana ao anatin'ny roa taona."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 10",
    title_fr: "Régimes matrimoniaux",
    title_mg: "Rafitry ny fanambadiana",
    description_fr: "Les époux peuvent choisir leur régime matrimonial : communauté de biens, séparation de biens, ou régime mixte. À défaut de choix, c'est la communauté réduite aux acquêts qui s'applique.",
    description_mg: "Ny mpivady dia afaka misafidy ny rafitry ny fananany: iombonana, tsy iombonana, na mitambatra. Raha tsy misy safidy, ny fananana niara-nahazo no iombonana.",
    category: "mariage",
    keywords: ["régime", "rafitra", "communauté", "séparation", "biens", "fananana"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 201/2017",
        date: "2017-09-12",
        summary_fr: "Le changement de régime matrimonial nécessite l'homologation du tribunal après deux ans de mariage.",
        summary_mg: "Ny fanovana ny rafitry ny fanambadiana dia mila fankatoavan'ny fitsarana aorian'ny roa taona."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 15",
    title_fr: "Devoirs des époux",
    title_mg: "Adidin'ny mpivady",
    description_fr: "Les époux se doivent mutuellement respect, fidélité, secours et assistance. Ils contribuent aux charges du mariage à proportion de leurs moyens.",
    description_mg: "Ny mpivady dia mifanome fanajana, tsy fivadihana, fanampiana ary fanohanana. Mandray anjara amin'ny adidy ara-pianakaviana arakaraka ny fananany izy ireo.",
    category: "mariage",
    keywords: ["devoirs", "adidy", "fidélité", "respect", "assistance", "charges"]
  },

  // DIVORCE
  {
    article: "Loi 2007-022, Art. 50",
    title_fr: "Causes de divorce",
    title_mg: "Antony hisarahana",
    description_fr: "Le divorce peut être demandé pour : faute grave, abandon du domicile conjugal, condamnation pénale, ou consentement mutuel.",
    description_mg: "Ny fisarahana dia azo angatahana noho: fahadisoana lehibe, fandaozana ny trano, fanamelohana, na fifanarahana.",
    category: "divorce",
    keywords: ["divorce", "fisarahana", "cause", "antony", "faute", "abandon"],
    jurisprudence: [
      {
        reference: "Cour d'Appel Toamasina, Arrêt n° 67/2020",
        date: "2020-04-15",
        summary_fr: "L'adultère constitue une faute grave justifiant le divorce aux torts exclusifs de l'époux fautif.",
        summary_mg: "Ny fijangajangana dia fahadisoana lehibe manamarina ny fisarahana amin'ny fahadisoan'ny mpivady diso."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 52",
    title_fr: "Divorce par consentement mutuel",
    title_mg: "Fisarahana ifanarahana",
    description_fr: "Les époux peuvent demander ensemble le divorce par consentement mutuel après deux ans de mariage. Ils doivent soumettre une convention sur les conséquences du divorce.",
    description_mg: "Ny mpivady dia afaka miara-mangataka fisarahana aorian'ny roa taona fanambadiana. Tsy maintsy manolotra fifanarahana momba ny vokatry ny fisarahana izy ireo.",
    category: "divorce",
    keywords: ["consentement mutuel", "ifanarahana", "convention", "accord", "amiable"],
    jurisprudence: [
      {
        reference: "Tribunal de Première Instance Antsirabe, Jugement n° 234/2021",
        date: "2021-07-20",
        summary_fr: "Le divorce par consentement mutuel nécessite une convention équilibrée sur la garde des enfants et le partage des biens.",
        summary_mg: "Ny fisarahana ifanarahana dia mitaky fifanarahana mirindra momba ny fitantanana ny zaza sy ny fizarana fananana."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 55",
    title_fr: "Pension alimentaire après divorce",
    title_mg: "Vola fivelomana aorian'ny fisarahana",
    description_fr: "L'époux qui a obtenu le divorce peut demander à l'autre une pension alimentaire s'il est dans le besoin et si l'autre a les moyens de la payer.",
    description_mg: "Ny mpivady nahazo ny fisarahana dia afaka mangataka vola fivelomana raha sahirana ary raha afaka mandoa ny iray hafa.",
    category: "divorce",
    keywords: ["pension", "vola", "alimentaire", "fivelomana", "besoin", "moyens"]
  },
  {
    article: "Loi 2007-022, Art. 58",
    title_fr: "Partage des biens après divorce",
    title_mg: "Fizarana fananana aorian'ny fisarahana",
    description_fr: "En cas de divorce, les biens communs sont partagés selon le régime matrimonial choisi ou selon les règles de la communauté réduite aux acquêts.",
    description_mg: "Rehefa misaraka, ny fananana iombonana dia zaraina araka ny rafitry ny fanambadiana voafidy na araka ny fananana niara-nahazo.",
    category: "divorce",
    keywords: ["partage", "fizarana", "biens", "fananana", "communs", "liquidation"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 178/2018",
        date: "2018-12-05",
        summary_fr: "Le partage inégal des biens peut être ordonné si un époux a contribué de manière prépondérante à l'acquisition des biens.",
        summary_mg: "Ny fizarana tsy mitovy dia azo didiana raha ny mpivady iray no nandray anjara be indrindra tamin'ny fahazoana ny fananana."
      }
    ]
  },

  // ENFANTS
  {
    article: "Loi 2007-022, Art. 70",
    title_fr: "Autorité parentale",
    title_mg: "Fahefan'ny ray aman-dreny",
    description_fr: "L'autorité parentale est exercée conjointement par les deux parents. Elle comprend la garde, l'éducation, l'entretien et la protection de l'enfant.",
    description_mg: "Ny fahefan'ny ray aman-dreny dia iarahana. Ao anatin'izany ny fitantanana, fanabeazana, fikarakarana ary fiarovana ny zaza.",
    category: "enfant",
    keywords: ["autorité parentale", "fahefana", "parents", "garde", "éducation", "zaza"]
  },
  {
    article: "Loi 2007-022, Art. 72",
    title_fr: "Garde de l'enfant après divorce",
    title_mg: "Fitantanana ny zaza aorian'ny fisarahana",
    description_fr: "En cas de divorce, le tribunal statue sur la garde de l'enfant en fonction de son intérêt supérieur. L'autre parent conserve un droit de visite.",
    description_mg: "Rehefa misaraka, ny fitsarana no manapa-kevitra momba ny fitantanana ny zaza araka ny soa ho azy. Ny ray na reny iray hafa dia manana zo hitsidika.",
    category: "enfant",
    keywords: ["garde", "fitantanana", "enfant", "zaza", "visite", "divorce"],
    jurisprudence: [
      {
        reference: "Cour d'Appel Antananarivo, Arrêt n° 156/2019",
        date: "2019-08-28",
        summary_fr: "L'intérêt supérieur de l'enfant prime sur les convenances des parents dans l'attribution de la garde.",
        summary_mg: "Ny soa ho an'ny zaza no ambony noho ny sitrapon'ny ray aman-dreny amin'ny fanomezana fitantanana."
      },
      {
        reference: "Tribunal de Première Instance Fianarantsoa, Jugement n° 312/2020",
        date: "2020-05-10",
        summary_fr: "Un enfant de plus de 13 ans peut exprimer sa préférence sur le parent gardien, mais le tribunal n'est pas lié par ce choix.",
        summary_mg: "Ny zaza mihoatra ny 13 taona dia afaka milaza ny safidiny, fa ny fitsarana tsy voatery hanaraka izany."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 75",
    title_fr: "Pension alimentaire pour enfant",
    title_mg: "Vola fiveloman-jaza",
    description_fr: "Le parent qui n'a pas la garde doit verser une pension alimentaire pour l'entretien et l'éducation de l'enfant, proportionnelle à ses ressources.",
    description_mg: "Ny ray na reny tsy mitantana dia tsy maintsy mandoa vola fivelomana ho an'ny fikarakarana sy fanabeazana ny zaza, arakaraka ny fidiram-bolany.",
    category: "enfant",
    keywords: ["pension", "vola", "enfant", "zaza", "alimentaire", "entretien"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 95/2021",
        date: "2021-03-15",
        summary_fr: "Le montant de la pension alimentaire peut être révisé en cas de changement significatif des ressources du débiteur ou des besoins de l'enfant.",
        summary_mg: "Ny vola fivelomana dia azo ovaina raha miova be ny fidiram-bolan'ny mpandoa na ny filan'ny zaza."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 78",
    title_fr: "Droit de l'enfant à être entendu",
    title_mg: "Zon'ny zaza henoina",
    description_fr: "L'enfant capable de discernement a le droit d'être entendu dans toute procédure le concernant. Son opinion est prise en considération selon son âge et sa maturité.",
    description_mg: "Ny zaza mahalala ny tsara sy ratsy dia manana zo henoina amin'ny raharaha momba azy. Ny heviny dia raisina an-tsaina araka ny taonany sy ny fahamatorany.",
    category: "enfant",
    keywords: ["entendu", "henoina", "opinion", "discernement", "procédure", "droit"]
  },

  // FILIATION
  {
    article: "Loi 2007-022, Art. 80",
    title_fr: "Filiation légitime",
    title_mg: "Firazanana ara-dalàna",
    description_fr: "L'enfant conçu ou né pendant le mariage a pour père le mari de la mère. C'est la présomption de paternité.",
    description_mg: "Ny zaza notorontoronina na teraka nandritra ny fanambadiana dia ny vadin-dreniny no rainy. Izany no finoana ny maha-ray.",
    category: "filiation",
    keywords: ["filiation", "firazanana", "légitime", "père", "ray", "présomption", "paternité"]
  },
  {
    article: "Loi 2007-022, Art. 82",
    title_fr: "Contestation de paternité",
    title_mg: "Fandavana ny maha-ray",
    description_fr: "Le mari peut contester la paternité de l'enfant s'il prouve qu'il n'est pas le père. L'action doit être intentée dans les deux ans de la naissance.",
    description_mg: "Ny lehilahy dia afaka mandà ny maha-ray azy raha afaka manaporofo fa tsy izy no ray. Ny fitoriana dia tsy maintsy atao ao anatin'ny roa taona.",
    category: "filiation",
    keywords: ["contestation", "fandavana", "paternité", "maha-ray", "preuve", "action"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 45/2016",
        date: "2016-05-20",
        summary_fr: "Le test ADN est admis comme preuve décisive dans les actions en contestation ou recherche de paternité.",
        summary_mg: "Ny fitsapana ADN dia raisina ho porofo farany amin'ny fitoriana momba ny maha-ray."
      }
    ]
  },
  {
    article: "Loi 2007-022, Art. 85",
    title_fr: "Reconnaissance d'enfant naturel",
    title_mg: "Fanafahana zaza tsy ara-panambadiana",
    description_fr: "L'enfant né hors mariage peut être reconnu volontairement par son père ou sa mère. La reconnaissance établit la filiation.",
    description_mg: "Ny zaza teraka tsy nisy fanambadiana dia azon'ny rainy na reniny ekena. Ny fanekena dia mametraka ny firazanana.",
    category: "filiation",
    keywords: ["reconnaissance", "fanafahana", "naturel", "hors mariage", "volontaire"]
  },
  {
    article: "Loi 2007-022, Art. 88",
    title_fr: "Recherche de paternité",
    title_mg: "Fikarohana ny maha-ray",
    description_fr: "L'enfant peut rechercher son père en justice. L'action est ouverte pendant toute la minorité de l'enfant et deux ans après sa majorité.",
    description_mg: "Ny zaza dia afaka mitady ny rainy eo amin'ny fitsarana. Ny fitoriana dia azo atao mandritra ny maha-zaza ary roa taona aorian'ny faha-18 taona.",
    category: "filiation",
    keywords: ["recherche", "fikarohana", "paternité", "maha-ray", "action", "tribunal"],
    jurisprudence: [
      {
        reference: "Tribunal de Première Instance Antananarivo, Jugement n° 567/2019",
        date: "2019-10-15",
        summary_fr: "La recherche de paternité peut être fondée sur des témoignages, des écrits, ou un test génétique.",
        summary_mg: "Ny fikarohana ny maha-ray dia azo iorenana amin'ny vavolombelona, taratasy, na fitsapana ADN."
      }
    ]
  },

  // ADOPTION
  {
    article: "Loi 2017-014, Art. 5",
    title_fr: "Conditions de l'adoption",
    title_mg: "Fepetra amin'ny fananganan-jaza",
    description_fr: "L'adoption est permise aux personnes âgées de plus de 30 ans, ayant au moins 15 ans de plus que l'enfant adopté.",
    description_mg: "Ny fananganan-jaza dia azo ataon'ny olona mihoatra ny 30 taona, ary mihoatra 15 taona noho ny zaza.",
    category: "adoption",
    keywords: ["adoption", "fananganan-jaza", "conditions", "âge", "taona", "adoptant"],
    jurisprudence: [{ reference: "Tribunal Civil Antananarivo, Jugement n° 89/2017", date: "2017-05-15", summary_fr: "La demande d'adoption d'un couple ayant moins de 15 ans de différence d'âge avec l'enfant a été rejetée conformément à l'article 5 de la loi 2017-014.", summary_mg: "Ny fangatahana fananganan-jazan'ny mpivady latsaky ny 15 taona ny elanelana amin'ny zaza dia nolavina araka ny andininy 5 ny lalàna 2017-014." }]
  },
  {
    article: "Loi 2017-014, Art. 8",
    title_fr: "Adoption plénière",
    title_mg: "Fananganan-jaza feno",
    description_fr: "L'adoption plénière confère à l'enfant une nouvelle filiation qui se substitue à sa filiation d'origine. Elle est irrévocable.",
    description_mg: "Ny fananganan-jaza feno dia manome firazanana vaovao ny zaza, izay manolo ny firazanana teo aloha. Tsy azo averina izany.",
    category: "adoption",
    keywords: ["plénière", "feno", "irrévocable", "filiation", "substitution"],
    jurisprudence: [
      {
        reference: "Cour d'Appel Antananarivo, Arrêt n° 234/2020",
        date: "2020-09-30",
        summary_fr: "L'adoption plénière ne peut être prononcée que si elle est conforme à l'intérêt supérieur de l'enfant.",
        summary_mg: "Ny fananganan-jaza feno dia tsy azo atao raha tsy mifanaraka amin'ny soa ho an'ny zaza."
      }
    ]
  },
  {
    article: "Loi 2017-014, Art. 12",
    title_fr: "Adoption simple",
    title_mg: "Fananganan-jaza tsotra",
    description_fr: "L'adoption simple crée un lien de filiation avec l'adoptant tout en maintenant la filiation d'origine. Elle peut être révoquée pour motifs graves.",
    description_mg: "Ny fananganan-jaza tsotra dia mametraka fifandraisana amin'ny mpanangan-jaza nefa mitazona ny firazanana teo aloha. Azo averina izany raha misy antony lehibe.",
    category: "adoption",
    keywords: ["simple", "tsotra", "révocable", "maintien", "filiation", "lien"]
  },

  // SUCCESSION FAMILIALE
  {
    article: "Loi 1968, Art. 745",
    title_fr: "Héritiers réservataires",
    title_mg: "Mpandova voatokana",
    description_fr: "Les descendants et le conjoint survivant sont héritiers réservataires. Ils ont droit à une part minimale de la succession (réserve héréditaire).",
    description_mg: "Ny taranaka sy ny mpivady sisa velona dia mpandova voatokana. Manana zo amin'ny anjara farany ambany amin'ny lova (réserve) izy ireo.",
    category: "succession",
    keywords: ["héritier", "mpandova", "réservataire", "réserve", "descendant", "conjoint"],
    jurisprudence: [
      {
        reference: "Cour Suprême, Arrêt n° 112/2018",
        date: "2018-07-25",
        summary_fr: "La réserve héréditaire protège les enfants contre une exhérédation totale par testament.",
        summary_mg: "Ny réserve héréditaire dia miaro ny zanaka amin'ny tsy fanomezana lova tanteraka amin'ny testamenta."
      }
    ]
  },
  {
    article: "Loi 1968, Art. 750",
    title_fr: "Droits du conjoint survivant",
    title_mg: "Zon'ny mpivady sisa velona",
    description_fr: "Le conjoint survivant hérite d'un quart de la succession en présence d'enfants, ou de la moitié en présence d'ascendants.",
    description_mg: "Ny mpivady sisa velona dia mandova ny ampahefatry ny lova raha misy zanaka, na ny antsasany raha misy ray aman-dreny.",
    category: "succession",
    keywords: ["conjoint", "mpivady", "survivant", "velona", "héritage", "quart", "moitié"]
  },
  {
    article: "Loi 1968, Art. 755",
    title_fr: "Testament",
    title_mg: "Didim-pananana",
    description_fr: "Toute personne majeure et saine d'esprit peut disposer de ses biens par testament, dans la limite de la quotité disponible.",
    description_mg: "Ny olona lehibe sy mazava saina dia afaka mandidy ny fananany amin'ny testamenta, ao anatin'ny fetra azo zaraina.",
    category: "succession",
    keywords: ["testament", "didim-pananana", "quotité", "disponible", "volonté"]
  },

  // PENSION ALIMENTAIRE
  {
    article: "Code Civil, Art. 203",
    title_fr: "Obligation alimentaire entre parents et enfants",
    title_mg: "Adidy ifanomezana fivelomana eo amin'ny ray aman-dreny sy zanaka",
    description_fr: "Les parents sont tenus de nourrir, entretenir et élever leurs enfants. Réciproquement, les enfants majeurs doivent assistance à leurs parents dans le besoin.",
    description_mg: "Ny ray aman-dreny dia tsy maintsy mamelona, mikarakara ary manabe ny zanany. Ny zanaka lehibe kosa dia tsy maintsy manampy ny ray aman-dreny sahirana.",
    category: "pension",
    keywords: ["obligation", "adidy", "alimentaire", "fivelomana", "parents", "enfants"],
    jurisprudence: [
      {
        reference: "Tribunal de Première Instance Mahajanga, Jugement n° 189/2021",
        date: "2021-11-08",
        summary_fr: "L'enfant majeur qui refuse d'aider ses parents dans le besoin peut être condamné à leur verser une pension.",
        summary_mg: "Ny zanaka lehibe mandà manampy ny ray aman-dreny sahirana dia azo saziana handoa vola fivelomana."
      }
    ]
  },
  {
    article: "Code Civil, Art. 207",
    title_fr: "Fixation de la pension alimentaire",
    title_mg: "Famaritana ny vola fivelomana",
    description_fr: "La pension alimentaire est fixée par le juge en fonction des besoins du créancier et des ressources du débiteur. Elle peut être révisée.",
    description_mg: "Ny vola fivelomana dia feran'ny mpitsara araka ny filan'ny mpandray sy ny fananan'ny mpandoa. Azo ovaina izany.",
    category: "pension",
    keywords: ["fixation", "famaritana", "pension", "besoins", "ressources", "révision"]
  },
  {
    article: "Code Civil, Art. 208",
    title_fr: "Abandon de famille",
    title_mg: "Fandaozana fianakaviana",
    description_fr: "Le défaut de paiement de la pension alimentaire pendant plus de deux mois constitue le délit d'abandon de famille.",
    description_mg: "Ny tsy fandoavana ny vola fivelomana mihoatra ny roa volana dia heloka fandaozana fianakaviana.",
    category: "pension",
    keywords: ["abandon", "fandaozana", "défaut", "paiement", "délit", "famille"],
    jurisprudence: [
      {
        reference: "Tribunal Correctionnel Antananarivo, Jugement n° 456/2019",
        date: "2019-06-12",
        summary_fr: "L'abandon de famille est puni d'emprisonnement de 3 mois à 1 an. Le paiement des arriérés peut atténuer la peine.",
        summary_mg: "Ny fandaozana fianakaviana dia saziana figadrana 3 volana ka hatramin'ny 1 taona. Ny fandoavana ny trosa dia mety hampihena ny sazy."
      }
    ]
  },
  // ARTICLES SUPPLEMENTAIRES
  {
    article: "Loi 2007-022, Art. 20",
    title_fr: "Domicile conjugal",
    title_mg: "Trano fonenan'ny mpivady",
    description_fr: "Le domicile conjugal est celui choisi d'un commun accord par les deux époux. À défaut d'accord, le juge peut être saisi pour fixer le domicile conjugal.",
    description_mg: "Ny trano fonenan'ny mpivady dia izay nifanarahan'ny mpivady roa. Raha tsy misy fifanarahana, ny mpitsara no afaka manapaka.",
    category: "mariage",
    keywords: ["domicile", "conjugal", "trano", "fonenana", "mpivady", "accord"]
  },
  {
    article: "Loi 2007-022, Art. 60",
    title_fr: "Séparation de corps",
    title_mg: "Fisarahana vatana",
    description_fr: "La séparation de corps met fin à l'obligation de cohabitation sans dissoudre le lien du mariage. Elle peut être demandée pour les mêmes causes que le divorce.",
    description_mg: "Ny fisarahana vatana dia manafoana ny adidy hiara-monina nefa tsy manapaka ny rohy fanambadiana. Azo angatahana amin'ny antony mitovy amin'ny fisarahana.",
    category: "divorce",
    keywords: ["séparation corps", "cohabitation", "fisarahana vatana", "sans divorce"]
  },
  {
    article: "Loi 2007-022, Art. 90",
    title_fr: "Émancipation du mineur",
    title_mg: "Fanafahana ny ankizy tsy ampy taona",
    description_fr: "Le mineur peut être émancipé par le mariage ou par décision de justice à partir de 16 ans. L'émancipation lui confère la pleine capacité juridique.",
    description_mg: "Ny ankizy tsy ampy taona dia azo afahana amin'ny fanambadiana na fanapahan-kevitry ny fitsarana manomboka amin'ny 16 taona. Ny fanafahana dia manome azy ny fahafahana ara-dalàna feno.",
    category: "enfant",
    keywords: ["émancipation", "mineur", "fanafahana", "16 ans", "capacité", "juridique"]
  },
  {
    article: "Code Civil, Art. 210",
    title_fr: "Obligation alimentaire des grands-parents",
    title_mg: "Adidin'ny raibe sy renibe amin'ny fivelomana",
    description_fr: "L'obligation alimentaire s'étend aux grands-parents envers leurs petits-enfants et réciproquement. À défaut des parents, les grands-parents peuvent être tenus de subvenir aux besoins de l'enfant.",
    description_mg: "Ny adidy amin'ny fivelomana dia mipaka amin'ny raibe sy renibe amin'ny zafikeliny ary mifamadika. Raha tsy misy ny ray aman-dreny, ny raibe sy renibe dia mety voatery mamelona ny zaza.",
    category: "pension",
    keywords: ["grands-parents", "raibe", "renibe", "obligation", "alimentaire", "petits-enfants", "zafikely"],
    jurisprudence: [
      { reference: "Cour d'Appel Antananarivo, Arrêt n° 178/2022", date: "2022-04-20", summary_fr: "Les grands-parents paternels ont été condamnés à verser une pension alimentaire pour leur petit-fils dont le père est décédé et la mère sans ressources.", summary_mg: "Ny raibe sy renibe amin'ny ray dia nohelohina handoa vola fivelomana ho an'ny zafikeliny izay maty ray ary tsy manana loharanon-karena ny reniny." }
    ]
  },
  {
    article: "Loi 2007-022, Art. 95",
    title_fr: "Protection des enfants en danger",
    title_mg: "Fiarovana ny ankizy am-pahasahiranana",
    description_fr: "L'enfant dont la santé, la sécurité, la moralité ou les conditions d'éducation sont compromises peut bénéficier de mesures de protection judiciaire. Le juge des enfants est compétent.",
    description_mg: "Ny ankizy izay mety ho tandindomin-doza ny fahasalamany, fiarovany, fitondran-tenany na fanabeazany dia afaka mahazo fepetra fiarovana ara-pitsarana. Ny mpitsaran'ny ankizy no mahefa.",
    category: "enfant",
    keywords: ["protection", "enfant", "danger", "fiarovana", "ankizy", "juge", "mesures"]
  },
];

export const familyCategories: Record<FamilyCategory, { fr: string; mg: string; icon: string }> = {
  mariage: { fr: "Mariage", mg: "Fanambadiana", icon: "💍" },
  divorce: { fr: "Divorce", mg: "Fisarahana", icon: "💔" },
  enfant: { fr: "Droits des enfants", mg: "Zon'ny zaza", icon: "👶" },
  filiation: { fr: "Filiation", mg: "Firazanana", icon: "👨‍👩‍👧" },
  adoption: { fr: "Adoption", mg: "Fananganan-jaza", icon: "🤱" },
  succession: { fr: "Succession", mg: "Lova", icon: "📜" },
  pension: { fr: "Pension alimentaire", mg: "Vola fivelomana", icon: "💰" }
};

export function searchFamilyArticles(query: string): FamilyArticle[] {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (searchTerms.length === 0) return [];

  const scored = familyArticles.map(article => {
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
