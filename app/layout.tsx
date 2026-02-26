import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://offmap-morocco.example"),
  title: {
    default: "OffMap Morocco",
    template: "%s | OffMap Morocco",
  },
  description:
    "Voyages en petits groupes au Maroc. Storytelling, immersion locale, securite, et experiences hors des itineraire classiques.",
  openGraph: {
    title: "OffMap Morocco",
    description: "Not on Google. Not for everyone.",
    url: "https://offmap-morocco.example",
    siteName: "OffMap Morocco",
    images: [
      {
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Dunes%20de%20Merzouga.jpg",
        width: 1200,
        height: 630,
        alt: "Merzouga dunes in Morocco",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
