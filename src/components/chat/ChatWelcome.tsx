import { Bot } from "lucide-react";

export const ChatWelcome = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <Bot size={52} className="mb-4 text-zinc-500" />
      <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
        Como posso ajudar hoje?
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Comece uma conversa enviando uma mensagem.
      </p>
    </div>
  );
};
