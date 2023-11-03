"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comments() {
  const { theme } = useTheme();
  return (
    <Giscus
      id="comments"
      repo="alexandrePDA/alexandre-blog"
      repoId="R_kgDOKodPiw"
      category="Announcements"
      categoryId="DIC_kwDOKodPi84CaqRq"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === "dark" ? "dark" : "light"}
      lang="fr"
      loading="lazy"
    />
  );
}
