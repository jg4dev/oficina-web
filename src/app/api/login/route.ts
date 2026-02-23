import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  console.log("Email recebido:", email);
  console.log("Senha recebida:", senha);

  if (email === "admin@email.com" && senha === "123") {
    const response = NextResponse.json({ success: true });

    response.cookies.set("logado", "true", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { error: "Credenciais inválidas" },
    { status: 401 }
  );
}