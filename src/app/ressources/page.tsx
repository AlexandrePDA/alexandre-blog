/* eslint-disable react/no-unescaped-entities */
import { ExternalLink } from "lucide-react";

export default function ressources() {
  return (
    <div className=" p-4 ">
      <div className=" max-w-screen-3xl mx-auto prose dark:prose-white prose-black">
        <h2 className="text-primary text-center my-12">Ressources</h2>
        <p className="text-center">
          Retrouve toutes les ressources évoqués dans les articles : sites
          internet, outils, plugins, etc.{" "}
        </p>
        <div>
          <ul>
            <li>
              <a href="#couleurs">Couleurs</a>
            </li>
            <li>
              <a href="#terminal">Terminal</a>
            </li>
            <li>
              <a href="#window">Window Management</a>
            </li>
            <li>
              <a href="#docker">Docker</a>
            </li>
            <li>
              <a href="#apps">Apps</a>
            </li>
          </ul>
        </div>
        <div className="mb-8 mt-8 border border-b border-muted-foregound w-full"></div>
        <div id="couleurs">
          <h3>🌈 Couleurs</h3>
          <ul>
            <li>
              Vérifier si les contrastes sont ok :
              <a className="mx-4" href="https://contrastchecker.com/">
                contrastchecker
              </a>
            </li>
            <li>
              Vérifier la conformité des couleurs de ton site web :{" "}
              <a href="https://wave.webaim.org/">wave</a>{" "}
            </li>
            <li>
              Comprendre les couleurs dans une page web :{" "}
              <a href="https://www.radix-ui.com/colors">radix-ui/colors</a>
            </li>
            <li>
              Générateur de palettes avec composants :{" "}
              <a href="https://ui.shadcn.com/themes">shadcn/themes</a>
            </li>
            <li>
              Générateur de palettes avec TaildwindCSS :{" "}
              <a href="https://uicolors.app/create">uicolors</a>
            </li>
            <li>
              Les couleurs tendances :{" "}
              <a href="https://www.pantone.com/eu/fr/color-of-the-year/2023">
                pantone
              </a>
            </li>
            <li>
              S'inspirer des ui/ux :{" "}
              <a href="https://www.behance.net/">behance</a>
            </li>
          </ul>{" "}
          <p>
            ⚡️ Pour aller plus loin :<br />{" "}
            <a
              className="flex items-center gap-2"
              href="/posts/comment-choisir-ses-couleurs-pour-son-site-web"
            >
              Comment choisir les couleurs pour sa page web ?
              <ExternalLink size={16} />
            </a>
          </p>
        </div>
        <div className="mb-8 mt-8 border border-b border-muted-foregound w-full"></div>
        <div id="terminal">
          <h3>💻 Terminal</h3>

          <ul>
            <li>
              Homebrew, gestionnaire de package pour MacOs :{" "}
              <a href="https://brew.sh/">brew.sh</a>
            </li>
            <li>
              Git, versionner son travail :{" "}
              <a href="https://git-scm.com/">git-scm</a>
            </li>
            <li>
              iTerm2, un terminal open-source pour MacOs :{" "}
              <a href="https://iterm2.com/">iterm2</a>
            </li>
            <li>
              OhMyZsh, framework pour personnaliser ton terminal :{" "}
              <a href="https://github.com/ohmyzsh/ohmyzsh">ohmyzsh</a>
            </li>
            <li>
              Couleurs ohmyzsh :{" "}
              <a href="https://iterm2colorschemes.com/">iterm2colors</a>
            </li>
          </ul>
          <p>
            ⚡️ Pour aller plus loin :<br />{" "}
            <a
              className="flex items-center gap-2"
              href="/posts/terminal-macos-top"
            >
              Transforme ton terminal MacOs
              <ExternalLink size={16} />
            </a>
          </p>
        </div>
        <div className="mb-8 mt-8 border border-b border-muted-foregound w-full"></div>
        <div id="window">
          <h3>🪟 Window Management</h3>

          <ul>
            <li>
              Github Yabai :{" "}
              <a href="https://github.com/koekeishiya/yabai.git">Yabai</a>
            </li>
            <li>
              Github Skhd :{" "}
              <a href="https://github.com/koekeishiya/skhd.git">Skhd</a>
            </li>
          </ul>
          <p>
            ⚡️ Pour aller plus loin :<br />{" "}
            <a
              className="flex items-center gap-2"
              href="/posts/personnaliser-macos-avec-yabai"
            >
              Personnalise ton window management avec Yabai
              <ExternalLink size={16} />
            </a>
          </p>
        </div>
        <div className="mb-8 mt-8 border border-b border-muted-foregound w-full"></div>
        <div id="docker">
          <h3>🐳 Docker</h3>

          <ul>
            <li>
              Installer Docker :{" "}
              <a href="https://docs.docker.com/desktop/install/mac-install/">
                Docker
              </a>
            </li>
            <li>
              <a href="https://hub.docker.com/">Docker Hub</a>
            </li>
          </ul>
          <p>
            ⚡️ Pour aller plus loin :<br />{" "}
            <a
              className="flex items-center gap-2"
              href="/posts/debuter-avec-docker"
            >
              Docker, ton guide complet pour débuter
              <ExternalLink size={16} />
            </a>
          </p>
        </div>
        <div className="mb-8 mt-8 border border-b border-muted-foregound w-full"></div>
        <div id="apps">
          <h3>🧩 Apps</h3>

          <ul>
            <li>
              <a href="https://arc.net">Arc</a>, le navigateur magique
            </li>
            <li>
              <a href="https://raycast.com/">Raycast</a>, le puissant launcher
              MacOs
            </li>
            <li>
              <a href="https://excalidraw.com/">Excalidraw</a>, le pinceau
              numérique
            </li>
            <li>
              <a href="https://trello.com/">Trello</a>
            </li>
          </ul>
          <p>
            ⚡️ Pour aller plus loin :<br />{" "}
            <a
              className="flex items-center gap-2"
              href="/posts/mon-secret-pour-etre-plus-productif"
            >
              Mon secret pour booster ta productivité
              <ExternalLink size={16} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
