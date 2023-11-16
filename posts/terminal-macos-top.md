---
title: "Transforme ton terminal MacOs"
subtitle: "Modernise ton terminal fade en une interface colorée et fonctionnelle qui te ressemble avec iTerm2 et OhMyZsh"
date: "06/11/2023"
tags: ["terminal", "macos", "productivité"]
image: "/assets/terminal-macos-top.png"
---

<p align="center">
<img src="/assets/terminal-macos-top.png" alt="illustration article" width="300" />
</p>

Tu utilises souvent le **terminal sur MacOS** ?

Si c'est le cas, tu sais à quel point son apparence par défaut peut être basique, voire carrément moche. Et ce n’est pas forcément agréable quand on travaille dessus toute la journée. Pourtant, il est tout à fait possible de personnaliser ton terminal pour qu'il suive tes préférences et reflète ton style. Découvre dès maintenant **comment donner un nouveau look à ton terminal MacOs !**

### Le avant/après ✨

Prêt à donner un coup de neuf à ton environnement de travail ?
Continue ta lecture pour passer de ça à ça :

![terminal](/assets/terminal-to.png)

---

## 🍺 Intaller HomeBrew

[Homebrew](https://brew.sh/) est un gestionnaire de paquets open-source pour macOS qui simplifie l'installation de logiciels sur les systèmes Apple.

Ouvre ton terminal et colle cette commande :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## ⚙️ Installer Git

[Git](https://git-scm.com/) est un système de contrôle de version distribué permettant de suivre les modifications du code source pendant le développement logiciel.

```bash
brew install git
```

## 💻 Intaller iTerm2

[iTerm2](https://iterm2.com/) est un émulateur de terminal open-source pour macOS offrant des fonctionnalités avancées par rapport au terminal standard de Apple.

```bash
brew install --cask iterm2
```

## 🌈 Installer OhMyZsh

Ouvre ton nouveau terminal iTerm2 🚀

[OhMyZsh](https://github.com/ohmyzsh/ohmyzsh) est un framework open-source pour configurer et gérer Zsh, améliorant son interface utilisateur et ajoutant des fonctionnalités pratiques via des plugins et des thèmes.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 🎉 Installe ton 1er thème zsh

Pour obtenir un thème similaire à celui présenté en introduction, exécute cette commande. Sinon, tu peux explorer d'autres thèmes sur le [GitHub d'Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes).

```bash
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Après l'installation, ouvre "~/.zshrc" avec nano ou nvim par exemple

```bash
nano ~/.zshrc
```

Localise “ZSH_THEME” et remplace la valeur par le nom de ton thème. Dans cet exemple, nous allons écrire :

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Enregistre le fichier et restart ton terminal

## 🔩 Configure PowerLevel10K

Pour configurer PowerLevel10K à tout moment :

```bash
p10k configure
```

## 🎨 Modifie les couleurs du thème

À présent, il est temps de colorer ton terminal ! Pour que cela reste agréable à l'œil, tu peux découvrir mes conseils pour [choisir les couleurs de ton site web.](https://alexandre-blog.vercel.app/posts/comment-choisir-ses-couleurs-pour-son-site-web/)

1. Pour le thème présent en introduction run cette commande :

```bash
curl https://raw.githubusercontent.com/josean-dev/dev-environment-files/main/coolnight.itermcolors --output ~/Downloads/coolnight.itermcolors
```

Pour d'autres couleurs : https://iterm2colorschemes.com/

2. Utilise le raccourcis **cmd + ,** pour aller dans les Settings de iTerm2

3. Profiles > Colors

![profil-colors](/assets/settingsiTerm2.png)

4. Sélectionne **import** dans le menu déroulant et récupère le fichier télécharger

---

Tu sais maintenant comment personnaliser ton terminal sur MacOs. 🥳
Ton imagination est ta seule limite, alors n’hésite pas à laisser libre cours à tes envies ! Et pour aller plus loin sur le chemin de la personnalisation, découvre comment [transformer ton window management avec Yabai](https://alexandre-blog.vercel.app/posts/personnaliser-macos-avec-yabai) !
