// ============================================================
// GLOSSAIRES pour Droit du Travail, Droit Foncier, Droit Famille
// ============================================================

// Domain-specific glossary, simulator data

export interface DomainGlossaryTerm {
  term_fr: string;
  term_mg: string;
  definition_fr: string;
  definition_mg: string;
  example_fr?: string;
  example_mg?: string;
}

// ---- CODE DU TRAVAIL ----
export const laborGlossary: DomainGlossaryTerm[] = [
  { term_fr: "Contrat de travail", term_mg: "Fifanarahana asa", definition_fr: "Convention par laquelle une personne s'engage à travailler pour le compte d'une autre moyennant rémunération.", definition_mg: "Fifanekena izay anoloran'ny olona iray ny asany ho an'ny olona iray hafa misy karama.", example_fr: "CDD, CDI, contrat d'apprentissage", example_mg: "CDD, CDI, fifanarahana fiofanana" },
  { term_fr: "CDD", term_mg: "Fifanarahana voafetra", definition_fr: "Contrat à Durée Déterminée : contrat dont la date de fin est fixée à l'avance. Maximum 2 ans renouvellement inclus.", definition_mg: "Fifanarahana voafetra ny fe-potoany. 2 taona farafahabetsany miaraka amin'ny fanavaozana." },
  { term_fr: "CDI", term_mg: "Fifanarahana tsy voafetra", definition_fr: "Contrat à Durée Indéterminée : contrat sans date de fin prédéfinie, résiliable avec préavis.", definition_mg: "Fifanarahana tsy voafetra ny fe-potoany, azo tapahina miaraka amin'ny fampilazana mialoha." },
  { term_fr: "SMIG", term_mg: "Karama farany ambany", definition_fr: "Salaire Minimum Interprofessionnel Garanti. Plancher de rémunération en dessous duquel aucun employeur ne peut descendre.", definition_mg: "Karama farany ambany azo omena. Tsy misy mpampiasa tokony handoa ambany noho izany." },
  { term_fr: "Période d'essai", term_mg: "Vanim-potoana fisedrana", definition_fr: "Période au début du contrat permettant d'évaluer les compétences du salarié. Maximum 6 mois, renouvelable une fois.", definition_mg: "Fe-potoana eo am-piandohan'ny fifanarahana hitsapana ny fahaiza-manaon'ny mpiasa. 6 volana farafahabetsany." },
  { term_fr: "Préavis", term_mg: "Fampilazana mialoha", definition_fr: "Délai obligatoire avant la rupture effective du contrat de travail, qu'il s'agisse de démission ou de licenciement.", definition_mg: "Fe-potoana tsy maintsy hajaina alohan'ny fanapahana ny fifanarahana, na fametraham-pialana na fandroahana." },
  { term_fr: "Licenciement abusif", term_mg: "Fandroahana tsy ara-dalàna", definition_fr: "Licenciement sans motif légitime ou ne respectant pas la procédure légale. Ouvre droit à des dommages-intérêts.", definition_mg: "Fandroahana tsy misy antony marina na tsy manaraka ny paika ara-dalàna. Manome zo amin'ny onitra." },
  { term_fr: "Congé de maternité", term_mg: "Fialan-tsasatra fiterahana", definition_fr: "Congé de 14 semaines accordé aux femmes salariées pour la grossesse et l'accouchement.", definition_mg: "Fialan-tsasatra 14 herinandro omena ny vehivavy mpiasa ho an'ny fitondrana vohoka sy fiterahana." },
  { term_fr: "Heures supplémentaires", term_mg: "Ora fanampiny", definition_fr: "Heures de travail effectuées au-delà de la durée légale hebdomadaire, donnant lieu à une majoration de salaire.", definition_mg: "Ora miasa mihoatra ny fotoana ara-dalàna, izay miteraka fitomboana karama." },
  { term_fr: "Convention collective", term_mg: "Fifanarahana iombonana", definition_fr: "Accord négocié entre syndicats de travailleurs et employeurs fixant les conditions de travail d'un secteur.", definition_mg: "Fifanekena ifampiraharahana eo amin'ny sendika sy mpampiasa mamaritra ny fepetra fiasana amin'ny sehatra iray." },
  { term_fr: "Inspection du travail", term_mg: "Fisafoana ny asa", definition_fr: "Service de l'État chargé de contrôler l'application du droit du travail dans les entreprises.", definition_mg: "Sampan'ny fanjakana miadidy ny fanaraha-maso ny fampiharana ny lalàna momba ny asa." },
  { term_fr: "Accident du travail", term_mg: "Loza eo am-piasana", definition_fr: "Accident survenu par le fait ou à l'occasion du travail, ouvrant droit à indemnisation.", definition_mg: "Loza mitranga noho ny asa na mandritra ny asa, manome zo amin'ny fanonerana." },
  { term_fr: "Grève", term_mg: "Fitokonana", definition_fr: "Cessation concertée du travail par les salariés pour faire valoir des revendications professionnelles.", definition_mg: "Fampiatoana ny asa ataon'ny mpiasa mba hitakiana ny zony." },
  { term_fr: "Bulletin de paie", term_mg: "Taratasy karama", definition_fr: "Document remis au salarié détaillant les éléments de sa rémunération et les retenues effectuées.", definition_mg: "Taratasy omena ny mpiasa mampiseho ny antsipiriany momba ny karamany sy ny fisintonana." },
];

