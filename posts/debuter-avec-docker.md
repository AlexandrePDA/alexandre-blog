---
title: "Docker : ton guide complet pour débuter"
subtitle: "Comprends les concepts de base, les images, les conteneurs, et maîtrise les fichiers Dockerfile et Docker Compose."
date: "16/11/2023"
tags: ["docker", "guide"]
image: "/assets/docker.png"
emoji: "🐳"
---

Tu entends souvent parler de **Docker** 🐳 dans le monde du développement ?

Si oui, tu as probablement remarqué que c'est devenu un outil incontournable, mais peut-être que les détails te semblent encore flous. Docker peut paraître intimidant au premier abord, surtout si tu n'es pas familier avec les concepts de **conteneurs** et d'**images**. Pourtant, une fois que tu auras saisi les bases, tu découvriras un univers de possibilités pour gérer tes applications de manière **plus efficace et plus flexible**.

Alors, prêt à plonger dans le monde fascinant de Docker ? Découvre dès maintenant comment maîtriser cet outil essentiel et donne un coup de **boost à tes projets de développement** !

<p align="center">
<img src="/assets/docker.png" alt="illustration article" width="300" />
</p>

---

## 💡 Décrypter Docker

### 📦 Qu'est-ce que Docker ?

Docker, c'est un peu comme un **kit de magie pour les développeurs**. Imagine que tu as créé une super application sur ton ordinateur, mais maintenant tu veux la partager avec le monde. Le hic, c'est que ton application pourrait ne pas fonctionner pareil sur un autre ordinateur. C'est là que **Docker entre en jeu** !

Pense à Docker comme à une **boîte de transport magique** pour ton application. Cette boîte, ou "conteneur", contient tout ce dont ton application a besoin pour fonctionner : ton code, toutes les petites bibliothèques et même un mini-système d'exploitation. Le truc cool, c'est que peu importe où tu envoies cette boîte (sur un autre ordinateur, un serveur, etc.), ton application fonctionnera exactement de la même manière que sur ton ordi.

Pourquoi les gens adorent Docker ? Parce qu'il rend les choses **super simples**. Tu n'as pas à t'inquiéter si ton application va buguer sur un autre système ou si tu vas passer des heures à configurer les choses. Et si jamais tu as besoin de faire grandir ton projet, Docker est là pour te faciliter la vie.

### 🧟 Démystifier les termes techniques

Docker est un outil puissant, mais il peut être difficile de comprendre tous les termes techniques. Voici quelques définitions pour t'aider à démystifier Docker :

- **Image** : Imagine une image Docker comme une recette de cuisine. Elle contient toutes les instructions et ingrédients (dépendances) nécessaires pour créer ton plat (le conteneur). Tu peux utiliser cette recette pour préparer le même plat encore et encore, c'est-à-dire créer plusieurs conteneurs à partir de la même image.

- **Conteneur** : Si l'image est la recette, alors le conteneur est le plat cuisiné. C'est un petit espace personnel où ton application vit et fonctionne, avec tout ce dont elle a besoin. Le conteneur garde ton application séparée des autres, un peu comme si chaque application avait sa propre chambre dans une grande maison.

- **Dockerfile** : C'est un peu comme une liste de courses et un guide étape par étape pour créer ton image Docker. Il te dit quels ingrédients (dépendances) tu as besoin et comment les assembler pour préparer ta recette (image Docker).

- **Registry** : C'est comme une bibliothèque ou un supermarché pour les images Docker. Un endroit où les gens partagent leurs images. [Docker Hub](https://hub.docker.com/) en est un exemple parfait. Tu peux aller y chercher une image déjà faite ou y déposer tes propres images pour les partager avec d'autres.

- **Docker Daemon** : Pense au Docker Daemon comme à un chef d'orchestre. Il travaille en coulisses, gérant toutes tes images et conteneurs, s'assurant qu'ils sont créés, lancés, arrêtés et supprimés correctement.

- **Bind-Mount** : Cela permet à ton conteneur de stocker ou d'accéder à des fichiers sur ton ordinateur. C'est un peu comme donner à ton application dans le conteneur une clé USB pour qu'elle puisse sauvegarder des fichiers ou utiliser des fichiers qui sont sur ton ordinateur.

- **Volume** : Pense aux volumes Docker comme à des garde-manger spécialisés dans ta cuisine. Quand tu cuisines (ou exécutes un conteneur), tu as besoin de stocker ou de sauvegarder certains ingrédients (données) pour les utiliser plus tard ou les partager entre différents plats (conteneurs). Un volume Docker est exactement cela : un espace de stockage où tu peux conserver et accéder à tes données, indépendamment de la vie du conteneur. Comme un garde-manger, il garde tes ingrédients (données) sûrs et disponibles, même si tu as fini de cuisiner (arrêté ton conteneur) ou si tu veux les utiliser pour un autre plat (un autre conteneur).

