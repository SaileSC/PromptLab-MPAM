import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const { chatId } = await params;

    const chat = await prisma.chat.findUnique({
      where: {
        id: chatId,
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!chat) {
      return NextResponse.json(
        { error: "Chat não encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json(chat);
  } catch (error) {
    console.error(`[ERRO AO BUSCAR CHAT ${params.chatId}]`, error);
    return NextResponse.json(
      { error: "Não foi possível buscar o histórico do chat." },
      { status: 500 }
    );
  }
}
