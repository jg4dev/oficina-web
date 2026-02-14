export default function Servicos() {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <h2 className="text-3xl font-bold text-center mb-12">
        Nossos <span className="text-red-600">Serviços</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {["Troca de óleo", "Freios", "Alinhamento"].map((servico) => (
          <div
            key={servico}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-600 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {servico}
            </h3>
            <p className="text-zinc-400 text-sm">
              Serviço realizado por profissionais qualificados.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
