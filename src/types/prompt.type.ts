export type Prompt = {
  id: string;
  titulo: string;
  template: string;
};

export type PromptCategory = {
  id: string;
  titulo: string;
  descricao: string;
  prompts: Prompt[];
};

export type ChatList = ChatLabel[];

export type ChatLabel = {
  id: string;
  title: string;
};

export type Historic = {
  id: string;
  title: string;
  createdAt: string;
  messages: Message[];
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};