// ---- DROIT FONCIER ----
export const landGlossary: DomainGlossaryTerm[] = [
  { term_fr: "Titre foncier", term_mg: "Titre foncier", definition_fr: "Document officiel définitif et inattaquable constatant le droit de propriété sur un immeuble immatriculé.", definition_mg: "Taratasy ofisialy farany tsy azo toherina mampiseho ny zo amin'ny tany voasoratra." },
  { term_fr: "Certificat foncier", term_mg: "Kara-tany", definition_fr: "Document délivré par le guichet foncier communal reconnaissant les droits sur un terrain non titré.", definition_mg: "Taratasy omen'ny birao fananana tany manaiky ny zo amin'ny tany tsy misy titre." },
  { term_fr: "Immatriculation", term_mg: "Fanoratana tany", definition_fr: "Procédure administrative permettant d'établir un titre foncier sur un terrain.", definition_mg: "Paika ara-pitondrana ahafahana mamorona titre foncier amin'ny tany." },
  { term_fr: "Bornage", term_mg: "Famerana tany", definition_fr: "Opération de délimitation matérielle d'un terrain par la pose de bornes.", definition_mg: "Asa famaritana ny fetran'ny tany amin'ny alalan'ny fametrahana borne." },
  { term_fr: "Bail emphytéotique", term_mg: "Hofan-tany ela", definition_fr: "Location de longue durée (18 à 99 ans) conférant au preneur un droit réel sur le terrain.", definition_mg: "Hofan-tany maharitra (18 ka hatramin'ny 99 taona) manome zo amin'ny tany." },
  { term_fr: "Hypothèque", term_mg: "Antoka tany", definition_fr: "Droit réel grevant un immeuble en garantie du paiement d'une dette, sans dépossession du propriétaire.", definition_mg: "Zo mametra ny tany ho antoka amin'ny trosa, nefa ny tompony no mbola mitana azy." },
  { term_fr: "Mutation", term_mg: "Famindrana fananana", definition_fr: "Transfert de propriété d'un bien immobilier d'une personne à une autre.", definition_mg: "Famindrana ny zo fananana tany avy amin'ny olona iray mankany amin'ny iray hafa." },
  { term_fr: "Domaine public", term_mg: "Fananana iombonan'ny fanjakana", definition_fr: "Ensemble des biens appartenant à l'État affectés à l'usage du public. Inaliénable.", definition_mg: "Ny fananana rehetra an'ny fanjakana natao ho fampiasan'ny vahoaka. Tsy azo amidy." },
  { term_fr: "PPNT", term_mg: "Fananana tsy misy titre", definition_fr: "Propriété Privée Non Titrée : terrain approprié selon les usages locaux sans titre officiel.", definition_mg: "Fananana tsy manana titre ofisialy fa miorina amin'ny fomba eo an-toerana." },
  { term_fr: "Guichet foncier", term_mg: "Birao fananana tany", definition_fr: "Service communal de proximité chargé de la gestion foncière locale et de la délivrance des certificats.", definition_mg: "Sampana eo anivon'ny kaominina miadidy ny fitantanana tany sy ny fanomezana kara-tany." },
  { term_fr: "Conservation foncière", term_mg: "Fitehirizana tany", definition_fr: "Service chargé de tenir les registres fonciers et de publier les droits réels immobiliers.", definition_mg: "Sampana miadidy ny fitahirizana ny rejisitra fananana tany sy ny famoahana ny zo." },
  { term_fr: "Action en revendication", term_mg: "Fitakiana fananana", definition_fr: "Action en justice permettant au vrai propriétaire de réclamer son bien contre un possesseur illégitime.", definition_mg: "Fitoriana eo amin'ny fitsarana ahafahana mitaky ny fananana amin'izay mitana azy tsy ara-dalàna." },
];

