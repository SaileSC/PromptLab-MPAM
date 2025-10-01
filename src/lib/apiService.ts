export async function sendChatMessage(payload: {
  prompt: string;
  chatId: string | null;
}) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("A requisição para a API de chat falhou.");
  }

  return response.json();
}
