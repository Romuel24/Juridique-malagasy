import { useState } from 'react';
import { Lang } from '../data/translations';
import { Scale, Briefcase, MapPin, Users, Phone, Mail, Globe, ExternalLink, Search, Filter, ArrowLeft, MapPinned, Award, Star, Shield } from 'lucide-react';
import { gendarmerieContacts, policeContacts } from '../data/gendarmerieContacts';

interface LawyerDirectoryProps {
  lang: Lang;
  onBack: () => void;
}

type LegalField = 'all' | 'penal' | 'labor' | 'land' | 'family';

interface Lawyer {
  name: string;
  cabinet: string;
  barreauSince: string;
  specialties: LegalField[];
  specialtiesText_fr: string;
  specialtiesText_mg: string;
  phone?: string;
  email?: string;
  website?: string;
  address_fr: string;
  address_mg: string;
  description_fr: string;
  description_mg: string;
}

const lawyers: Lawyer[] = [
  {
    name: "Me Marianne PAVOT RAZAFINIMANANA",
    cabinet: "MARALEX Legal",
    barreauSince: "1992",
    specialties: ['penal', 'labor', 'land', 'family'],
    specialtiesText_fr: "Droit pénal, Droit du travail, Droit foncier, Droit de la famille",
    specialtiesText_mg: "Lalàna famaizana, Lalàna asa, Lalàna tany, Lalàna fianakaviana",
    phone: "+261 20 22 253 67",
    email: "contact@cabinetmaralex.mg",
    website: "https://cabinetmaralex.mg",
    address_fr: "19 Rue Ramelina Rahamefy, Ambatonakanga 101, Antananarivo",
    address_mg: "19 Rue Ramelina Rahamefy, Ambatonakanga 101, Antananarivo",
    description_fr: "Cabinet fondé en 1992, expérience en contentieux pénal et civil devant toutes les juridictions. Expertise en procédures civiles, pénales et administratives.",
    description_mg: "Birao naorina tamin'ny 1992, traikefa amin'ny ady eo amin'ny fitsarana rehetra. Fahaiza-manao amin'ny paika sivily, famaizana ary fitantanana."
  },
  {
    name: "Me Olivia RAJERISON",
    cabinet: "Cabinet Rajerison",
    barreauSince: "2010",
    specialties: ['penal', 'labor', 'land', 'family'],
    specialtiesText_fr: "Droit pénal, Droit du travail, Droit foncier, Droit administratif, Droits de l'Homme",
    specialtiesText_mg: "Lalàna famaizana, Lalàna asa, Lalàna tany, Lalàna fitantanana, Zon'olombelona",
    phone: "+261 34 05 613 20",
    email: "contact@cabinet-rajerison.co",
    website: "https://www.cabinet-rajerison.co",
    address_fr: "13 Rue Ratsimilaho, Immeuble le Six 5ème étage, Antaninarenina 101, Antananarivo",
    address_mg: "13 Rue Ratsimilaho, Immeuble le Six rihana faha-5, Antaninarenina 101, Antananarivo",
    description_fr: "Cabinet de 4 avocats, dossiers nationaux et internationaux. Spécialisé en droit des affaires, contentieux, arbitrage et pénal des affaires. Consultante pour la Banque Mondiale.",
    description_mg: "Birao misy mpisolovava 4, raharaha eto an-toerana sy iraisam-pirenena. Manokana amin'ny lalàna ara-barotra, ady, ny fanelanelanana ary ny famaizana ara-barotra."
  },
  {
    name: "Me Mialy RAMAROLAHY",
    cabinet: "HMRR Avocats",
    barreauSince: "2010",
    specialties: ['penal', 'family', 'labor'],
    specialtiesText_fr: "Droit pénal, Droit de la famille, Droit du travail",
    specialtiesText_mg: "Lalàna famaizana, Lalàna fianakaviana, Lalàna asa",
    phone: "+261 34 07 250 00",
    email: "contact@hmrrcabinet-avocats.mg",
    website: "https://hmrrcabinet-avocats.mg",
    address_fr: "Lot II T 104 A Iavoloha, Antananarivo",
    address_mg: "Lot II T 104 A Iavoloha, Antananarivo",
    description_fr: "Cabinet fondé en 2016, équipe diversifiée offrant conseils juridiques, assistance dans les litiges et représentation devant les tribunaux. Membre du réseau Lexing®.",
    description_mg: "Birao naorina tamin'ny 2016, ekipa misy fahaiza-manao samihafa, manome torohevitra ara-dalàna, fanampiana amin'ny ady ary fitsarana."
  },
  {
    name: "Me Hanitra A. RALIVOLOLONA",
    cabinet: "HMRR Avocats",
    barreauSince: "2013",
    specialties: ['penal', 'labor', 'family'],
    specialtiesText_fr: "Droit pénal, Sciences criminelles, Droit du travail, Droit de la famille",
    specialtiesText_mg: "Lalàna famaizana, Siansa heloka bevava, Lalàna asa, Lalàna fianakaviana",
    phone: "+261 34 07 250 00",
    email: "contact@hmrrcabinet-avocats.mg",
    website: "https://hmrrcabinet-avocats.mg",
    address_fr: "Lot II T 104 A Iavoloha, Antananarivo",
    address_mg: "Lot II T 104 A Iavoloha, Antananarivo",
    description_fr: "Diplômée en Droit des Affaires et Sciences criminelles, expérimentée dans le monde des affaires. Connaissance approfondie du droit pénal.",
    description_mg: "Nahazo diplaoma amin'ny lalàna ara-barotra sy siansa heloka bevava, traikefa amin'ny tontolon'ny orinasa. Fahalalana lalina amin'ny lalàna famaizana."
  },
  {
    name: "Me Elie HANITRINIAINA",
    cabinet: "Cabinet Me Elie Hanitriniaina",
    barreauSince: "2008",
    specialties: ['penal', 'family'],
    specialtiesText_fr: "Droits de l'Homme, Droit pénal, Droit de la famille, Droits fondamentaux",
    specialtiesText_mg: "Zon'olombelona, Lalàna famaizana, Lalàna fianakaviana, Zo fototra",
    phone: "+261 33 12 345 67",
    address_fr: "Antananarivo 101",
    address_mg: "Antananarivo 101",
    description_fr: "Spécialiste en Droits de l'Homme et Principes de droit fondamentaux. Équipe d'avocats expérimentés dévoués à la défense et à la représentation des clients.",
    description_mg: "Manokana amin'ny Zon'olombelona sy Zo fototra. Ekipa mpisolovava traikefa milofo amin'ny fiarovana sy fanoloana ny mpanjifa."
  },
  {
    name: "Me Eric H.L. ANDRIANAHAGA",
    cabinet: "Cabinet Me Andrianahaga",
    barreauSince: "2005",
    specialties: ['penal', 'labor', 'land', 'family'],
    specialtiesText_fr: "Droit pénal, Droit du travail, Droit foncier, Droit de la famille, Droit des sociétés",
    specialtiesText_mg: "Lalàna famaizana, Lalàna asa, Lalàna tany, Lalàna fianakaviana, Lalàna orinasa",
    phone: "+261 32 93 324 36",
    email: "mitombohasina@moov.mg",
    address_fr: "Antananarivo",
    address_mg: "Antananarivo",
    description_fr: "Conseil juridique, rédaction d'actes (contrats, statuts, baux), démarches administratives, négociation. Assistance complète.",
    description_mg: "Torohevitra ara-dalàna, fanoratana taratasy (fifanarahana, sata, hofana), paika fitantanana, fifampiraharahana."
  },
  {
    name: "Ordre des Avocats",
    cabinet: "Barreau de Madagascar",
    barreauSince: "",
    specialties: ['penal', 'labor', 'land', 'family'],
    specialtiesText_fr: "Orientation vers un avocat — Tous domaines",
    specialtiesText_mg: "Fitarihana mankany amin'ny mpisolovava — Sehatra rehetra",
    phone: "+261 20 22 350 71",
    website: "https://barreau-de-madagascar.com",
    address_fr: "Palais de Justice, 3 Rue Jules Ranaivo, Antananarivo",
    address_mg: "Lapan'ny Fitsarana, 3 Rue Jules Ranaivo, Antananarivo",
    description_fr: "L'Ordre des Avocats du Barreau de Madagascar peut vous orienter vers un avocat adapté à votre situation. Environ 1000 avocats exercent à Madagascar.",
    description_mg: "Ny Holafitry ny Mpisolovava eto Madagasikara dia afaka mitari-dalana anao mankany amin'ny mpisolovava mifanaraka amin'ny toe-javatra misy anao. Manodidina ny mpisolovava 1000 no miasa eto Madagasikara."
  },
];

