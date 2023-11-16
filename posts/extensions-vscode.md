---
title: "Booste ta productivité avec ces extensions VSCode !"
subtitle: "Découvre les meilleures extensions VSCode pour maximiser ton efficacité et révolutionner ton expérience de codage !"
date: "14/11/2023"
tags: ["vscode", "configuration"]
image: "/assets/extensions-vscode.png"
---

Dans le domaine du développement, optimiser son temps est crucial. C'est là que Visual Studio Code, avec ses nombreuses extensions, entre en jeu. Si tu utilises déjà cet éditeur de code populaire, tu sais probablement qu'il peut être personnalisé pour répondre à presque tous tes besoins. Mais avec tant d'options disponibles, il peut être difficile de savoir par où commencer.

Travaillant principalement avec des stacks tels que ReactJS, TypeScript, NextJS, Prisma ou encore Tailwind, mes choix d'extensions et configurations sont fortement influencés par ces technologies. Dans cet article, je vais te présenter une sélection d'extensions VSCode qui peuvent véritablement améliorer ta productivité, spécialement si tu travailles avec ces technologies. Que tu cherches à mieux organiser ton code, à accélérer la saisie, ou simplement à rendre l'environnement de développement plus agréable, ces extensions pourraient bien être la réponse. Allons ensemble à la découverte de ces outils qui pourraient changer ta façon de travailler au quotidien.

<p align="center">
<img src="/assets/extensions-vscode.png" alt="illustration article" width="300" />
</p>

---

## 🧩 Extensions

### 🌈 Thèmes

- **Material Icon Theme** est une extension qui permet de redesigner tes icones VSCode

![material-icon](/assets/extension-icons.png)

- **Dracula** est un thème pour ton IDE

![Dracula](/assets/extension-theme.png)

---

### 🛠️ Outils de codage et Intellisense

- **Tailwind CSS IntelliSense** améliore l'expérience de développement avec Tailwind en offrant aux utilisateurs de Visual Studio Code des fonctionnalités avancées telles que l'autocomplétion, la coloration syntaxique, et l'analyse de code (linting).

![tailwind](/assets/extension-tailwind.png)

- **Prisma** ajoute à Visual Studio Code des fonctionnalités telles que la coloration syntaxique, l'analyse de code, la complétion automatique, la mise en forme, le saut à la définition et plus encore pour les fichiers de schéma Prisma.

![prisma](/assets/extension-prima.png)

- **TypeScript Nightly** fournit des fonctionnalités IntelliSense avancées pour JavaScript et TypeScript.

![typescript](/assets/extension-ts.png)

- **JavaScript code snippets** contient des snippets pour JavaScript en syntaxe ES6, et est également compatible avec TypeScript.

![js](/assets/extension-js.png)

- **ES7+ React Snippets** propose des fonctionnalités spécifiques pour React, React-Native et Redux en syntaxe JS/TS avec ES7+, et est entièrement personnalisable.

![React](/assets/extension-react.png)

---

### 🔎 Analyse et formatage

- **Prettier** est un formateur de code rigoureux qui impose un style cohérent en analysant ton code et en le réimprimant selon ses propres règles, en tenant compte de la longueur maximale des lignes et en effectuant des retours à la ligne lorsque nécessaire.

![prettier](/assets/extension-prettier.png)

- **ESLint** est un outil d'analyse de code pour identifier et signaler les modèles trouvés dans le code ECMAScript/JavaScript, avec pour objectif d'améliorer la qualité du code et de le rendre plus consistant. Il est largement personnalisable, permettant aux développeurs de définir leurs propres règles de codage ou d'utiliser des règles définies par la communauté. ESLint aide à détecter des erreurs, des problèmes de style de codage et des problèmes de syntaxe avant qu'ils ne causent des problèmes en production.

![ESLint](/assets/extension-eslint.png)

---

### 🧠 Productivité et ergonomie

- **GitLens** est une extension open-source pour Visual Studio Code qui optimise ta gestion de Git. Elle offre une suite d'outils pratiques pour améliorer la compréhension du code, la productivité et la collaboration. C'est un outil idéal pour ceux qui cherchent à rendre leur expérience de codage avec Git plus efficace et intuitive.

![gitlens](/assets/extension-git.png)

- **Auto Rename Tag** renomme automatiquement les balises HTML/XML appariées, de la même manière que le fait l'IDE Visual Studio, améliorant ainsi la cohérence et la précision dans la modification de code.

![tag](/assets/extension-autotag.png)

- **Console Ninja** affiche les sorties de console.log et les erreurs d'exécution directement dans l'éditeur à partir de votre navigateur ou application Node en cours d'exécution.

![console](/assets/extension-console.png)

---

### 💎 Développement et infrastructure modernes

