import { NextApiRequest, NextApiResponse } from "next";
import { wrapper } from "./_wrapper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).send({ message: "Only POST requests allowed" });

  const body = JSON.parse(req.body);

  const { type, question, parentId } = body;

  if (!type && !question) return res.status(400).send("Bad request");
  const prompt = `
"${question}"

answer like an ${type}.
${question}
`;

  wrapper(prompt, parentId).then((answer) =>
    res
      .status(200)
      .json({ answer: answer.text, parentId: answer.parentMessageId }),
  );
};
