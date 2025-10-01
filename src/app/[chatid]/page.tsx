"use client";

import { ChatLayout } from "@/components/chat/ChatLayout";
import AppSidebar from "@/components/ui/custom/AppSidebar";
import PromptSidebar from "@/components/ui/custom/PromptSidebar";
import { useChatHistory } from "@/hooks/useChatHistory";
import { useParams } from "next/navigation";

const Chat = () => {
  const param = useParams();
  const { chatid } = param;

  const { data, isLoading } = useChatHistory(chatid as string);

  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <AppSidebar />
      <main className="flex flex-1">
        <ChatLayout historic={data?.messages} />
      </main>
      <PromptSidebar />
    </div>
  );
};
export default Chat;
