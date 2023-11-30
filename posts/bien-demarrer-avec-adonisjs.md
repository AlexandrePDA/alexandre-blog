---
title: "AdonisJs : Bien démarrer avec le framework NodeJS"
subtitle: "AdonisJs est un framework NodeJS qui permet de créer des applications web et des API RESTful. Il est basé sur le pattern MVC."
date: "22/11/2023"
tags: ["adonisjs", "backend"]
image: "/assets/adonisjs.png"
emoji: "⚙️"
---

Tu es curieux de découvrir le monde du développement web avec Node.js et tu cherches un **framework qui te facilite la tâche** ?

Bienvenue dans l'univers passionnant d'**AdonisJs** ! Ce n'est pas juste un autre framework Node.js ; c'est un compagnon qui rend le développement web plus **intuitif, organisé et, osons le dire, plus amusant**. Si tu as déjà un peu navigué dans le monde des frameworks, tu sais qu'il y en a pour tous les goûts. Mais AdonisJs se démarque par sa **simplicité**, son **élégance** et sa **puissance**.

Dans cet article, je te propose une immersion dans l'écosystème d'AdonisJs. Que tu sois un développeur chevronné à la recherche d'un nouveau défi, ou un débutant prêt à apprendre, AdonisJs a de quoi te surprendre. Je vais partager avec toi les raisons pour lesquelles ce framework a conquis mon cœur de codeur, et comment il peut te **faciliter la vie**.

<p align="center">
<img src="/assets/adonisjs.png" alt="illustration article" width="300" />
</p>

---

## Qu'est-ce qu'AdonisJs ? 🤔

Conçu pour être **intuitif et user-friendly**, il te prend par la main dès tes premiers pas dans le développement web et t'accompagne fidèlement à chaque étape de ta progression.

Avec AdonisJs, tu dis adieu aux configurations compliquées et bonjour à une expérience de codage **fluide et agréable**. Il est équipé de tout ce dont tu as besoin pour construire des applications web robustes et modernes, sans le tracas de jongler entre mille outils différents. Que tu veuilles créer une API rapide, une application complète avec un backend solide, ou même une app avec un rendu côté serveur, AdonisJs est là pour toi.

Son écosystème est riche et bien pensé, alliant élégance et puissance. Il offre une structure claire, des outils intégrés pour la sécurité, les tests, et la gestion des données, tout en restant flexible pour s'adapter à tes projets les plus ambitieux.

💡 Toute la documentation d'AdonisJs juste [ici](https://docs.adonisjs.com/guides/introduction).

## Pourquoi AdonisJs ? 🤩

### Un framework MVC

AdonisJs est un framework **MVC** (Modèle-Vue-Contrôleur). C'est un **pattern** qui permet de séparer les différentes couches d'une application web. Il est très répandu dans le monde du développement web, et il est utilisé par de nombreux frameworks comme Laravel, Ruby on Rails, Django, etc.

<p align="center">
<img src="/assets/mvc.png" alt="illustration article" width="500" />
</p>

Le **Modèle** est la couche qui gère les données de l'application. Il s'agit de la base de données, mais aussi de la logique métier. C'est ici que tu vas définir les règles de ton application, et les relations entre les données.

La **Vue** est la couche qui gère l'interface utilisateur. C'est ici que tu vas définir le rendu de ton application, et la façon dont les utilisateurs vont interagir avec elle.

Le **Contrôleur** est la couche qui gère les requêtes HTTP. C'est ici que tu vas définir les routes de ton application, et les actions à effectuer en fonction des requêtes.

### Une structure claire

AdonisJs est livré avec une structure de projet claire et bien pensée. Elle te permet de te concentrer sur le code de ton application, sans te soucier de la configuration.

<p align="center">
<img src="/assets/structure-adonisjs.png" alt="illustration article" width="200" />
</p>

