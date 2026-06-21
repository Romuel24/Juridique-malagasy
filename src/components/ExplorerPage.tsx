import { useState, useMemo } from 'react';
import { Lang } from '../data/translations';
import { penalArticles, PenalArticle, getTypeInfo, InfractionType } from '../data/penalCode';
import { Compass, Filter, ArrowUpDown, Search, ChevronDown, ChevronUp, AlertTriangle, Shield, FileText, Scale, Gavel, Info } from 'lucide-react';

interface ExplorerPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

type SortOption = 'article' | 'type' | 'alpha';

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
    red: 'hover:bg-red-50/50',
    amber: 'hover:bg-amber-50/50',
    blue: 'hover:bg-blue-50/50',
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md border-l-4 ${borderColors[info.color as keyof typeof borderColors]}`}>
      <button
        onClick={onToggle}
        className={`w-full text-left p-4 ${headerBg[info.color as keyof typeof headerBg]} transition-colors`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-bold text-slate-900 bg-slate-200 px-2.5 py-0.5 rounded-md">
                {article.article}
              </span>
              <TypeBadge type={article.type} lang={lang} />
            </div>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {lang === 'fr' ? article.title_fr : article.title_mg}
            </h3>
          </div>
          <div className="shrink-0 mt-1 text-slate-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 space-y-3 border-t border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
              <Info size={14} className="text-slate-500" />
              {lang === 'fr' ? 'Description' : 'Famaritana'}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-5">
              {lang === 'fr' ? article.description_fr : article.description_mg}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
              <Scale size={14} className="text-slate-500" />
              {lang === 'fr' ? "Nature" : "Karazana"}
            </div>
            <p className="text-sm text-slate-600 pl-5">
              {info.description}
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1">
              <Gavel size={14} className="text-[#D22630]" />
              {lang === 'fr' ? 'Peine' : 'Sazy'}
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

export default function ExplorerPage({ lang, t }: ExplorerPageProps) {
  const [filter, setFilter] = useState<InfractionType | 'all'>('all');
  const [sort, setSort] = useState<SortOption>('article');
  const [search, setSearch] = useState('');
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filteredAndSortedArticles = useMemo(() => {
    let articles = [...penalArticles];

    // Filter by type
    if (filter !== 'all') {
      articles = articles.filter(a => a.type === filter);
    }

    // Filter by search
    if (search.trim()) {
      const searchLower = search.toLowerCase();
      articles = articles.filter(a => 
        a.title_fr.toLowerCase().includes(searchLower) ||
        a.title_mg.toLowerCase().includes(searchLower) ||
        a.article.toLowerCase().includes(searchLower) ||
        a.keywords.some(k => k.toLowerCase().includes(searchLower))
      );
    }

    // Sort
    switch (sort) {
      case 'article':
        articles.sort((a, b) => {
          const numA = parseInt(a.article.replace(/\D/g, ''));
          const numB = parseInt(b.article.replace(/\D/g, ''));
          return numA - numB;
        });
        break;
      case 'type':
        const typeOrder = { crime: 1, délit: 2, contravention: 3 };
        articles.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
        break;
      case 'alpha':
        articles.sort((a, b) => {
          const titleA = lang === 'fr' ? a.title_fr : a.title_mg;
          const titleB = lang === 'fr' ? b.title_fr : b.title_mg;
          return titleA.localeCompare(titleB);
        });
        break;
    }

    return articles;
  }, [filter, sort, search, lang]);

  const crimeCount = penalArticles.filter(a => a.type === 'crime').length;
  const delitCount = penalArticles.filter(a => a.type === 'délit').length;
  const contraCount = penalArticles.filter(a => a.type === 'contravention').length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up delay-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <Compass className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.explorerTitle[lang]}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {t.explorerDesc[lang]}
        </p>
      </div>

      {/* Filter tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 mb-6 anim-stagger-up" style={{ animationDelay: '100ms' }}>
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={lang === 'fr' ? 'Rechercher un article...' : 'Karohy lahatsoratra...'}
            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Type filter */}
          <div className="flex-1">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
              <Filter size={14} />
              {t.explorerFilter[lang]}
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setFilter('all'); setExpandedIdx(null); }}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t.explorerAll[lang]} ({penalArticles.length})
              </button>
              <button
                onClick={() => { setFilter('crime'); setExpandedIdx(null); }}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === 'crime'
                    ? 'bg-red-600 text-white'
                    : 'bg-red-50 text-red-700 hover:bg-red-100'
                }`}
              >
                {t.crimes[lang]} ({crimeCount})
              </button>
              <button
                onClick={() => { setFilter('délit'); setExpandedIdx(null); }}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === 'délit'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                {t.delits[lang]} ({delitCount})
              </button>
              <button
                onClick={() => { setFilter('contravention'); setExpandedIdx(null); }}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === 'contravention'
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                {t.contraventions[lang]} ({contraCount})
              </button>
            </div>
          </div>

          {/* Sort */}
          <div className="sm:w-48">
            <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
              <ArrowUpDown size={14} />
              {t.explorerSort[lang]}
            </label>
            <select
              value={sort}
              onChange={e => { setSort(e.target.value as SortOption); setExpandedIdx(null); }}
              className="w-full px-3 py-2 rounded-lg border-2 border-slate-200 text-sm text-slate-700 focus:border-[#007A33] focus:outline-none"
            >
              <option value="article">{t.explorerSortArticle[lang]}</option>
              <option value="type">{t.explorerSortType[lang]}</option>
              <option value="alpha">{t.explorerSortAlpha[lang]}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
          {filteredAndSortedArticles.length} {lang === 'fr' ? 'article(s)' : 'lahatsoratra'}
        </span>
      </div>

      {/* Articles list */}
      {filteredAndSortedArticles.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <Search size={28} className="text-slate-400" />
          </div>
          <p className="text-slate-500 text-sm">
            {lang === 'fr' ? 'Aucun article trouvé' : 'Tsy misy lahatsoratra hita'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredAndSortedArticles.map((article, idx) => (
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
  );
}
