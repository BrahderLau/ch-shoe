import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CH Shoe | Defy The Heat",
  description: "Advanced anti-odour footwear for the urban kinetic lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${robotoMono.variable} antialiased bg-ch-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
