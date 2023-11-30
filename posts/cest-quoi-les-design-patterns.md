---
title: "Design patterns : c'est quoi et comment ça fonctionne ?"
subtitle: "Les design patterns sont des solutions à des problèmes récurrents. Ils permettent de résoudre des problèmes de conception de logiciels."
date: "30/11/2023"
tags: ["patterns", "optimisation"]
image: "/assets/design-patterns.png"
emoji: "🧩"
---

Tu as surement déjà entendu parler des **design patterns**. Mais qu'est-ce que c'est exactement ? Comment ça fonctionne ? Et surtout, à quoi ça sert ?

Les design patterns sont des **solutions** à des problèmes récurrents. Ils permettent de résoudre des problèmes de conception de logiciels. Ils sont utilisés pour créer des logiciels plus flexibles, réutilisables et maintenables. Tout comme les notions énigmatiques de [conteneurs et d'images dans l'univers Docker](https://alexandre-blog.vercel.app/posts/debuter-avec-docker), la compréhension des design patterns peut sembler floue au départ.

Cependant, une fois que tu auras compris les **concepts de base**, tu pourras les appliquer à tes propres projets et ainsi structurer ton code de manière plus **efficace et plus propre**.

<p align="center">
<img src="/assets/design-patterns.png" alt="illustration article" width="300" />
</p>

---

## 🧠 Mieux comprendre pour mieux les utiliser

💡 _Un Design Pattern n'est pas un code prêt à être utilisé dans ton application, mais c'est **un modèle** que tu peux utiliser pour résoudre un problème. Il est **indépendant** du langage, ce qui signifie qu'il peut être appliqué à n'importe quel langage qui prend en charge l'orientation objet._

Les Design Patterns sont là pour nous, les développeurs, afin de mettre en place des **solutions éprouvées et largement adoptées** par d'autres acteurs du développement. Cela se traduit par un **gain de temps et d'efforts** lors de la rédaction du code. Ils instaurent également un langage commun pour échanger sur des problématiques spécifiques, simplifiant ainsi la communication.

Il est essentiel de comprendre que l'utilisation de Design Patterns **n'est pas systématique**. Nous devrions les adopter uniquement lorsque cela s'avère nécessaire. Chaque Design Pattern s'adapte à une **situation particulière**, soulignant ainsi l'importance de les connaître. Il peut arriver que vous rencontriez un problème déjà résolu dans le monde du développement logiciel, et une solution optimale existe déjà grâce à l'application d'un Design Pattern. Ainsi, plutôt que de "réinventer la roue", vous avez la possibilité d'utiliser quelque chose qui a déjà fait **ses preuves**. La clé pour déterminer quand les appliquer réside dans l'apprentissage et la compréhension des problématiques spécifiques que chaque Design Pattern résout.

### 🗓️ Mais ça date de quand les design patterns ?

Les Design Patterns ont été introduits pour la première fois par **Christopher Alexander** dans les années 1970. Il était architecte logiciel et a écrit un livre intitulé "A Pattern Language" dans lequel il a décrit 253 modèles architecturaux. Il a ensuite été suivi par **Erich Gamma**, **Richard Helm**, **Ralph Johnson** et **John Vlissides** qui ont écrit le livre "Design Patterns: Elements of Reusable Object-Oriented Software" en 1994. Ce livre a été le premier à introduire le concept de Design Patterns dans le monde du développement logiciel. Dans ce livre, ils ont décrit 23 Design Patterns qui peuvent être classés en trois catégories :

- 👨‍🎨 **Création** : Ces Design Patterns fournissent des mécanismes de création d'objets qui augmentent la flexibilité et la réutilisabilité du code.
- 🏛️ **Structure** : Expliquent comment organiser les objets et les classes pour obtenir des structures plus flexibles et efficaces.
- 😇 **Comportement** : Ces Design Patterns expliquent comment les objets interagissent et comment les responsabilités sont réparties entre eux.

## ⚙️ Les différents types de design patterns

### 👨‍🎨 Les design patterns de création

Les Design Patterns de création sont utilisés pour créer des objets de manière adaptée à la situation. Ils permettent de créer des objets de manière plus **flexible** et **réutilisable**. Ils fournissent une **alternative à l'instanciation directe d'objets** en utilisant des opérateurs new. Ils peuvent utiliser une ou plusieurs des techniques suivantes pour créer des objets :

- **Singleton** : Un seul objet est créé pour toute l'application.
- **Builder** : Utilisé pour créer des objets complexes avec des étapes de construction.
- **Prototype** : Utilisé pour créer des objets à partir d'un modèle existant.
- **Factory Method** : Utilisé pour créer des objets sans spécifier la classe exacte de l'objet à créer.
- **Abstract Factory** : Utilisé pour créer des familles d'objets sans spécifier la classe exacte de l'objet à créer.

### 🏛️ Les design patterns de structure

Les Design Patterns de structure expliquent comment organiser les objets et les classes pour obtenir des structures plus flexibles et efficaces. Ils utilisent l'héritage pour composer des interfaces ou implémenter des fonctionnalités. Ils permettent de **simplifier la structure** en identifiant les relations entre les entités. Ils peuvent utiliser une ou plusieurs des techniques suivantes pour créer des objets :

- **Adapter** : Permet à des objets incompatibles de collaborer.
- **Bridge** : Divise une classe en deux hiérarchies indépendantes.
- **Composite** : Un objet est composé d'un ou plusieurs objets similaires.
- **Decorator** : Ajoute des fonctionnalités à un objet sans modifier son implémentation.
- **Facade** : Crée une interface unifiée pour un ensemble d'interfaces dans un sous-système.

### 😇 Les design patterns de comportement

Les Design Patterns de comportement sont utilisés pour gérer les algorithmes, les relations et les responsabilités entre les objets. Ils permettent de **simplifier la communication** entre les objets. Ils peuvent utiliser une ou plusieurs des techniques suivantes pour créer des objets :

- **Chain of Responsibility** : Un objet transmet une demande entre une chaîne de destinataires jusqu'à ce qu'elle soit traitée.
- **Command** : Encapsule une demande sous la forme d'un objet, ce qui permet de paramétrer d'autres objets avec différentes demandes, files d'attente ou journaux, et de prendre en charge les opérations annulables.
- **Interpreter** : Un moyen de définir la grammaire d'une langue et de l'interpréter.
- **Iterator** : Séquentiellement accéder aux éléments d'un objet.
- **Mediator** : Permet à un objet de communiquer avec d'autres objets sans les connaître explicitement.

## 🌟 Les 4 elements d'un design pattern

Les Design Patterns sont généralement décrits par les éléments suivants :

- **Nom** : Le nom du Design Pattern permet de communiquer efficacement sur le problème, la solution et les conséquences.
- **Problème** : Définit le problème auquel le Design Pattern répond.
- **Solution** : Définit les éléments de conception qui doivent être mis en œuvre pour résoudre le problème dans le contexte de la conception d'applications orientées objet.
- **Conséquences** : Définit les avantages et les inconvénients de l'application du Design Pattern.

## 🔥 4 exemples de design patterns

### ➡️ Singleton

Le modèle Singleton vise à garantir qu'une classe possède **une seule instance et offre un point d'accès global à cette unique instance**. Cette approche se révèle particulièrement utile lorsque l'on a besoin d'une seule instance d'une classe pour coordonner des actions à travers tout le système. Son utilité se manifeste dans le **maintien d'un état cohérent et la régulation de l'accès aux ressources partagées**.

Prenons l'exemple d'un système de gestion d'impression dans un bureau, chargé de gérer les travaux d'impression provenant de plusieurs utilisateurs. En appliquant le modèle Singleton, nous nous assurons qu'il existe une seule instance du gestionnaire d'impression qui gère la file d'attente d'impression. Cela évite les conflits potentiels et assure la cohérence de l'état dans l'ensemble du système.

La mise en œuvre pratique de ce modèle implique généralement :

- La restriction du constructeur en le rendant privé pour éviter toute instanciation externe.
- La déclaration d'une variable statique du même type de classe.
- La mise en place d'une méthode statique publique permettant d'accéder à cette unique instance.

### ➡️ Factory Method

Le modèle de conception Factory Method définit une **interface permettant de créer des objets dans une classe supérieure**, mais **autorise les sous-classes à modifier le type d'objets qui seront créés**. Ce modèle favorise un couplage lâche en séparant le processus de création d'objets de leur utilisation effective.

Pour simplifier, prenons l'exemple d'une application générant des rapports dans divers formats tels que PDF, Excel ou Word. Le modèle Factory Method pourrait être utilisé pour créer des objets générateurs de rapports spécifiques au format requis, sans que le client ne connaisse les détails des implémentations du générateur de rapports.

La mise en œuvre de ce modèle implique généralement :

- La définition d'une interface d'usine ou d'une classe abstraite avec une méthode pour créer des objets.
- L'implémentation de la méthode d'usine dans des classes d'usine concrètes pour renvoyer des types d'objets spécifiques.
- Les clients utilisent la méthode d'usine pour instancier des objets, offrant ainsi flexibilité et extensibilité.

### ➡️ Observer

Le modèle de conception Observer instaure **une relation où un objet (le sujet) influence plusieurs autres objets (les observateurs)**. Lorsque le sujet subit un **changement d'état, tous les observateurs associés sont automatiquement informés et actualisés**. Cette approche favorise une interconnexion souple entre le sujet et ses observateurs.

Par exemple, imagine une station météorologique qui recueille des données à partir de capteurs et met à jour plusieurs écrans (comme ceux affichant la température, l'humidité et la pression atmosphérique) dès qu'il y a de nouvelles données. Le modèle Observer serait approprié pour notifier tous les écrans en cas de changement, assurant ainsi la mise à jour synchronisée de leurs informations respectives.

Pour mettre en œuvre ce modèle, on suit généralement ces étapes :

- Définir une interface d'observateur comprenant une méthode pour mettre à jour les observateurs.
- Créer des classes d'observateurs concrètes qui mettent en œuvre l'interface de l'observateur.
- Implémenter une classe sujet maintenant une liste d'observateurs et fournissant des méthodes pour les ajouter, les supprimer et les notifier.
- Lorsque l'état du sujet évolue, il notifie tous les observateurs enregistrés, déclenchant ainsi leur mise à jour.

### ➡️ Adapter

Le modèle d'adaptateur permet à **deux interfaces initialement incompatibles de collaborer en transformant l'interface d'une classe en une autre interface attendue par les clients**. Cette approche favorise la réutilisation et la souplesse en autorisant l'intégration de composants existants dans de nouveaux systèmes.

Pour illustrer, prenons une application de lecteur multimédia qui prend en charge la lecture de fichiers audio dans divers formats tels que MP3, WAV ou AAC. Si l'on souhaite ajouter le support d'un nouveau format, comme OGG, sans altérer le code existant, le modèle d'adaptateur entre en jeu. Il permet de créer un adaptateur convertissant le format OGG en une interface compréhensible par le lecteur multimédia, assurant ainsi une intégration harmonieuse.

Le processus de mise en œuvre implique généralement :

- Définir une interface cible attendue par le client.
- Créer une classe d'adaptateur qui implémente cette interface cible tout en composant une instance de la classe existante (adaptee).
- Implémenter les méthodes de l'interface cible dans la classe d'adaptateur en déléguant les appels aux méthodes de l'adaptee.
- Les clients utilisent la classe d'adaptateur, interagissant avec l'interface cible, tandis que l'adaptateur traduit les appels vers l'adaptee, facilitant ainsi une intégration fluide entre les deux interfaces initialement incompatibles.

## 📚 Ressources

- [Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.fr/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612)
- [LE site dédié au design pattern](https://refactoring.guru/fr/design-patterns)

---

Et voilà ! 🥳

Pas mal d'infos, mais tu as une vue d'ensemble sur les Design Patterns désormais ! En bref, n'oublie pas que les Design Patterns sont **des solutions éprouvées aux problèmes courants de conception de logiciels** et permettent :

- **d'améliorer la maintenabilité du code** : les modèles de conception favorisent un code modulaire et bien structuré, ce qui facilite sa maintenance, sa modification et son extension à mesure que les exigences évoluent.
- **d'améliorer la réutilisabilité du code** : étant donné que les modèles de conception fournissent des solutions réutilisables aux problèmes courants, les développeurs peuvent économiser du temps et des efforts en réutilisant des solutions éprouvées au lieu de réinventer la roue.
- Il est important de connaître les modèles de conception, même si vous ne les utilisez pas : la connaissance des modèles de conception peut **éclairer les décisions architecturales** et aider les développeurs à comprendre et à réviser le code existant.
- **de promouvoir les meilleures pratiques** : les modèles de conception incarnent les meilleures pratiques et principes, qui peuvent conduire à des systèmes logiciels plus robustes, efficaces et évolutifs.
- **de faciliter la collaboration** : les modèles de conception facilitent la collaboration entre les membres de l'équipe, car ils fournissent un langage commun pour discuter, évaluer et convenir des décisions de conception de logiciels.

⚠️ _Chaque Design Pattern est conçu pour résoudre un problème spécifique. Il est donc important de comprendre les problèmes que chaque Design Pattern résout et de les appliquer uniquement lorsque cela est nécessaire. Il est également important de comprendre que les Design Patterns ne sont pas des solutions universelles. Ils ne sont pas toujours la meilleure solution et peuvent parfois être une sur-ingénierie._

---

## 🚨 FAQ

### 🤔 C'est quoi un Design Pattern ?

Les Design Patterns sont des **solutions éprouvées à des problèmes récurrents dans le domaine du développement logiciel**. Ce sont des modèles de conception qui offrent des **approches standardisées, des bonnes pratiques et des modèles** pour résoudre des problèmes spécifiques, améliorant ainsi l'efficacité, la maintenabilité et la scalabilité du code.

### 🤔 Pourquoi utiliser des Design Patterns ?

L'utilisation de Design Patterns présente plusieurs avantages, notamment **l'amélioration de la maintenabilité du code en favorisant une structure modulaire, la réutilisabilité du code en proposant des solutions prêtes à l'emploi, et la promotion des meilleures pratiques** pour créer des systèmes logiciels robustes et efficaces.

### 🤔 Comment choisir le bon Design Pattern pour mon projet ?

Le choix du Design Pattern **dépend du problème spécifique que vous essayez de résoudre**. Il est crucial de comprendre les problèmes que chaque Design Pattern résout et de les appliquer de manière sélective lorsque cela est nécessaire.
