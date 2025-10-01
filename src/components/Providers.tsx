"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { TooltipProvider } from "./ui/tooltip";
import { SidebarProvider } from "./ui/sidebar";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SidebarProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </SidebarProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;
