import { useState } from 'react';
import { Lang } from '../data/translations';
import { searchArticles, penalArticles, PenalArticle, getTypeInfo } from '../data/penalCode';
import { Search, Scale, AlertTriangle, Shield, FileText, ChevronDown, ChevronUp, Gavel, BookOpen, Info } from 'lucide-react';

interface SearchPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

function TypeBadge({ type, lang }: { type: PenalArticle['type']; lang: Lang }) {
  const info = getTypeInfo(type, lang);
  const colors = {
    red: 'bg-red-100 text-red-800 border-red-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
  };
  const icons = {
    red: <AlertTriangle size={14} />,
    amber: <Shield size={14} />,
    blue: <FileText size={14} />,
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${colors[info.color as keyof typeof colors]}`}>
      {icons[info.color as keyof typeof icons]}
      {info.label}
    </span>
  );
}

function ArticleCard({ article, lang, isExpanded, onToggle }: {
  article: PenalArticle;
  lang: Lang;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const info = getTypeInfo(article.type, lang);
  const borderColors = {
    red: 'border-l-red-500',
    amber: 'border-l-amber-500',
    blue: 'border-l-blue-500',
  };
  const headerBg = {
    red: 'bg-red-50/50',
    amber: 'bg-amber-50/50',
    blue: 'bg-blue-50/50',
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md border-l-4 ${borderColors[info.color as keyof typeof borderColors]}`}>
      <button
        onClick={onToggle}
        className={`w-full text-left p-4 sm:p-5 ${headerBg[info.color as keyof typeof headerBg]} hover:bg-slate-50 transition-colors`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-bold text-slate-900 bg-slate-200 px-2.5 py-0.5 rounded-md">
                {article.article}
              </span>
              <TypeBadge type={article.type} lang={lang} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {lang === 'fr' ? article.title_fr : article.title_mg}
            </h3>
          </div>
          <div className="shrink-0 mt-1 text-slate-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 sm:px-5 pb-5 pt-2 space-y-4 border-t border-slate-100">
          {/* Description */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Info size={14} className="text-slate-500" />
              {lang === 'fr' ? 'Description' : 'Famaritana'}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-5">
              {lang === 'fr' ? article.description_fr : article.description_mg}
            </p>
          </div>

          {/* Nature */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Scale size={14} className="text-slate-500" />
              {lang === 'fr' ? "Nature de l'infraction" : "Karazana fandikan-dalàna"}
            </div>
            <p className="text-sm text-slate-600 pl-5">
              {info.description}
            </p>
          </div>

          {/* Penalty */}
          <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
              <Gavel size={14} className="text-[#D22630]" />
              {lang === 'fr' ? 'Peine encourue' : 'Sazy'}
            </div>
            <p className="text-sm font-medium text-[#D22630] pl-5">
              {lang === 'fr' ? article.penalty_fr : article.penalty_mg}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage({ lang, t }: SearchPageProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PenalArticle[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    const found = searchArticles(query);
    setResults(found);
    setHasSearched(true);
    setExpandedIdx(found.length > 0 ? 0 : null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSearch();
  };

  const examples = t.examples[lang];

  const crimeCount = penalArticles.filter(a => a.type === 'crime').length;
  const delitCount = penalArticles.filter(a => a.type === 'délit').length;
  const contraCount = penalArticles.filter(a => a.type === 'contravention').length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4">
          <Scale className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.siteTitle[lang]}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {t.siteSubtitle[lang]}
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <div className="bg-white rounded-xl p-3 border border-slate-200 text-center shadow-sm">
          <div className="text-2xl font-bold text-slate-900">{penalArticles.length}</div>
          <div className="text-xs text-slate-500 font-medium">{t.totalArticles[lang]}</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-red-200 text-center shadow-sm">
          <div className="text-2xl font-bold text-red-600">{crimeCount}</div>
          <div className="text-xs text-red-500 font-medium">{t.crimes[lang]}</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-amber-200 text-center shadow-sm">
          <div className="text-2xl font-bold text-amber-600">{delitCount}</div>
          <div className="text-xs text-amber-500 font-medium">{t.delits[lang]}</div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-blue-200 text-center shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{contraCount}</div>
          <div className="text-xs text-blue-500 font-medium">{t.contraventions[lang]}</div>
        </div>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.searchPlaceholder[lang]}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-8 py-3.5 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:from-red-700 hover:to-emerald-700 active:scale-95 transition-all duration-200 shadow-md text-sm whitespace-nowrap"
          >
            <span className="flex items-center justify-center gap-2">
              <Search size={16} />
              {t.searchButton[lang]}
            </span>
          </button>
        </div>

        {/* Example searches */}
        <div className="mt-4">
          <p className="text-xs text-slate-400 mb-2 font-medium">{t.suggestedSearches[lang]} :</p>
          <div className="flex flex-wrap gap-2">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(ex);
                  const found = searchArticles(ex);
                  setResults(found);
                  setHasSearched(true);
                  setExpandedIdx(found.length > 0 ? 0 : null);
                }}
                className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg hover:bg-[#007A33]/10 hover:text-[#007A33] transition-colors border border-slate-200"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {hasSearched && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen size={20} className="text-[#007A33]" />
              {t.searchResults[lang]}
            </h3>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
              {results.length} {lang === 'fr' ? 'résultat(s)' : 'vokatra'}
            </span>
          </div>

          {results.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
                <Search size={28} className="text-slate-400" />
              </div>
              <p className="text-slate-500 text-sm">{t.noResults[lang]}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((article, idx) => (
                <ArticleCard
                  key={article.article}
                  article={article}
                  lang={lang}
                  isExpanded={expandedIdx === idx}
                  onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Initial hint */}
      {!hasSearched && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D22630]/10 to-[#007A33]/10 flex items-center justify-center">
            <Scale size={28} className="text-[#007A33]" />
          </div>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            {t.searchHint[lang]}
          </p>
        </div>
      )}
    </div>
  );
}
