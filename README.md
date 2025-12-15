# TP Exam Chat - Application de chat en temps réel

Application de chat en temps réel avec frontend et backend, déployée automatiquement via GitHub Actions.

## Structure du projet

```
tp-exam-chat/
├── frontend/
│   ├── index.html
│   └── Dockerfile
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── .github/workflows/ci.yml
```

## Fonctionnalités

### Frontend

- Interface de chat responsive et moderne
- Champ pour saisir un pseudo
- Zone d'affichage des messages avec auteur et heure
- Champ + bouton pour envoyer un message
- Refresh automatique toutes les 4 secondes

### Backend

- API REST Node.js + Express
- `GET /api/messages` - Retourne tous les messages
- `POST /api/messages` - Ajoute un message (body: `{author, content}`)
- Stockage en mémoire (pas de base de données)
- CORS activé

## Développement local

### Avec Docker Compose

```bash
docker-compose up
```

- Frontend: http://localhost
- Backend: http://localhost:3000

### Sans Docker

#### Backend

```bash
cd backend
npm install
npm start
```

#### Frontend

Ouvrir `frontend/index.html` dans un navigateur ou utiliser un serveur HTTP simple.

## Déploiement

### Méthode recommandée : Déploiement automatique via webhooks

Pour un déploiement 100% automatique avec un seul `git push`, connectez vos services directement à GitHub :

#### 1. Déploiement Render (Backend)

1. Créer un compte [Render](https://render.com)
2. Créer un nouveau "Web Service"
3. Connecter le dépôt GitHub `tp-exam-chat`
4. Configuration:
   - **Name**: `tp-exam-chat-backend`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment**: `Node`
   - **Port**: `3000`
   - **Auto-Deploy**: `Yes` (activé par défaut)
5. Noter l'URL du service (ex: `https://tp-exam-chat-backend.onrender.com`)
6. Mettre à jour l'URL dans `frontend/index.html`

#### 2. Déploiement Vercel (Frontend)

1. Créer un compte [Vercel](https://vercel.com)
2. Cliquer sur "Add New..." → "Project"
3. Importer le dépôt GitHub `tp-exam-chat`
4. Configuration:
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
5. Vercel déploiera automatiquement à chaque push

### Méthode alternative : Déploiement via GitHub Actions

Si vous préférez déployer via CI/CD, configurez les secrets GitHub :

1. **Secrets GitHub à configurer:**
   - `VERCEL_TOKEN` - Token d'authentification Vercel
   - `VERCEL_ORG_ID` - ID de l'organisation Vercel
   - `VERCEL_PROJECT_ID` - ID du projet Vercel

Le workflow GitHub Actions déploiera automatiquement après les tests.

### Configuration CORS

Le backend est configuré avec CORS activé pour permettre les requêtes depuis le frontend déployé sur Vercel.

## URLs de déploiement

- **Frontend Vercel**: À configurer après déploiement
- **Backend Render**: À configurer après déploiement

## Notes

- Le backend stocke les messages en mémoire (perte des données au redémarrage)
- Le frontend se connecte automatiquement au backend Render en production
- Le refresh automatique est configuré à 4 secondes
