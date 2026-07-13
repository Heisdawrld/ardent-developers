import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Arizonia, Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const arizonia = Arizonia({
  variable: "--font-arizonia",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ardent Limited | Redefining Modern Living",
  description:
    "Ardent Limited — a next-generation Lagos real estate development brand building bold, design-led communities.",
  openGraph: {
    title: "Ardent Limited | Redefining Modern Living",
    description:
      "Ardent Limited — a next-generation Lagos real estate development brand building bold, design-led communities.",
    type: "website",
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
      className={`${plusJakarta.variable} ${arizonia.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-body font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
