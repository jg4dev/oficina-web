import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Marca */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Oficina Junior Car
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            Especialistas em manutenção preventiva e corretiva.
            Trabalhamos com equipamentos modernos, peças de qualidade
            e atendimento transparente para garantir segurança e confiança.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-white font-medium mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="hover:text-white transition-colors">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-white transition-colors">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-white transition-colors">
                Contato
              </Link>
              <Link href="/sobre">
                Sobre
              </Link>

            </li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="text-white font-medium mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>Revisão Completa</li>
            <li>Troca de Óleo</li>
            <li>Suspensão</li>
            <li>Freios</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-medium mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              Instagram:{" "}
              <a
                href="https://instagram.com/juniorcaraju"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @juniorcaraju
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5579999904384"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                (79) 99990-4384
              </a>
            </li>
            <li>Brasil</li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Oficina Junior Car. Todos os direitos reservados.
      </div>
    </footer>
  );
}
