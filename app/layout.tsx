import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
