import { useState, useEffect, useCallback } from 'react';
import { Lang } from '../data/translations';
import { UserProfile } from '../hooks/useAuth';
import { db } from '../lib/firebase';
import { collection, addDoc, query, orderBy, limit, onSnapshot, doc, updateDoc, increment, Timestamp, getDocs, deleteDoc } from 'firebase/firestore';
import { MessageSquare, Send, ArrowLeft, ThumbsUp, Clock, User, Scale, Briefcase, MapPin, Users, ChevronDown, ChevronUp, AlertTriangle, Trash2 } from 'lucide-react';

interface ForumPageProps {
  lang: Lang;
  user: UserProfile | null;
  onBack: () => void;
  onLogin: () => void;
}

interface ForumPost {
  id: string;
  authorName: string;
  authorId: string;
  authorPhoto?: string;
  category: string;
  title: string;
  content: string;
  likes: number;
  replies: number;
  createdAt: any;
}

interface Reply {
  id: string;
  authorName: string;
  authorId: string;
  authorPhoto?: string;
  content: string;
  createdAt: any;
}

const categories = [
  { id: 'all', fr: 'Tous', mg: 'Rehetra', icon: <MessageSquare size={14} />, color: '#007A33' },
  { id: 'penal', fr: 'Pénal', mg: 'Famaizana', icon: <Scale size={14} />, color: '#D22630' },
  { id: 'labor', fr: 'Travail', mg: 'Asa', icon: <Briefcase size={14} />, color: '#2563eb' },
  { id: 'land', fr: 'Foncier', mg: 'Tany', icon: <MapPin size={14} />, color: '#059669' },
  { id: 'family', fr: 'Famille', mg: 'Fianakaviana', icon: <Users size={14} />, color: '#7c3aed' },
  { id: 'general', fr: 'Général', mg: 'Ankapobeny', icon: <MessageSquare size={14} />, color: '#64748b' },
];

