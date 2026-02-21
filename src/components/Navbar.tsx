"use client";

import { useState } from "react";
import Link from "next/link";
import Logoutbutton from "src/components/logoutbutton";

export default function Navbar() {
  const [logado] = useState(() => {
    if (typeof document !== "undefined") {
      return document.cookie.includes("logado=");
    }
    return false;
  });

  return (
    <nav className="bg-neutral-950 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-lg">Oficina Web</h1>

        <div className="flex gap-6 text-zinc-300 items-center">
          <Link href="/">Início</Link>
          <Link href="/home">Home</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/sobre">Sobre</Link>

          {logado && <Logoutbutton />}
        </div>
      </div>
    </nav>
  );
}