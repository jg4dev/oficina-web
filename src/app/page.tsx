"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const logado = localStorage.getItem("logado");

    if (!logado) {
      router.push("/login");
    }
  }, [router]);

  return <main className="min-h-screen bg-neutral-950" />;
}