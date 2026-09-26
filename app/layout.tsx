import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const bebasNeue = localFont({
  src: "../public/bebas_neue.ttf",
  display: "swap",
  variable: "--font-bebas-nue",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomas Birbe",
  description: "Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${interSans.variable} ${bebasNeue.variable} bg-background antialiased h-full`}
    >
      <body className="h-screen">
          {children}
      </body>
    </html>
  );
}
