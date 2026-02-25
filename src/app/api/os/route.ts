import { NextResponse } from "next/server";
import { ordens } from "src/lib/mockOS";

export async function GET() {
  return NextResponse.json(ordens);
}