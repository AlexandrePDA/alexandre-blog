/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

type Post = {
  title: string;
  href: string;
  img: string;
  subtitle: string;
  tags: string[];
  date: string;
};

interface RandomPostsProps {
  currentPostHref: string;
}

const RandomPosts: React.FC<RandomPostsProps> = ({ currentPostHref }) => {
  const [randomPosts, setRandomPosts] = useState<Post[]>([]);

  const listPosts: Post[] = [
    {
      title: "Mon secret pour booster ta productivité",
      href: "/posts/mon-secret-pour-etre-productif",
      img: "/assets/productivite.png",
      subtitle:
        "Entre dans mon univers et découvre comment des outils simples transforment ma routine de travail.",
      tags: ["productivité", "app"],
      date: "17/11/2023",
    },
    {
      title: "Docker, ton guide complet pour débuter",
      href: "/posts/debuter-avec-docker",
      img: "/assets/docker.png",
      subtitle:
        "Explore l'univers de Docker : comprends les concepts de base, les images, les conteneurs, et maîtrise les fichiers Dockerfile et Docker Compose",
      tags: ["docker", "guide"],
      date: "16/11/2023",
    },
    {
      title: "Comment choisir les couleurs de ton site web ?",
      href: "/posts/comment-choisir-ses-couleurs-pour-son-site-web",
      img: "/assets/comment-choisir-couleurs.png",
      subtitle:
        "Face à la complexité du choix: jongler entre le nombre idéal de couleurs, l'importance des contrastes, et l'impératif d'une accessibilité sans faille.",
      tags: ["couleurs", "design"],
      date: "01/11/2023",
    },
    {
      title: "Booste ta productivité avec ces extensions VSCode",
      href: "/posts/extensions-vscode",
      img: "/assets/extensions-vscode.png",
      subtitle:
        "Découvre les meilleures extensions VSCode pour maximiser ton efficacité et révolutionner ton expérience de codage !",
      tags: ["vscode", "configuration"],
      date: "14/11/2023",
    },
    {
      title: "Personnalise ton window management avec Yabai",
      href: "/posts/personnaliser-macos-avec-yabai",
      img: "/assets/yabai.png",
      subtitle:
        "Découvre Yabai : le guide ultime pour configurer ton gestionnaire de fenêtres sur macOS et booster ta productivité !",
      tags: ["macos", "configuration", "productivité"],
      date: "09/11/2023",
    },
    {
      title: "Transforme ton terminal MacOs",
      href: "/posts/terminal-macos-top",
      img: "/assets/terminal-macos-top.png",
      subtitle:
        "Modernise ton terminal fade en une interface colorée et fonctionnelle qui te ressemble avec iTerm2 et OhMyZsh",
      tags: ["terminal", "macos", "productivité"],
      date: "06/11/2023",
    },
  ];

  useEffect(() => {
    const filteredPosts = listPosts.filter(
      (post) => post.href !== currentPostHref
    );
    const getRandomIndex = () =>
      Math.floor(Math.random() * filteredPosts.length);

    let firstIndex: number = getRandomIndex();
    let secondIndex: number = getRandomIndex();

    while (firstIndex === secondIndex) {
      secondIndex = getRandomIndex();
    }

    setRandomPosts([filteredPosts[firstIndex], filteredPosts[secondIndex]]);
  }, [currentPostHref]);

  return (
    <div className="flex gap-4 flex-wrap flex-col ">
      <h3 className="text-center text-3xl mb-8 font-bold text-primary">
        Ça peut aussi t'intéresser ⚡️
      </h3>
      <div className="flex  gap-4 flex-col lg:flex-row ">
        {randomPosts.map((post: Post, index: number) => (
          <Link key={index} href={`${post.href}`}>
            <div className="flex flex-col p-2 border-border border rounded-lg hover:bg-purple-100 dark:hover:bg-gray-900 items-center mb-4 text-center  sm:text-left">
              <Image
                src={post.img}
                alt="image illustrant l'article"
                width={400}
                height={400}
                className="inline-block p-4 h-40 w-40"
              />

              <div className="px-4 sm:px-8 sm:pt-0">
                <p className="text-lg mb-2 font-bold text-primary">
                  {post.title}
                </p>
                <p className="text-sm text-muted-foreground">{post.subtitle}</p>
                <div className="flex my-4 flex-wrap  justify-center md:justify-start gap-2">
                  {post.tags.map((tag: string) => (
                    <p
                      key={tag}
                      className="text-slate-800 p-2 text-xs rounded-lg bg-purple-300  "
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="flex gap-2 items-center mb-6 ">
                  <Calendar size={12} color="#9CA3AF" />
                  <p className="text-xs text-muted-foreground ">{post.date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RandomPosts;
