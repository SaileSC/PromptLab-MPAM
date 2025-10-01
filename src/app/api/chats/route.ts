import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const chats = await prisma.chat.findMany({
      select: {
        id: true,
        title: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(chats);
  } catch (error) {
    console.error("[ERRO AO LISTAR CHATS]", error);
    return NextResponse.json(
      { error: "Não foi possível buscar a lista de chats." },
      { status: 500 }
    );
  }
}
