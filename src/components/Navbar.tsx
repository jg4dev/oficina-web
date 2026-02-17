"use client";

import Link from "next/link";

export default function Navbar() {
  return (
<nav className="bg-neutral-950 border-b border-white/5">

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
          <Link href="/sobre">
            Sobre
          </Link>

        </div>
      </div>
    </nav>
  );
}
