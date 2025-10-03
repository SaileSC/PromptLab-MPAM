"use client";

import { useEffect, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ChatWelcome } from "./ChatWelcome";
import { Message } from "@/types/prompt.type";

import { useMutation } from "@tanstack/react-query";
import { sendChatMessage } from "@/lib/apiService";

type ChatLayoutProps = {
  historic?: Message[];
  chatId?: string;
};

export const ChatLayout = ({
  historic,
  chatId: initialChatId,
}: ChatLayoutProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState<string | null>(initialChatId || null);

  useEffect(() => {
    if (historic) setMessages(historic);
  }, [historic]);

  const { mutate, isPending } = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (data) => {
      const assistantMessage: Message = {
        id: data.messageId || `assistant-${Date.now()}`,
        content: data.message,
        role: "assistant",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      if (data.newChatId && !chatId) {
        setChatId(data.newChatId);
      }
    },
    onError: (error) => {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        content:
          "Desculpe, não foi possível obter uma resposta. Tente novamente.",
        role: "assistant",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    },
  });

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      role: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    mutate({ prompt: content, chatId });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <ChatWelcome />
        ) : (
          <ChatMessages messages={messages} isLoading={isPending} />
        )}
      </div>
      <div className="w-full max-w-4xl mx-auto p-4">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isPending} />
      </div>
    </div>
  );
};
