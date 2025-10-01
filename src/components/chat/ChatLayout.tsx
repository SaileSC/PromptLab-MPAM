"use client";

import { useEffect, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";
import { ChatWelcome } from "./ChatWelcome";
import { Message } from "@/types/prompt.type";

// NOVO: Importe as ferramentas necessárias
import { useMutation } from "@tanstack/react-query";
import { sendChatMessage } from "@/lib/apiService";

type ChatLayoutProps = {
  historic?: Message[];
  // NOVO: Adicione o ID do chat se ele já existir
  chatId?: string;
};

export const ChatLayout = ({
  historic,
  chatId: initialChatId,
}: ChatLayoutProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  // NOVO: Estado para controlar o ID do chat da conversa atual
  const [chatId, setChatId] = useState<string | null>(initialChatId || null);

  useEffect(() => {
    if (historic) setMessages(historic);
  }, [historic]);

  // NOVO: Configuração do useMutation para gerenciar a chamada à API
  const { mutate, isPending } = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (data) => {
      // Quando a API responde com sucesso, criamos a mensagem do assistente
      const assistantMessage: Message = {
        id: data.messageId || `assistant-${Date.now()}`, // Use o ID do DB se a API retornar
        content: data.message,
        role: "assistant",
        timestamp: new Date().toISOString(),
      };

      // Adicionamos a resposta da IA ao estado
      setMessages((prev) => [...prev, assistantMessage]);

      // Se for um novo chat, atualizamos o ID localmente
      if (data.newChatId && !chatId) {
        setChatId(data.newChatId);
      }
    },
    onError: (error) => {
      console.error("Erro ao enviar mensagem:", error);
      // Opcional: Adicionar uma mensagem de erro na interface
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

  // MODIFICADO: A função handleSendMessage agora faz a atualização otimista e chama a API
  const handleSendMessage = (content: string) => {
    // 1. Cria a mensagem do usuário
    const userMessage: Message = {
      id: `user-${Date.now()}`, // ID temporário para a UI
      content,
      role: "user",
      timestamp: new Date().toISOString(),
    };

    // 2. Adiciona a mensagem do usuário à tela IMEDIATAMENTE
    setMessages((prev) => [...prev, userMessage]);

    // 3. Dispara a chamada para a API com o conteúdo e o ID do chat atual
    mutate({ prompt: content, chatId });
  };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <ChatWelcome />
        ) : (
          // MODIFICADO: Passa o estado de 'carregando' para o componente de mensagens
          <ChatMessages messages={messages} isLoading={isPending} />
        )}
      </div>
      <div className="w-full max-w-4xl mx-auto p-4">
        {/* MODIFICADO: Passa o estado de 'carregando' para o componente de input */}
        <ChatInput onSendMessage={handleSendMessage} isLoading={isPending} />
      </div>
    </div>
  );
};
