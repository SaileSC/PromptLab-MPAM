"use client";

import { PenBox, ScrollText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "../sidebar";
import { Separator } from "@radix-ui/react-separator";
import { TruncatedTooltip } from "./TruncatedTooltip";
import { NavUser } from "./NavUser";
import Link from "next/link";
import { useChatList } from "@/hooks/useChatList";
import { Skeleton } from "../skeleton";

const dataUser = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
};
const AppSidebar = () => {
  const { data, isLoading } = useChatList();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <PenBox />
                    <span>Novo chat</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-[0.8rem] font-bold">
            <ScrollText />
            Historico
          </SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuSub>
                {isLoading
                  ? [...Array(10)].map((_, index) => (
                      <SidebarMenuSubItem key={`skeleton-${index}`}>
                        <Skeleton className="h-6" />
                      </SidebarMenuSubItem>
                    ))
                  : data?.map((item) => (
                      <SidebarMenuSubItem key={item.id}>
                        <SidebarMenuSubButton asChild isActive={true}>
                          <Link href={item.id}>
                            <div className="flex grow flex-col">
                              <TruncatedTooltip
                                maxLength={24}
                                className=" text-start"
                              >
                                {item.title}
                              </TruncatedTooltip>
                            </div>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dataUser.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
