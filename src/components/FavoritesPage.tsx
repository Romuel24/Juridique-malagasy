import { Lang } from '../data/translations';
import { FavoriteArticle } from '../hooks/useAuth';
import { Heart, Trash2, Scale, Briefcase, MapPin, Users, ArrowLeft, Star } from 'lucide-react';

interface FavoritesPageProps {
  lang: Lang;
  favorites: FavoriteArticle[];
  onRemove: (articleId: string, domain: string) => void;
  onBack: () => void;
}

const domainMeta: Record<string, { icon: React.ReactNode; label: { fr: string; mg: string }; color: string }> = {
  penal: { icon: <Scale size={14} />, label: { fr: 'Code Pénal', mg: 'Fehezan-dalàna' }, color: '#D22630' },
  labor: { icon: <Briefcase size={14} />, label: { fr: 'Droit du Travail', mg: 'Lalàna Asa' }, color: '#2563eb' },
  land: { icon: <MapPin size={14} />, label: { fr: 'Droit Foncier', mg: 'Lalàna Tany' }, color: '#007A33' },
  family: { icon: <Users size={14} />, label: { fr: 'Droit Famille', mg: 'Lalàna Fianakaviana' }, color: '#7c3aed' },
};

export default function FavoritesPage({ lang, favorites, onRemove, onBack }: FavoritesPageProps) {
  // Group by domain
  const grouped = favorites.reduce((acc, fav) => {
    if (!acc[fav.domain]) acc[fav.domain] = [];
    acc[fav.domain].push(fav);
    return acc;
  }, {} as Record<string, FavoriteArticle[]>);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 page-enter">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 hover:-translate-x-1 transition-all">
        <ArrowLeft size={16} />{lang === 'fr' ? 'Retour' : 'Hiverina'}
      </button>

      <div className="text-center mb-8 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <Heart className="text-white" size={30} fill="white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          {lang === 'fr' ? 'Mes Favoris' : 'Ny tiako indrindra'}
        </h2>
        <p className="text-slate-500 text-sm">
          {lang === 'fr' ? `${favorites.length} article(s) sauvegardé(s)` : `${favorites.length} lahatsoratra voatahiry`}
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center anim-stagger-up" style={{ animationDelay: '100ms' }}>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <Star size={36} className="text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-700 mb-2">
            {lang === 'fr' ? 'Aucun favori pour le moment' : 'Tsy mbola misy ny tiako'}
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto">
            {lang === 'fr'
              ? 'Appuyez sur le cœur ♥ à côté d\'un article pour l\'ajouter à vos favoris.'
              : 'Tsindrio ny fo ♥ eo anilan\'ny lahatsoratra mba hampiditra azy amin\'ny tianao.'}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([domain, favs], gi) => {
            const meta = domainMeta[domain];
            return (
              <div key={domain} className="anim-stagger-up" style={{ animationDelay: `${(gi + 1) * 100}ms` }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: meta.color }}>
                    {meta.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{meta.label[lang]}</h3>
                  <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{favs.length}</span>
                </div>
                <div className="space-y-2">
                  {favs.map((fav) => (
                    <div key={fav.articleId + fav.domain} className="card-hover bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 border-l-4" style={{ borderLeftColor: meta.color }}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-slate-800 bg-slate-200 px-2 py-0.5 rounded-md">{fav.articleId}</span>
                        </div>
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {lang === 'fr' ? fav.title_fr : fav.title_mg}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5">
                          {lang === 'fr' ? 'Ajouté le' : 'Nampidirina tamin\'ny'} {new Date(fav.addedAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'mg')}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemove(fav.articleId, fav.domain)}
                        className="shrink-0 p-2 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-all active:scale-90"
                        title={lang === 'fr' ? 'Supprimer' : 'Fafao'}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