- `app` contient le code de ton application. Tu y trouveras les modèles, les contrôleurs, les middlewares, les services, etc.
- `config` contient les fichiers de configuration de ton application.
- `database` contient les migrations et les seeders de ton application.
- `public` contient les fichiers statiques de ton application (images, CSS, JS, etc.).
- `resources` contient les fichiers de ton application qui doivent être compilés (fichiers SASS, JS, etc.).
- `start` contient les fichiers de démarrage de ton application.
- `contracts` contient les outils que tu vas utiliser dans ton application (hash, mail, etc.).

En plus d'une structure claire, AdonisJs est livré avec des outils intégrés pour la sécurité, les tests, et la gestion des données.

## Comment installer AdonisJs ? 🚀

### 🚨 Prérequis

Pour installer AdonisJs, tu dois avoir :

- au minimum Node.js v14
- npm installés sur ta machine

Si ce n'est pas le cas, tu peux les télécharger [ici](https://nodejs.org/en/download/).

### 📦 Installation

Pour installer AdonisJs, tu dois utiliser la commande suivante :

```bash
npm init adonis-ts-app@latest [nom du projet]
```

<p align="center">
<img src="/assets/setup-adonisjs.png" alt="illustration article" width="700" />
</p>

➡️ 3 choix s'offrent à toi :

- Si ton objectif est de mettre en place un **serveur API**, opte pour la structure de projet **API**, spécialement conçue à cet effet.

- Pour les applications classiques rendues côté serveur, la structure de projet **web** d'AdonisJS est le choix parfait. Elle inclut la configuration des sessions et l'intégration du moteur de templates d'AdonisJS.

- Et pour ceux qui recherchent une approche **minimaliste**, la structure de projet slim est idéale, formant l'application AdonisJS la plus épurée possible, se limitant au **strict nécessaire, c'est-à-dire le cœur du framework**.

Pour la suite, je vais utiliser la structure de projet **WEB**.

### 🌈 Utiliser TailwindCSS dans ton projet

- Installer les dépendances de TailwindCSS :

```bash
npm i -D postcss-loader
```

puis

```bash
npm i -D tailwindcss
```

- Il faut ensuite générer et configurer le fichier `tailwind.config.js` :

```bash
npx tailwindcss init
```

- Maintenant rends-toi à la racine de ton projet dans le fichier `webpack.config.js` à la ligne 172 décommente :

```js
// webpack.config.js

Encore.enablePostCssLoader();
```

- Pour que PostCSS puisse identifier les plugins nécessaires à notre projet, il est nécessaire de créer une configuration PostCSS.

1. Ajouter un fichier `postcss.config.js` à la racine de notre projet.
2. Dans ce fichier, nous allons spécifier TailwindCSS en tant que plugin

```js
// postcss.config.js

module.exports = {
  plugins: [require("tailwindcss")()],
};
```

