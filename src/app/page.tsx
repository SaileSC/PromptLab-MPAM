"use client";

import AppSidebar from "@/components/ui/custom/AppSidebar";
import PromptSidebar from "@/components/ui/custom/PromptSidebar";
import { ChatLayout } from "@/components/chat/ChatLayout";
import { JSX } from "react";

const Home = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full bg-background text-foreground">
      <AppSidebar />
      <main className="flex flex-1">
        <ChatLayout />
      </main>
      <PromptSidebar />
    </div>
  );
};

export default Home;
