---
title: "Personnalise ton window management avec Yabai"
subtitle: "Découvre Yabai : le guide ultime pour configurer ton gestionnaire de fenêtres sur macOS et booster ta productivité !"
date: "09/11/2023"
tags: ["macos", "config"]
image: "/assets/yabai.png"
emoji: "💻"
---

Si tu utilises macOS, tu as sûrement remarqué que la gestion des fenêtres native du système est limitée. Mais comment faire pour **optimiser ton espace de travail numérique et le rendre plus efficient** ?

Pour cela, je te présente **Yabai**, un gestionnaire de fenêtres, à la fois puissant et personnalisable, qui te permet de maîtriser ton espace comme jamais ! Grâce à lui, organise automatiquement tes fenêtres en les **ajustant**, sans chevauchement, et maximise ainsi chaque pixel de ton écran. Tu augmentes alors la lisibilité de toutes tes données.

Dans cet article, je vais te présenter les étapes de configurations de base pour que tu puisses personnaliser ton flux de travail.
Développeur, designer, ou passionné de productivité : prépare-toi à passer au niveau supérieur de l'organisation de bureau sur macOS avec **Yabai** 🎉

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
