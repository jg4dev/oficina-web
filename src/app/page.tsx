import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies(); // 👈 precisa de await
  const logado = cookieStore.get("logado");

  if (!logado) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
      <h1 className="text-3xl font-bold">
        Bem-vindo, você está logado!
      </h1>
    </main>
  );
}