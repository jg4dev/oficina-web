import Link from "next/link";
import { cookies } from "next/headers";
import ProfileDropdown from "src/components/profiledropdown";

export default async function Navbar() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  let role: string | null = null;

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value);
      role = user.role;
    } catch {
      role = null;
    }
  }

  return (
    <nav className="bg-neutral-950 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-lg text-white">
          Oficina Web
        </h1>

        <div className="flex gap-6 text-zinc-300 items-center">

          <Link href="/">Início</Link>
          <Link href="/home">Home</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/sobre">Sobre</Link>

          {role === "admin" && (
            <Link href="/admin" className="text-red-500">
              Admin
            </Link>
          )}

          {userCookie && <ProfileDropdown />}

        </div>
      </div>
    </nav>
  );
}