export default function ForumPage({ lang, user, onBack, onLogin }: ForumPageProps) {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [filter, setFilter] = useState('all');
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCat, setNewCat] = useState('general');
  const [posting, setPosting] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [replies, setReplies] = useState<Record<string, Reply[]>>({});
  const [replyText, setReplyText] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);

  // Real-time posts
  useEffect(() => {
    const q = query(collection(db, 'forum'), orderBy('createdAt', 'desc'), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() } as ForumPost)));
    }, () => setPosts([]));
    return () => unsub();
  }, []);

  // Load replies
  const loadReplies = useCallback(async (postId: string) => {
    try {
      const q = query(collection(db, 'forum', postId, 'replies'), orderBy('createdAt', 'asc'));
      const snap = await getDocs(q);
      setReplies(prev => ({ ...prev, [postId]: snap.docs.map(d => ({ id: d.id, ...d.data() } as Reply)) }));
    } catch {}
  }, []);

  // Create post
  const handlePost = async () => {
    if (!user || !newTitle.trim() || !newContent.trim()) return;
    setPosting(true);
    try {
      await addDoc(collection(db, 'forum'), {
        authorName: user.name, authorId: user.id, authorPhoto: user.photoUrl || null,
        category: newCat, title: newTitle.trim(), content: newContent.trim(),
        likes: 0, replies: 0, createdAt: Timestamp.now()
      });
      setNewTitle(''); setNewContent(''); setNewCat('general'); setShowNew(false);
    } catch {}
    setPosting(false);
  };

  // Reply
  const handleReply = async (postId: string) => {
    if (!user || !replyText.trim()) return;
    try {
      await addDoc(collection(db, 'forum', postId, 'replies'), {
        authorName: user.name, authorId: user.id, authorPhoto: user.photoUrl || null,
        content: replyText.trim(), createdAt: Timestamp.now()
      });
      await updateDoc(doc(db, 'forum', postId), { replies: increment(1) });
      setReplyText(''); setReplyTo(null);
      loadReplies(postId);
    } catch {}
  };

  // Like — one per user per post
  const [likedPosts, setLikedPosts] = useState<Set<string>>(() => {
    try { return new Set(JSON.parse(localStorage.getItem('jm_liked_posts') || '[]')); }
    catch { return new Set(); }
  });

  const handleLike = async (postId: string) => {
    if (!user || likedPosts.has(postId)) return;
    try {
      await updateDoc(doc(db, 'forum', postId), { likes: increment(1) });
      setLikedPosts(prev => {
        const updated = new Set(prev);
        updated.add(postId);
        localStorage.setItem('jm_liked_posts', JSON.stringify([...updated]));
        return updated;
      });
    } catch {}
  };

  // Delete post (only author can delete)
  const handleDeletePost = async (postId: string) => {
    if (!user) return;
    const confirmed = window.confirm(lang === 'fr' ? 'Supprimer cette discussion ?' : 'Hamafa ity resaka ity ?');
    if (!confirmed) return;
    try { await deleteDoc(doc(db, 'forum', postId)); } catch {}
  };

  // Delete reply (only author can delete)
  const handleDeleteReply = async (postId: string, replyId: string) => {
    if (!user) return;
    const confirmed = window.confirm(lang === 'fr' ? 'Supprimer cette réponse ?' : 'Hamafa ity valiny ity ?');
    if (!confirmed) return;
    try {
      await deleteDoc(doc(db, 'forum', postId, 'replies', replyId));
      await updateDoc(doc(db, 'forum', postId), { replies: increment(-1) });
      loadReplies(postId);
    } catch {}
  };

  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter);

  const fmtDate = (ts: any) => {
    if (!ts) return '';
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'mg', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  };

  const Avatar = ({ name, photo, size = 9 }: { name: string; photo?: string; size?: number }) => (
    <div className={`shrink-0 w-${size} h-${size} rounded-full bg-gradient-to-br from-[#D22630] to-[#007A33] flex items-center justify-center text-white text-xs font-bold overflow-hidden`}
      style={{ width: size * 4, height: size * 4 }}>
      {photo ? <img src={photo} alt="" className="w-full h-full object-cover" /> : name.charAt(0).toUpperCase()}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 page-enter">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 mb-6 hover:-translate-x-1 transition-all">
        <ArrowLeft size={16} />{lang === 'fr' ? 'Retour' : 'Hiverina'}
      </button>

      {/* Title */}
      <div className="text-center mb-6 anim-stagger-up" style={{ animationDelay: '0ms' }}>
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D22630] to-[#007A33] shadow-lg mb-3 float-anim">
          <MessageSquare className="text-white" size={28} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
          {lang === 'fr' ? 'Forum Communautaire' : 'Sehatry ny Fiaraha-monina'}
        </h2>
        <p className="text-slate-500 text-sm">{lang === 'fr' ? 'Posez vos questions, partagez vos expériences' : 'Anontanio, zarao ny traikefanao'}</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-1.5 mb-4 anim-stagger-up" style={{ animationDelay: '80ms' }}>
        {categories.map(c => (
          <button key={c.id} onClick={() => setFilter(c.id)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${filter === c.id ? 'text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
            style={filter === c.id ? { backgroundColor: c.color } : {}}>
            {c.icon}{c[lang as 'fr' | 'mg']}
          </button>
        ))}
      </div>

      {/* New post */}
      {user ? (
        !showNew ? (
          <button onClick={() => setShowNew(true)} className="w-full mb-5 p-4 bg-white border-2 border-dashed border-slate-300 rounded-2xl text-sm text-slate-500 hover:border-[#007A33] hover:text-[#007A33] transition-all flex items-center justify-center gap-2">
            <Send size={16} />{lang === 'fr' ? 'Poser une question ou partager...' : 'Manontany na mizara...'}
          </button>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-5 mb-5 page-enter">
            <h3 className="font-bold text-slate-900 text-sm mb-3">{lang === 'fr' ? 'Nouvelle discussion' : 'Resaka vaovao'}</h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {categories.filter(c => c.id !== 'all').map(c => (
                <button key={c.id} onClick={() => setNewCat(c.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${newCat === c.id ? 'text-white' : 'bg-slate-100 text-slate-600'}`}
                  style={newCat === c.id ? { backgroundColor: c.color } : {}}>
                  {c[lang as 'fr' | 'mg']}
                </button>
              ))}
            </div>
            <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)}
              placeholder={lang === 'fr' ? 'Titre de votre question...' : 'Lohateny ny fanontanianao...'}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:outline-none text-sm mb-2" />
            <textarea value={newContent} onChange={e => setNewContent(e.target.value)}
              placeholder={lang === 'fr' ? 'Décrivez votre situation en détail...' : 'Lazao amin\'ny antsipiriany...'}
              rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:outline-none text-sm mb-3 resize-none" />
            <div className="flex gap-2">
              <button onClick={handlePost} disabled={posting || !newTitle.trim() || !newContent.trim()}
                className="flex-1 py-3 bg-gradient-to-r from-[#D22630] to-[#007A33] text-white font-bold rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm disabled:opacity-40 flex items-center justify-center gap-2">
                {posting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={14} />}
                {lang === 'fr' ? 'Publier' : 'Avoaka'}
              </button>
              <button onClick={() => setShowNew(false)} className="px-5 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 text-sm">
                {lang === 'fr' ? 'Annuler' : 'Ajanona'}
              </button>
            </div>
          </div>
        )
      ) : (
        <button onClick={onLogin} className="w-full mb-5 p-4 bg-white border border-slate-200 rounded-2xl text-sm text-slate-500 hover:border-[#007A33] transition-all flex items-center justify-center gap-2">
          <User size={16} />{lang === 'fr' ? 'Connectez-vous pour participer' : 'Midira mba handray anjara'}
        </button>
      )}

      {/* Posts */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center">
          <MessageSquare size={36} className="mx-auto mb-3 text-slate-300" />
          <p className="text-sm text-slate-500">{lang === 'fr' ? 'Aucune discussion. Soyez le premier !' : 'Tsy mbola misy resaka. Ianao no voalohany !'}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(post => {
            const cat = categories.find(c => c.id === post.category);
            const isOpen = expanded === post.id;
            return (
              <div key={post.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden card-hover">
                {/* Post header */}
                <button onClick={() => { if (isOpen) setExpanded(null); else { setExpanded(post.id); loadReplies(post.id); } }} className="w-full text-left p-4">
                  <div className="flex items-start gap-3">
                    <Avatar name={post.authorName} photo={post.authorPhoto} size={9} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-semibold text-slate-900">{post.authorName}</span>
                        {cat && <span className="px-1.5 py-0.5 rounded text-[9px] font-bold text-white" style={{ backgroundColor: cat.color }}>{cat[lang as 'fr' | 'mg']}</span>}
                        <span className="text-[10px] text-slate-400 flex items-center gap-0.5"><Clock size={10} />{fmtDate(post.createdAt)}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{post.title}</h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{post.content}</p>
                      <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1"><ThumbsUp size={12} />{post.likes}</span>
                        <span className="flex items-center gap-1"><MessageSquare size={12} />{post.replies} {lang === 'fr' ? 'réponses' : 'valiny'}</span>
                        <span className="ml-auto">{isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="border-t border-slate-100 px-4 pb-4 pt-3 page-enter">
                    {/* Full content */}
                    <p className="text-sm text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap">{post.content}</p>

                    {/* Actions: Like + Delete */}
                    {user && (
                      <div className="flex items-center gap-2 mb-4">
                        <button onClick={() => handleLike(post.id)} disabled={likedPosts.has(post.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg active:scale-95 transition-all ${likedPosts.has(post.id) ? 'bg-blue-100 text-blue-600 cursor-default' : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'}`}>
                          <ThumbsUp size={14} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />{lang === 'fr' ? 'J\'aime' : 'Tiako'} ({post.likes})
                        </button>
                        {user.id === post.authorId && (
                          <button onClick={() => handleDeletePost(post.id)} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-500 text-xs font-semibold rounded-lg hover:bg-red-100 hover:text-red-700 active:scale-95 transition-all">
                            <Trash2 size={14} />{lang === 'fr' ? 'Supprimer' : 'Hamafa'}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Replies */}
                    {(replies[post.id] || []).length > 0 && (
                      <div className="space-y-3 mb-4">
                        <p className="text-xs font-bold text-slate-500">{lang === 'fr' ? 'Réponses' : 'Valiny'} ({(replies[post.id] || []).length})</p>
                        {(replies[post.id] || []).map(r => (
                          <div key={r.id} className="flex gap-2.5 pl-3 border-l-2 border-slate-200 group">
                            <Avatar name={r.authorName} photo={r.authorPhoto} size={7} />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-[11px] font-semibold text-slate-800">{r.authorName}</span>
                                <span className="text-[9px] text-slate-400">{fmtDate(r.createdAt)}</span>
                                {user && user.id === r.authorId && (
                                  <button onClick={() => handleDeleteReply(post.id, r.id)}
                                    className="ml-auto opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-all active:scale-90"
                                    title={lang === 'fr' ? 'Supprimer' : 'Hamafa'}>
                                    <Trash2 size={12} />
                                  </button>
                                )}
                              </div>
                              <p className="text-xs text-slate-600 mt-0.5">{r.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Reply input */}
                    {user ? (
                      <div className="flex gap-2">
                        <input type="text" value={replyTo === post.id ? replyText : ''}
                          onChange={e => { setReplyTo(post.id); setReplyText(e.target.value); }}
                          onFocus={() => setReplyTo(post.id)}
                          placeholder={lang === 'fr' ? 'Votre réponse...' : 'Ny valinao...'}
                          className="flex-1 px-3 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#007A33] focus:outline-none text-xs" />
                        <button onClick={() => handleReply(post.id)} disabled={!replyText.trim() || replyTo !== post.id}
                          className="px-4 py-2.5 bg-[#007A33] text-white rounded-xl hover:bg-emerald-700 active:scale-95 transition-all disabled:opacity-40">
                          <Send size={14} />
                        </button>
                      </div>
                    ) : (
                      <button onClick={onLogin} className="text-xs text-[#007A33] font-semibold hover:underline">
                        {lang === 'fr' ? 'Connectez-vous pour répondre' : 'Midira mba hamaly'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
        <p className="text-[10px] text-amber-700">
          {lang === 'fr' ? 'Ce forum est un espace d\'entraide. Les réponses ne remplacent pas les conseils d\'un avocat professionnel.' : 'Ity sehatry ny fiaraha-monina ity dia toerana ifanampiana. Ny valiny dia tsy manolo ny torohevitry ny mpisolovava.'}
        </p>
      </div>
    </div>
  );
}
