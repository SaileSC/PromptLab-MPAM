"use client";

import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Message } from "@/types/prompt.type";
import { MarkdownRenderer } from "./markdown-render";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean; // Prop para controlar o estado de carregamento
}

export const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]); // Adiciona isLoading para rolar quando o indicador aparecer

  return (
    <ScrollArea className="h-full w-full">
      <div className="mx-auto w-full max-w-4xl p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "mb-6 flex items-start gap-4",
              msg.role === "user" && "justify-end"
            )}
          >
            {msg.role === "assistant" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                "max-w-[75%] rounded-lg p-3 text-sm",
                // Removi a classe 'prose' daqui para colocar no MarkdownRenderer
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              <MarkdownRenderer content={msg.content} />
            </div>
            {msg.role === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {/* Bloco que renderiza a bolha de "Pensando..." */}
        {isLoading && (
          <div className="mb-6 flex items-start gap-4">
            <Avatar className="h-8 w-8">
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="rounded-lg bg-muted p-3 text-sm">
              {/* Efeito de pulsação do Tailwind para feedback visual */}
              <p className="animate-pulse">Pensando...</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};
