"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Login simulado
    if (email === "admin@oficina.com" && senha === "123456") {
      router.push("/home"); // redireciona para a Home
    } else {
      setErro("Email ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-neutral-900 p-8 rounded-2xl shadow-xl w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-neutral-200 mb-6 text-center">
          Login Oficina
        </h2>

        {erro && <p className="text-red-500 mb-4 text-center">{erro}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <button className="w-full py-2 bg-red-600 hover:bg-red-300 rounded-lg text-neutral-100 font-semibold">
          Entrar
        </button>
      </form>
    </div>
  );
}
