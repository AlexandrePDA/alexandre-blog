---
title: "Personnalise ton window management avec Yabai"
subtitle: "Découvre Yabai : le guide ultime pour configurer ton gestionnaire de fenêtres sur macOS et booster ta productivité !"
date: "09/11/2023"
tags: ["macos", "configuration", "productivité"]
image: "/assets/yabai.png"
---

Si tu es un utilisateur de macOS et que tu cherches à optimiser ton espace de travail numérique, tu as sans doute déjà ressenti les limites de la gestion des fenêtres native du système. Mais que dirais-tu si je te disais qu'il existe un outil capable de transformer cette expérience de manière spectaculaire ? C'est ici qu'intervient Yabai, un gestionnaire de fenêtres puissant et hautement personnalisable qui te permet de maîtriser ton espace comme jamais !

Yabai organise automatiquement tes fenêtres en les ajustant côte à côte, sans chevauchement, maximisant ainsi chaque pixel de ton écran ce qui rend le multitâche non seulement plus efficace, mais aussi plus agréable.

Dans l'article d'aujourd'hui, je vais te guider à travers les étapes de configuration de base et te montrer comment personnaliser les réglages pour qu'ils correspondent parfaitement à ton flux de travail. Que tu sois développeur, designer, ou simplement un passionné de productivité, prépare-toi à découvrir comment Yabai peut te faire passer au niveau supérieur de l'organisation de bureau sur macOS 🎉

➡️ Toutes les ressources sont disponibles sur mon [GitHub](https://github.com/AlexandrePDA/dot-files.git).

<p align="center">
<img src="/assets/yabai.png" alt="illustration article" width="300" />
</p>

---

## 🍺 Intaller HomeBrew

[Homebrew](https://brew.sh/) est un gestionnaire de paquets open-source pour macOS qui simplifie l'installation de logiciels sur les systèmes Apple.

Ouvre ton terminal et colle cette commande :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## ⚙️ Installer Yabai et Skhd

Dans ton terminal :

✅ Pour Yabai :

```bash
brew install koekeishiya/formulae/yabai
```

✅ Pour Skhd :

➡️ Mais c'est quoi skhd ?

skhd est un démon de raccourcis clavier pour macOS, qui fonctionne en tandem avec yabai. Skhd te permet de définir des raccourcis clavier personnalisés pour exécuter des commandes, comme la manipulation des fenêtres gérées par yabai.
En gros, tu peux configurer des raccourcis pour redimensionner, déplacer, concentrer ou gérer tes espaces de travail.

```bash
brew install koekeishiya/formulae/skhd
```

## 🧩 Création des dossiers Yabai et SKHD

![profil-colors](/assets/architecture-dossiers.png)

1. **Place toi dans ton répertoire personnel**

```bash
cd ~
```

2. **Crée un dossier Yabai et Skhd**

✅ Pour Yabai :

```bash
mkdir .config/yabai
cd .config/yabai
```

✅ Pour Skhd :

```bash
mkdir .config/skhd
cd .config/skhd
```

3. **Crée les fichiers de config**

✅ Pour Yabai :

```bash
touch yabairc
```

✅ Pour Skhd :

```bahs
touch skhdrc
```

## 🪄 Configure selon tes préferences

Rends toi sur mon [GitHub](https://github.com/AlexandrePDA/dot-files.git) et tu auras toutes les configurations pour Yabai et Skhd.

---

## 🧠 Ressources

[Github Yabai](https://github.com/koekeishiya/yabai.git)

[Github skhd](https://github.com/koekeishiya/skhd.git)
