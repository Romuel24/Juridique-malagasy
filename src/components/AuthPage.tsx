import { useState, useRef } from 'react';
import { Lang } from '../data/translations';
import { Scale, Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus, ArrowLeft, Phone, Camera } from 'lucide-react';

interface AuthPageProps {
  lang: Lang;
  onLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  onRegister: (name: string, email: string, password: string, phone?: string, photoUrl?: string) => Promise<{ success: boolean; error?: string }>;
  onClose: () => void;
}

const t = {
  loginTitle: { fr: 'Connexion', mg: 'Hiditra' },
  registerTitle: { fr: 'Créer un compte', mg: 'Mamorona kaonty' },
  email: { fr: 'Email (ou numéro mobile)', mg: 'Mailaka (na nomerao finday)' },
  password: { fr: 'Mot de passe', mg: 'Teny miafina' },
  confirmPw: { fr: 'Confirmer le mot de passe', mg: 'Hamafiso ny teny miafina' },
  name: { fr: 'Nom complet', mg: 'Anarana feno' },
  phone: { fr: 'Numéro mobile (facultatif)', mg: 'Nomerao finday (tsy voatery)' },
  photo: { fr: 'Photo de profil (facultatif)', mg: 'Sary profil (tsy voatery)' },
  loginBtn: { fr: 'Se connecter', mg: 'Hiditra' },
  registerBtn: { fr: "S'inscrire", mg: 'Hisoratra anarana' },
  noAccount: { fr: "Pas encore de compte ?", mg: 'Tsy manana kaonty ?' },
  hasAccount: { fr: 'Déjà un compte ?', mg: 'Efa manana kaonty ?' },
  createOne: { fr: 'Créer un compte', mg: 'Mamorona kaonty' },
  loginHere: { fr: 'Se connecter', mg: 'Hiditra' },
  errEmail: { fr: 'Cet email est déjà utilisé', mg: 'Efa nampiasaina io mailaka io' },
  errNotFound: { fr: 'Aucun compte trouvé', mg: 'Tsy misy kaonty hita' },
  errPassword: { fr: 'Mot de passe incorrect', mg: 'Teny miafina tsy mety' },
  errMatch: { fr: 'Les mots de passe ne correspondent pas', mg: 'Tsy mitovy ny teny miafina' },
  errRequired: { fr: 'Nom et mot de passe requis', mg: 'Ilaina ny anarana sy teny miafina' },
  errMinPw: { fr: '6 caractères minimum', mg: '6 litera farafahakeliny' },
  errNeedEmailOrPhone: { fr: 'Email ou numéro mobile requis', mg: 'Ilaina ny mailaka na nomerao finday' },
  back: { fr: 'Retour', mg: 'Hiverina' },
  welcomeText: { fr: 'Accédez à toutes les fonctionnalités gratuitement', mg: 'Midira amin\'ny tombontsoa rehetra maimaim-poana' },
  addPhoto: { fr: 'Ajouter une photo', mg: 'Ampio sary' },
  changePhoto: { fr: 'Changer', mg: 'Ovay' },
};

