import { useState, useMemo } from 'react';
import { Lang } from '../data/translations';
import { Search, ChevronDown, ChevronUp, ArrowLeft, Gavel, Info, Filter, BookOpen, BookText, Zap, Compass, ChevronRight, ChevronLeft, RotateCcw, CheckCircle, Heart, Share2, Clock, X } from 'lucide-react';
import { useSearchHistory } from '../hooks/useSearchHistory';

import { penalArticles, searchArticles as searchPenalArticles, getTypeInfo, PenalArticle, InfractionType } from '../data/penalCode';
import { laborArticles, searchLaborArticles, laborCategories } from '../data/laborCode';
import { landArticles, searchLandArticles, landCategories } from '../data/landLaw';
import { familyArticles, searchFamilyArticles, familyCategories, Jurisprudence } from '../data/familyLaw';
import { laborGlossary, landGlossary, familyGlossary, laborSimQuestions, landSimQuestions, familySimQuestions, searchDomainGlossary, DomainGlossaryTerm, SimQuestion } from '../data/domainExtras';
import { glossaryTerms } from '../data/glossary';

type LegalDomain = 'penal' | 'labor' | 'land' | 'family';
type SubTab = 'search' | 'explorer' | 'simulator' | 'glossary';

interface LegalDomainPageProps {
  domain: LegalDomain;
  lang: Lang;
  t: typeof import('../data/translations').translations;
  onBack: () => void;
  isFavorite?: (articleId: string, domain: string) => boolean;
  onToggleFavorite?: (article: any, domain: string) => void;
}

const domainConfig: Record<LegalDomain, { icon: string; gradient: string; accent: string }> = {
  penal: { icon: '⚖️', gradient: 'from-red-600 to-red-700', accent: '#D22630' },
  labor: { icon: '💼', gradient: 'from-blue-600 to-blue-700', accent: '#2563eb' },
  land: { icon: '🏠', gradient: 'from-emerald-600 to-emerald-700', accent: '#007A33' },
  family: { icon: '👨‍👩‍👧‍👦', gradient: 'from-purple-600 to-purple-700', accent: '#7c3aed' },
};

// Penal-specific simulator questions

const penalSimQuestions: SimQuestion[] = [
  { id:"start", question_fr:"Quelle est la nature de l'acte ?", question_mg:"Inona no karazana asa natao ?", options:[
    { label_fr:"Atteinte aux personnes", label_mg:"Fanafihana olona", value:"p", nextQuestion:"p1" },
    { label_fr:"Atteinte aux biens", label_mg:"Fanafihana fananana", value:"b", nextQuestion:"b1" },
    { label_fr:"Ordre public", label_mg:"Filaminam-bahoaka", value:"o", nextQuestion:"o1" },
    { label_fr:"Infraction économique", label_mg:"Heloka ara-bola", value:"e", nextQuestion:"e1" },
  ]},
  { id:"p1", question_fr:"Quel type ?", question_mg:"Inona no karazany ?", options:[
    { label_fr:"Mort de la victime", label_mg:"Maty ny niharan-doza", value:"m", nextQuestion:"p2" },
    { label_fr:"Blessures", label_mg:"Ratra", value:"bl", resultKeywords:["coups","blessures","violence"] },
    { label_fr:"Agression sexuelle", label_mg:"Fanafihana ara-nofo", value:"s", resultKeywords:["viol","fanaolana"] },
    { label_fr:"Menaces / Enlèvement", label_mg:"Fandrahonana / Fanagiazana", value:"me", resultKeywords:["menace","enlèvement"] },
  ]},
  { id:"p2", question_fr:"Intentionnel ?", question_mg:"An-tsitrapo ve ?", options:[
    { label_fr:"Oui, prémédité", label_mg:"Eny, voaomana mialoha", value:"y1", resultKeywords:["assassinat","préméditation"] },
    { label_fr:"Oui, sans préméditation", label_mg:"Eny, tsy voaomana", value:"y2", resultKeywords:["meurtre","homicide"] },
    { label_fr:"Non, accidentel", label_mg:"Tsia, loza", value:"n", resultKeywords:["homicide involontaire","accident"] },
  ]},
  { id:"b1", question_fr:"Quel type ?", question_mg:"Inona no karazany ?", options:[
    { label_fr:"Vol avec violence/arme", label_mg:"Halatra an-keriny", value:"vv", resultKeywords:["vol violence","braquage"] },
    { label_fr:"Vol de bétail (dahalo)", label_mg:"Halatra omby (dahalo)", value:"da", resultKeywords:["dahalo","vol boeuf"] },
    { label_fr:"Vol simple", label_mg:"Halatra tsotra", value:"vs", resultKeywords:["vol","voler","halatra"] },
    { label_fr:"Destruction / Incendie", label_mg:"Fandravana / Fandoroana", value:"des", resultKeywords:["destruction","incendie"] },
  ]},
  { id:"o1", question_fr:"Quel type ?", question_mg:"Inona no karazany ?", options:[
    { label_fr:"Outrage à agent / Rébellion", label_mg:"Fanevatevana mpiasam-panjakana", value:"out", resultKeywords:["outrage","agent public"] },
    { label_fr:"Tapage / Ivresse", label_mg:"Tabataba / Fahamamoana", value:"tap", resultKeywords:["tapage","ivresse","bruit"] },
    { label_fr:"Atteinte à la sûreté de l'État", label_mg:"Fanimban'ny fanjakana", value:"sur", resultKeywords:["sûreté état","trahison"] },
  ]},
  { id:"e1", question_fr:"Quel type ?", question_mg:"Inona no karazany ?", options:[
    { label_fr:"Escroquerie / Arnaque", label_mg:"Fitapitahana", value:"esc", resultKeywords:["escroquerie","arnaque","fraude"] },
    { label_fr:"Corruption", label_mg:"Kolikoly", value:"cor", resultKeywords:["corruption","pot-de-vin"] },
    { label_fr:"Faux et usage de faux", label_mg:"Hosoka", value:"faux", resultKeywords:["faux","usage faux","falsification"] },
    { label_fr:"Détournement / Abus de confiance", label_mg:"Fanararaotana", value:"det", resultKeywords:["détournement","abus confiance"] },
  ]},
];

