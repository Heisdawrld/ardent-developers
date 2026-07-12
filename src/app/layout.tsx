import type { Metadata } from "next";
import { Geist, Geist_Mono, Arizonia } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arizonia = Arizonia({
  variable: "--font-arizonia",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ardent Limited | Redefining Modern Living",
  description:
    "Ardent Limited — a next-generation Lagos real estate development brand building bold, design-led communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${arizonia.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
