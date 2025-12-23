import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JEDNO ŹRÓDŁO PRAWDY DLA IKONY
const ICON = "/favicon.png";

export const metadata: Metadata = {
  title: "Sasha - Bonusy i promocje na kasyna online",
  description: "Bonusy, promocje i polecane kasyna online",

  // FAVICONY – przeglądarka + iOS
  icons: {
    icon: ICON,
    shortcut: ICON,
    apple: "/apple-touch-icon.png",
  },

  // WHATSAPP / FACEBOOK / MESSENGER
  openGraph: {
    title: "Sasha - Bonusy i promocje na kasyna online",
    description: "Bonusy, promocje i polecane kasyna online",
    url: "https://mrsasha.vercel.app",
    siteName: "Sasha",
    images: [ICON],
    type: "website",
  },

  // TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "Sasha - Bonusy i promocje na kasyna online",
    description: "Bonusy, promocje i polecane kasyna online",
    images: [ICON],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
