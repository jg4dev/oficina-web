import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const logado = request.cookies.get("logado");
  const role = request.cookies.get("role");

  if (!logado) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/admin") && role?.value !== "admin") {
    return NextResponse.redirect(new URL("/mecanico/os", request.url));
  }

  if (pathname.startsWith("/mecanico") && role?.value !== "mecanico") {
    return NextResponse.redirect(new URL("/admin/os", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/mecanico/:path*"],
};