const fieldLabels: Record<LegalField, { fr: string; mg: string; icon: React.ReactNode; color: string }> = {
  all: { fr: 'Tous', mg: 'Rehetra', icon: <Star size={14} />, color: 'bg-slate-100 text-slate-700' },
  penal: { fr: 'Pénal', mg: 'Famaizana', icon: <Scale size={14} />, color: 'bg-red-100 text-red-700' },
  labor: { fr: 'Travail', mg: 'Asa', icon: <Briefcase size={14} />, color: 'bg-blue-100 text-blue-700' },
  land: { fr: 'Foncier', mg: 'Tany', icon: <MapPin size={14} />, color: 'bg-emerald-100 text-emerald-700' },
  family: { fr: 'Famille', mg: 'Fianakaviana', icon: <Users size={14} />, color: 'bg-purple-100 text-purple-700' },
};

export default function LawyerDirectory({ lang, onBack }: LawyerDirectoryProps) {
  const [tab, setTab] = useState<'lawyers' | 'gendarmerie' | 'police'>('lawyers');
  const [filter, setFilter] = useState<LegalField>('all');
  const [search, setSearch] = useState('');
  const [gendSearch, setGendSearch] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('all');
  const [policeSearch, setPoliceSearch] = useState('');

  const provinces = Object.keys(gendarmerieContacts);
  const filteredGend = Object.entries(gendarmerieContacts).filter(([prov]) => selectedProvince === 'all' || prov === selectedProvince).map(([prov, contacts]) => {
    const filtered = gendSearch.trim() ? contacts.filter(c => c.name.toLowerCase().includes(gendSearch.toLowerCase()) || c.phone.includes(gendSearch)) : contacts;
    return { province: prov, contacts: filtered };
  }).filter(p => p.contacts.length > 0);
  const totalGend = filteredGend.reduce((sum, p) => sum + p.contacts.length, 0);

  const filtered = lawyers.filter(l => {
    if (filter !== 'all' && !l.specialties.includes(filter)) return false;
    if (search.trim()) {
      const s = search.toLowerCase();
      return l.name.toLowerCase().includes(s) || l.cabinet.toLowerCase().includes(s) || l.specialtiesText_fr.toLowerCase().includes(s) || l.specialtiesText_mg.toLowerCase().includes(s);
    }
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-10 page-enter">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 hover:-translate-x-1 transition-all">
        <ArrowLeft size={16} />{lang === 'fr' ? 'Retour' : 'Hiverina'}
      </button>

      {/* Title */}
      <div className="text-center mb-6 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-3 float-anim">
          <Award className="text-white" size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
          {lang === 'fr' ? 'Contacts' : 'Fifandraisana'}
        </h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto">
          {lang === 'fr' ? 'Avocats, gendarmerie et services juridiques' : 'Mpisolovava, zandarimariam-pirenena sy serivisy ara-dalàna'}
        </p>
      </div>

      {/* Tabs: Avocats / Gendarmerie / Police */}
      <div className="flex gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-sm mb-5 anim-stagger-up" style={{ animationDelay: '60ms' }}>
        <button onClick={() => setTab('lawyers')} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[11px] font-semibold transition-all ${tab === 'lawyers' ? 'bg-[#007A33] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>
          <Award size={13} />{lang === 'fr' ? 'Avocats' : 'Mpisolovava'}
        </button>
        <button onClick={() => setTab('gendarmerie')} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[11px] font-semibold transition-all ${tab === 'gendarmerie' ? 'bg-[#D22630] text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>
          <Shield size={13} />{lang === 'fr' ? 'Gendarmerie' : 'Zandary'}
        </button>
        <button onClick={() => setTab('police')} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-[11px] font-semibold transition-all ${tab === 'police' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>
          <Shield size={13} />Police
        </button>
      </div>

      {/* ====== GENDARMERIE TAB ====== */}
      {tab === 'gendarmerie' && (
        <div className="page-enter">
          {/* Search + Province filter */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
            <div className="relative mb-3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" value={gendSearch} onChange={e => setGendSearch(e.target.value)}
                placeholder={lang === 'fr' ? 'Rechercher une brigade (ex: Ambositra, Ihosy...)' : 'Tadiavo brigade (oh: Ambositra, Ihosy...)'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#D22630] focus:ring-2 focus:ring-red-200 focus:outline-none text-sm" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2"><Filter size={12} />{lang === 'fr' ? 'Province' : 'Faritany'}</div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSelectedProvince('all')} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedProvince === 'all' ? 'bg-[#D22630] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {lang === 'fr' ? 'Toutes' : 'Rehetra'} ({Object.values(gendarmerieContacts).flat().length})
              </button>
              {provinces.map(p => (
                <button key={p} onClick={() => setSelectedProvince(p)} className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${selectedProvince === p ? 'bg-[#D22630] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                  {p} ({gendarmerieContacts[p].length})
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-xs text-slate-500 mb-3">{totalGend} {lang === 'fr' ? 'brigade(s)' : 'brigade'}</p>

          {/* Results */}
          {filteredGend.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
              <Shield size={32} className="mx-auto mb-3 text-slate-300" />
              <p className="text-sm text-slate-500">{lang === 'fr' ? 'Aucune brigade trouvée' : 'Tsy misy brigade hita'}</p>
            </div>
          ) : (
            filteredGend.map(({ province, contacts }) => (
              <div key={province} className="mb-5">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2 sticky top-0 bg-slate-50 dark:bg-slate-950 py-1 z-10">
                  <MapPin size={14} className="text-[#D22630]" />
                  {province}
                  <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">{contacts.length}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {contacts.map((c, i) => (
                    <a key={i} href={`tel:${c.phone.replace(/\s/g, '')}`}
                      className="bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between gap-3 card-hover group">
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate group-hover:text-[#D22630] transition-colors">{c.name}</p>
                        <p className="text-[11px] text-slate-500 font-mono">{c.phone}</p>
                      </div>
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-[#D22630] text-white flex items-center justify-center group-hover:bg-red-700 group-active:scale-90 transition-all">
                        <Phone size={16} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* ====== POLICE TAB ====== */}
      {tab === 'police' && (
        <div className="page-enter">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input type="text" value={policeSearch} onChange={e => setPoliceSearch(e.target.value)}
                placeholder={lang === 'fr' ? 'Rechercher un commissariat...' : 'Tadiavo commissariat...'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none text-sm" />
            </div>
          </div>
          {Object.entries(policeContacts).map(([zone, contacts]) => {
            const filtered = policeSearch.trim() ? contacts.filter(c => c.name.toLowerCase().includes(policeSearch.toLowerCase()) || c.phone.includes(policeSearch)) : contacts;
            if (filtered.length === 0) return null;
            return (
              <div key={zone} className="mb-5">
                <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2 sticky top-0 bg-slate-50 dark:bg-slate-950 py-1 z-10">
                  <Shield size={14} className="text-blue-600" />
                  {zone}
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">{filtered.length}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {filtered.map((c, i) => (
                    <div key={i} className="bg-white rounded-xl border border-slate-200 p-3 card-hover">
                      <p className="text-xs font-bold text-slate-900 mb-1">{c.name}</p>
                      <div className="flex items-center gap-2">
                        <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
                          <Phone size={12} />{c.phone}
                        </a>
                        {c.phone2 && (
                          <a href={`tel:${c.phone2.replace(/\s/g, '')}`} className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-lg hover:bg-slate-200 active:scale-95 transition-all">
                            <Phone size={12} />{c.phone2}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ====== LAWYERS TAB ====== */}
      {tab === 'lawyers' && (
      <>
      {/* Filters */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 anim-stagger-up" style={{ animationDelay: '80ms' }}>
        <div className="relative mb-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={lang === 'fr' ? 'Rechercher un avocat ou cabinet...' : 'Tadiavo mpisolovava na birao...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2"><Filter size={12} />{lang === 'fr' ? 'Filtrer par domaine' : 'Sivana araka ny sehatra'}</div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(fieldLabels) as LegalField[]).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filter === f ? 'bg-[#007A33] text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              {fieldLabels[f].icon}{fieldLabels[f][lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-slate-500 mb-4">{filtered.length} {lang === 'fr' ? 'résultat(s)' : 'vokatra'}</p>

      {/* Lawyer cards */}
      <div className="space-y-4">
        {filtered.map((lawyer, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden card-hover anim-stagger-up" style={{ animationDelay: `${(idx + 2) * 60}ms` }}>
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {lawyer.name.split(' ').pop()?.charAt(0) || 'A'}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900">{lawyer.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{lawyer.cabinet}</p>
                  {lawyer.barreauSince && <p className="text-[10px] text-slate-400">{lang === 'fr' ? 'Au Barreau depuis' : 'Eo amin\'ny Barreau hatramin\'ny'} {lawyer.barreauSince}</p>}
                </div>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {lawyer.specialties.map(s => (
                  <span key={s} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${fieldLabels[s].color}`}>
                    {fieldLabels[s].icon}{fieldLabels[s][lang]}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {lang === 'fr' ? lawyer.description_fr : lawyer.description_mg}
              </p>

              {/* Address */}
              <div className="flex items-start gap-2 text-xs text-slate-500 mb-3">
                <MapPinned size={14} className="shrink-0 mt-0.5 text-slate-400" />
                {lang === 'fr' ? lawyer.address_fr : lawyer.address_mg}
              </div>

              {/* Contact buttons */}
              <div className="flex flex-wrap gap-2">
                {lawyer.phone && (
                  <a href={`tel:${lawyer.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#007A33] text-white text-xs font-bold rounded-lg hover:bg-emerald-700 active:scale-95 transition-all shadow-sm">
                    <Phone size={14} />{lang === 'fr' ? 'Appeler' : 'Antsoy'}
                  </a>
                )}
                {lawyer.email && (
                  <a href={`mailto:${lawyer.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#D22630] text-white text-xs font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-all shadow-sm">
                    <Mail size={14} />Email
                  </a>
                )}
                {lawyer.website && (
                  <a href={lawyer.website} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 active:scale-95 transition-all">
                    <Globe size={14} />{lang === 'fr' ? 'Site web' : 'Tranonkala'}
                    <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Barreau info */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-5 anim-stagger-up" style={{ animationDelay: '500ms' }}>
        <div className="flex items-start gap-3">
          <Award size={20} className="text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-bold text-amber-800 mb-1">{lang === 'fr' ? 'Barreau de Madagascar' : 'Holafitry ny Mpisolovava'}</p>
            <p className="text-xs text-amber-700 leading-relaxed mb-2">
              {lang === 'fr'
                ? 'L\'Ordre des Avocats au Barreau de Madagascar regroupe environ 1000 avocats. Vous pouvez les contacter pour être orienté vers un avocat adapté à votre situation.'
                : 'Ny Holafitry ny Mpisolovava eto Madagasikara dia misy mpisolovava manodidina ny 1000. Afaka mifandray aminy ianao mba hitondrana anao amin\'ny mpisolovava mifanaraka amin\'ny toe-javatra misy anao.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="tel:+261202235071" className="inline-flex items-center gap-1 text-xs text-amber-800 font-semibold hover:underline"><Phone size={12} />+261 20 22 350 71</a>
              <a href="https://barreau-de-madagascar.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-amber-800 font-semibold hover:underline"><Globe size={12} />barreau-de-madagascar.com</a>
            </div>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
}
