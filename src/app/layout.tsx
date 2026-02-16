import type { Metadata } from "next";
import { Parisienne, Cormorant_Garamond, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const parisienne = Parisienne({
  weight: "400",
  variable: "--font-parisienne",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Focus Founders | Neurodivergent Entrepreneurs Community",
  description: "Stop fighting your ADHD. Focus Founders is where neurodivergent entrepreneurs build businesses that work with their brains, not against them. Free forever.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Focus Founders | Neurodivergent Entrepreneurs Community",
    description: "Stop fighting your ADHD. Focus Founders is where neurodivergent entrepreneurs build businesses that work with their brains, not against them. Free forever.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Focus Founders - Neurodivergent Entrepreneurs Community",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Founders | Neurodivergent Entrepreneurs Community",
    description: "Stop fighting your ADHD. Focus Founders is where neurodivergent entrepreneurs build businesses that work with their brains, not against them. Free forever.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${parisienne.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
