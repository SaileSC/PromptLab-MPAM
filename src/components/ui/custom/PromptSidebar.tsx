"use client";

import { Sidebar, SidebarFooter } from "../sidebar";

import { NavPromptsContent } from "./NavPromptsContent";
import { promptCategories } from "@/moks/prompt.mock";

const promptsList = promptCategories;

const PromptSidebar = () => {
  return (
    <Sidebar side="right" collapsible="none" className="w-2/12">
      <SidebarFooter>
        <NavPromptsContent items={promptsList} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default PromptSidebar;
