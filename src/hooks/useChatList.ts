import { ChatList } from "@/types/prompt.type";
import { useQuery } from "@tanstack/react-query";

async function fetchChatList(): Promise<ChatList> {
  const response = await fetch("/api/chats");
  if (!response.ok) {
    throw new Error("Falha ao buscar a lista de chats");
  }
  return response.json();
}

export const useChatList = () => {
  return useQuery({
    queryKey: ["chatList"],
    queryFn: fetchChatList,
  });
};