// ---- DROIT DE LA FAMILLE ----
export const familyGlossary: DomainGlossaryTerm[] = [
  { term_fr: "Mariage civil", term_mg: "Fanambadiana sivily", definition_fr: "Union légale entre deux personnes célébrée devant un officier de l'état civil.", definition_mg: "Firaisana ara-dalàna eo amin'ny olona roa atao eo anatrehan'ny lehiben'ny kaominina." },
  { term_fr: "Régime matrimonial", term_mg: "Rafitry ny fanambadiana", definition_fr: "Ensemble des règles qui gouvernent les rapports patrimoniaux entre époux.", definition_mg: "Ny fitsipika rehetra mifehy ny fifandraisan'ny fananana eo amin'ny mpivady." },
  { term_fr: "Divorce", term_mg: "Fisarahana", definition_fr: "Dissolution du lien matrimonial prononcée par un tribunal.", definition_mg: "Fanapahana ny rohy fanambadiana didian'ny fitsarana." },
  { term_fr: "Pension alimentaire", term_mg: "Vola fivelomana", definition_fr: "Somme versée régulièrement pour subvenir aux besoins d'un enfant ou d'un ex-conjoint.", definition_mg: "Vola aloa tsy tapaka ho an'ny fiveloman'ny zaza na ny mpivady teo aloha." },
  { term_fr: "Autorité parentale", term_mg: "Fahefan'ny ray aman-dreny", definition_fr: "Ensemble des droits et devoirs des parents sur leur enfant mineur : garde, éducation, protection.", definition_mg: "Ny zo sy adidy rehetra an'ny ray aman-dreny amin'ny zanany: fitantanana, fanabeazana, fiarovana." },
  { term_fr: "Filiation", term_mg: "Firazanana", definition_fr: "Lien juridique entre un enfant et ses parents. Peut être légitime, naturelle ou adoptive.", definition_mg: "Rohy ara-dalàna eo amin'ny zaza sy ny ray aman-dreniny. Mety ho ara-panambadiana, voajanahary, na fananganan-jaza." },
  { term_fr: "Adoption plénière", term_mg: "Fananganan-jaza feno", definition_fr: "Adoption qui confère à l'enfant une nouvelle filiation se substituant à l'ancienne. Irrévocable.", definition_mg: "Fananganan-jaza manome firazanana vaovao manolo ny teo aloha. Tsy azo averina." },
  { term_fr: "Adoption simple", term_mg: "Fananganan-jaza tsotra", definition_fr: "Adoption qui crée un nouveau lien de filiation tout en maintenant les liens avec la famille d'origine.", definition_mg: "Fananganan-jaza mamorona rohy vaovao nefa mitazona ny fifandraisana amin'ny fianakaviana teo aloha." },
  { term_fr: "Réserve héréditaire", term_mg: "Ampahany voatokana ho an'ny lova", definition_fr: "Part minimale de la succession qui revient obligatoirement aux héritiers réservataires.", definition_mg: "Anjaran'ny lova farany ambany tsy maintsy omena ny mpandova voatokana." },
  { term_fr: "Testament", term_mg: "Didim-pananana", definition_fr: "Acte par lequel une personne dispose de ses biens pour après sa mort.", definition_mg: "Taratasy izay anapahan'ny olona ny momba ny fananany ho aorian'ny fahafatesany." },
  { term_fr: "Consentement", term_mg: "Fanekena", definition_fr: "Accord libre et éclairé des deux parties, indispensable à la validité du mariage.", definition_mg: "Fifanekena malalaka sy mazava an'ny roa tonta, tsy maintsy misy mba hanan-kery ny fanambadiana." },
  { term_fr: "Jurisprudence", term_mg: "Jurisprudance", definition_fr: "Ensemble des décisions de justice qui interprètent la loi et servent de référence pour les affaires similaires.", definition_mg: "Ny fanapahan-kevitry ny fitsarana rehetra izay mandika ny lalàna ary manampy ny raharaha mitovy." },
  { term_fr: "Garde d'enfant", term_mg: "Fitantanana zaza", definition_fr: "Droit et devoir de s'occuper d'un enfant au quotidien, attribué par le juge en cas de séparation.", definition_mg: "Zo sy adidy hikarakara ny zaza isan'andro, omen'ny mpitsara rehefa misaraka." },
  { term_fr: "Droit de visite", term_mg: "Zo hitsidika", definition_fr: "Droit accordé au parent non gardien de voir et recevoir son enfant à des périodes fixées.", definition_mg: "Zo omena ny ray na reny tsy mitantana hitsidika sy handray ny zanany amin'ny fotoana voafaritra." },
];

