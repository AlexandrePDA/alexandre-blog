import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Point Dev D'Alexandre",
  description:
    "Profite d’une immersion totale dans l’univers du développement web grâce à toutes les ressources du blog",
  keywords:
    "technology ressources technologie dev developpeur web html css reactjs react nodejs node developper nvim mac blog linux vscode typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Placez ici les balises meta, link, etc. si nécessaire */}
        {/* Balises meta standard */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Balises meta spécifiques */}
        <meta
          name="description"
          content="Point Dev D'Alexandre - Profite d’une immersion totale dans l’univers du développement web grâce à toutes les ressources du blog"
        />
        <meta
          name="keywords"
          content="technology ressources technologie dev developpeur web reactjs react nodejs node developper nvim mac blog linux vscode typescript"
        />
        <meta name="author" content="Point Dev d'Alexandre" />

        {/* Balises Open Graph pour les partages sur les réseaux sociaux */}
        <meta property="og:title" content="Point Dev d'Alexandre" />
        <meta
          property="og:description"
          content="Point Dev D'Alexandre - Profite d’une immersion totale dans l’univers du développement web grâce à toutes les ressources du blog"
        />
        <meta property="og:image" content="/assets/Logo.png" />
        <meta property="og:url" content="https://alexandre-blog.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Balises Twitter Card pour les partages sur Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Point Dev d'Alexandre" />
        <meta name="twitter:title" content="Blog" />
        <meta
          name="twitter:description"
          content="Point Dev D'Alexandre - Profite d’une immersion totale dans l’univers du développement web grâce à toutes les ressources du blog"
        />
        <meta name="twitter:image" content="/assets/Logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