### 💻 Installer Docker : rapide et facile !

Pour débuter ton aventure avec Docker sur Mac, suis ces étapes simples et tu seras prêt en un rien de temps :

1. **Visite la Page d'Installation de Docker :**
   Commence par aller sur le site de [Docker](https://docs.docker.com/desktop/install/mac-install/). C'est ici que tu trouveras toutes les instructions officielles et détaillées pour installer Docker sur ton Mac.

2. **Suis les Instructions Officielles :**
   Prends le temps de lire attentivement les instructions sur la page. Elles te guideront pas à pas dans le processus d'installation.

3. **Ouvre l'Installateur Docker :**
   Une fois que tu as téléchargé le fichier Docker.dmg, double-clique dessus pour ouvrir l'installateur. Tu verras l'icône Docker et le dossier Applications côte à côte.

4. **Installe Docker :**
   Glisse simplement l'icône Docker dans ton dossier Applications. Cette action installe Docker sur ton Mac.

5. **Lance Docker :**
   Maintenant, va dans ton dossier Applications et double-clique sur Docker.app pour démarrer l'application.

6. **Découvre les Tutoriels sur Docker Desktop :**
   Une fois Docker lancé, n'oublie pas de jeter un œil aux différents tutoriels disponibles directement dans Docker Desktop. Ces guides pratiques sont parfaits pour s'initier à Docker et comprendre les bases de la gestion des conteneurs.

![docker-desktop](/assets/docker-desktop.png)

Et voilà, c'est parti ! 🥳

## 🐳 Les commandes de base

Voici un guide simplifié sur les commandes de base de Docker en ligne de commande. Docker fonctionne avec une structure de commande **claire et facile à comprendre**.

### Structure générale d'une commande Docker

La structure typique d'une commande Docker est :

```bash
docker [commande] [sous-commande] [options]
```

### Les 10 commandes à connaitre

1. Liste des commandes

Affiche une liste de toutes les commandes et catégories disponibles dans Docker.

```bash
docker
```

2. Info système

Utilise cette commande pour obtenir des informations détaillées sur ton système Docker.

```bash
docker system info
```

3. Liste des images

Affiche une liste de toutes les images Docker disponibles sur ton système.

```bash
docker images
```

ou

```bash
docker image ls
```

4. Liste des conteneurs

Affiche une liste de tous les conteneurs Docker disponibles sur ton système.

```bash
docker ps -a
```

ou

```bash
docker container ls -a
```

5. Exécuter et gérer les conteneurs

Crée un conteneur à partir d'une image.

```bash
docker create hello-world
```

6. Démarre un conteneur

Démarre un conteneur Docker.

```bash
docker start [container-id]
```

7. Exécute un conteneur

Exécute un conteneur Docker.

```bash
docker run hello-world
```

8. Arrête un conteneur

Arrête un conteneur Docker.

```bash
docker stop [container-id]
```

9. Supprime un conteneur

Supprime un conteneur Docker.

```bash
docker rm [container-id]
```

10. Supprime une image

Supprime une image Docker.

```bash
docker rmi [image-id]
```

## DockerFile

### 📝 Qu'est-ce qu'un Dockerfile ?

Imagine que tu veux construire une maquette. Le **Dockerfile, c'est ton mode d'emploi détaillé**. Il te guide étape par étape dans la construction de ton modèle (l'image Docker). Dans ce fichier, tu vas écrire toutes les instructions nécessaires : quels outils utiliser, quels composants ajouter, dans quel ordre les assembler... Bref, tout ce dont tu as besoin pour créer ton modèle parfait.

Chaque fois que tu suis ce **mode d'emploi**, tu obtiens une réplique exacte de ta maquette. C'est pareil avec le Dockerfile : il assure que chaque image Docker que tu crées est identique, peu importe le nombre de fois que tu la construis. C'est un outil super pratique pour garder la cohérence et la précision dans tes projets Docker.

### 📄 Structure d'un Dockerfile

1. La première étape est de créer un fichier appelé Dockerfile à la racine de ton projet.

2. Ensuite, tu vas écrire toutes les instructions nécessaires pour créer une image Docker simple. Voici un exemple de Dockerfile :

```bash
# Utilise l'image officielle de Node.js comme base
FROM node:12-alpine

# Définit le répertoire de travail
WORKDIR /app

# Copie le fichier package.json dans le répertoire de travail
COPY package.json .

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers dans le répertoire de travail
COPY . .

# Expose le port 3000
EXPOSE 3000

# Démarre l'application
CMD ["npm", "start"]
```

Chaque ligne dans un Dockerfile a un **but spécifique et contribue à la construction de l'image finale**. En modifiant ces lignes, tu peux personnaliser ton image Docker pour répondre à tes besoins spécifiques.

3. Une fois que tu as terminé d'écrire ton Dockerfile, tu peux créer une image Docker à partir de ce fichier. Pour cela, utilise la commande suivante :

```bash
docker build -t [image-name] .
```

4. Pour vérifier que ton image a bien été créée, utilise la commande suivante :

```bash
docker images
```

5. Maintenant que ton image est prête, tu peux créer un conteneur à partir de cette image. Pour cela, utilise la commande suivante :

```bash
docker run -p 3000:3000 [image-name]
```

6. Pour vérifier que ton conteneur est bien lancé, utilise la commande suivante :

```bash
docker ps
```

## Docker Compose

### 📝 Qu'est-ce que Docker Compose ?

Tu connais les kits de construction de maquettes où tu as plusieurs petites pièces à assembler pour créer un grand ensemble ?

Docker Compose, c'est un peu comme le **plan de montage** pour ces kits. Au lieu de te concentrer sur une seule pièce (un seul conteneur), Docker Compose te permet de **définir et de gérer plusieurs conteneurs** qui fonctionnent ensemble dans une application.

Dans un fichier Docker Compose, tu décris comment chaque conteneur doit être construit, comment ils doivent communiquer entre eux, quelles données ils partagent, et d'autres configurations. C'est comme si tu avais un plan qui te dit : "Cette pièce va ici, elle a besoin de se connecter à cette autre pièce là, et elles doivent toutes les deux utiliser ces ressources." Cela te permet de lancer et de gérer toute une application complexe avec plusieurs conteneurs en utilisant simplement quelques commandes simples.

### 📄 Structure d'un fichier Docker Compose

1. La première étape est de créer un fichier appelé docker-compose.yml à la racine de ton projet.

2. Ensuite, tu vas écrire toutes les instructions nécessaires pour créer une application Docker simple. Voici un exemple de fichier Docker Compose :

```bash
# Spécifie la version de Docker Compose utilisée
version: "3.8"
# Début de la définition des services
services:
  # Nom du service
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
```

Chaque ligne dans un fichier Docker Compose a un **but spécifique et contribue à la construction de l'application finale**. En modifiant ces lignes, tu peux personnaliser ton application Docker pour répondre à tes besoins spécifiques.

3. Une fois que tu as terminé d'écrire ton fichier Docker Compose, tu peux créer une application Docker à partir de ce fichier. Pour cela, utilise la commande suivante :

```bash
docker-compose up
```

4. Pour fermer ton application Docker, utilise la commande suivante :

```bash
docker-compose down
```

---

## 🎉 Félicitations !

Voilà, tu as parcouru le monde fascinant de Docker ! De la création d'images ingénieuses aux conteneurs malins, en passant par la magie des Dockerfiles et la simplicité de Docker Compose, j'espère que cette exploration t'a plu autant qu'à moi. Docker, c'est un peu comme avoir **un couteau suisse numérique** : polyvalent, pratique et prêt à relever presque tous les défis de développement.

**N'oublie pas, la pratique c'est la clé**. Alors, plonge dans Docker Desktop, expérimente avec les différents tutoriels, et joue avec les commandes que nous avons explorées.

Si tu te sens un peu perdu, c'est normal. **Docker a beaucoup à offrir**, et il faut parfois du temps pour tout assimiler. Mais, une fois que tu l'auras apprivoisé, tu te demanderas comment tu as pu vivre sans lui ! 🐳

---

## 🚨 FAQ

### 🤔 Quelle est la différence entre Docker et Docker Compose ?

Docker est un outil qui te permet de créer et de gérer des conteneurs. Docker Compose est un outil qui te permet de créer et de gérer des applications avec plusieurs conteneurs.

### 🤔 Quelle est la différence entre un conteneur et une image ?

Une image Docker est un modèle qui contient toutes les instructions et dépendances nécessaires pour créer un conteneur. Un conteneur Docker est une instance d'une image Docker.

### 🤔 Quelle est la différence entre un conteneur et une machine virtuelle ?

Un conteneur Docker est un espace isolé qui contient une application et toutes ses dépendances. Une machine virtuelle est un système d'exploitation complet qui contient une application et toutes ses dépendances.
