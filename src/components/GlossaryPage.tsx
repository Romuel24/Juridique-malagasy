import { useState, useMemo } from 'react';
import { Lang } from '../data/translations';
import { glossaryTerms, GlossaryTerm, searchGlossary } from '../data/glossary';
import { BookText, Search, ChevronDown, ChevronUp, Scale, FileText, Gavel, BookOpen, Tag } from 'lucide-react';

interface GlossaryPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

type CategoryFilter = 'all' | 'general' | 'crime' | 'procedure' | 'peine';

const categoryLabels: Record<CategoryFilter, { fr: string; mg: string }> = {
  all: { fr: 'Tous', mg: 'Rehetra' },
  general: { fr: 'Général', mg: 'Ankapobeny' },
  crime: { fr: 'Infractions', mg: 'Fandikan-dalàna' },
  procedure: { fr: 'Procédure', mg: 'Fizotry ny fitsarana' },
  peine: { fr: 'Peines', mg: 'Sazy' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  all: <BookOpen size={14} />,
  general: <FileText size={14} />,
  crime: <Scale size={14} />,
  procedure: <Gavel size={14} />,
  peine: <Tag size={14} />,
};

function TermCard({ term, lang, isExpanded, onToggle }: {
  term: GlossaryTerm;
  lang: Lang;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const categoryColors: Record<string, string> = {
    general: 'bg-slate-100 text-slate-700 border-slate-200',
    crime: 'bg-red-50 text-red-700 border-red-200',
    procedure: 'bg-blue-50 text-blue-700 border-blue-200',
    peine: 'bg-amber-50 text-amber-700 border-amber-200',
  };

  const categoryBorderColors: Record<string, string> = {
    general: 'border-l-slate-400',
    crime: 'border-l-red-500',
    procedure: 'border-l-blue-500',
    peine: 'border-l-amber-500',
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md border-l-4 ${categoryBorderColors[term.category]}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900">
                {lang === 'fr' ? term.term_fr : term.term_mg}
              </h3>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${categoryColors[term.category]}`}>
                {categoryIcons[term.category]}
                {categoryLabels[term.category as CategoryFilter][lang]}
              </span>
            </div>
            {lang === 'fr' && term.term_mg && (
              <p className="text-xs text-slate-500 italic">{term.term_mg}</p>
            )}
            {lang === 'mg' && term.term_fr && (
              <p className="text-xs text-slate-500 italic">{term.term_fr}</p>
            )}
          </div>
          <div className="shrink-0 mt-1 text-slate-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 space-y-3 border-t border-slate-100">
          {/* Definition */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
              {lang === 'fr' ? 'Définition' : 'Famaritana'}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {lang === 'fr' ? term.definition_fr : term.definition_mg}
            </p>
          </div>

          {/* Example */}
          {(term.example_fr || term.example_mg) && (
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">
                {lang === 'fr' ? 'Exemple' : 'Ohatra'}
              </div>
              <p className="text-sm text-slate-600 italic">
                {lang === 'fr' ? term.example_fr : term.example_mg}
              </p>
            </div>
          )}

          {/* Related articles */}
          {term.relatedArticles && term.relatedArticles.length > 0 && (
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                {lang === 'fr' ? 'Articles liés' : 'Lahatsoratra mifandraika'}
              </div>
              <div className="flex flex-wrap gap-2">
                {term.relatedArticles.map((art, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#007A33]/10 text-[#007A33] rounded-lg text-xs font-bold"
                  >
                    <Scale size={12} />
                    {art}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function GlossaryPage({ lang, t }: GlossaryPageProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const filteredTerms = useMemo(() => {
    let terms = searchGlossary(search);
    
    if (category !== 'all') {
      terms = terms.filter(term => term.category === category);
    }

    // Sort alphabetically by the current language
    terms.sort((a, b) => {
      const termA = lang === 'fr' ? a.term_fr : a.term_mg;
      const termB = lang === 'fr' ? b.term_fr : b.term_mg;
      return termA.localeCompare(termB);
    });

    return terms;
  }, [search, category, lang]);

  const categoryCounts = useMemo(() => {
    return {
      all: glossaryTerms.length,
      general: glossaryTerms.filter(t => t.category === 'general').length,
      crime: glossaryTerms.filter(t => t.category === 'crime').length,
      procedure: glossaryTerms.filter(t => t.category === 'procedure').length,
      peine: glossaryTerms.filter(t => t.category === 'peine').length,
    };
  }, []);

  // Get first letters for alphabet navigation
  const alphabet = useMemo(() => {
    const letters = new Set<string>();
    filteredTerms.forEach(term => {
      const firstLetter = (lang === 'fr' ? term.term_fr : term.term_mg)[0].toUpperCase();
      letters.add(firstLetter);
    });
    return Array.from(letters).sort();
  }, [filteredTerms, lang]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up delay-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <BookText className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.glossaryTitle[lang]}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {t.glossaryDesc[lang]}
        </p>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 sm:p-6 mb-6 anim-stagger-up" style={{ animationDelay: '100ms' }}>
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={e => { setSearch(e.target.value); setExpandedIdx(null); }}
            placeholder={t.glossarySearch[lang]}
            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {(Object.keys(categoryLabels) as CategoryFilter[]).map(cat => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setExpandedIdx(null); }}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                category === cat
                  ? 'bg-[#007A33] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {categoryIcons[cat]}
              {categoryLabels[cat][lang]} ({categoryCounts[cat]})
            </button>
          ))}
        </div>
      </div>

      {/* Alphabet quick nav */}
      {alphabet.length > 5 && (
        <div className="flex flex-wrap justify-center gap-1 mb-6">
          {alphabet.map(letter => (
            <button
              key={letter}
              onClick={() => {
                const idx = filteredTerms.findIndex(term => 
                  (lang === 'fr' ? term.term_fr : term.term_mg)[0].toUpperCase() === letter
                );
                if (idx !== -1) {
                  setExpandedIdx(idx);
                  // Scroll to the element
                  setTimeout(() => {
                    const element = document.getElementById(`term-${idx}`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }, 100);
                }
              }}
              className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-[#007A33] hover:text-white hover:border-[#007A33] transition-all"
            >
              {letter}
            </button>
          ))}
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
          {filteredTerms.length} {lang === 'fr' ? 'terme(s)' : 'teny'}
        </span>
      </div>

      {/* Terms list */}
      {filteredTerms.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <Search size={28} className="text-slate-400" />
          </div>
          <p className="text-slate-500 text-sm">
            {lang === 'fr' ? 'Aucun terme trouvé' : 'Tsy misy teny hita'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTerms.map((term, idx) => (
            <div key={idx} id={`term-${idx}`}>
              <TermCard
                term={term}
                lang={lang}
                isExpanded={expandedIdx === idx}
                onToggle={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
