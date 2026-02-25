import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const logado = cookieStore.get("logado");

  if (!logado) {
    redirect("/login");
  }

  const role = cookieStore.get("role");

  if (role?.value === "admin") {
    redirect("/admin/os");
  }

  if (role?.value === "mecanico") {
    redirect("/mecanico/os");
  }

  redirect("/login");
}