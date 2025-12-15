# Guide de déploiement - TP Exam Chat

Ce guide vous explique comment déployer l'application de chat en temps réel avec déploiement automatique.

## Prérequis

1. Un compte GitHub
2. Un compte Vercel (gratuit)
3. Un compte Render (gratuit)

## Étapes de déploiement

### 1. Créer le dépôt GitHub

1. Créez un nouveau dépôt public sur GitHub nommé `tp-exam-chat`
2. Poussez tout le code :

```bash
git init
git add .
git commit -m "Initial commit - Chat app"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/tp-exam-chat.git
git push -u origin main
```

### 2. Déployer le Backend sur Render

1. Connectez-vous à [Render](https://render.com)
2. Cliquez sur "New +" → "Web Service"
3. Connectez votre dépôt GitHub `tp-exam-chat`
4. Configuration :
   - **Name**: `tp-exam-chat-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free
5. Cliquez sur "Create Web Service"
6. **Important** : Notez l'URL de votre service (ex: `https://tp-exam-chat-backend.onrender.com`)

### 3. Mettre à jour l'URL du backend dans le frontend

1. Ouvrez `frontend/index.html`
2. Remplacez `https://tp-exam-chat-backend.onrender.com` par votre URL Render réelle (ligne ~200)
3. Commitez et poussez :

```bash
git add frontend/index.html
git commit -m "Update backend URL"
git push
```

### 4. Déployer le Frontend sur Vercel

#### Option A : Via Vercel Dashboard (Recommandé pour auto-deploy)

1. Connectez-vous à [Vercel](https://vercel.com)
2. Cliquez sur "Add New..." → "Project"
3. Importez votre dépôt GitHub `tp-exam-chat`
4. Configuration :
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
   - **Build Command**: (laisser vide)
   - **Output Directory**: (laisser vide)
5. Cliquez sur "Deploy"
6. Vercel créera automatiquement une URL (ex: `https://tp-exam-chat.vercel.app`)

#### Option B : Via GitHub Actions (CI/CD automatique)

1. Dans Vercel, allez dans Settings → Tokens
2. Créez un nouveau token et copiez-le
3. Dans GitHub, allez dans Settings → Secrets and variables → Actions
4. Ajoutez les secrets suivants :
   - `VERCEL_TOKEN` : Votre token Vercel
   - `VERCEL_ORG_ID` : Trouvé dans Vercel Settings → General
   - `VERCEL_PROJECT_ID` : Trouvé dans Vercel Project Settings → General
5. Le déploiement se fera automatiquement à chaque push sur `main`

### 5. Configurer le déploiement automatique Render

1. Dans Render, allez dans votre service backend
2. Allez dans l'onglet "Settings"
3. Dans "Auto-Deploy", sélectionnez "Yes"
4. Render déploiera automatiquement à chaque push sur la branche `main`

## Vérification

1. Ouvrez l'URL Vercel du frontend
2. Entrez un pseudo
3. Envoyez un message
4. Vérifiez que les messages s'affichent correctement

## URLs à fournir au correcteur

- **Frontend Vercel**: `https://votre-projet.vercel.app`
- **Backend Render**: `https://votre-backend.onrender.com`

## Dépannage

### Le frontend ne se connecte pas au backend

- Vérifiez que l'URL du backend dans `frontend/index.html` correspond à votre URL Render
- Vérifiez que CORS est activé sur le backend (déjà fait dans le code)
- Vérifiez les logs Render pour voir si le backend démarre correctement

### Les messages ne s'affichent pas

- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que le backend répond à `GET /api/messages`
- Testez l'API directement : `https://votre-backend.onrender.com/api/messages`

### Le déploiement Vercel échoue

- Vérifiez que le dossier `frontend` contient bien `index.html`
- Vérifiez que `vercel.json` est présent dans le dossier `frontend`
