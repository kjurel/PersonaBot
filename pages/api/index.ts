import { NextApiRequest, NextApiResponse } from "next";
import { ChatGPTAPI } from "chatgpt";

async function wrapper(prompt: string, parentId?: string) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPEN_API_KEY!,
  });

  const res = await api.sendMessage(prompt, { parentMessageId: parentId });
  return res;
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { prompt, parentId },
    method,
  } = request;

  if (!prompt) return response.status(404).send("`promt` is required.");
  else if (Array.isArray(prompt) || Array.isArray(parentId))
    return response
      .status(400)
      .send("`prompt` and `parentId` should be passed only once.");

  wrapper(prompt, parentId).then((answer) =>
    response
      .status(200)
      .json({ answer: answer.text, parentId: answer.parentMessageId }),
  );
};
