import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  let role: "admin" | "mecanico" | null = null;
  let redirectUrl: string | null = null;

  if (email === "admin@oficina.com" && senha === "1") {
    role = "admin";
    redirectUrl = "/admin/os";
  } else if (email === "mecanico@oficina.com" && senha === "12") {
    role = "mecanico";
    redirectUrl = "/mecanico/os";
  }

  if (!role || !redirectUrl) {
    return NextResponse.json(
      { error: "Credenciais inválidas" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ redirectTo: redirectUrl });

  response.cookies.set("logado", "true", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  response.cookies.set("role", role, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  return response;
}