- Dans `tailwind.config.js` ajoute :

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{edge,js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Pour que le style s'applique dans tes fichiers situés dans `resources/views`

- Dans `ressources/css/app.css` ajoute :

```css
// resources/css/app.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 🚀 Lancer ton serveur

Pour lancer ton serveur, tu dois utiliser la commande suivante :

```bash
node ace serve --watch
```

Rends-toi sur localhost pour voir ton serveur en action !

## Les routes 🛣

Les routes sont définies dans le fichier `start/routes.ts`. Tu peux y définir des routes de type GET, POST, PUT, PATCH, DELETE, etc.

```js
// start/routes.ts

Route.get("/", async () => {
  return { hello: "world" };
});

Route.get("showAddMission", "ClientsController.showAddMission").middleware(
  "auth"
);
```

## Les contrôleurs 🎮

Les contrôleurs sont définis dans le dossier `app/Controllers/Http`. Tu peux y définir des contrôleurs pour gérer les requêtes HTTP.

```js
// app/Controllers/Http/UserController.ts

export default class UserController {
  public async index() {
    return "Liste des utilisateurs";
  }
}
```

## Les middlewares 🧱

Les middlewares sont définis dans le dossier `app/Middleware`. Tu peux y définir des middlewares pour gérer les requêtes HTTP.

```js
// app/Middleware/IsAdmin.ts

export default class IsAdmin {
  public async handle({ auth, response }, next) {
    const user = auth.user;

    if (user.role !== "admin") {
      return response.status(401).json({
        message: "Vous n'avez pas les droits pour accéder à cette ressource",
      });
    }

    await next();
  }
}
```

Il est nécessaire de définir les middlewares dans le fichier `start/kernel.ts`.

## Tips & Tricks 🤓

- Si tu utilises VSCode, je te conseille d'installer l'extension AdonisJs qui te permettra d'avoir une meilleure expérience de codage.

  💡 Booste ta productivité sur VSCode, avec ces [extensions](https://alexandre-blog.vercel.app/posts/extensions-vscode).

![AdonisJs extension](/assets/extension-adonis.png)

- Si tu utilises les fichiers .edge pour ton front-end, rends toi dans les paramètres de VSCode `cdm + ,` et ajoute la ligne suivante :

  ```bash
  "emmet.includeLanguages": {
        "edge": "html"
    },
  ```

Cela te permettra d'avoir l'autocomplétion d'Emmet dans tes fichiers .edge.

- Tu veux voir les données qui transitent dans ton app ou les erreurs ? Ajoute `{{inspect(flashMessages)}}` dans ton fichier `.edge` et rends-toi sur localhost.

- Tu peux voir toutes les commandes CLI d'AdonisJs :

```bash
node ace
```

- Pour les .env, tu as la possibilité dans env.ts de typer les variables d'environnement.

- Pour chaque extensions (bdd, orm, hash, mail, etc.), tu as la documentation qui t'indique ce que tu peux utiliser et comment le configurer.

<p align="center">
<img src="/assets/auth-adonisjs.png" alt="illustration article" width="300" />
</p>

- Parcours chaque fichiers, ils sont très bien commentés et te permettront de mieux comprendre le fonctionnement d'AdonisJs.

## 📚 Ressources

- [Documentation AdonisJs](https://docs.adonisjs.com/guides/introduction)

- [Chaîne Youtube AdonisJs](https://www.youtube.com/@Adocasts)

- [Github AdonisJs](https://github.com/adonisjs)

- [Cette superbe vidéo youtube](https://youtu.be/pYrE10M921k?si=u0y8WYe42to5fhzy)

## Mon expérience avec AdonisJs 🤩

De mon côté, j'ai pu créer [billmanage](https://billmanage.onrender.com/) en **4 jours grâce à AdonisJs**. Je me suis amusé à explorer la doc et à tester les différentes fonctionnalités du framework. J'ai été **agréablement surpris par sa simplicité et sa puissance**.

![bm](/assets/capture-bm.png)

Cett app permet de gérer les entrées d'argent d'un freelance avec une vision par client, par mois et par année.

Elle intègre :

- Base de donnée avec l'ORM Lucid et PostgreSQL
- Système d'authentification
- Différents onglets pour les missions, les clients, les utilisateurs, les factures, etc.
- Graphiques pour les missions, les clients, les utilisateurs, les factures, etc.
- Mise en place du net et du brut pour la visualisation des entrées d'argent.

C'est un MVP, mais je compte bien continuer à l'améliorer et à l'enrichir.

---

🥳 Voilà, nous voici à la fin de notre aventure avec AdonisJs. Comme tu l'as vu, ce framework n'est pas juste un outil de plus pour les développeurs backend ; c'est une **invitation à explorer, à apprendre et à s'amuser dans le monde du développement web avec Node.js**.

AdonisJs se démarque par sa **simplicité, son élégance et sa puissance**. Ce framework t'offre une expérience de codage fluide et agréable, te permettant de te concentrer sur ce qui compte vraiment : **créer des applications web robustes et modernes**. Que tu souhaites développer une API rapide, une application complète avec un backend solide, ou une app avec un rendu côté serveur, AdonisJs est là pour t'accompagner.

En plus de sa structure claire et de ses outils intégrés pour la sécurité, les tests, et la gestion des données, AdonisJs te guide à travers son écosystème **riche et bien pensé**.

Rappelle-toi, toute la documentation et les ressources dont tu as besoin sont à portée de main. N'oublie pas de parcourir les fichiers, ils sont remplis de **conseils utiles** qui te permettront de mieux comprendre le fonctionnement d'AdonisJs.
