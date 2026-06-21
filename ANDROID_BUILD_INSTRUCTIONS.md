# 📱 Instructions pour créer l'application Android

## Prérequis

1. **Node.js** (v16 ou supérieur)
2. **Android Studio** avec :
   - Android SDK
   - Android SDK Platform-Tools
   - Un émulateur ou un appareil Android connecté

## 🚀 Méthode 1 : APK avec Capacitor (Recommandé)

### Étape 1 : Construire l'application web

```bash
npm run build
```

### Étape 2 : Initialiser le projet Android

```bash
npx cap add android
```

### Étape 3 : Copier les fichiers web vers Android

```bash
npx cap copy android
npx cap sync android
```

### Étape 4 : Ouvrir dans Android Studio

```bash
npx cap open android
```

### Étape 5 : Générer l'APK

1. Dans Android Studio, allez dans **Build > Build Bundle(s) / APK(s) > Build APK(s)**
2. L'APK sera généré dans `android/app/build/outputs/apk/debug/app-debug.apk`

### Pour un APK de production (signé) :

1. Allez dans **Build > Generate Signed Bundle / APK**
2. Créez ou utilisez une clé de signature existante
3. Suivez les instructions pour générer un APK signé

---

## 🌐 Méthode 2 : PWA (Progressive Web App)

L'application est déjà configurée comme PWA ! Les utilisateurs peuvent :

1. Ouvrir le site web sur leur téléphone Android
2. Appuyer sur **"Ajouter à l'écran d'accueil"** dans le menu du navigateur
3. L'app sera installée comme une application native

---

## 📁 Structure des fichiers Android

```
android/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── AndroidManifest.xml
│   │   │   ├── java/mg/codepenal/malagasy/
│   │   │   ├── res/
│   │   │   │   ├── drawable/       # Icônes et splash screens
│   │   │   │   ├── values/         # Couleurs et styles
│   │   │   │   └── ...
│   │   │   └── assets/             # Fichiers web compilés
│   │   └── ...
│   ├── build.gradle
│   └── ...
├── build.gradle
└── settings.gradle
```

---

## 🎨 Personnaliser les icônes et splash screens

### Icônes de l'application

Remplacez les fichiers dans `android/app/src/main/res/`:
- `mipmap-hdpi/ic_launcher.png` (72x72)
- `mipmap-mdpi/ic_launcher.png` (48x48)
- `mipmap-xhdpi/ic_launcher.png` (96x96)
- `mipmap-xxhdpi/ic_launcher.png` (144x144)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192)

### Splash Screen

Modifiez `android/app/src/main/res/drawable/splash.xml` ou ajoutez une image.

---

## ⚙️ Configuration avancée

### Modifier le package name

Dans `capacitor.config.ts`:
```typescript
const config: CapacitorConfig = {
  appId: 'mg.codepenal.malagasy', // Changez ceci
  appName: 'Code Pénal Malagasy',
  // ...
};
```

### Ajouter des permissions Android

Modifiez `android/app/src/main/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 🔄 Mettre à jour l'application

Après chaque modification du code :

```bash
npm run build
npx cap copy android
npx cap sync android
```

Puis reconstruisez l'APK dans Android Studio.

---

## 📝 Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run build` | Construire l'app web |
| `npx cap add android` | Ajouter la plateforme Android |
| `npx cap copy android` | Copier les fichiers web |
| `npx cap sync android` | Synchroniser plugins et fichiers |
| `npx cap open android` | Ouvrir dans Android Studio |
| `npx cap run android` | Lancer sur appareil/émulateur |

---

## 🆘 Problèmes courants

### "SDK location not found"
Créez un fichier `android/local.properties` avec :
```
sdk.dir=/chemin/vers/Android/Sdk
```

### "Gradle build failed"
```bash
cd android
./gradlew clean
cd ..
npx cap sync android
```

### L'app ne se charge pas
Vérifiez que `webDir` dans `capacitor.config.ts` pointe vers le dossier `dist`.

---

## 📧 Support

Pour toute question : romuelratovoson5@gmail.com
