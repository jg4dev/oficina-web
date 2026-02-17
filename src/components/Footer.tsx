export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Marca */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Oficina Mecânica
          </h2>
          <p className="text-sm leading-relaxed">
            Oficina mecânica especializada em manutenção preventiva e corretiva,
             oferecendo serviços como revisão, troca de óleo, freios, suspensão
              e diagnóstico eletrônico. Trabalhamos com equipamentos
               modernos, peças de qualidade e profissionais capacitados,
             garantindo segurança, confiança e um atendimento transparente.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-white font-medium mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Início</li>
            <li className="hover:text-white transition">Serviços</li>
            <li className="hover:text-white transition">Sobre</li>
            <li className="hover:text-white transition">Contato</li>
          </ul>
        </div>

        {/* Serviços */}
        <div>
          <h3 className="text-white font-medium mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Mecânica automotiva</li>
            <li className="hover:text-white transition">linha leve</li>
            <li className="hover:text-white transition">Especialista em suspensão</li>
            <li className="hover:text-white transition">Manutenção e reparo</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-white font-medium mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>Instagram:  Juniorcaraju</li>
            <li>WhatsApp: (79) 99990-4384</li>
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