export default function AuthPage({ lang, onLogin, onRegister, onClose }: AuthPageProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError(lang === 'fr' ? 'Photo trop grande (max 2 Mo)' : 'Sary lehibe loatra (2 Mo)'); return; }
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (mode === 'register') {
      if (!name.trim() || !password) { setError(t.errRequired[lang]); return; }
      if (!email.trim() && !phone.trim()) { setError(t.errNeedEmailOrPhone[lang]); return; }
      if (password.length < 6) { setError(t.errMinPw[lang]); return; }
      if (password !== confirmPw) { setError(t.errMatch[lang]); return; }
      
      // Use email if provided, otherwise create a fake email from phone number
      const loginEmail = email.trim() || `${phone.trim().replace(/[^0-9]/g, '')}@phone.juridique.mg`;
      
      setLoading(true);
      try {
        const result = await onRegister(name.trim(), loginEmail, password, phone.trim() || undefined, photoPreview || undefined);
        if (!result.success) {
          if (result.error === 'email_exists') setError(t.errEmail[lang]);
          else setError(result.error || t.errRequired[lang]);
        }
      } catch { setError(lang === 'fr' ? 'Erreur de connexion' : 'Nisy olana'); }
      setLoading(false);
    } else {
      if ((!email.trim() && !phone.trim()) || !password) { setError(t.errRequired[lang]); return; }
      const loginEmail = email.trim() || `${phone.trim().replace(/[^0-9]/g, '')}@phone.juridique.mg`;
      
      setLoading(true);
      try {
        const result = await onLogin(loginEmail, password);
        if (!result.success) {
          if (result.error === 'not_found') setError(t.errNotFound[lang]);
          else if (result.error === 'wrong_password') setError(t.errPassword[lang]);
          else setError(result.error || t.errRequired[lang]);
        }
      } catch { setError(lang === 'fr' ? 'Erreur de connexion' : 'Nisy olana'); }
      setLoading(false);
    }
  };

  const switchMode = () => { setMode(mode === 'login' ? 'register' : 'login'); setError(''); };

  return (
    <div className="max-w-md mx-auto px-4 py-8 sm:py-14 page-enter">
      <button onClick={onClose} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 hover:-translate-x-1 transition-all">
        <ArrowLeft size={16} />{t.back[lang]}
      </button>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#D22630] to-[#007A33] px-6 py-7 text-center">
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20 flex items-center justify-center float-anim">
            <Scale size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            {mode === 'login' ? t.loginTitle[lang] : t.registerTitle[lang]}
          </h2>
          <p className="text-white/70 text-sm mt-1">{t.welcomeText[lang]}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 font-medium anim-stagger-up" style={{ animationDelay: '0ms' }}>
              ⚠️ {error}
            </div>
          )}

          {/* Photo upload (register only) */}
          {mode === 'register' && (
            <div className="flex flex-col items-center gap-2">
              <input type="file" ref={fileInputRef} accept="image/*" onChange={handlePhotoChange} className="hidden" />
              <button type="button" onClick={() => fileInputRef.current?.click()} className="relative group">
                {photoPreview ? (
                  <div className="relative">
                    <img src={photoPreview} alt="Profile" className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={20} className="text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center hover:border-[#007A33] hover:bg-emerald-50 transition-all">
                    <Camera size={20} className="text-slate-400" />
                    <span className="text-[9px] text-slate-400 mt-0.5">{t.addPhoto[lang]}</span>
                  </div>
                )}
              </button>
              <p className="text-[10px] text-slate-400">{t.photo[lang]}</p>
            </div>
          )}

          {/* Name (register) */}
          {mode === 'register' && (
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
                <User size={15} className="text-slate-500" />{t.name[lang]} <span className="text-red-500">*</span>
              </label>
              <input type="text" value={name} onChange={e => setName(e.target.value)}
                placeholder={lang === 'fr' ? 'Votre nom complet' : 'Ny anaranao feno'}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Mail size={15} className="text-slate-500" />{t.email[lang]}
            </label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}
              placeholder={lang === 'fr' ? 'email@exemple.com' : 'email@ohatra.com'}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
          </div>

          {/* Phone (register + login) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Phone size={15} className="text-slate-500" />{mode === 'register' ? t.phone[lang] : (lang === 'fr' ? 'Ou numéro mobile' : 'Na nomerao finday')}
            </label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder="+261 38 XX XXX XX"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
              <Lock size={15} className="text-slate-500" />{t.password[lang]} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full px-4 py-3 pr-12 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700">
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm password (register) */}
          {mode === 'register' && (
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5">
                <Lock size={15} className="text-slate-500" />{t.confirmPw[lang]} <span className="text-red-500">*</span>
              </label>
              <input type={showPw ? 'text' : 'password'} value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm" />
            </div>
          )}

          {/* Submit */}
          <button type="submit" disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50">
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (
              <>{mode === 'login' ? <LogIn size={18} /> : <UserPlus size={18} />}
              {mode === 'login' ? t.loginBtn[lang] : t.registerBtn[lang]}</>
            )}
          </button>

          {/* Switch mode */}
          <div className="text-center pt-2">
            <p className="text-sm text-slate-500">
              {mode === 'login' ? t.noAccount[lang] : t.hasAccount[lang]}{' '}
              <button type="button" onClick={switchMode} className="text-[#007A33] font-semibold hover:underline">
                {mode === 'login' ? t.createOne[lang] : t.loginHere[lang]}
              </button>
            </p>
          </div>

          {/* Info */}
          <p className="text-[10px] text-slate-400 text-center">
            {lang === 'fr' ? '🔒 100% gratuit • Données sécurisées avec Firebase' : '🔒 100% maimaim-poana • Angon-drakitra voaaro amin\'ny Firebase'}
          </p>
        </form>
      </div>
    </div>
  );
}
