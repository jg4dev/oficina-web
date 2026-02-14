export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Oficina Mecânica
        <span className="text-red-600"> Premium</span>
      </h1>

      <p className="text-zinc-400 max-w-xl mb-8">
        Especialistas em manutenção automotiva com qualidade e confiança.
      </p>

      <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-md font-semibold">
        Agendar Serviço
      </button>
    </section>
  );
}