// ============================================================
// SIMULATEURS pour Droit du Travail, Droit Foncier, Droit Famille
// ============================================================

export interface SimQuestion {
  id: string;
  question_fr: string;
  question_mg: string;
  options: {
    label_fr: string;
    label_mg: string;
    value: string;
    nextQuestion?: string;
    resultKeywords?: string[];
  }[];
}

// ---- SIMULATEUR TRAVAIL ----
export const laborSimQuestions: SimQuestion[] = [
  {
    id: "start", question_fr: "Quel est votre problème au travail ?", question_mg: "Inona ny olanao eo am-piasana ?",
    options: [
      { label_fr: "Licenciement / Fin de contrat", label_mg: "Fandroahana / Fahataperan'ny fifanarahana", value: "lic", nextQuestion: "lic_type" },
      { label_fr: "Salaire / Rémunération", label_mg: "Karama", value: "sal", nextQuestion: "sal_type" },
      { label_fr: "Congés", label_mg: "Fialana sasatra", value: "cong", nextQuestion: "cong_type" },
      { label_fr: "Conditions de travail / Sécurité", label_mg: "Fepetra fiasana / Fiarovana", value: "sec", nextQuestion: "sec_type" },
      { label_fr: "Contrat de travail", label_mg: "Fifanarahana asa", value: "contrat", nextQuestion: "contrat_type" },
    ]
  },
  {
    id: "lic_type", question_fr: "Quelle est la situation ?", question_mg: "Manao ahoana ny toe-javatra ?",
    options: [
      { label_fr: "J'ai été licencié sans motif", label_mg: "Voaroaka tsy misy antony aho", value: "abusif", resultKeywords: ["licenciement", "abusif", "tsy ara-dalàna"] },
      { label_fr: "J'ai été licencié sans préavis", label_mg: "Voaroaka tsy nisy fampilazana mialoha aho", value: "preavis", resultKeywords: ["préavis", "fampilazana", "licenciement"] },
      { label_fr: "Licenciement économique", label_mg: "Fandroahana ara-bola", value: "eco", resultKeywords: ["économique", "restructuration"] },
      { label_fr: "Je veux démissionner", label_mg: "Te-hametra-pialana aho", value: "demission", resultKeywords: ["démission", "fametraham-pialana"] },
      { label_fr: "Pas d'indemnité reçue", label_mg: "Tsy nahazo tambin-karama", value: "indemn", resultKeywords: ["indemnité", "tambin-karama"] },
    ]
  },
  {
    id: "sal_type", question_fr: "Quel problème de salaire ?", question_mg: "Inona ny olan'ny karama ?",
    options: [
      { label_fr: "Salaire non payé ou en retard", label_mg: "Karama tsy voaloa na tara", value: "non_paye", resultKeywords: ["salaire", "paiement", "karama"] },
      { label_fr: "Salaire inférieur au SMIG", label_mg: "Karama ambany noho ny SMIG", value: "smig", resultKeywords: ["SMIG", "minimum", "karama ambany"] },
      { label_fr: "Heures supplémentaires non payées", label_mg: "Ora fanampiny tsy voaloa", value: "hsup", resultKeywords: ["heures supplémentaires", "ora fanampiny"] },
      { label_fr: "Pas de bulletin de paie", label_mg: "Tsy misy taratasy karama", value: "bulletin", resultKeywords: ["bulletin", "paie", "taratasy karama"] },
    ]
  },
  {
    id: "cong_type", question_fr: "Quel type de congé ?", question_mg: "Inona no karazana fialan-tsasatra ?",
    options: [
      { label_fr: "Congé annuel refusé", label_mg: "Fialan-tsasatra isan-taona nolavina", value: "annuel", resultKeywords: ["congé", "annuel", "fialan-tsasatra"] },
      { label_fr: "Congé maternité", label_mg: "Fialan-tsasatra fiterahana", value: "mat", resultKeywords: ["maternité", "fiterahana", "14 semaines"] },
      { label_fr: "Congé maladie", label_mg: "Fialan-tsasatra aretina", value: "maladie", resultKeywords: ["maladie", "malade", "aretina"] },
      { label_fr: "Jours fériés travaillés sans majoration", label_mg: "Andro tsy iasana niasana tsy nisy fitomboana", value: "ferie", resultKeywords: ["férié", "andro tsy iasana", "majoration"] },
    ]
  },
  {
    id: "sec_type", question_fr: "Quel problème de sécurité ?", question_mg: "Inona ny olana amin'ny fiarovana ?",
    options: [
      { label_fr: "Accident du travail", label_mg: "Loza teo am-piasana", value: "accident", resultKeywords: ["accident", "loza", "travail"] },
      { label_fr: "Conditions dangereuses", label_mg: "Fepetra mampidi-doza", value: "danger", resultKeywords: ["sécurité", "santé", "fiarovana"] },
      { label_fr: "Maladie professionnelle", label_mg: "Aretina noho ny asa", value: "maladie_pro", resultKeywords: ["maladie professionnelle", "aretina"] },
    ]
  },
  {
    id: "contrat_type", question_fr: "Quelle question sur le contrat ?", question_mg: "Inona ny fanontaniana momba ny fifanarahana ?",
    options: [
      { label_fr: "Pas de contrat écrit", label_mg: "Tsy misy fifanarahana an-tsoratra", value: "ecrit", resultKeywords: ["contrat", "forme", "fifanarahana"] },
      { label_fr: "CDD renouvelé plus de 2 ans", label_mg: "CDD nohavaozina mihoatra ny 2 taona", value: "cdd", resultKeywords: ["CDD", "durée déterminée", "voafetra"] },
      { label_fr: "Période d'essai prolongée", label_mg: "Fisedrana lava loatra", value: "essai", resultKeywords: ["essai", "fisedrana", "période"] },
      { label_fr: "Apprentissage / Stage", label_mg: "Fiofanana", value: "stage", resultKeywords: ["apprentissage", "formation", "fiofanana"] },
    ]
  },
];

