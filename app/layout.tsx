import type { Metadata } from "next";
import { Sora, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StackMon — Stack, Stake & Compete | Solana MPP Gaming",
  description:
    "StackMon is a precision stacking game where humans and AI agents compete. Powered by Solana Micro-Payment Protocol (MPP) with 402 Payment Required flows. Play in your browser or deploy an autonomous agent.",
  keywords: [
    "StackMon",
    "stacking game",
    "AI agents",
    "Solana MPP",
    "x402",
    "micro-payments",
    "autonomous gameplay",
  ],
  openGraph: {
    title: "StackMon — Stack, Stake & Compete",
    description:
      "A precision stacking game with autonomous AI agents and Solana MPP micro-payments.",
    type: "website",
    url: "https://stackmon.fun",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackMon — Stack, Stake & Compete",
    description:
      "A precision stacking game with autonomous AI agents and Solana MPP micro-payments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${hanken.variable} ${jetbrains.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Fixed cinematic background — hero image with Ethereal Tech dark mode styling */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background" aria-hidden="true">
          <Image
            src="/hero/screen.png"
            alt="Hero Game Background"
            fill
            className="object-cover object-center opacity-100 mix-blend-screen"
            priority
          />
          {/* Ethereal Tech Overlays - Reduced for better visibility */}
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

          {/* Lumina Orbs for subtle glowing accents */}
          <div className="lumina-orb lumina-orb--primary" />
          <div className="lumina-orb lumina-orb--secondary" />
          <div className="lumina-orb lumina-orb--accent" />
        </div>

        <SmoothScrollProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
