import { ChatGPTAPI } from "chatgpt";

export async function wrapper(prompt: string, parentId?: string) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPEN_API_KEY!,
  });

  const res = await api.sendMessage(prompt, { parentMessageId: parentId });
  return res;
}
