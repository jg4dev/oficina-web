import "./globals.css";

export const metadata = {
  title: "Meu Projeto",
  description: "Projeto Next.js do zero",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
