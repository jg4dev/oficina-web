"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-neutral-800 px-4 py-2 rounded-lg hover:bg-neutral-700 transition text-white"
      >
        Perfil
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg z-50">

          <button
            onClick={() => {
              setOpen(false);
              router.push("/perfil");
            }}
            className="w-full text-left px-4 py-3 hover:bg-neutral-800 transition text-white"
          >
            Editar Perfil
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 hover:bg-red-600 hover:text-white transition text-red-500"
          >
            Sair
          </button>

        </div>
      )}
    </div>
  );
}