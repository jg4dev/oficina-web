"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-zinc-900/60 border-b border-zinc-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-lg">Oficina Web</h1>

        <div className="flex gap-6 text-zinc-300">
          <Link href="/" className="hover:text-white transition">
            Início
          </Link>
          <Link href="/home" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/servicos" className="hover:text-white transition">
            Serviços
          </Link>
        </div>
      </div>
    </nav>
  );
}
