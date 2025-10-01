"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const text = useSelector((state: RootState) => state.chatinput.value);

  useEffect(() => {
    setMessage(text);
  }, [text]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const form = e.currentTarget.form;
      if (form) {
        const submitEvent = new Event("submit", {
          bubbles: true,
          cancelable: true,
        });
        form.dispatchEvent(submitEvent);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
          disabled={isLoading}
          className="hover:cursor-context-menu min-h-[110px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 pr-14 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          disabled={isLoading || !message.trim()}
          className="absolute bottom-2 right-2 h-8 w-8"
        >
          <SendHorizonal className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};
