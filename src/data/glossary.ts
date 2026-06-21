export interface GlossaryTerm {
  term_fr: string;
  term_mg: string;
  definition_fr: string;
  definition_mg: string;
  example_fr?: string;
  example_mg?: string;
  relatedArticles?: string[];
  category: 'general' | 'crime' | 'procedure' | 'peine';
}

export const glossaryTerms: GlossaryTerm[] = [
  // Termes généraux
  {
    term_fr: "Infraction",
    term_mg: "Fandikan-dalàna",
    definition_fr: "Acte ou comportement interdit par la loi pénale et sanctionné par une peine. Les infractions se divisent en trois catégories : crimes, délits et contraventions.",
    definition_mg: "Asa na fitondran-tena voararan'ny lalàna famaizana ary saziana. Ny fandikan-dalàna dia mizara telo : heloka bevava, heloka ary fandikan-dalàna maivana.",
    category: "general"
  },
  {
    term_fr: "Crime",
    term_mg: "Heloka bevava",
    definition_fr: "Infraction la plus grave, punie de peines criminelles (travaux forcés, réclusion criminelle). Jugée par la Cour Criminelle.",
    definition_mg: "Fandikan-dalàna lehibe indrindra, saziana amin'ny sazy mafy (asa an-terivozona, figadrana). Tsaraina eo amin'ny Fitsarana ny Heloka Bevava.",
    example_fr: "Meurtre, viol, vol à main armée",
    example_mg: "Vonoan'olona, fanaolana, halatra miaraka amin'ny fiadiana",
    relatedArticles: ["Art. 295", "Art. 332", "Art. 382"],
    category: "crime"
  },
  {
    term_fr: "Délit",
    term_mg: "Heloka",
    definition_fr: "Infraction de gravité moyenne, punie de peines correctionnelles (emprisonnement de 1 mois à 10 ans, amende). Jugée par le Tribunal Correctionnel.",
    definition_mg: "Fandikan-dalàna antonony, saziana amin'ny figadrana (1 volana ka hatramin'ny 10 taona) sy lamandy. Tsaraina eo amin'ny Fitsarana Fanitsiana.",
    example_fr: "Vol simple, escroquerie, coups et blessures",
    example_mg: "Halatra tsotra, fitapitahana, kapoka sy ratra",
    relatedArticles: ["Art. 379", "Art. 400", "Art. 309"],
    category: "crime"
  },
  {
    term_fr: "Contravention",
    term_mg: "Fandikan-dalàna maivana",
    definition_fr: "Infraction la moins grave, punie de peines de police (amende, emprisonnement de 1 à 30 jours). Jugée par le Tribunal de Police.",
    definition_mg: "Fandikan-dalàna maivana indrindra, saziana amin'ny lamandy na figadrana fohy (1 ka hatramin'ny 30 andro). Tsaraina eo amin'ny Fitsarana Pôlisy.",
    example_fr: "Tapage nocturne, ivresse publique",
    example_mg: "Tabataba amin'ny alina, fahamamoana eny imasom-bahoaka",
    relatedArticles: ["Art. 471", "Art. 476"],
    category: "crime"
  },
  {
    term_fr: "Préméditation",
    term_mg: "Fikasana mialoha",
    definition_fr: "Dessein formé avant l'action de commettre un crime ou un délit. La préméditation est une circonstance aggravante.",
    definition_mg: "Fikasana voaomana mialoha ny fanaovana heloka. Ny préméditation dia toe-javatra manamafy ny sazy.",
    example_fr: "Un meurtre prémédité devient un assassinat",
    example_mg: "Ny vonoan'olona amin'ny fikasana mialoha dia lasa assassinat",
    relatedArticles: ["Art. 296"],
    category: "crime"
  },
  {
    term_fr: "Récidive",
    term_mg: "Fiverenana amin'ny heloka",
    definition_fr: "Situation d'une personne qui commet une nouvelle infraction après avoir été condamnée définitivement pour une infraction antérieure.",
    definition_mg: "Toe-javatra misy olona manao fandikan-dalàna vaovao aorian'ny efa notsaraina sy nohelohina tamin'ny heloka teo aloha.",
    category: "general"
  },
  {
    term_fr: "Circonstances aggravantes",
    term_mg: "Toe-javatra manamafy",
    definition_fr: "Éléments qui augmentent la gravité de l'infraction et donc la peine encourue.",
    definition_mg: "Zavatra mampitombo ny haben'ny fandikan-dalàna sy ny sazy.",
    example_fr: "Usage d'une arme, préméditation, victime mineure",
    example_mg: "Fampiasana fiadiana, fikasana mialoha, olona zatra no iharan'ny ratsy",
    category: "general"
  },
  {
    term_fr: "Circonstances atténuantes",
    term_mg: "Toe-javatra mampihamaivana",
    definition_fr: "Éléments qui diminuent la gravité de l'infraction et permettent de réduire la peine.",
    definition_mg: "Zavatra mampihena ny haben'ny fandikan-dalàna sy ny sazy.",
    example_fr: "Premier délit, provocation, état mental",
    example_mg: "Heloka voalohany, fanentanana, toe-tsaina",
    category: "general"
  },
  {
    term_fr: "Tentative",
    term_mg: "Fikasana / Fanandramana",
    definition_fr: "Commencement d'exécution d'un crime ou délit qui n'a été suspendu ou n'a manqué son effet que par des circonstances indépendantes de la volonté de l'auteur.",
    definition_mg: "Fanombohana fanaovana heloka izay tsy tanteraka noho ny toe-javatra tsy miankina amin'ny sitrapon'ny mpanao.",
    relatedArticles: ["Art. 2"],
    category: "general"
  },
  {
    term_fr: "Complicité",
    term_mg: "Fiaraha-miasa amin'ny heloka",
    definition_fr: "Participation à une infraction commise par autrui, par aide, assistance ou provocation.",
    definition_mg: "Fandraisana anjara amin'ny heloka ataon'ny hafa, amin'ny alalan'ny fanampiana na fanentanana.",
    category: "general"
  },
  {
    term_fr: "Légitime défense",
    term_mg: "Fiarovana ara-dalàna",
    definition_fr: "Droit de se défendre ou de défendre autrui contre une agression injuste, ce qui peut exonérer de toute responsabilité pénale.",
    definition_mg: "Zo hiaro tena na hiaro ny hafa amin'ny fanafihana tsy ara-drariny, izay mety hanafaka amin'ny andraikitra ara-pitsarana.",
    category: "general"
  },
  // Peines
  {
    term_fr: "Travaux forcés",
    term_mg: "Asa an-terivozona",
    definition_fr: "Peine criminelle consistant en l'obligation d'effectuer des travaux pénibles. Peut être à temps (5-20 ans) ou à perpétuité.",
    definition_mg: "Sazy lehibe izay mampanao asa mafy. Mety ho voafetra (5-20 taona) na mandrakizay.",
    category: "peine"
  },
  {
    term_fr: "Réclusion criminelle",
    term_mg: "Figadrana noho ny heloka bevava",
    definition_fr: "Peine privative de liberté prononcée pour les crimes, consistant en une détention dans un établissement pénitentiaire.",
    definition_mg: "Sazy manala ny fahalalahana noho ny heloka bevava, figadrana ao amin'ny fonja.",
    category: "peine"
  },
  {
    term_fr: "Emprisonnement",
    term_mg: "Figadrana",
    definition_fr: "Peine correctionnelle privative de liberté pour les délits, de 1 mois à 10 ans.",
    definition_mg: "Sazy manala fahalalahana noho ny heloka, manomboka amin'ny 1 volana ka hatramin'ny 10 taona.",
    category: "peine"
  },
  {
    term_fr: "Amende",
    term_mg: "Lamandy / Sazy vola",
    definition_fr: "Peine pécuniaire consistant en le paiement d'une somme d'argent à l'État.",
    definition_mg: "Sazy ara-bola aloa amin'ny fanjakana.",
    category: "peine"
  },
  {
    term_fr: "Sursis",
    term_mg: "Fampiatoana",
    definition_fr: "Mesure permettant de suspendre l'exécution d'une peine sous certaines conditions.",
    definition_mg: "Fepetra mamela ny fampiatoana ny fanatanterahana ny sazy raha voahaja ny fepetra sasany.",
    category: "peine"
  },
  {
    term_fr: "Peine de mort",
    term_mg: "Sazy fanamelohana ho faty",
    definition_fr: "Peine capitale consistant en l'exécution du condamné. Note : moratoire en vigueur à Madagascar.",
    definition_mg: "Sazy faratampony izay amonoana ny voaheloka. Fanamarihana : misy fampiatoana amin'izao fotoana izao any Madagasikara.",
    category: "peine"
  },
  // Procédure
  {
    term_fr: "Plainte",
    term_mg: "Fitarainana",
    definition_fr: "Acte par lequel une victime d'infraction porte les faits à la connaissance des autorités judiciaires.",
    definition_mg: "Asa izay ampahafantaran'ny olona niharan'ny ratsy ny manampahefana ny zava-nitranga.",
    category: "procedure"
  },
  {
    term_fr: "Garde à vue",
    term_mg: "Fihazonana",
    definition_fr: "Mesure permettant de retenir une personne suspectée dans les locaux de police pour les besoins de l'enquête.",
    definition_mg: "Fepetra mamela ny fitazonana olona ahiahiana ao amin'ny biraon'ny polisy ho an'ny fanadihadiana.",
    category: "procedure"
  },
  {
    term_fr: "Instruction",
    term_mg: "Fanadihadiana",
    definition_fr: "Phase de la procédure pénale durant laquelle un juge d'instruction recherche les preuves et met en examen les suspects.",
    definition_mg: "Dingana amin'ny fizotran'ny fitsarana izay ikarohan'ny mpitsara ny porofo sy ifampangana ny ahiahiana.",
    category: "procedure"
  },
  {
    term_fr: "Jugement",
    term_mg: "Fitsarana / Didim-pitsarana",
    definition_fr: "Décision rendue par une juridiction de premier degré.",
    definition_mg: "Fanapahan-kevitra omen'ny fitsarana ambaratonga voalohany.",
    category: "procedure"
  },
  {
    term_fr: "Appel",
    term_mg: "Fiantsoana",
    definition_fr: "Voie de recours permettant de faire rejuger une affaire par une juridiction supérieure.",
    definition_mg: "Lalana ahafahana mangataka ny hitsarana indray ny raharaha eo amin'ny fitsarana ambony kokoa.",
    category: "procedure"
  },
  {
    term_fr: "Prescription",
    term_mg: "Fahafoanan'ny sazy",
    definition_fr: "Extinction de l'action publique ou de la peine après l'écoulement d'un certain délai.",
    definition_mg: "Fahafoanan'ny raharaha na ny sazy rehefa tapitra ny fotoana voafaritra.",
    category: "procedure"
  },
  {
    term_fr: "Acquittement",
    term_mg: "Fanafahana",
    definition_fr: "Décision de la Cour d'assises déclarant l'accusé non coupable.",
    definition_mg: "Fanapahan-kevitry ny Fitsarana milaza fa tsy meloka ny voampanga.",
    category: "procedure"
  },
  {
    term_fr: "Condamnation",
    term_mg: "Fanamelohana",
    definition_fr: "Décision de justice déclarant une personne coupable et lui infligeant une peine.",
    definition_mg: "Fanapahan-kevitry ny fitsarana milaza fa meloka ny olona iray sy manome sazy azy.",
    category: "procedure"
  },
  // Termes spécifiques
  {
    term_fr: "Homicide",
    term_mg: "Vonoan'olona",
    definition_fr: "Fait de donner la mort à un être humain, volontairement (meurtre) ou involontairement (homicide involontaire).",
    definition_mg: "Famonoana olona, na an-tsitrapo (meurtre) na tsy an-tsitrapo (homicide involontaire).",
    relatedArticles: ["Art. 295", "Art. 320"],
    category: "crime"
  },
  {
    term_fr: "Vol",
    term_mg: "Halatra",
    definition_fr: "Soustraction frauduleuse de la chose d'autrui.",
    definition_mg: "Fakana an-tsokosoko ny fananan'ny hafa.",
    relatedArticles: ["Art. 379", "Art. 382", "Art. 384"],
    category: "crime"
  },
  {
    term_fr: "Escroquerie",
    term_mg: "Fitapitahana / Fandrika",
    definition_fr: "Obtention d'un bien par des manœuvres frauduleuses (faux nom, fausse qualité, abus de confiance).",
    definition_mg: "Fahazoana fananana amin'ny tetika hosoka (anarana sandoka, toetra sandoka, fanararaotana fitokisana).",
    relatedArticles: ["Art. 400"],
    category: "crime"
  },
  {
    term_fr: "Corruption",
    term_mg: "Kolikoly",
    definition_fr: "Fait de solliciter ou d'accepter des dons ou avantages pour accomplir ou s'abstenir d'accomplir un acte de sa fonction.",
    definition_mg: "Fangatahana na fandraisana fanomezana na tombontsoa mba hanatanterahana na tsy hanatanterahana asa.",
    relatedArticles: ["Art. 169"],
    category: "crime"
  },
  {
    term_fr: "Recel",
    term_mg: "Fanafenana entana halatra",
    definition_fr: "Fait de détenir, dissimuler ou transmettre une chose provenant d'un crime ou d'un délit.",
    definition_mg: "Fitanana, fanafenana na famindrana zavatra avy amin'ny heloka.",
    relatedArticles: ["Art. 423"],
    category: "crime"
  },
  {
    term_fr: "Faux et usage de faux",
    term_mg: "Hosoka sy fampiasana hosoka",
    definition_fr: "Altération frauduleuse de la vérité dans un écrit et utilisation de ce document falsifié.",
    definition_mg: "Fanovana hosoka ny marina ao amin'ny taratasy sy fampiasana io taratasy sandoka io.",
    relatedArticles: ["Art. 435", "Art. 440"],
    category: "crime"
  },
  {
    term_fr: "Outrage",
    term_mg: "Fanevatevana",
    definition_fr: "Paroles, gestes ou menaces adressés à une personne chargée d'une mission de service public.",
    definition_mg: "Teny, fihetsika na fandrahonana atao amin'ny olona manao asa fanompoam-bahoaka.",
    relatedArticles: ["Art. 226"],
    category: "crime"
  },
  {
    term_fr: "Diffamation",
    term_mg: "Fanendrikendrehana",
    definition_fr: "Allégation ou imputation d'un fait qui porte atteinte à l'honneur ou à la considération d'une personne.",
    definition_mg: "Filazana na fiampangana manimba ny voninahitra na ny laza tsaran'ny olona.",
    relatedArticles: ["Art. 283"],
    category: "crime"
  },
];

export function searchGlossary(query: string): GlossaryTerm[] {
  if (!query.trim()) return glossaryTerms;
  
  const searchTerms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
  
  if (searchTerms.length === 0) return glossaryTerms;

  return glossaryTerms.filter(term => {
    const allText = [
      term.term_fr.toLowerCase(),
      term.term_mg.toLowerCase(),
      term.definition_fr.toLowerCase(),
      term.definition_mg.toLowerCase(),
    ].join(' ');

    return searchTerms.some(t => allText.includes(t));
  });
}