// ===== SUB-COMPONENTS =====

function PenalBadge({ type, lang }: { type: InfractionType; lang: Lang }) {
  const info = getTypeInfo(type, lang);
  const c: Record<string, string> = { red:'bg-red-100 text-red-800', amber:'bg-amber-50 text-amber-700', blue:'bg-blue-50 text-blue-700' };
  return <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${c[info.color]}`}>{info.label}</span>;
}

function CatBadge({ label, icon }: { label: string; icon: string }) {
  return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">{icon} {label}</span>;
}

function JuriBlock({ jurisprudence, lang }: { jurisprudence: Jurisprudence[]; lang: Lang }) {
  if (!jurisprudence?.length) return null;
  return (
    <div className="mt-3 bg-purple-50 rounded-lg p-3 border border-purple-200">
      <div className="flex items-center gap-2 text-xs font-bold text-purple-700 mb-2"><BookOpen size={14} />Jurisprudence</div>
      {jurisprudence.map((j, i) => (
        <div key={i} className="bg-white rounded-lg p-2 border border-purple-100 mb-1 last:mb-0">
          <div className="flex justify-between text-[10px] text-purple-600 mb-1"><span className="font-semibold">{j.reference}</span><span>{j.date}</span></div>
          <p className="text-xs text-slate-700 italic">{lang === 'fr' ? j.summary_fr : j.summary_mg}</p>
        </div>
      ))}
    </div>
  );
}

// ===== ARTICLE LIST (shared by search & explorer) =====
function ArticleList({ articles, domain, lang, t, categories, isFavorite, onToggleFavorite }: {
  articles: any[]; domain: LegalDomain; lang: Lang; t: any; categories: any;
  isFavorite?: (articleId: string, domain: string) => boolean;
  onToggleFavorite?: (article: any, domain: string) => void;
}) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const isPenal = domain === 'penal';

  if (!articles.length) return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
      <Search size={28} className="mx-auto mb-3 text-slate-400" />
      <p className="text-slate-500 text-sm">{t.noResults[lang]}</p>
    </div>
  );

  return (
    <div className="space-y-2">
      {articles.map((article: any, idx: number) => {
        const isExpanded = expandedIdx === idx;
        const hasJuri = 'jurisprudence' in article && article.jurisprudence?.length;
        const faved = isFavorite ? isFavorite(article.article, domain) : false;
        return (
          <div key={article.article + idx} className="card-hover bg-white rounded-xl border border-slate-200 overflow-hidden border-l-4" style={{ borderLeftColor: domainConfig[domain].accent }}>
            <div className="flex items-start">
              <button onClick={() => setExpandedIdx(isExpanded ? null : idx)} className="flex-1 text-left p-4 hover:bg-slate-50 transition-colors min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-xs font-bold text-slate-900 bg-slate-200 px-2 py-0.5 rounded-md">{article.article}</span>
                      {isPenal && <PenalBadge type={(article as PenalArticle).type} lang={lang} />}
                      {!isPenal && categories && <CatBadge label={categories[article.category]?.[lang] || ''} icon={categories[article.category]?.icon || ''} />}
                      {hasJuri && <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[9px] font-bold rounded-full">📚</span>}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{lang === 'fr' ? article.title_fr : article.title_mg}</h3>
                  </div>
                  {isExpanded ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                </div>
              </button>
              {/* Favorite button */}
              {onToggleFavorite && (
                <button
                  onClick={(e) => { e.stopPropagation(); onToggleFavorite(article, domain); }}
                  className={`shrink-0 p-3 mt-2 mr-1 rounded-lg transition-all active:scale-75 ${faved ? 'text-red-500 hover:text-red-600' : 'text-slate-300 hover:text-red-400'}`}
                  title={faved ? (lang === 'fr' ? 'Retirer des favoris' : 'Esory amin\'ny tiana') : (lang === 'fr' ? 'Ajouter aux favoris' : 'Ampio amin\'ny tiana')}
                >
                  <Heart size={18} fill={faved ? 'currentColor' : 'none'} />
                </button>
              )}
            </div>
            {isExpanded && (
              <div className="px-4 pb-4 pt-1 space-y-2 border-t border-slate-100">
                <div><div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-0.5"><Info size={12} />{t.description[lang]}</div><p className="text-sm text-slate-600 pl-4 leading-relaxed">{lang === 'fr' ? article.description_fr : article.description_mg}</p></div>
                {isPenal && (
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-0.5"><Gavel size={12} className="text-red-500" />{t.penalty[lang]}</div>
                    <p className="text-sm font-medium text-red-600 pl-4">{lang === 'fr' ? (article as PenalArticle).penalty_fr : (article as PenalArticle).penalty_mg}</p>
                  </div>
                )}
                {hasJuri && <JuriBlock jurisprudence={article.jurisprudence} lang={lang} />}
                {/* Share button */}
                <div className="flex gap-2 pt-2 border-t border-slate-100 mt-2">
                  <a href={`https://wa.me/?text=${encodeURIComponent(`${article.article} — ${lang === 'fr' ? article.title_fr : article.title_mg}\n\n${lang === 'fr' ? article.description_fr : article.description_mg}${article.penalty_fr ? `\n\n⚖️ ${lang === 'fr' ? 'Peine' : 'Sazy'}: ${lang === 'fr' ? article.penalty_fr : article.penalty_mg}` : ''}\n\n— Juridique Malagasy`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-[11px] font-bold rounded-lg hover:bg-[#1da851] active:scale-95 transition-all">
                    <Share2 size={12} />WhatsApp
                  </a>
                  <button onClick={() => { navigator.clipboard.writeText(`${article.article} — ${lang === 'fr' ? article.title_fr : article.title_mg}\n${lang === 'fr' ? article.description_fr : article.description_mg}`); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-200 active:scale-95 transition-all">
                    {lang === 'fr' ? 'Copier' : 'Adikao'}
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===== SIMULATOR SUB-COMPONENT =====
function DomainSimulator({ questions, articles, lang, domain }: { questions: SimQuestion[]; articles: any[]; searchFn?: (q: string) => any[]; lang: Lang; domain: LegalDomain }) {
  const [qId, setQId] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<string[] | null>(null);

  const currentQ = qId ? questions.find(q => q.id === qId) : null;

  const matchedArticles = useMemo(() => {
    if (!result) return [];
    return articles.filter((a: any) => {
      const kws: string[] = a.keywords || [];
      return result.some(rk => kws.some((k: string) => k.toLowerCase().includes(rk.toLowerCase())));
    }).slice(0, 6);
  }, [result, articles]);

  const handleOption = (opt: SimQuestion['options'][0]) => {
    if (opt.resultKeywords) {
      setResult(opt.resultKeywords);
    } else if (opt.nextQuestion) {
      setHistory(p => [...p, qId!]);
      setQId(opt.nextQuestion);
    }
  };

  const reset = () => { setQId(null); setHistory([]); setResult(null); };
  const back = () => { if (history.length) { setQId(history[history.length - 1]); setHistory(p => p.slice(0, -1)); } };

  if (!qId && !result) return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center anim-stagger-up" style={{ animationDelay: '100ms' }}>
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center float-anim"><Zap size={32} style={{ color: domainConfig[domain].accent }} /></div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{lang === 'fr' ? 'Simulateur interactif' : 'Mpanandrana'}</h3>
      <p className="text-sm text-slate-500 mb-4 max-w-sm mx-auto">{lang === 'fr' ? 'Répondez aux questions pour trouver les articles pertinents.' : 'Valio ny fanontaniana mba hahitana ny lahatsoratra mifanaraka.'}</p>
      <button onClick={() => setQId('start')} className="px-6 py-3 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all">{lang === 'fr' ? 'Commencer' : 'Atombohy'} <ChevronRight size={16} className="inline ml-1" /></button>
    </div>
  );

  if (result) return (
    <div className="space-y-4 page-enter">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="p-5 bg-emerald-50"><div className="flex items-center gap-2 mb-2"><CheckCircle size={20} className="text-emerald-600" /><h3 className="font-bold text-slate-900">{lang === 'fr' ? 'Résultat' : 'Vokatra'}</h3></div><p className="text-sm text-slate-600">{lang === 'fr' ? `${matchedArticles.length} article(s) trouvé(s)` : `${matchedArticles.length} lahatsoratra hita`}</p></div>
        {matchedArticles.length > 0 && (
          <div className="p-4 space-y-2">
            {matchedArticles.map((a: any, i: number) => (
              <div key={i} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-xs font-bold bg-slate-200 px-2 py-0.5 rounded-md mr-2">{a.article}</span>
                <span className="text-sm font-semibold text-slate-800">{lang === 'fr' ? a.title_fr : a.title_mg}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-center"><button onClick={reset} className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-200 active:scale-95 transition-all"><RotateCcw size={16} className="inline mr-1.5" />{lang === 'fr' ? 'Recommencer' : 'Avereno'}</button></div>
    </div>
  );

  if (!currentQ) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden page-enter">
      <div className="bg-slate-100 px-5 py-3">
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#D22630] to-[#007A33] transition-all duration-300" style={{ width: `${((history.length + 1) / 3) * 100}%` }} /></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-4">{lang === 'fr' ? currentQ.question_fr : currentQ.question_mg}</h3>
        <div className="space-y-2">
          {currentQ.options.map((opt, i) => (
            <button key={i} onClick={() => handleOption(opt)} className="anim-stagger-left card-hover w-full text-left p-3.5 rounded-xl border-2 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all group" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center text-xs font-bold text-slate-600 transition-colors">{String.fromCharCode(65 + i)}</div>
                <span className="text-sm font-medium text-slate-700">{lang === 'fr' ? opt.label_fr : opt.label_mg}</span>
              </div>
            </button>
          ))}
        </div>
        {history.length > 0 && <button onClick={back} className="mt-4 text-sm text-slate-500 hover:text-slate-800 transition-colors"><ChevronLeft size={14} className="inline mr-1" />{lang === 'fr' ? 'Précédent' : 'Teo aloha'}</button>}
      </div>
    </div>
  );
}

// ===== GLOSSARY SUB-COMPONENT =====
function DomainGlossaryView({ terms, lang }: { terms: DomainGlossaryTerm[]; lang: Lang }) {
  const [search, setSearch] = useState('');
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filtered = useMemo(() => searchDomainGlossary(terms, search).sort((a, b) => {
    const ta = lang === 'fr' ? a.term_fr : a.term_mg;
    const tb = lang === 'fr' ? b.term_fr : b.term_mg;
    return ta.localeCompare(tb);
  }), [search, terms, lang]);

  return (
    <div>
      <div className="relative mb-4"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" value={search} onChange={e => { setSearch(e.target.value); setExpandedIdx(null); }} placeholder={lang === 'fr' ? 'Rechercher un terme...' : 'Karohy teny...'} className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" /></div>
      <p className="text-xs text-slate-500 mb-3">{filtered.length} {lang === 'fr' ? 'terme(s)' : 'teny'}</p>
      <div className="space-y-2">
        {filtered.map((term, idx) => (
          <div key={idx} className="card-hover bg-white rounded-xl border border-slate-200 overflow-hidden">
            <button onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)} className="w-full text-left p-3.5 hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-sm font-bold text-slate-900">{lang === 'fr' ? term.term_fr : term.term_mg}</span>
                  <span className="ml-2 text-xs text-slate-400 italic">{lang === 'fr' ? term.term_mg : term.term_fr}</span>
                </div>
                {expandedIdx === idx ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
              </div>
            </button>
            {expandedIdx === idx && (
              <div className="px-3.5 pb-3.5 pt-1 border-t border-slate-100 space-y-2">
                <p className="text-sm text-slate-700 leading-relaxed">{lang === 'fr' ? term.definition_fr : term.definition_mg}</p>
                {(term.example_fr || term.example_mg) && <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200"><p className="text-xs text-slate-500 font-semibold mb-0.5">{lang === 'fr' ? 'Exemple' : 'Ohatra'}</p><p className="text-xs text-slate-600 italic">{lang === 'fr' ? term.example_fr : term.example_mg}</p></div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function LegalDomainPage({ domain, lang, t, onBack, isFavorite, onToggleFavorite }: LegalDomainPageProps) {
  const [subTab, setSubTab] = useState<SubTab>('search');
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { history, addSearch, clearHistory } = useSearchHistory();

  const config = domainConfig[domain];

  const { articles, categories, searchFn, simQuestions, glossary } = useMemo(() => {
    switch (domain) {
      case 'penal': return { articles: penalArticles as any[], categories: null, searchFn: searchPenalArticles as (q: string) => any[], simQuestions: penalSimQuestions, glossary: glossaryTerms.map(g => ({ term_fr: g.term_fr, term_mg: g.term_mg, definition_fr: g.definition_fr, definition_mg: g.definition_mg, example_fr: g.example_fr, example_mg: g.example_mg })) as DomainGlossaryTerm[] };
      case 'labor': return { articles: laborArticles as any[], categories: laborCategories, searchFn: searchLaborArticles as (q: string) => any[], simQuestions: laborSimQuestions, glossary: laborGlossary };
      case 'land': return { articles: landArticles as any[], categories: landCategories, searchFn: searchLandArticles as (q: string) => any[], simQuestions: landSimQuestions, glossary: landGlossary };
      case 'family': return { articles: familyArticles as any[], categories: familyCategories, searchFn: searchFamilyArticles as (q: string) => any[], simQuestions: familySimQuestions, glossary: familyGlossary };
      default: return { articles: [], categories: null, searchFn: () => [] as any[], simQuestions: [] as SimQuestion[], glossary: [] as DomainGlossaryTerm[] };
    }
  }, [domain]);

  const filteredArticles = useMemo(() => {
    let result: any[] = query.trim() ? searchFn(query) : articles;
    if (selectedCategory !== 'all') result = result.filter((a: any) => a.category === selectedCategory || a.type === selectedCategory);
    return result;
  }, [query, selectedCategory, articles, searchFn]);

  const domainTitle = t[`domain${domain.charAt(0).toUpperCase() + domain.slice(1)}` as keyof typeof t] as { fr: string; mg: string };

  const subTabs: { key: SubTab; icon: React.ReactNode; label: string }[] = [
    { key: 'search', icon: <Search size={14} />, label: lang === 'fr' ? 'Recherche' : 'Fikarohana' },
    { key: 'explorer', icon: <Compass size={14} />, label: lang === 'fr' ? 'Explorer' : 'Mpitety' },
    { key: 'simulator', icon: <Zap size={14} />, label: lang === 'fr' ? 'Simulateur' : 'Mpanandrana' },
    { key: 'glossary', icon: <BookText size={14} />, label: lang === 'fr' ? 'Glossaire' : 'Rakibolana' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Header */}
      <div className="mb-5 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:-translate-x-1 transition-all mb-3"><ArrowLeft size={16} />{lang === 'fr' ? 'Accueil' : 'Fandraisana'}</button>
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg float-anim`}><span className="text-xl">{config.icon}</span></div>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">{domainTitle[lang]}</h1>
            <p className="text-xs text-slate-500">{articles.length} {lang === 'fr' ? 'articles' : 'lahatsoratra'}</p>
          </div>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="flex gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-sm mb-5 anim-stagger-up overflow-x-auto" style={{ animationDelay: '80ms' }}>
        {subTabs.map(tab => (
          <button key={tab.key} onClick={() => { setSubTab(tab.key); setQuery(''); setSelectedCategory('all'); }}
            className={`flex-1 min-w-0 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${subTab === tab.key ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}
            style={subTab === tab.key ? { backgroundColor: config.accent } : {}}
          >
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>

      {/* ===== SEARCH TAB ===== */}
      {subTab === 'search' && (
        <div className="anim-stagger-up" style={{ animationDelay: '120ms' }}>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && query.trim()) addSearch(query.trim()); }}
                placeholder={t.searchPlaceholder[lang]}
                className="w-full pl-10 pr-10 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none text-sm" />
              {query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"><X size={16} /></button>}
            </div>
            {/* Search history */}
            {!query.trim() && history.length > 0 && (
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold"><Clock size={10} />{lang === 'fr' ? 'Recherches récentes' : 'Fikarohana teo aloha'}</span>
                  <button onClick={clearHistory} className="text-[10px] text-slate-400 hover:text-red-500">{lang === 'fr' ? 'Effacer' : 'Fafao'}</button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {history.slice(0, 6).map((h, i) => (
                    <button key={i} onClick={() => { setQuery(h); addSearch(h); }} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[11px] rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors">{h}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-500 mb-3">{filteredArticles.length} {lang === 'fr' ? 'résultat(s)' : 'vokatra'}</p>
          <ArticleList articles={filteredArticles} domain={domain} lang={lang} t={t} categories={categories} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
        </div>
      )}

      {/* ===== EXPLORER TAB ===== */}
      {subTab === 'explorer' && (
        <div className="anim-stagger-up" style={{ animationDelay: '120ms' }}>
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
            <div className="relative mb-3"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={lang === 'fr' ? 'Filtrer...' : 'Sivana...'} className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-sm" /></div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2"><Filter size={12} />{lang === 'fr' ? 'Catégorie' : 'Sokajy'}</div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedCategory('all')} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>{lang === 'fr' ? 'Tous' : 'Rehetra'}</button>
              {domain === 'penal' && ['crime', 'délit', 'contravention'].map(typ => (
                <button key={typ} onClick={() => setSelectedCategory(typ)} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === typ ? 'text-white' : 'bg-slate-100 text-slate-600'}`} style={selectedCategory === typ ? { backgroundColor: config.accent } : {}}>{typ.charAt(0).toUpperCase() + typ.slice(1)}</button>
              ))}
              {categories && Object.entries(categories).map(([key, cat]: [string, any]) => (
                <button key={key} onClick={() => setSelectedCategory(key)} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedCategory === key ? 'text-white' : 'bg-slate-100 text-slate-600'}`} style={selectedCategory === key ? { backgroundColor: config.accent } : {}}>{cat.icon} {cat[lang]}</button>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 mb-3">{filteredArticles.length} {lang === 'fr' ? 'article(s)' : 'lahatsoratra'}</p>
          <ArticleList articles={filteredArticles} domain={domain} lang={lang} t={t} categories={categories} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
        </div>
      )}

      {/* ===== SIMULATOR TAB ===== */}
      {subTab === 'simulator' && (
        <DomainSimulator questions={simQuestions} articles={articles} searchFn={searchFn} lang={lang} domain={domain} />
      )}

      {/* ===== GLOSSARY TAB ===== */}
      {subTab === 'glossary' && (
        <div className="anim-stagger-up" style={{ animationDelay: '120ms' }}>
          <DomainGlossaryView terms={glossary} lang={lang} />
        </div>
      )}
    </div>
  );
}
