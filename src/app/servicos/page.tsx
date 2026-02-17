export default function Servicos() {
  return (
    <main className="min-h-screen bg-neutral-900">

      {/* SERVIÇOS */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serviços Especializados
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Trabalhamos com equipamentos modernos e profissionais qualificados
              para garantir segurança, desempenho e confiabilidade ao seu veículo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Serviço 1 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Revisão Completa
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Avaliação geral do veículo para identificar desgastes,
                prevenir falhas e garantir segurança.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Checagem de óleo e filtros</li>
                <li>✔ Sistema de freios</li>
                <li>✔ Suspensão e direção</li>
              </ul>
            </div>

            {/* Serviço 2 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Suspensão e Freios
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Manutenção especializada para garantir estabilidade
                e segurança em qualquer tipo de terreno.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Troca de pastilhas</li>
                <li>✔ Amortecedores</li>
                <li>✔ Alinhamento e balanceamento</li>
              </ul>
            </div>

            {/* Serviço 3 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Diagnóstico Eletrônico
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Utilizamos tecnologia moderna para identificar falhas
                com precisão e rapidez.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Scanner automotivo</li>
                <li>✔ Leitura de códigos de erro</li>
                <li>✔ Ajustes eletrônicos</li>
              </ul>
            </div>
                        {/* Serviço 4 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Serviços em caixas de marcha
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Tratamos seu carro da melhor forma possivel,
                 com agilidade e segurança.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Diagnostico preciso</li>
                <li>✔ cuidado</li>
                <li>✔ garantia</li>
              </ul>
            </div>
                        {/* Serviço 5 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Motor
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Tratamos seu motor da melhor forma possivel.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Garantia</li>
                <li>✔ Prazo de entrega</li>
                <li>✔ confiança</li>
              </ul>
            </div>
                        {/* Serviço 6 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Cabeçote
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Identificamos o problema e garantimos a solução.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Teste</li>
                <li>✔ Prevenção de erros</li>
                <li>✔ Ajustes</li>
              </ul>
            </div>
                        {/* Serviço 7 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-red-600 transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-500 transition-colors">
                Funcionamento
              </h3>
              <p className="text-neutral-400 text-sm mb-6">
                Identificação do defeito e garantia do serviço.
              </p>
              <ul className="text-neutral-500 text-sm space-y-2">
                <li>✔ Scanner automotivo</li>
                <li>✔ Identificação do erro</li>
                <li>✔ Serviço de qualidade</li>
              </ul>
            </div>

          </div>

          {/* CTA interno */}
          <div className="text-center mt-16">
            <a
              href="https://wa.me/5579999904384"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md transition-colors"
            >
              Solicitar Orçamento
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
