import { useState } from 'react';
import { Lang } from '../data/translations';
import { penalArticles, PenalArticle, getTypeInfo, InfractionType } from '../data/penalCode';
import { Zap, ChevronRight, ChevronLeft, RotateCcw, AlertTriangle, Shield, FileText, Scale, CheckCircle, Target } from 'lucide-react';

interface SimulatorPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

interface SimulatorQuestion {
  id: string;
  question_fr: string;
  question_mg: string;
  options: {
    label_fr: string;
    label_mg: string;
    value: string;
    nextQuestion?: string;
    result?: {
      type: InfractionType;
      keywords: string[];
    };
  }[];
}

const simulatorQuestions: SimulatorQuestion[] = [
  {
    id: "start",
    question_fr: "Quelle est la nature de l'acte commis ?",
    question_mg: "Inona no karazana asa natao ?",
    options: [
      { label_fr: "Atteinte aux personnes (violence, meurtre, etc.)", label_mg: "Fanafihana olona (herisetra, vonoan'olona, sns.)", value: "personne", nextQuestion: "personne_type" },
      { label_fr: "Atteinte aux biens (vol, destruction, etc.)", label_mg: "Fanafihana fananana (halatra, fandravana, sns.)", value: "bien", nextQuestion: "bien_type" },
      { label_fr: "Atteinte à l'ordre public", label_mg: "Fanakorontanana ny filaminam-bahoaka", value: "ordre", nextQuestion: "ordre_type" },
      { label_fr: "Infraction économique (escroquerie, corruption)", label_mg: "Heloka ara-bola (fitapitahana, kolikoly)", value: "economique", nextQuestion: "economique_type" },
    ]
  },
  // Atteinte aux personnes
  {
    id: "personne_type",
    question_fr: "Quel type d'atteinte aux personnes ?",
    question_mg: "Inona no karazana fanafihana olona ?",
    options: [
      { label_fr: "Mort de la victime", label_mg: "Maty ny niharan-doza", value: "mort", nextQuestion: "mort_intention" },
      { label_fr: "Blessures physiques", label_mg: "Ratra ara-batana", value: "blessure", nextQuestion: "blessure_gravite" },
      { label_fr: "Agression sexuelle", label_mg: "Fanafihana ara-nofo", value: "sexuel", nextQuestion: "sexuel_type" },
      { label_fr: "Menaces ou intimidation", label_mg: "Fandrahonana", value: "menace", result: { type: "délit", keywords: ["menace", "fandrahonana"] } },
      { label_fr: "Séquestration ou enlèvement", label_mg: "Fanagiazana na fitanana", value: "enlevement", result: { type: "crime", keywords: ["enlèvement", "séquestration"] } },
    ]
  },
  {
    id: "mort_intention",
    question_fr: "Y avait-il intention de donner la mort ?",
    question_mg: "Nisy fikasana hamono ve ?",
    options: [
      { label_fr: "Oui, avec préméditation", label_mg: "Eny, tamin'ny fikasana mialoha", value: "premedite", result: { type: "crime", keywords: ["assassinat", "préméditation"] } },
      { label_fr: "Oui, sans préméditation", label_mg: "Eny, tsy tamin'ny fikasana mialoha", value: "volontaire", result: { type: "crime", keywords: ["meurtre", "homicide"] } },
      { label_fr: "Non, c'était accidentel", label_mg: "Tsia, loza tsy nahy izany", value: "involontaire", result: { type: "délit", keywords: ["homicide involontaire", "accident"] } },
      { label_fr: "Coups ayant entraîné la mort", label_mg: "Kapoka nahatonga fahafatesana", value: "coups_mort", result: { type: "crime", keywords: ["coups mortels", "blessures mortelles"] } },
    ]
  },
  {
    id: "blessure_gravite",
    question_fr: "Quelle est la gravité des blessures ?",
    question_mg: "Manao ahoana ny haben'ny ratra ?",
    options: [
      { label_fr: "Graves (+ de 20 jours d'incapacité)", label_mg: "Mafy (+ 20 andro tsy fahafahana miasa)", value: "grave", result: { type: "délit", keywords: ["coups", "blessures", "violence"] } },
      { label_fr: "Légères (- de 20 jours)", label_mg: "Maivana (- 20 andro)", value: "legere", result: { type: "délit", keywords: ["coups légers", "blessure légère"] } },
      { label_fr: "Très légères (sans incapacité)", label_mg: "Maivana dia maivana", value: "mineure", result: { type: "contravention", keywords: ["voie de fait", "violence légère"] } },
    ]
  },
  {
    id: "sexuel_type",
    question_fr: "Quel type d'agression sexuelle ?",
    question_mg: "Inona no karazana fanafihana ara-nofo ?",
    options: [
      { label_fr: "Viol (pénétration forcée)", label_mg: "Fanaolana", value: "viol", nextQuestion: "victime_age" },
      { label_fr: "Attouchements sans consentement", label_mg: "Fikasihana tsy nahazoana alalana", value: "attouchement", result: { type: "crime", keywords: ["attentat pudeur", "attouchement"] } },
      { label_fr: "Harcèlement sexuel", label_mg: "Fanenjehana ara-nofo", value: "harcelement", result: { type: "délit", keywords: ["harcèlement", "atteinte mœurs"] } },
    ]
  },
  {
    id: "victime_age",
    question_fr: "La victime est-elle mineure (moins de 15 ans) ?",
    question_mg: "Zaza latsaky ny 15 taona ve ny niharan-doza ?",
    options: [
      { label_fr: "Oui", label_mg: "Eny", value: "oui", result: { type: "crime", keywords: ["viol mineur", "pédophilie"] } },
      { label_fr: "Non", label_mg: "Tsia", value: "non", result: { type: "crime", keywords: ["viol", "fanaolana"] } },
    ]
  },
  // Atteinte aux biens
  {
    id: "bien_type",
    question_fr: "Quel type d'atteinte aux biens ?",
    question_mg: "Inona no karazana fanafihana fananana ?",
    options: [
      { label_fr: "Vol / Soustraction", label_mg: "Halatra", value: "vol", nextQuestion: "vol_circonstances" },
      { label_fr: "Destruction / Dégradation", label_mg: "Fandravana", value: "destruction", nextQuestion: "destruction_gravite" },
      { label_fr: "Incendie volontaire", label_mg: "Fandoroana an-tsitrapo", value: "incendie", result: { type: "crime", keywords: ["incendie", "feu", "brûler"] } },
    ]
  },
  {
    id: "vol_circonstances",
    question_fr: "Dans quelles circonstances le vol a-t-il été commis ?",
    question_mg: "Tamin'ny toe-javatra manao ahoana no nanaovana ny halatra ?",
    options: [
      { label_fr: "Avec violence ou arme", label_mg: "Miaraka amin'ny herisetra na fiadiana", value: "violence", result: { type: "crime", keywords: ["vol violence", "braquage", "vol armé"] } },
      { label_fr: "Par effraction de nuit", label_mg: "Tamin'ny fanapotehana amin'ny alina", value: "effraction", result: { type: "crime", keywords: ["cambriolage", "effraction", "vol nuit"] } },
      { label_fr: "Vol de bétail (dahalo)", label_mg: "Halatra omby (dahalo)", value: "betail", result: { type: "crime", keywords: ["dahalo", "vol boeuf", "omby"] } },
      { label_fr: "Vol simple sans violence", label_mg: "Halatra tsotra tsy misy herisetra", value: "simple", result: { type: "délit", keywords: ["vol", "voler", "halatra"] } },
      { label_fr: "Vol par un employé", label_mg: "Halatra ataon'ny mpiasa", value: "domestique", result: { type: "délit", keywords: ["vol domestique", "employé"] } },
    ]
  },
  {
    id: "destruction_gravite",
    question_fr: "Quelle est l'ampleur des dégâts ?",
    question_mg: "Manao ahoana ny haben'ny fahasimbana ?",
    options: [
      { label_fr: "Importants (bâtiment, véhicule)", label_mg: "Lehibe (trano, fiara)", value: "important", result: { type: "délit", keywords: ["destruction", "dégradation", "vandalisme"] } },
      { label_fr: "Mineurs (clôture, graffiti)", label_mg: "Maivana (fefy, graffiti)", value: "mineur", result: { type: "contravention", keywords: ["dégradation légère", "clôture"] } },
    ]
  },
  // Ordre public
  {
    id: "ordre_type",
    question_fr: "Quel type de trouble à l'ordre public ?",
    question_mg: "Inona no karazana fanakorontanana ny filaminam-bahoaka ?",
    options: [
      { label_fr: "Outrage à agent public", label_mg: "Fanevatevana mpiasam-panjakana", value: "outrage", result: { type: "délit", keywords: ["outrage", "agent public", "police"] } },
      { label_fr: "Rébellion / Résistance", label_mg: "Fanoherana", value: "rebellion", result: { type: "délit", keywords: ["outrage", "rébellion"] } },
      { label_fr: "Tapage nocturne / Nuisance", label_mg: "Tabataba amin'ny alina", value: "tapage", result: { type: "contravention", keywords: ["tapage", "bruit", "nocturne"] } },
      { label_fr: "Ivresse publique", label_mg: "Fahamamoana eny imasom-bahoaka", value: "ivresse", result: { type: "contravention", keywords: ["ivresse", "alcool", "mamo"] } },
      { label_fr: "Atteinte à la sûreté de l'État", label_mg: "Fanimban'ny fanjakana", value: "surete", result: { type: "crime", keywords: ["sûreté état", "trahison", "complot"] } },
    ]
  },
  // Économique
  {
    id: "economique_type",
    question_fr: "Quel type d'infraction économique ?",
    question_mg: "Inona no karazana heloka ara-bola ?",
    options: [
      { label_fr: "Escroquerie / Arnaque", label_mg: "Fitapitahana / Fandrika", value: "escroquerie", result: { type: "délit", keywords: ["escroquerie", "arnaque", "fraude"] } },
      { label_fr: "Abus de confiance", label_mg: "Fanararaotana fitokisana", value: "abus", result: { type: "délit", keywords: ["abus confiance", "détournement"] } },
      { label_fr: "Corruption", label_mg: "Kolikoly", value: "corruption", result: { type: "délit", keywords: ["corruption", "pot-de-vin", "kolikoly"] } },
      { label_fr: "Détournement de fonds publics", label_mg: "Fanangonana vola fanjakana", value: "detournement", result: { type: "crime", keywords: ["détournement", "fonds publics"] } },
      { label_fr: "Faux et usage de faux", label_mg: "Hosoka sy fampiasana hosoka", value: "faux", result: { type: "délit", keywords: ["faux", "usage faux", "falsification"] } },
      { label_fr: "Recel (acheter du volé)", label_mg: "Fanafenana entana halatra", value: "recel", result: { type: "délit", keywords: ["recel", "dissimuler", "entana halatra"] } },
    ]
  },
];

