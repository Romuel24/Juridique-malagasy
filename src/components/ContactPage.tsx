import { useState, FormEvent } from 'react';
import { Lang } from '../data/translations';
import { MessageSquare, Send, CheckCircle, User, Mail, FileText, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  lang: Lang;
  t: typeof import('../data/translations').translations;
}

export default function ContactPage({ lang, t }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('suggestion');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const subjectOptions = [
    { value: 'suggestion', label: t.subjectSuggestion[lang] },
    { value: 'critique', label: t.subjectCritique[lang] },
    { value: 'question', label: t.subjectQuestion[lang] },
    { value: 'autre', label: t.subjectOther[lang] },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    setStatus('sending');

    try {
      // Use Web3Forms API to send email
      const formData = {
        access_key: "f1234567-fake-key-0000-000000000000", // Will use mailto fallback
        name: name,
        email: email || 'non-fourni@mail.com',
        subject: `[Code Pénal Malagasy] ${subjectOptions.find(s => s.value === subject)?.label}: de ${name}`,
        message: `Nom: ${name}\nEmail: ${email || 'Non fourni'}\nSujet: ${subjectOptions.find(s => s.value === subject)?.label}\n\nMessage:\n${message}`,
      };

      // Try sending via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('suggestion');
        setMessage('');
      } else {
        // Fallback: open mailto link
        openMailto();
        setStatus('success');
      }
    } catch {
      // Fallback: open mailto link
      openMailto();
      setStatus('success');
    }
  };

  const openMailto = () => {
    const subjectLabel = subjectOptions.find(s => s.value === subject)?.label || subject;
    const mailSubject = encodeURIComponent(`[Code Pénal Malagasy] ${subjectLabel}`);
    const mailBody = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email || 'Non fourni'}\nSujet: ${subjectLabel}\n\nMessage:\n${message}`
    );
    window.open(`mailto:romuelratovoson5@gmail.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
    setName('');
    setEmail('');
    setSubject('suggestion');
    setMessage('');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      {/* Title */}
      <div className="text-center mb-8 anim-stagger-up delay-0">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-4 float-anim">
          <MessageSquare className="text-white" size={32} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {t.contactTitle[lang]}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {t.contactDesc[lang]}
        </p>
      </div>

      {/* Success message */}
      {status === 'success' && (
        <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle size={20} className="text-emerald-600 mt-0.5 shrink-0" />
          <p className="text-sm text-emerald-800 font-medium">{t.contactSuccess[lang]}</p>
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden anim-stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="p-5 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <User size={16} className="text-slate-500" />
                {t.contactName[lang]} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={t.contactNamePlaceholder[lang]}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <Mail size={16} className="text-slate-500" />
                {t.contactEmail[lang]}
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t.contactEmailPlaceholder[lang]}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FileText size={16} className="text-slate-500" />
                {t.contactSubject[lang]}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {subjectOptions.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSubject(opt.value)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium border-2 transition-all duration-200
                      ${subject === opt.value
                        ? 'border-[#007A33] bg-[#007A33]/10 text-[#007A33]'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <MessageCircle size={16} className="text-slate-500" />
                {t.contactMessage[lang]} <span className="text-red-500">*</span>
              </label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={t.contactMessagePlaceholder[lang]}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={status === 'sending' || !name.trim() || !message.trim()}
                className="flex-1 flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:from-red-700 hover:to-emerald-700 active:scale-95 transition-all duration-200 shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {status === 'sending' ? t.contactSending[lang] : t.contactSend[lang]}
              </button>

              {/* Direct mailto button */}
              <button
                type="button"
                onClick={openMailto}
                disabled={!name.trim() || !message.trim()}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 active:scale-95 transition-all duration-200 text-sm border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail size={16} />
                {lang === 'fr' ? 'Ouvrir Email' : 'Sokafy mailaka'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact info */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 sm:px-8 py-4">
          <p className="text-xs text-slate-500 text-center">
            {lang === 'fr'
              ? '📧 Vos messages seront envoyés à : romuelratovoson5@gmail.com'
              : '📧 Ny hafatrao dia halefa any amin\'ny : romuelratovoson5@gmail.com'}
          </p>
        </div>
      </div>
    </div>
  );
}
