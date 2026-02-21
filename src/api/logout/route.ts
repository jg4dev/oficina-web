import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });

  response.cookies.set("logado", "", {
    path: "/",
    maxAge: 0, // apaga o cookie
  });

  return response;
}