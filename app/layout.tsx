import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "Madeleine KOKO — Styliste & Directrice Artistique",
    template: "%s | Madeleine KOKO",
  },
  description:
    "Portfolio de Madeleine KOKO, styliste de mode et directrice artistique. Collections, défilés, éditoriaux de luxe — Paris & Milan.",
  keywords: [
    "styliste",
    "mode",
    "fashion",
    "direction artistique",
    "défilé",
    "luxe",
    "Paris",
    "Milan",
  ],
  authors: [{ name: "Madeleine KOKO" }],
  openGraph: { type: "website", locale: "fr_FR", siteName: "Madeleine KOKO" },
  robots: { index: true, follow: true },
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