// ---- SIMULATEUR FONCIER ----
export const landSimQuestions: SimQuestion[] = [
  {
    id: "start", question_fr: "Quelle est votre situation foncière ?", question_mg: "Manao ahoana ny toe-javatra momba ny tany ?",
    options: [
      { label_fr: "Je veux sécuriser mon terrain", label_mg: "Te-hiantoka ny taniko aho", value: "securiser", nextQuestion: "sec_type" },
      { label_fr: "J'ai un litige foncier", label_mg: "Misy fifanolanana momba ny tany aho", value: "litige", nextQuestion: "lit_type" },
      { label_fr: "Je veux acheter/vendre un terrain", label_mg: "Te-hividy/hivarotra tany aho", value: "transaction", nextQuestion: "trans_type" },
      { label_fr: "Question sur l'héritage de terrain", label_mg: "Fanontaniana momba ny lova tany", value: "heritage", nextQuestion: "her_type" },
    ]
  },
  {
    id: "sec_type", question_fr: "Quel type de sécurisation ?", question_mg: "Inona ny karazana fiantohana ?",
    options: [
      { label_fr: "Mon terrain n'a aucun document", label_mg: "Tsy misy taratasy ny taniko", value: "aucun", resultKeywords: ["certificat", "kara-tany", "PPNT"] },
      { label_fr: "J'ai un certificat, je veux un titre", label_mg: "Manana kara-tany aho, te-hahazo titre", value: "titre", resultKeywords: ["titre foncier", "immatriculation"] },
      { label_fr: "Je veux faire borner mon terrain", label_mg: "Te-hametra ny taniko aho", value: "bornage", resultKeywords: ["bornage", "famerana", "bornes"] },
    ]
  },
  {
    id: "lit_type", question_fr: "Quel type de litige ?", question_mg: "Inona ny karazana fifanolanana ?",
    options: [
      { label_fr: "Quelqu'un occupe mon terrain", label_mg: "Misy olona mipetraka amin'ny taniko", value: "occupation", resultKeywords: ["revendication", "fitakiana", "détenteur"] },
      { label_fr: "Conflit de limites avec un voisin", label_mg: "Fifanolanana fetra amin'ny mpifanila", value: "limite", resultKeywords: ["bornage", "famerana", "contestation", "limites"] },
      { label_fr: "Opposition à une immatriculation", label_mg: "Fanoherana immatriculation", value: "opposition", resultKeywords: ["opposition", "fanoherana", "immatriculation"] },
      { label_fr: "Je veux une médiation", label_mg: "Te-hanao fampihavanana aho", value: "mediation", resultKeywords: ["médiation", "fampihavanana", "amiable"] },
    ]
  },
  {
    id: "trans_type", question_fr: "Quel type de transaction ?", question_mg: "Inona ny karazana fifanakalozana ?",
    options: [
      { label_fr: "Vente de terrain", label_mg: "Fivarotana tany", value: "vente", resultKeywords: ["vente", "fivarotana", "acte", "notaire"] },
      { label_fr: "Donation de terrain", label_mg: "Fanomezana tany", value: "donation", resultKeywords: ["donation", "fanomezana", "notaire"] },
      { label_fr: "Mise en location / Bail", label_mg: "Hofan-tany", value: "bail", resultKeywords: ["bail", "location", "hofan-tany", "loyer"] },
      { label_fr: "Hypothèque", label_mg: "Antoka tany", value: "hyp", resultKeywords: ["hypothèque", "antoka", "dette", "banque"] },
    ]
  },
  {
    id: "her_type", question_fr: "Quelle question sur l'héritage ?", question_mg: "Inona ny fanontaniana momba ny lova ?",
    options: [
      { label_fr: "Partage de terrain hérité", label_mg: "Fizarana tany lova", value: "partage", resultKeywords: ["partage", "fizarana", "succession"] },
      { label_fr: "Terrain en indivision", label_mg: "Tany tsy voazara", value: "indivision", resultKeywords: ["indivision", "tsy fizarana", "héritier"] },
      { label_fr: "Mutation après décès", label_mg: "Famindrana aorian'ny fahafatesana", value: "mutation", resultKeywords: ["mutation", "famindrana", "succession"] },
    ]
  },
];

