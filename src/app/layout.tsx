import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raghu rash — Handcrafted Perfumed Agarbatti",
  description: "Discover authentic handcrafted perfumed agarbatti by Raghu rash. Made with natural ingredients like frankincense, sandalwood, and floral blends. Traditional craftsmanship meets timeless scents.",
  keywords: ["agarbatti", "incense", "handcrafted", "perfumed", "natural", "traditional", "raghu rash", "frankincense", "sandalwood", "aromatherapy"],
  authors: [{ name: "Raghu rash", url: "https://raghu-rash.com" }],
  creator: "Abhishek Chakravarti",
  publisher: "Raghu rash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://raghu-rash.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raghu-rash.com",
    title: "Raghu rash — Handcrafted Perfumed Agarbatti",
    description: "Discover authentic handcrafted perfumed agarbatti. Natural ingredients, timeless scents, traditional craftsmanship.",
    siteName: "Raghu rash",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raghu rash - Handcrafted Perfumed Agarbatti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu rash — Handcrafted Perfumed Agarbatti",
    description: "Discover authentic handcrafted perfumed agarbatti. Natural ingredients, timeless scents, traditional craftsmanship.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${merriweather.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7B9F85" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
