# 🇲🇬 Juridique Malagasy

Application web juridique complète de Madagascar. Bilingue français/malagasy, propulsée par Google Gemini AI et Firebase.

---

## 🏗️ Architecture du projet

```
juridique-malagasy/
│
├── index.html                  # Point d'entrée HTML (PWA meta tags, manifest, icons)
├── vite.config.ts              # Configuration Vite (React + Tailwind + SingleFile)
├── capacitor.config.ts         # Configuration Capacitor (export Android APK)
├── tsconfig.json               # Configuration TypeScript
├── package.json                # Dépendances npm
│
├── public/
│   ├── manifest.json           # Manifest PWA (nom, icônes, raccourcis)
│   ├── sw.js                   # Service Worker v3 (cache offline, stale-while-revalidate)
│   └── icons/
│       ├── icon-192x192.png    # Icône PWA petite
│       └── icon-512x512.png    # Icône PWA grande
│
└── src/
    ├── main.tsx                # Initialisation React + Capacitor + Service Worker
    ├── App.tsx                 # Routeur principal (gère 10 pages)
    ├── index.css               # Styles globaux + animations + dark mode
    ├── firebase.ts             # (ancien, remplacé par lib/firebase.ts)
    │
    ├── lib/
    │   └── firebase.ts         # 🔥 Configuration Firebase (Auth + Firestore)
    │                            #    - fbRegister(), fbLogin(), fbLogout()
    │                            #    - fbGetUser(), fbAddFavorite(), fbRemoveFavorite()
    │                            #    - Clés API intégrées
    │
    ├── hooks/
    │   ├── useAuth.ts          # 👤 Hook authentification
    │   │                        #    - Écoute Firebase onAuthStateChanged
    │   │                        #    - register(), login(), logout()
    │   │                        #    - addFavorite(), removeFavorite(), isFavorite()
    │   │                        #    - updateProfile()
    │   │                        #    - Charge photo, phone, favoris depuis Firestore
    │   │
    │   ├── useTheme.ts         # 🌙 Hook mode nuit/jour
    │   │                        #    - Persiste dans localStorage
    │   │                        #    - Détecte prefers-color-scheme
    │   │                        #    - Ajoute/enlève classe "dark" sur <html>
    │   │
    │   └── useSearchHistory.ts # 🕐 Hook historique de recherche
    │                            #    - Sauvegarde les 10 dernières recherches
    │                            #    - localStorage
    │
    ├── data/                    # 📚 DONNÉES JURIDIQUES (le cœur de l'app)
    │   │
    │   ├── penalCode.ts        # ⚖️ CODE PÉNAL — 75+ articles
    │   │                        #    Interface : PenalArticle {
    │   │                        #      article, title_fr, title_mg,
    │   │                        #      description_fr, description_mg,
    │   │                        #      type: 'crime' | 'délit' | 'contravention',
    │   │                        #      penalty_fr, penalty_mg,
    │   │                        #      keywords: string[],
    │   │                        #      jurisprudence?: Jurisprudence[]
    │   │                        #    }
    │   │                        #    Exports : penalArticles[], searchArticles(), getTypeInfo()
    │   │
    │   ├── laborCode.ts        # 💼 DROIT DU TRAVAIL — 60+ articles
    │   │                        #    Interface : LaborArticle {
    │   │                        #      article, title_fr, title_mg,
    │   │                        #      description_fr, description_mg,
    │   │                        #      category: 'contrat'|'salaire'|'conge'|'licenciement'|'syndicat'|'securite'|'litige',
    │   │                        #      keywords: string[],
    │   │                        #      jurisprudence?: Jurisprudence[]
    │   │                        #    }
    │   │                        #    Exports : laborArticles[], searchLaborArticles(), laborCategories
    │   │
    │   ├── landLaw.ts          # 🏠 DROIT FONCIER — 35+ articles
    │   │                        #    Catégories : propriete, titre, transaction, domaine, succession, litige
    │   │                        #    Exports : landArticles[], searchLandArticles(), landCategories
    │   │
    │   ├── familyLaw.ts        # 👨‍👩‍👧 DROIT DE LA FAMILLE — 35+ articles
    │   │                        #    Catégories : mariage, divorce, enfant, filiation, adoption, succession, pension
    │   │                        #    Inclut des Jurisprudence[] sur certains articles
    │   │                        #    Exports : familyArticles[], searchFamilyArticles(), familyCategories
    │   │
    │   ├── glossary.ts         # 📖 Glossaire juridique pénal (30+ termes)
    │   │                        #    Interface : GlossaryTerm { term_fr, term_mg, definition_fr, definition_mg, ... }
    │   │
    │   ├── domainExtras.ts     # 📚 Glossaires + Simulateurs pour Travail, Foncier, Famille
    │   │                        #    - laborGlossary[], landGlossary[], familyGlossary[]
    │   │                        #    - laborSimQuestions[], landSimQuestions[], familySimQuestions[]
    │   │                        #    - penalGlossaryExtra[] (termes enrichis)
    │   │                        #    - searchDomainGlossary()
    │   │
    │   ├── chatbotEngine.ts    # 🤖 Moteur local du chatbot (fallback si Gemini échoue)
    │   │                        #    - 8 scénarios narratifs (regex → réponse guidée)
    │   │                        #    - 50+ patterns d'intention
    │   │                        #    - 10 réponses riches (plainte, avocat, garde à vue, etc.)
    │   │                        #    - Recherche cross-domaine
    │   │                        #    - Export : generateBotResponse(message, lang)
    │   │
    │   ├── gendarmerieContacts.ts  # 📞 Contacts gendarmerie + police
    │   │                        #    - gendarmerieContacts : 169 BDE dans 6 provinces
    │   │                        #    - policeContacts : 23 commissariats Antananarivo
    │   │                        #    Interface : ContactEntry { name, phone, phone2? }
    │   │
    │   └── translations.ts     # 🌐 Traductions FR/MG (100+ clés)
    │                            #    Export : translations, type Lang = 'fr' | 'mg'
    │
    └── components/              # 🧩 COMPOSANTS REACT
        │
        ├── App.tsx              # 🏠 ROUTEUR PRINCIPAL
        │                        #    - 10 pages : home, domain, manual, contact, about,
        │                        #                 auth, favorites, lawyers, profile, forum
        │                        #    - Gère : lang, theme, user, page, domain
        │                        #    - Passe les props à tous les composants
        │
        ├── Header.tsx           # 🔝 BARRE DE NAVIGATION DESKTOP
        │                        #    - Logo + Titre
        │                        #    - Nav items (conditionnels si user connecté)
        │                        #    - Boutons : thème (🌙/☀️), langue (🇫🇷/🇲🇬), avatar user
        │                        #    - Menu dropdown (profil, favoris, déconnexion)
        │                        #    - Menu hamburger mobile
        │
        ├── BottomNav.tsx        # 📱 BARRE DE NAVIGATION MOBILE (bottom)
        │                        #    - Fixe en bas sur mobile, cachée sur desktop
        │                        #    - Items conditionnels (Forum, Contacts, Favoris si connecté)
        │                        #    - Badge compteur sur les favoris
        │
        ├── SplashScreen.tsx     # 🎬 ÉCRAN DE DÉMARRAGE ANIMÉ
        │                        #    - Logo avec glow + rotation
        │                        #    - Particules flottantes
        │                        #    - Anneaux concentriques
        │                        #    - Barre de progression
        │                        #    - Tagline animée par phases
        │                        #    - Durée : 3.6 secondes
        │
        ├── HomePage.tsx         # 🏠 PAGE D'ACCUEIL
        │                        #    - Hero avec logo animé
        │                        #    - Barre de stats (articles, domaines, jurisprudence)
        │                        #    - 3 étapes "Comment ça marche"
        │                        #    - 4 cartes de domaine (avec shimmer hover)
        │                        #    - 6 fonctionnalités
        │                        #    - Badge "Powered by Gemini AI + Firebase"
        │
        ├── LegalDomainPage.tsx  # 📚 PAGE DOMAINE JURIDIQUE (le plus gros composant)
        │                        #    - 4 sous-onglets : Recherche, Explorer, Simulateur, Glossaire
        │                        #    - ArticleList : cartes avec favori ❤️ + partage WhatsApp
        │                        #    - DomainSimulator : questions guidées → résultat
        │                        #    - DomainGlossaryView : termes avec recherche
        │                        #    - Filtres par catégorie
        │                        #    - Historique de recherche
        │                        #    - Jurisprudence expandable
        │
        ├── Chatbot.tsx          # 🤖 CHATBOT ZOAKO
        │                        #    - Bouton flottant (bottom-right, au-dessus du bottom nav)
        │                        #    - Fenêtre de chat avec header gradient
        │                        #    - Appel API Google Gemini 2.0 Flash
        │                        #    - Fallback sur chatbotEngine.ts si Gemini échoue
        │                        #    - Verrouillé si non connecté
        │                        #    - Quick questions suggérées
        │                        #    - Rendu markdown (**gras**, _italique_)
        │                        #    - Typing indicator (3 dots animés)
        │
        ├── ForumPage.tsx        # 💬 FORUM COMMUNAUTAIRE
        │                        #    - Posts en temps réel (Firestore onSnapshot)
        │                        #    - Créer un post (titre + contenu + catégorie)
        │                        #    - Répondre à un post
        │                        #    - Liker (1 par personne, tracé en localStorage)
        │                        #    - Supprimer (auteur seulement)
        │                        #    - 5 catégories filtrables
        │                        #    - Avatars avec photo ou initiale
        │
        ├── LawyerDirectory.tsx  # 📞 PAGE CONTACTS
        │                        #    - 3 onglets : Avocats, Gendarmerie, Police
        │                        #    - Avocats : 7 cabinets avec spécialités et coordonnées
        │                        #    - Gendarmerie : 169 BDE, recherche par ville, filtre par province
        │                        #    - Police : 23 commissariats, 2 numéros par poste
        │                        #    - Boutons Appeler (lien tel:)
        │                        #    - Accès réservé aux utilisateurs connectés
        │
        ├── AuthPage.tsx         # 🔐 INSCRIPTION / CONNEXION
        │                        #    - Nom (obligatoire)
        │                        #    - Email OU numéro mobile (au choix)
        │                        #    - Mot de passe (6 car. min)
        │                        #    - Photo de profil (facultatif, upload + preview)
        │                        #    - Gestion erreurs Firebase (email existe, mdp faible, etc.)
        │
        ├── ProfilePage.tsx      # ⚙️ PAGE MON PROFIL
        │                        #    - Modifier : nom, téléphone, photo
        │                        #    - Email non modifiable (lié à Firebase Auth)
        │                        #    - Sauvegarde dans Firestore
        │                        #    - Message de succès/erreur
        │
        ├── FavoritesPage.tsx    # ❤️ PAGE FAVORIS
        │                        #    - Articles groupés par domaine
        │                        #    - Bouton supprimer
        │                        #    - Date d'ajout
        │
        ├── AboutPage.tsx        # ℹ️ PAGE À PROPOS
        │                        #    - Créateur : RATOVOSON Navelanizara Romuel
        │                        #    - Contact : +261 38 731 9628
        │                        #    - Description du projet
        │                        #    - Section DONS (MVola + Airtel Money)
        │
        ├── ManualPage.tsx       # 📖 MANUEL D'UTILISATION
        │                        #    - 8 sections accordéon
        │                        #    - Navigation rapide par boutons
        │                        #    - FAQ (7 questions)
        │
        ├── ContactPage.tsx      # ✉️ PAGE CONTACT (formulaire)
        ├── Footer.tsx           # 🦶 FOOTER (desktop seulement)
        ├── ScrollToTop.tsx      # ⬆️ Bouton retour en haut
        ├── OfflineIndicator.tsx # 📶 Indicateur online/offline
        ├── InstallPrompt.tsx    # 📲 Prompt d'installation PWA
        ├── MalagasyFlag.tsx     # 🇲🇬 SVG drapeau malgache
        └── FrenchFlag.tsx       # 🇫🇷 SVG drapeau français
```

