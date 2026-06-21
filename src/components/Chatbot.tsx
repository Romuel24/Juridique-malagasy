import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Scale, Bot, ChevronDown, Trash2, Lock, LogIn } from 'lucide-react';
import { Lang } from '../data/translations';
import { UserProfile } from '../hooks/useAuth';
import { ChatMessage, generateBotResponse } from '../data/chatbotEngine';

interface ChatbotProps {
  lang: Lang;
  user: UserProfile | null;
  onRequestLogin: () => void;
}

function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)|(_[^_]+_)/g);
  return parts.filter(Boolean).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
    if (part.startsWith('_') && part.endsWith('_')) return <em key={i} className="italic opacity-80">{part.slice(1, -1)}</em>;
    const lines = part.split('\n');
    return lines.map((line, j) => <span key={`${i}-${j}`}>{j > 0 && <br />}{line}</span>);
  });
}

export default function Chatbot({ lang, user, onRequestLogin }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && user) { setTimeout(() => inputRef.current?.focus(), 300); setShowBadge(false); }
  }, [isOpen, user]);

  useEffect(() => {
    if (isOpen && user && messages.length === 0) {
      setMessages([{
        id: 'welcome', role: 'bot', timestamp: new Date(),
        text: lang === 'fr'
          ? `👋 Bonjour **${user.name}** ! Je suis **Zoako**, votre assistant juridique propulsé par l'IA.\n\nJe peux vous aider à :\n📖 Trouver des articles de loi\n💡 Vous conseiller sur vos droits\n📋 Expliquer les procédures\n🏛️ Vous orienter vers les bonnes institutions\n\nQue souhaitez-vous savoir ?`
          : `👋 Miarahaba **${user.name}** ! Izaho **Zoako**, mpanolotsaina ara-dalàna ampiasain'ny IA.\n\nAfaka manampy anao aho :\n📖 Mitady lalàna\n💡 Manoro momba ny zonao\n📋 Manazava ny paika\n🏛️ Mitari-dalana\n\nInona no tianao ho fantatra ?`,
      }]);
    }
  }, [isOpen, user, lang, messages.length]);

  useEffect(() => { setMessages([]); }, [user?.email]);

  // ===== GEMINI AI =====
  const GEMINI_KEY = 'AIzaSyDYgco5yz0fLdtkVz1bRGWxWM8TPfBJKqM';

  const callGemini = async (userQuestion: string): Promise<string | null> => {
    const systemPrompt = lang === 'fr'
      ? `Tu es Zoako, un assistant juridique expert du droit malgache (Madagascar). Tu réponds TOUJOURS en français.

DOMAINES DE COMPÉTENCE :
- Code Pénal malgache (crimes, délits, contraventions, peines)
- Droit du Travail malgache (contrats, salaires, licenciement, congés, SMIG)
- Droit Foncier malgache (propriété, titres, certificats, bornage, litiges)
- Droit de la Famille malgache (mariage, divorce, garde, adoption, pension)

RÈGLES :
- Cite les numéros d'articles de loi quand c'est possible (ex: Art. 295 du Code Pénal)
- Donne des conseils pratiques et concrets
- Indique les peines encourues pour les infractions pénales
- Mentionne les procédures à suivre (porter plainte, inspection du travail, guichet foncier...)
- Indique les délais de prescription quand c'est pertinent
- Rappelle toujours que tu ne remplaces pas un avocat professionnel
- Sois empathique, clair et structuré dans tes réponses
- Utilise des emojis pour rendre la réponse plus lisible
- Réponds de manière concise mais complète (max 300 mots)`

      : `Ianao Zoako, mpanolotsaina ara-dalàna mahay ny lalàna malagasy. Mamaly amin'ny teny malagasy FOANA ianao.

SEHATRA :
- Fehezan-dalàna Famaizana (heloka bevava, heloka, fandikan-dalàna maivana, sazy)
- Lalàna momba ny Asa (fifanarahana, karama, fandroahana, fialan-tsasatra, SMIG)
- Lalàna momba ny Tany (fananana, titre, kara-tany, famerana, fifanolanana)
- Lalàna momba ny Fianakaviana (fanambadiana, fisarahana, fitantanana, fananganan-jaza, pension)

FITSIPIKA :
- Lazao ny laharan'ny andininy raha azo atao (oh: Art. 295)
- Omeo torohevitra azo ampiharina
- Lazao ny sazy amin'ny heloka
- Lazao ny paika arahina
- Ampahatsiahivo foana fa tsy manolo mpisolovava ianao
- Mampiasà emoji
- Mamaly fohy fa feno (300 teny farafahabetsany)`;

    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${systemPrompt}\n\nQuestion: ${userQuestion}` }] }],
          generationConfig: { maxOutputTokens: 1024, temperature: 0.7 }
        })
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch {
      return null;
    }
  };

  // ===== SEND MESSAGE =====
  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || !user) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}`, role: 'user', text: trimmed, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Try Gemini AI first
    const aiResponse = await callGemini(trimmed);
    if (aiResponse) {
      setMessages(prev => [...prev, { id: `b-${Date.now()}`, role: 'bot', text: aiResponse, timestamp: new Date() }]);
    } else {
      // Fallback to local engine
      setMessages(prev => [...prev, generateBotResponse(trimmed, lang)]);
    }
    setIsTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };
  const clearHistory = () => setMessages([]);

  const quickQuestions = lang === 'fr'
    ? ['Que risque-t-on pour un vol ?', 'Comment porter plainte ?', 'Mes droits en garde à vue', 'Trouver un avocat', 'Licenciement abusif', 'Titre foncier']
    : ['Inona no sazy amin\'ny halatra ?', 'Ahoana ny fomba hitory ?', 'Ny zoko raha voahazona', 'Mitady mpisolovava', 'Fandroahana tsy ara-dalàna', 'Titre foncier'];

  const handleQuickQuestion = async (q: string) => {
    if (!user) return;
    setMessages(prev => [...prev, { id: `u-${Date.now()}`, role: 'user', text: q, timestamp: new Date() }]);
    setIsTyping(true);
    const aiResponse = await callGemini(q);
    if (aiResponse) {
      setMessages(prev => [...prev, { id: `b-${Date.now()}`, role: 'bot', text: aiResponse, timestamp: new Date() }]);
    } else {
      setMessages(prev => [...prev, generateBotResponse(q, lang)]);
    }
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating button — above bottom nav on mobile */}
      <button onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[70] w-13 h-13 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gradient-to-br from-[#D22630] to-[#007A33] hover:scale-110 glow-pulse'}`}>
        {isOpen ? <X size={24} className="text-white" /> : (
          <>
            <MessageCircle size={26} className="text-white" />
            {showBadge && user && <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center text-[9px] font-bold text-slate-900 animate-bounce-in">!</span>}
            {!user && <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-slate-500 rounded-full flex items-center justify-center"><Lock size={8} className="text-white" /></span>}
          </>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:w-[420px] z-[70] anim-stagger-up" style={{ animationDelay: '0ms', maxHeight: 'calc(100vh - 140px)' }}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden" style={{ height: 'min(580px, calc(100vh - 140px))' }}>
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#D22630] to-[#007A33] px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Scale size={22} className="text-white" /></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-sm">Zoako</h3>
                <p className="text-white/70 text-[11px]">{lang === 'fr' ? 'Assistant juridique IA' : 'Mpanolotsaina ara-dalàna IA'}</p>
              </div>
              <div className="flex items-center gap-1">
                {user && <button onClick={clearHistory} className="p-1.5 rounded-lg hover:bg-white/20 transition-colors" title={lang === 'fr' ? 'Effacer' : 'Fafao'}><Trash2 size={16} className="text-white/70" /></button>}
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg hover:bg-white/20 transition-colors sm:hidden"><ChevronDown size={18} className="text-white/70" /></button>
              </div>
            </div>

            {/* Not logged in */}
            {!user && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center mb-5"><Lock size={36} className="text-slate-400" /></div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{lang === 'fr' ? 'Connexion requise' : 'Tsy maintsy miditra'}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-xs leading-relaxed">
                  {lang === 'fr' ? 'Créez un compte gratuit pour accéder à Zoako, votre assistant juridique IA.' : 'Mamorona kaonty maimaim-poana mba hidirana amin\'i Zoako, mpanolotsaina IA.'}
                </p>
                <button onClick={() => { setIsOpen(false); onRequestLogin(); }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg">
                  <LogIn size={18} />{lang === 'fr' ? 'Se connecter / S\'inscrire' : 'Hiditra / Hisoratra anarana'}
                </button>
                <div className="mt-5 text-[11px] text-slate-400 space-y-1">
                  <p>✓ {lang === 'fr' ? '100% gratuit' : '100% maimaim-poana'}</p>
                  <p>✓ {lang === 'fr' ? 'Conseils juridiques personnalisés' : 'Torohevitra manokana'}</p>
                  <p>✓ {lang === 'fr' ? 'Procédures détaillées' : 'Paika amin\'ny antsipiriany'}</p>
                </div>
              </div>
            )}

            {/* Logged in — Messages */}
            {user && (
              <>
                <div className="flex-1 overflow-y-auto p-3 space-y-3" style={{ minHeight: 0 }}>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${msg.role === 'bot' ? 'bg-gradient-to-br from-[#D22630] to-[#007A33]' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        {msg.role === 'bot' ? <Bot size={14} className="text-white" /> : <span className="text-slate-600 dark:text-slate-300">{user.name.charAt(0).toUpperCase()}</span>}
                      </div>
                      <div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${msg.role === 'user' ? 'bg-[#007A33] text-white rounded-br-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md'}`}>
                        {renderText(msg.text)}
                        {msg.articles && msg.articles.length > 1 && (
                          <div className="mt-2 space-y-1.5">
                            <p className="text-[11px] font-semibold opacity-80 mt-1">{lang === 'fr' ? '📎 Autres articles :' : '📎 Lahatsoratra hafa :'}</p>
                            {msg.articles.slice(1).map((art, i) => (
                              <div key={i} className={`rounded-lg px-2.5 py-1.5 text-[11px] ${msg.role === 'user' ? 'bg-white/15' : 'bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600'}`}>
                                <span className="font-bold">{art.article}</span> — <span>{art.title}</span>
                                {art.penalty && <p className="text-[10px] opacity-70 mt-0.5">⚖️ {art.penalty}</p>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center shrink-0"><Bot size={14} className="text-white" /></div>
                      <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                          <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick questions */}
                {messages.length <= 1 && !isTyping && (
                  <div className="px-3 pb-2 shrink-0">
                    <p className="text-[10px] text-slate-400 mb-1.5 font-medium">{lang === 'fr' ? 'Questions suggérées :' : 'Fanontaniana soso-kevitra :'}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {quickQuestions.map((q, i) => (
                        <button key={i} onClick={() => handleQuickQuestion(q)}
                          className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium rounded-lg hover:bg-[#007A33]/10 hover:text-[#007A33] transition-colors border border-slate-200 dark:border-slate-700">
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="border-t border-slate-200 dark:border-slate-700 px-3 py-2.5 shrink-0">
                  <div className="flex gap-2">
                    <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
                      placeholder={lang === 'fr' ? 'Posez votre question juridique...' : 'Anontanio ny fanontanianao...'}
                      className="flex-1 px-3.5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:border-[#007A33] focus:ring-2 focus:ring-[#007A33]/20 focus:outline-none transition-all" />
                    <button onClick={handleSend} disabled={!input.trim() || isTyping}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#D22630] to-[#007A33] text-white flex items-center justify-center hover:opacity-90 active:scale-90 transition-all disabled:opacity-40 shrink-0">
                      <Send size={18} />
                    </button>
                  </div>
                  <p className="text-[9px] text-slate-400 text-center mt-1.5">
                    ⚠️ {lang === 'fr' ? 'Ne remplace pas un avocat' : 'Tsy manolo mpisolovava'} • <span className="bg-gradient-to-r from-blue-500 via-red-400 to-amber-400 bg-clip-text text-transparent font-bold">Gemini AI</span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
