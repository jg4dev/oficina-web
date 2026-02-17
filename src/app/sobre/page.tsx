export default function Sobre() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 py-20">

      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Sobre a Oficina Junior Car
        </h1>

        {/* Introdução */}
        <p className="text-lg text-muted leading-relaxed mb-6">
          A Oficina Junior Car nasceu com o propósito de oferecer serviços
          automotivos com qualidade, transparência e compromisso com o cliente.
          Atuamos na manutenção preventiva e corretiva de veículos da linha leve,
          garantindo segurança e desempenho para seu automóvel.
        </p>

        {/* História */}
        <p className="text-lg text-muted leading-relaxed mb-10">
          Com anos de experiência no setor automotivo, construímos nossa
          reputação baseada na confiança, honestidade e excelência técnica.
          Nosso objetivo é entregar soluções eficientes, com diagnóstico
          preciso e serviços realizados com alto padrão profissional.
        </p>

        {/* Diferenciais */}
        <h2 className="text-2xl font-semibold mb-6">
          Nossos Diferenciais
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="card">
            ✔ Atendimento transparente e honesto
          </div>
          <div className="card">
            ✔ Equipamentos modernos para diagnóstico
          </div>
          <div className="card">
            ✔ Profissionais qualificados
          </div>
          <div className="card">
            ✔ Compromisso com prazos e qualidade
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Missão</h3>
            <p className="text-muted text-sm">
              Oferecer serviços automotivos com qualidade e responsabilidade,
              garantindo segurança e satisfação aos clientes.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Visão</h3>
            <p className="text-muted text-sm">
              Ser referência em mecânica automotiva na região, reconhecida
              pela excelência e confiança.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p className="text-muted text-sm">
              Transparência, compromisso, ética profissional e respeito
              ao cliente.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted mb-6">
            Precisa de um serviço de confiança para o seu veículo?
          </p>

          <a
            href="https://wa.me/5579999904384"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Fale Conosco pelo WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}
