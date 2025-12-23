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

export const metadata: Metadata = {
  title: "Sasha - Bonusy i promocje na kasyna online",
  description: "Bonusy, promocje i polecane kasyna online",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Sasha - Bonusy i promocje na kasyna online",
    description: "Bonusy, promocje i polecane kasyna online",
    url: "https://mrsasha.vercel.app",
    siteName: "Sasha",
    images: [
      {
        url: "https://mrsasha.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Sasha - Bonusy i promocje",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sasha - Bonusy i promocje na kasyna online",
    description: "Bonusy, promocje i polecane kasyna online",
    images: ["https://mrsasha.vercel.app/og.png"],
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