// ---- SIMULATEUR FAMILLE ----
export const familySimQuestions: SimQuestion[] = [
  {
    id: "start", question_fr: "Quel est votre problème familial ?", question_mg: "Inona ny olanao ara-pianakaviana ?",
    options: [
      { label_fr: "Mariage", label_mg: "Fanambadiana", value: "mariage", nextQuestion: "mar_type" },
      { label_fr: "Divorce / Séparation", label_mg: "Fisarahana", value: "divorce", nextQuestion: "div_type" },
      { label_fr: "Enfants / Garde", label_mg: "Zaza / Fitantanana", value: "enfant", nextQuestion: "enf_type" },
      { label_fr: "Filiation / Paternité", label_mg: "Firazanana / Maha-ray", value: "filiation", nextQuestion: "fil_type" },
      { label_fr: "Adoption", label_mg: "Fananganan-jaza", value: "adoption", nextQuestion: "adop_type" },
      { label_fr: "Succession / Héritage", label_mg: "Lova", value: "succession", nextQuestion: "succ_type" },
    ]
  },
  {
    id: "mar_type", question_fr: "Quelle question sur le mariage ?", question_mg: "Inona ny fanontaniana momba ny fanambadiana ?",
    options: [
      { label_fr: "Conditions pour se marier", label_mg: "Fepetra hanambadiana", value: "conditions", resultKeywords: ["mariage", "âge", "consentement"] },
      { label_fr: "Choix du régime matrimonial", label_mg: "Fisafidianana rafitry ny fanambadiana", value: "regime", resultKeywords: ["régime", "communauté", "séparation", "biens"] },
      { label_fr: "Devoirs des époux", label_mg: "Adidin'ny mpivady", value: "devoirs", resultKeywords: ["devoirs", "fidélité", "assistance", "époux"] },
    ]
  },
  {
    id: "div_type", question_fr: "Quelle situation de divorce ?", question_mg: "Inona ny toe-javatra fisarahana ?",
    options: [
      { label_fr: "Divorce par consentement mutuel", label_mg: "Fisarahana ifanarahana", value: "mutuel", resultKeywords: ["consentement mutuel", "ifanarahana", "convention"] },
      { label_fr: "Divorce pour faute", label_mg: "Fisarahana noho ny fahadisoana", value: "faute", resultKeywords: ["divorce", "faute", "abandon"] },
      { label_fr: "Partage des biens", label_mg: "Fizarana fananana", value: "biens", resultKeywords: ["partage", "biens", "fananana", "liquidation"] },
      { label_fr: "Pension alimentaire après divorce", label_mg: "Vola fivelomana aorian'ny fisarahana", value: "pension", resultKeywords: ["pension", "alimentaire", "fivelomana"] },
    ]
  },
  {
    id: "enf_type", question_fr: "Quelle question sur les enfants ?", question_mg: "Inona ny fanontaniana momba ny zaza ?",
    options: [
      { label_fr: "Garde de l'enfant", label_mg: "Fitantanana ny zaza", value: "garde", resultKeywords: ["garde", "fitantanana", "enfant", "visite"] },
      { label_fr: "Pension alimentaire pour enfant", label_mg: "Vola fiveloman-jaza", value: "pension", resultKeywords: ["pension", "enfant", "alimentaire", "zaza"] },
      { label_fr: "Abandon de famille", label_mg: "Fandaozana fianakaviana", value: "abandon", resultKeywords: ["abandon", "fandaozana", "famille"] },
      { label_fr: "Droit de l'enfant à être entendu", label_mg: "Zon'ny zaza henoina", value: "entendu", resultKeywords: ["entendu", "opinion", "discernement"] },
    ]
  },
  {
    id: "fil_type", question_fr: "Quelle question de filiation ?", question_mg: "Inona ny fanontaniana momba ny firazanana ?",
    options: [
      { label_fr: "Recherche de paternité", label_mg: "Fikarohana maha-ray", value: "recherche", resultKeywords: ["recherche", "paternité", "maha-ray", "ADN"] },
      { label_fr: "Contestation de paternité", label_mg: "Fandavana maha-ray", value: "contestation", resultKeywords: ["contestation", "fandavana", "paternité"] },
      { label_fr: "Reconnaissance d'enfant", label_mg: "Fanekena zaza", value: "recon", resultKeywords: ["reconnaissance", "fanafahana", "naturel"] },
    ]
  },
  {
    id: "adop_type", question_fr: "Quel type d'adoption ?", question_mg: "Inona no karazana fananganan-jaza ?",
    options: [
      { label_fr: "Adoption plénière", label_mg: "Fananganan-jaza feno", value: "pleniere", resultKeywords: ["plénière", "feno", "irrévocable"] },
      { label_fr: "Adoption simple", label_mg: "Fananganan-jaza tsotra", value: "simple", resultKeywords: ["simple", "tsotra", "révocable"] },
      { label_fr: "Conditions pour adopter", label_mg: "Fepetra hananganan-jaza", value: "conditions", resultKeywords: ["adoption", "conditions", "âge", "30 ans"] },
    ]
  },
  {
    id: "succ_type", question_fr: "Quelle question de succession ?", question_mg: "Inona ny fanontaniana momba ny lova ?",
    options: [
      { label_fr: "Droits du conjoint survivant", label_mg: "Zon'ny mpivady sisa velona", value: "conjoint", resultKeywords: ["conjoint", "survivant", "héritage"] },
      { label_fr: "Réserve héréditaire", label_mg: "Ampahany voatokana", value: "reserve", resultKeywords: ["héritier", "réserve", "descendant"] },
      { label_fr: "Testament", label_mg: "Didim-pananana", value: "testament", resultKeywords: ["testament", "quotité", "disponible"] },
    ]
  },
];

