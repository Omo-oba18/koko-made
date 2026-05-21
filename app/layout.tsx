import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Madeleine KOKO — Styliste • Modéliste • Créatrice de mode",
    template: "%s | Madeleine KOKO",
  },

  description:
    "Portfolio officiel de Madeleine ADONNONDE, connue sous le nom Madeleine KOKO, styliste, modéliste et créatrice de mode béninoise. Fondatrice de la marque Koko Made, reconnue pour sa touche créative unique et ses participations à plusieurs défilés et événements de mode prestigieux au Bénin.",

  keywords: [
    "Madeleine KOKO",
    "Madeleine ADONNONDE",
    "Koko Made",
    "styliste",
    "modéliste",
    "créatrice de mode",
    "mode africaine",
    "fashion designer",
    "défilé de mode",
    "fashion show",
    "haute couture",
    "mode béninoise",
    "création textile",
    "Cotonou",
    "Bénin",
    "Afrique",
  ],

  authors: [
    {
      name: "Madeleine ADONNONDE",
    },
  ],

  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Koko Made",
    title: "Madeleine KOKO — Styliste • Modéliste • Créatrice de mode",
    description:
      "Découvrez l'univers créatif de Madeleine KOKO, fondatrice de Koko Made : collections, créations, défilés et identité artistique.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <AppProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
