# 🔥 Configuration Firebase pour Juridique Malagasy

## Étape 1 : Créer un projet Firebase

1. Allez sur https://console.firebase.google.com/
2. Cliquez "Ajouter un projet"
3. Nom : "juridique-malagasy"
4. Désactivez Google Analytics (optionnel)
5. Cliquez "Créer le projet"

## Étape 2 : Activer l'authentification

1. Dans le menu gauche → "Authentication"
2. Cliquez "Commencer"
3. Activez "Email/Mot de passe"
4. Activez aussi "Google" (optionnel mais recommandé)

## Étape 3 : Créer la base de données Firestore

1. Menu gauche → "Firestore Database"
2. Cliquez "Créer une base de données"
3. Choisissez "Mode production"
4. Région : "europe-west1" (le plus proche de Madagascar)

## Étape 4 : Règles de sécurité Firestore

Collez ces règles dans Firestore → Rules :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    // Favorites
    match /users/{userId}/favorites/{favId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Étape 5 : Obtenir les clés de configuration

1. Paramètres du projet (icône engrenage) → "Paramètres du projet"
2. Section "Vos applications" → icône Web (</>) 
3. Nom : "juridique-web"
4. Cochez "Firebase Hosting" (optionnel)
5. Copiez la configuration :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "juridique-malagasy.firebaseapp.com",
  projectId: "juridique-malagasy",
  storageBucket: "juridique-malagasy.appspot.com",
  messagingSenderId: "VOTRE_ID",
  appId: "VOTRE_APP_ID"
};
```

## Étape 6 : Installer Firebase dans le projet

```bash
npm install firebase
```

## Étape 7 : Créer le fichier de configuration

Créez `src/lib/firebase.ts` avec :

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  // COLLEZ VOS CLÉS ICI
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ===== AUTH =====
export async function registerUser(email: string, password: string, name: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, email, createdAt: new Date().toISOString()
  });
  return cred.user;
}

export async function loginUser(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export function onAuthChange(callback: (user: any) => void) {
  return onAuthStateChanged(auth, callback);
}

// ===== FAVORITES =====
export async function addFavorite(userId: string, fav: any) {
  await addDoc(collection(db, 'users', userId, 'favorites'), {
    ...fav, addedAt: new Date().toISOString()
  });
}

export async function removeFavorite(userId: string, favId: string) {
  await deleteDoc(doc(db, 'users', userId, 'favorites', favId));
}

export async function getFavorites(userId: string) {
  const snap = await getDocs(collection(db, 'users', userId, 'favorites'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ===== USER PROFILE =====
export async function getUserProfile(userId: string) {
  const snap = await getDoc(doc(db, 'users', userId));
  return snap.exists() ? snap.data() : null;
}
```

## Étape 8 : Modifier useAuth.ts pour utiliser Firebase

Remplacez le localStorage par les fonctions Firebase ci-dessus.
Les données seront synchronisées entre tous les appareils de l'utilisateur.

## Étape 9 : Déployer sur Firebase Hosting (optionnel)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Contact

En cas de problème : RATOVOSON Navelanizara Romuel — +261 38 731 9628