---

## 🔄 Flux de données

```
Utilisateur
    │
    ▼
┌─────────────────────────────────────────┐
│              App.tsx (Routeur)           │
│  state: lang, theme, page, user         │
│  hooks: useAuth, useTheme               │
└──────┬──────────┬───────────┬───────────┘
       │          │           │
       ▼          ▼           ▼
   HomePage   LegalDomain   ForumPage
       │       Page             │
       │          │             │
       │    ┌─────┴─────┐      │
       │    │ Articles   │      │
       │    │ (data/*.ts)│      │
       │    └─────┬─────┘      │
       │          │             │
       ▼          ▼             ▼
┌──────────────────────────────────────┐
│         Firebase (Cloud)             │
│  ┌────────────┐  ┌───────────────┐   │
│  │ Auth       │  │ Firestore     │   │
│  │ (users)    │  │ (users/forum) │   │
│  └────────────┘  └───────────────┘   │
└──────────────────────────────────────┘
       │
       ▼
┌──────────────────┐
│ Google Gemini AI │  ← Chatbot Zoako
│ (API externe)    │
└──────────────────┘
```

---

## 📊 Structure Firestore

```
firestore/
├── users/
│   └── {uid}/
│       ├── name: string
│       ├── email: string
│       ├── phone?: string
│       ├── photoUrl?: string
│       ├── createdAt: string
│       └── favorites: FavoriteArticle[]
│           └── { articleId, domain, title_fr, title_mg, addedAt }
│
└── forum/
    └── {postId}/
        ├── authorName: string
        ├── authorId: string
        ├── authorPhoto?: string
        ├── category: string
        ├── title: string
        ├── content: string
        ├── likes: number
        ├── replies: number
        ├── createdAt: Timestamp
        └── replies/
            └── {replyId}/
                ├── authorName: string
                ├── authorId: string
                ├── content: string
                └── createdAt: Timestamp
```