- **Docker** simplifie la création, la gestion et le déploiement d'applications conteneurisées. Elle offre également la possibilité de déboguer en un clic des applications Node.js, Python et .NET exécutées dans un conteneur.

![Docker](/assets/extension-docker.png)

- **AdonisJs** spécialement conçue pour travailler avec AdonisJS, un framework Node.js. AdonisJS est conçu pour la création d'applications web robustes et évolutives, offrant une structure claire et une syntaxe élégante inspirée de Laravel, un framework PHP populaire. Cette extension facilite le développement en fournissant des outils et des fonctionnalités adaptés à AdonisJS.

![adonis](/assets/extension-adonis.png)

---

## ⚙️ Configurer les settings

1. **Pour ouvrir les settings de VSCode, rends-toi sur l'IDE et appuie sur :**

```bash
cmd + ,
```

2. **Clique sur cette icone pour transformer les settings en JSON** :

![settings](/assets/settings-vscode.png)

3. **Ajoute ces lignes** :

- Sauvegarde automatique lors du changement de focus

```bash
"files.autoSave": "onFocusChange"
```

Ce paramètre configure la sauvegarde automatique des fichiers dans VSCode. Lorsqu'il est réglé sur "onFocusChange", cela signifie que chaque fois que tu changes de fenêtre ou de fichier (en perdant le focus sur le fichier actuel), tes modifications sont automatiquement sauvegardées. C'est pratique pour éviter de perdre des modifications non enregistrées si tu oublies de sauvegarder manuellement.

- Formatage automatique du code à la sauvegarde

```bash
"editor.formatOnSave": true,
```

Ce paramètre active la fonctionnalité de formatage automatique du code à la sauvegarde. Lorsqu'il est réglé sur true, VSCode formatera automatiquement ton code selon les règles de style définies lorsque tu sauvegardes un fichier. Cela aide à maintenir une cohérence dans la mise en forme du code, rendant le code plus lisible et conforme aux standards de codage.

- Retour à la ligne automatique dans l'éditeur

```bash
"editor.wordWrap": "on"
```

Lorsqu'il est activé, ton texte va automatiquement passer à la ligne suivante sans dépasser la largeur de la fenêtre de l'éditeur. C'est super pratique pour garder ton code lisible sans avoir à scroller horizontalement.

- Affichage des dossiers dans l'explorateur de fichiers

```bash
"explorer.compactFolders": false,
```

fait en sorte que chaque dossier dans ton projet soit montré séparément dans l'explorateur de fichiers, même si un dossier ne contient qu'un seul sous-dossier.

Par exemple, si tu as une structure de dossiers comme ça :

- DossierA
  - DossierB
    - fichier.txt

Avec ce paramètre sur false, tu verras tous les dossiers (DossierA, DossierB) listés séparément dans l'explorateur. Si tu le mets sur true, VS Code les affichera de façon plus compacte, probablement comme DossierA/DossierB, en combinant les dossiers qui n'ont qu'un seul sous-dossier.

- Formatage du texte collé

```bash
  "editor.formatOnPaste": true,
```

Configuration qui active le formatage automatique du code lorsque tu colles du texte dans l'éditeur. Lorsque cette option est activée (c'est-à-dire réglée sur true), chaque fois que tu colles du code ou du texte dans l'éditeur, VS Code va automatiquement le formater pour qu'il corresponde aux règles de style de codage définies dans tes paramètres.

Cela signifie que si tu copies du code d'une source et le colles dans ton éditeur, VS Code va s'assurer que ce code est formaté de manière cohérente avec le reste de ton code, en respectant des aspects comme l'indentation, les espaces entre les éléments, et d'autres règles de formatage.

- Colorisation des paires de crochets

```bash
"editor.bracketPairColorization.enabled": true
```

Permet la colorisation des paires de crochets (brackets), parenthèses, et accolades dans ton code. Chaque paire correspondante est colorée de la même manière, ce qui rend beaucoup plus facile de voir quelles ouvertures et fermetures de crochets correspondent ensemble.

- Lignes de guide

```bash
editor.guides.bracketPairs": true
```

Affiche des lignes de guidage visuelles qui connectent les paires de crochets, parenthèses, et accolades. Cela aide à visualiser clairement la structure et la portée de ton code, en montrant comment les différents blocs de code sont connectés et imbriqués les uns dans les autres.

---

Tous ces paramètres de configuration pour Visual Studio Code améliorent non seulement l'efficacité et la clarté de ton environnement de développement, mais ils te permettent aussi de personnaliser ton éditeur pour qu'il réponde parfaitement à tes besoins. Grâce à ces réglages, tu peux rendre ton expérience de codage plus fluide, organisée et agréable 🚀
