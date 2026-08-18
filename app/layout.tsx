import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Lissy Amador",
    "project management",
    "coordinación de proyectos",
    "diseño instruccional",
    "learning experience design",
    "innovación educativa",
    "tecnología educativa",
    "gestión de programas",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.photo,
        width: 1024,
        height: 1024,
        alt: "Retrato profesional de Lissy Amador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.photo],
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
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-canvas font-body antialiased`}
      >
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:font-body focus:text-sm focus:text-cream"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
