import { useState, useRef } from 'react';
import { Lang } from '../data/translations';
import { UserProfile } from '../hooks/useAuth';
import { ArrowLeft, Camera, User, Mail, Phone, Save, CheckCircle, AlertTriangle } from 'lucide-react';
import { db } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

interface ProfilePageProps {
  lang: Lang;
  user: UserProfile;
  onBack: () => void;
  onUpdate: (updated: Partial<UserProfile>) => void;
}

export default function ProfilePage({ lang, user, onBack, onUpdate }: ProfilePageProps) {
  const [name, setName] = useState(user.name);
  const [email] = useState(user.email.includes('@phone.juridique.mg') ? '' : user.email);
  const [phone, setPhone] = useState(user.phone || '');
  const [photoPreview, setPhotoPreview] = useState<string | null>(user.photoUrl || null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError(lang === 'fr' ? 'Photo trop grande (max 2 Mo)' : 'Sary lehibe loatra (2 Mo farafahabetsany)'); return; }
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!name.trim()) { setError(lang === 'fr' ? 'Le nom est requis' : 'Ilaina ny anarana'); return; }
    setSaving(true); setError(''); setSaved(false);
    try {
      const updates: any = { name: name.trim() };
      if (phone.trim()) updates.phone = phone.trim();
      if (photoPreview && photoPreview !== user.photoUrl) updates.photoUrl = photoPreview;

      await updateDoc(doc(db, 'users', user.id), updates);
      onUpdate({ name: name.trim(), phone: phone.trim() || undefined, photoUrl: photoPreview || undefined });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {
      setError(lang === 'fr' ? 'Erreur lors de la sauvegarde' : 'Nisy olana tamin\'ny fitehirizana');
    }
    setSaving(false);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6 sm:py-10 page-enter">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 hover:-translate-x-1 transition-all">
        <ArrowLeft size={16} />{lang === 'fr' ? 'Retour' : 'Hiverina'}
      </button>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D22630] to-[#007A33] px-6 py-8 flex flex-col items-center">
          <input type="file" ref={fileInputRef} accept="image/*" onChange={handlePhotoChange} className="hidden" />
          <button onClick={() => fileInputRef.current?.click()} className="relative group mb-3">
            {photoPreview ? (
              <div className="relative">
                <img src={photoPreview} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-xl" />
                <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={24} className="text-white" />
                </div>
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-white/20 border-2 border-dashed border-white/40 flex flex-col items-center justify-center hover:bg-white/30 transition-all">
                <Camera size={24} className="text-white/80" />
                <span className="text-[9px] text-white/60 mt-1">{lang === 'fr' ? 'Ajouter' : 'Ampio'}</span>
              </div>
            )}
          </button>
          <h2 className="text-xl font-extrabold text-white">{lang === 'fr' ? 'Mon Profil' : 'Ny mombamombako'}</h2>
          <p className="text-white/60 text-xs mt-1">{lang === 'fr' ? 'Modifier vos informations' : 'Ovay ny mombamomba anao'}</p>
        </div>

        {/* Form */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 font-medium flex items-center gap-2">
              <AlertTriangle size={16} />{error}
            </div>
          )}
          {saved && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl px-4 py-3 font-medium flex items-center gap-2 anim-stagger-up" style={{ animationDelay: '0ms' }}>
              <CheckCircle size={16} />{lang === 'fr' ? 'Profil mis à jour !' : 'Profil voaova !'}
            </div>
          )}

          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <User size={15} className="text-slate-500" />{lang === 'fr' ? 'Nom complet' : 'Anarana feno'} <span className="text-red-500">*</span>
            </label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Mail size={15} className="text-slate-500" />Email
            </label>
            <input type="email" value={email} disabled
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-500 text-sm cursor-not-allowed" />
            <p className="text-[10px] text-slate-400 mt-1">{lang === 'fr' ? 'L\'email ne peut pas être modifié (lié au compte Firebase)' : 'Ny mailaka dia tsy azo ovaina (mifandray amin\'ny kaonty Firebase)'}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Phone size={15} className="text-slate-500" />{lang === 'fr' ? 'Numéro mobile' : 'Nomerao finday'}
            </label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+261 38 XX XXX XX"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
          </div>

          {/* Account info */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="text-xs text-slate-500 mb-1">{lang === 'fr' ? 'Membre depuis' : 'Mpikambana hatramin\'ny'}</p>
            <p className="text-sm font-semibold text-slate-800">{new Date(user.createdAt).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'mg', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>

          {/* Save button */}
          <button onClick={handleSave} disabled={saving || !name.trim()}
            className="w-full py-3.5 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50">
            {saving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={18} />}
            {lang === 'fr' ? 'Enregistrer les modifications' : 'Tehirizo ny fanovana'}
          </button>
        </div>
      </div>
    </div>
  );
}
