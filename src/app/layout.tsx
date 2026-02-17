import "./globals.css";
import type { ReactNode } from "react";

import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-white">

        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />


      </body>
    </html>
  );
}
