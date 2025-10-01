import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error("Google API Key not found in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

/**
 * Gera conteúdo com base em um prompt usando o Gemini.
 * @param prompt O texto de entrada do usuário.
 * @returns A resposta gerada pela IA.
 */
export async function generateGeminiResponse(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error("Erro ao gerar resposta do Gemini:", error);
    throw new Error("Falha na comunicação com a IA.");
  }
}
