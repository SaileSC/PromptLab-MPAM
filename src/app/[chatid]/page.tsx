"use client";

import { ChatLayout } from "@/components/chat/ChatLayout";
import AppSidebar from "@/components/ui/custom/AppSidebar";
import PromptSidebar from "@/components/ui/custom/PromptSidebar";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
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
        {!isLoading ? (
          <ChatLayout historic={data?.messages} />
        ) : (
          <div className="flex grow justify-center items-center">
            <Spinner className="text-red-500" variant="ring" size={64} />
          </div>
        )}
      </main>
      <PromptSidebar />
    </div>
  );
};
export default Chat;
