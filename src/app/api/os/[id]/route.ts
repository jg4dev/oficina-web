import { NextResponse } from "next/server";
import { ordens } from "src/lib/mockOS";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { status } = await req.json();

  const ordem = ordens.find((o) => o.id === params.id);

  if (!ordem) {
    return NextResponse.json(
      { error: "Ordem não encontrada" },
      { status: 404 }
    );
  }

  ordem.status = status;

  return NextResponse.json({ success: true, ordem });
}