import { Historic } from "@/types/prompt.type";
import { useQuery } from "@tanstack/react-query";

async function fetchChatHistory(chatId: string): Promise<Historic> {
  const response = await fetch(`/api/chats/${chatId}`);
  if (!response.ok) {
    throw new Error("Falha ao buscar o histórico do chat");
  }
  return response.json();
}

export const useChatHistory = (chatId: string | null) => {
  return useQuery({
    queryKey: ["chatHistory", chatId],
    queryFn: () => fetchChatHistory(chatId!),
    enabled: !!chatId,
  });
};
