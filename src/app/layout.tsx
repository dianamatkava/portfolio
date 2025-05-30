import "./globals.css";

import Footer from "@app/components/footer/Footer";
import HeaderNav from "../components/header/HeaderNav";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Diana Matkava",
  description: "Diana Matkava's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="w-full">
        <header className="w-full container">
          <HeaderNav />
        </header>
        <main className="w-full">{children}</main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
