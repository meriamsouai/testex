# Structure du projet TP Exam Chat

## Arborescence complète

```
tp-exam-chat/
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline CI/CD GitHub Actions
├── backend/
│   ├── Dockerfile              # Image Docker pour le backend
│   ├── package.json            # Dépendances Node.js
│   ├── server.js               # Serveur Express avec API REST
│   └── test-api.js             # Script de test de l'API
├── frontend/
│   ├── Dockerfile              # Image Docker pour le frontend
│   ├── index.html              # Interface utilisateur du chat
│   └── vercel.json             # Configuration Vercel
├── .gitignore                  # Fichiers à ignorer par Git
├── docker-compose.yml          # Configuration Docker Compose
├── render.yaml                 # Configuration Render (optionnel)
├── README.md                   # Documentation principale
├── DEPLOY.md                   # Guide de déploiement détaillé
└── STRUCTURE.md                # Ce fichier
```

## Fichiers créés

### Backend

- ✅ `backend/server.js` - API REST avec GET/POST /api/messages
- ✅ `backend/package.json` - Dépendances (express, cors)
- ✅ `backend/Dockerfile` - Image Docker
- ✅ `backend/test-api.js` - Tests de l'API

### Frontend

- ✅ `frontend/index.html` - Interface de chat responsive
- ✅ `frontend/Dockerfile` - Image Nginx
- ✅ `frontend/vercel.json` - Configuration Vercel

### CI/CD

- ✅ `.github/workflows/ci.yml` - Pipeline GitHub Actions

### Configuration

- ✅ `docker-compose.yml` - Déploiement local
- ✅ `render.yaml` - Configuration Render
- ✅ `.gitignore` - Exclusions Git

### Documentation

- ✅ `README.md` - Documentation principale
- ✅ `DEPLOY.md` - Guide de déploiement

## Fonctionnalités implémentées

### ✅ Frontend

- [x] Champ pour saisir un pseudo
- [x] Zone d'affichage des messages (auteur + heure)
- [x] Champ + bouton pour envoyer un message
- [x] Refresh automatique toutes les 4 secondes
- [x] Design propre et responsive

### ✅ Backend

- [x] GET /api/messages → retourne tous les messages
- [x] POST /api/messages → ajoute un message
- [x] Stockage en mémoire
- [x] CORS activé
- [x] Health check endpoint

### ✅ CI/CD

- [x] GitHub Actions pour build + test
- [x] Configuration pour déploiement Vercel
- [x] Configuration pour déploiement Render

## Prochaines étapes

1. Créer le dépôt GitHub `tp-exam-chat`
2. Pousser le code
3. Déployer le backend sur Render
4. Mettre à jour l'URL du backend dans `frontend/index.html`
5. Déployer le frontend sur Vercel
6. Tester l'application complète

Voir `DEPLOY.md` pour les instructions détaillées.
