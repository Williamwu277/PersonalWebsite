import type { Metadata } from "next";
import { Monoton, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import Providers from "../ui/providers";
import "./globals.css";

const monoton = Monoton({
  weight: "400",
  variable: "--font-monoton",
  subsets: ["latin"]
});

const inter = Inter({
  weight: "400",
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "William Wu",
  description: "William Wu is a Computer Science student at the University of Waterloo. Explore his about page, software projects, achievement timeline, and blog posts on tech and personal growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${monoton.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