---

## 🎨 Système de design

### Couleurs principales
| Couleur | Hex | Usage |
|---------|-----|-------|
| Rouge Madagascar | `#D22630` | Pénal, accents, danger |
| Vert Madagascar | `#007A33` | Foncier, succès, CTA |
| Bleu | `#2563eb` | Travail, liens |
| Violet | `#7c3aed` | Famille |
| Slate 900 | `#0f172a` | Header, fond dark |

### Mode nuit
- Classe `dark` sur `<html>`
- Override CSS dans `index.css` (`.dark .bg-white → #0f172a`, etc.)
- Persisté dans `localStorage('theme')`

### Animations (définies dans index.css)
| Animation | Usage |
|-----------|-------|
| `splash-*` | Splash screen (logo, rings, particles, progress) |
| `page-enter` | Transition entre pages |
| `anim-stagger-up` | Apparition séquentielle |
| `float-anim` | Icônes flottantes |
| `card-hover` | Hover sur cartes (+translateY) |
| `shimmer` | Effet brillant au hover |
| `glow-pulse` | Pulsation logo |
| `bounce-in` | Apparition rebond |

---

## 📝 Comment ajouter un article

### Code Pénal (src/data/penalCode.ts)
```typescript
{
  article: "Art. XXX",
  title_fr: "Titre français",
  title_mg: "Titre malagasy",
  description_fr: "Description complète...",
  description_mg: "Famaritana feno...",
  type: "crime",          // "crime" | "délit" | "contravention"
  penalty_fr: "Peine...",
  penalty_mg: "Sazy...",
  keywords: ["mot1", "mot2"],
  jurisprudence: [{        // optionnel
    reference: "Cour..., Arrêt n° XX/XXXX",
    date: "2024-01-15",
    summary_fr: "Résumé...",
    summary_mg: "Famintinana..."
  }]
}
```

### Droit du Travail (src/data/laborCode.ts)
```typescript
{
  article: "Art. XX",
  title_fr: "...",
  title_mg: "...",
  description_fr: "...",
  description_mg: "...",
  category: "contrat",    // contrat|salaire|conge|licenciement|syndicat|securite|litige
  keywords: ["..."],
  jurisprudence: [...]    // optionnel
}
```

---

## 👨‍💻 Créateur

**RATOVOSON Navelanizara Romuel**

📞 +261 38 731 9628
📧 romuelratovoson5@gmail.com

## 💰 Soutenir

| MVola | 038 73 196 28 |
|-------|---------------|
| **Airtel Money** | **033 38 936 60** |

Au nom de RATOVOSON Navelanizara Romuel

---

> *Ny lalàna dia ho an'ny rehetra — La loi est pour tous* 🇲🇬
