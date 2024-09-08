import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";

const nunito = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cornelius Motanya's Portfolio",
  description: "Crafting digital ideas with passion and precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
