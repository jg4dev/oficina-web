import type { ReactNode } from "react";
import Navbar from "src/components/Navbar";
import PageTransition from "../components/PageTransition";
import "./globals.css";
import Footer from "src/components/Footer";


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt">
      <body className="bg-zinc-950 text-white overflow-x-hidden">
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />

      </body>
    </html>
  );
}