// ═══════════════════════════════════════
// GLOSSAIRES ENRICHIS
// ═══════════════════════════════════════

// ---- PÉNAL (glossaire enrichi) ----
export const penalGlossaryExtra: DomainGlossaryTerm[] = [
  { term_fr: "Mise en examen", term_mg: "Fampangana", definition_fr: "Décision du juge d'instruction de considérer une personne comme suspecte. La personne bénéficie de la présomption d'innocence.", definition_mg: "Fanapahan-kevitry ny mpitsara hijery olona ho ahiahiana. Ny olona dia heverina ho tsy meloka mandra-pahaporofo.", example_fr: "Un suspect mis en examen pour vol", example_mg: "Olona ahiahiana noho ny halatra" },
  { term_fr: "Flagrant délit", term_mg: "Tratra am-bodiomby", definition_fr: "Infraction en train de se commettre ou qui vient de se commettre. Permet l'arrestation sans mandat.", definition_mg: "Heloka eo am-panaovana na vao avy natao. Mamela ny fisamborana tsy misy didim-pitsarana.", example_fr: "Voleur pris en flagrant délit la main dans le sac", example_mg: "Mpangalatra tratra teo am-panaovana" },
  { term_fr: "Mandat d'arrêt", term_mg: "Didim-pisamborana", definition_fr: "Ordre écrit du juge ordonnant aux forces de l'ordre d'arrêter une personne et de la conduire devant lui.", definition_mg: "Baiko an-tsoratra avy amin'ny mpitsara mandidy ny herin'ny filaminana hisambotra olona.", example_fr: "Un mandat d'arrêt international", example_mg: "Didim-pisamborana iraisam-pirenena" },
  { term_fr: "Sursis", term_mg: "Fampiatoana", definition_fr: "Mesure permettant de suspendre l'exécution d'une peine. Si le condamné ne commet pas de nouvelle infraction pendant le délai, la peine est effacée.", definition_mg: "Fepetra mamela ny fampiatoana ny fanatanterahana ny sazy. Raha tsy manao heloka vaovao ny voaheloka mandritra ny fe-potoana dia foanana ny sazy." },
  { term_fr: "Récidive", term_mg: "Fiverenana amin'ny heloka", definition_fr: "Situation d'une personne qui commet une nouvelle infraction après avoir déjà été condamnée. La récidive aggrave la peine.", definition_mg: "Toe-javatra misy olona manao heloka vaovao efa nohelohina teo aloha. Ny fiverenana dia manamafy ny sazy." },
  { term_fr: "Acquittement", term_mg: "Fanafahana", definition_fr: "Décision de la juridiction criminelle déclarant l'accusé non coupable. L'accusé est libéré immédiatement.", definition_mg: "Fanapahan-kevitry ny fitsarana milaza fa tsy meloka ny voampanga. Alefa avy hatrany ny voampanga." },
  { term_fr: "Relaxe", term_mg: "Fanafahana (heloka)", definition_fr: "Décision du tribunal correctionnel déclarant le prévenu non coupable d'un délit.", definition_mg: "Fanapahan-kevitry ny fitsarana fanitsiana milaza fa tsy meloka ny voampanga." },
  { term_fr: "Casier judiciaire", term_mg: "Rejisitra ara-pitsarana", definition_fr: "Document officiel qui recense les condamnations pénales d'une personne. Demandé pour certains emplois.", definition_mg: "Taratasy ofisialy mirakitra ny fanamelohana efa natao tamin'ny olona iray. Ilaina amin'ny asa sasany.", example_fr: "Extrait de casier judiciaire (bulletin n°3)", example_mg: "Sora-tanan'ny rejisitra (bulletin n°3)" },
];

// ---- Fonction de recherche dans un glossaire ----
export function searchDomainGlossary(glossary: DomainGlossaryTerm[], query: string): DomainGlossaryTerm[] {
  if (!query.trim()) return glossary;
  const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  if (!terms.length) return glossary;
  return glossary.filter(g => {
    const all = [g.term_fr, g.term_mg, g.definition_fr, g.definition_mg, g.example_fr || '', g.example_mg || ''].join(' ').toLowerCase();
    return terms.some(t => all.includes(t));
  });
}
