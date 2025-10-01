import { NextResponse } from "next/server";
import { generateGeminiResponse } from "@/lib/services/geminiService";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt, chatId } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt é obrigatório." },
        { status: 400 }
      );
    }

    const aiResponse = await generateGeminiResponse(prompt);

    if (chatId) {
      await prisma.message.createMany({
        data: [
          { role: "user", content: prompt, chatId: chatId },
          { role: "assistant", content: aiResponse, chatId: chatId },
        ],
      });
    } else {
      const newChat = await prisma.chat.create({
        data: {
          title: prompt.slice(0, 50),
          messages: {
            create: [
              { role: "user", content: prompt },
              { role: "assistant", content: aiResponse },
            ],
          },
        },
        include: {
          messages: true,
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: aiResponse,
    });
  } catch (error) {
    console.error("[ERRO NA API DE CHAT]", error);
    return NextResponse.json(
      { error: "Ocorreu um erro interno." },
      { status: 500 }
    );
  }
}
