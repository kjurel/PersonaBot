import { NextApiRequest, NextApiResponse } from "next";
import { ChatGPTAPI } from "chatgpt";

async function example() {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPEN_API_KEY!,
  });

  const res = await api.sendMessage("Say hello to me in 5 wrods!");
  return res.text;
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  example().then((answer) => {
    res.status(200).json({ body: answer });
  });
};
