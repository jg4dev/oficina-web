"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";


export default function Home() {
  const router = useRouter();

useEffect(() => {
  const logado = localStorage.getItem("logado");

  if (!logado) {
    router.push("/login");
  }
}, []);

  return (
    <main className="bg-neutral-900 text-white">

      {/* HERO */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Manutenção Automotiva com Qualidade e Confiança
            </h1>

            <p className="text-lg text-neutral-400 mb-8">
              Especialistas em revisão, suspensão, freios e diagnóstico
              eletrônico. Cuidamos do seu veículo com profissionalismo
              e transparência.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/5579999904384"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Fale pelo WhatsApp
              </a>

              <Link
                href="/servicos"
                className="border border-neutral-700 hover:border-white px-6 py-3 rounded-md transition-colors"
              >
                Ver Serviços
              </Link>
            </div>
          </div>

          <div className="bg-neutral-900 h-[400px] rounded-lg border border-neutral-800 flex items-center justify-center">
            <span className="text-neutral-500">
              Espaço para imagem da oficina
            </span>
          </div>

        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                Revisão Completa
              </h3>
              <p className="text-neutral-400 text-sm">
                Inspeção detalhada para garantir o bom funcionamento
                e segurança do seu veículo.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                Suspensão e Freios
              </h3>
              <p className="text-neutral-400 text-sm">
                Manutenção especializada para estabilidade e segurança.
              </p>
            </div>

            <div className="bg-neutral-900 p-8 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                Diagnóstico Eletrônico
              </h3>
              <p className="text-neutral-400 text-sm">
                Tecnologia moderna para identificar falhas com precisão.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-white mb-12">
            Por que escolher a Junior Car?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-neutral-400">

            <div>
              <h4 className="text-white font-semibold mb-2">
                ✔ Profissionais Qualificados
              </h4>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">
                ✔ Atendimento Transparente
              </h4>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">
                ✔ Equipamentos Modernos
              </h4>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">
                ✔ Compromisso com Qualidade
              </h4>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-white mb-6">
            Precisa de manutenção para seu veículo?
          </h2>

          <p className="text-neutral-400 mb-8">
            Entre em contato agora mesmo e solicite um orçamento.
          </p>

          <a
            href="https://wa.me/5579999904384"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-lg transition-colors"
          >
            Solicitar Orçamento
          </a>

        </div>
      </section>

    </main>
  );
}