function TypeBadge({ type, lang, large = false }: { type: InfractionType; lang: Lang; large?: boolean }) {
  const info = getTypeInfo(type, lang);
  const colors = {
    red: large ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800 border-red-200',
    amber: large ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 border-amber-200',
    blue: large ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-700 border-blue-200',
  };
  const icons = {
    red: <AlertTriangle size={large ? 20 : 14} />,
    amber: <Shield size={large ? 20 : 14} />,
    blue: <FileText size={large ? 20 : 14} />,
  };
  return (
    <span className={`inline-flex items-center gap-2 ${large ? 'px-4 py-2 rounded-xl text-base font-bold' : 'px-3 py-1 rounded-full text-xs font-bold border'} ${colors[info.color as keyof typeof colors]}`}>
      {icons[info.color as keyof typeof icons]}
      {info.label}
    </span>
  );
}

export default function SimulatorPage({ lang, t }: SimulatorPageProps) {
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<{ type: InfractionType; keywords: string[] } | null>(null);
  const [matchedArticles, setMatchedArticles] = useState<PenalArticle[]>([]);

  const currentQuestion = currentQuestionId 
    ? simulatorQuestions.find(q => q.id === currentQuestionId)
    : null;

  const handleStart = () => {
    setCurrentQuestionId("start");
    setHistory([]);
    setResult(null);
    setMatchedArticles([]);
  };

  const handleReset = () => {
    setCurrentQuestionId(null);
    setHistory([]);
    setResult(null);
    setMatchedArticles([]);
  };

  const handleOptionClick = (option: typeof simulatorQuestions[0]['options'][0]) => {
    if (option.result) {
      // End of simulation - find matching articles
      const articles = penalArticles.filter(article => {
        if (article.type !== option.result!.type) return false;
        return option.result!.keywords.some(kw => 
          article.keywords.some(ak => ak.toLowerCase().includes(kw.toLowerCase()))
        );
      }).slice(0, 5);
      
      setResult(option.result);
      setMatchedArticles(articles);
    } else if (option.nextQuestion) {
      setHistory(prev => [...prev, currentQuestionId!]);
      setCurrentQuestionId(option.nextQuestion);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevQuestion = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentQuestionId(prevQuestion);
    }
  };

  const progress = history.length + 1;
  const maxSteps = 4;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up delay-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <Zap className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.simulatorTitle[lang]}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {t.simulatorDesc[lang]}
        </p>
      </div>

      {/* Simulator content */}
      {!currentQuestionId && !result && (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center anim-stagger-up" style={{ animationDelay: '100ms' }}>
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D22630]/10 to-[#007A33]/10 flex items-center justify-center float-anim">
            <Target size={40} className="text-[#007A33]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {lang === 'fr' ? 'Identifiez la nature de l\'infraction' : 'Fantaro ny karazana fandikan-dalàna'}
          </h3>
          <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
            {lang === 'fr' 
              ? 'Répondez à quelques questions simples pour déterminer si l\'acte constitue un crime, un délit ou une contravention.'
              : 'Valio ny fanontaniana vitsivitsy tsotra mba hamantarana raha heloka bevava, heloka na fandikan-dalàna maivana ny asa.'}
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:from-red-700 hover:to-emerald-700 active:scale-95 transition-all duration-200 shadow-lg text-base"
          >
            {t.simulatorStart[lang]}
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Question display */}
      {currentQuestion && !result && (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden page-enter">
          {/* Progress bar */}
          <div className="bg-slate-100 px-6 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-500">
                {t.simulatorQuestion[lang]} {progress}/{maxSteps}
              </span>
              <span className="text-xs font-medium text-[#007A33]">
                {Math.round((progress / maxSteps) * 100)}%
              </span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#D22630] to-[#007A33] transition-all duration-300"
                style={{ width: `${(progress / maxSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
              {lang === 'fr' ? currentQuestion.question_fr : currentQuestion.question_mg}
            </h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                  className="anim-stagger-left card-hover w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-[#007A33] hover:bg-[#007A33]/5 transition-all duration-200 group"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#007A33] group-hover:text-white flex items-center justify-center text-sm font-bold text-slate-600 transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                      {lang === 'fr' ? option.label_fr : option.label_mg}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Back button */}
            {history.length > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ChevronLeft size={16} />
                {t.simulatorPrev[lang]}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Result display */}
      {result && (
        <div className="space-y-6 page-enter">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className={`p-6 ${result.type === 'crime' ? 'bg-red-50' : result.type === 'délit' ? 'bg-amber-50' : 'bg-blue-50'}`}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={24} className="text-[#007A33]" />
                <h3 className="text-lg font-bold text-slate-900">
                  {t.simulatorResult[lang]}
                </h3>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <p className="text-sm text-slate-600 mb-2">{t.simulatorCategory[lang]} :</p>
                  <TypeBadge type={result.type} lang={lang} large />
                </div>
                <div className="sm:ml-auto">
                  <p className="text-sm text-slate-600">
                    {getTypeInfo(result.type, lang).description}
                  </p>
                </div>
              </div>
            </div>

            {/* Matched articles */}
            {matchedArticles.length > 0 && (
              <div className="p-6 border-t border-slate-200">
                <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Scale size={18} className="text-[#007A33]" />
                  {lang === 'fr' ? 'Articles correspondants' : 'Lahatsoratra mifanaraka'}
                </h4>
                <div className="space-y-3">
                  {matchedArticles.map(article => (
                    <div key={article.article} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-sm font-bold text-slate-900 bg-slate-200 px-2.5 py-0.5 rounded-md">
                          {article.article}
                        </span>
                        <TypeBadge type={article.type} lang={lang} />
                      </div>
                      <h5 className="font-semibold text-slate-800 mb-1">
                        {lang === 'fr' ? article.title_fr : article.title_mg}
                      </h5>
                      <p className="text-xs text-slate-600">
                        {lang === 'fr' ? article.penalty_fr : article.penalty_mg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reset button */}
          <div className="text-center">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 active:scale-95 transition-all duration-200 border border-slate-200"
            >
              <RotateCcw size={18} />
              {t.simulatorReset[lang]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
