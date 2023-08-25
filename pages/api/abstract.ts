import { NextApiRequest, NextApiResponse } from "next";
import { wrapper } from "./_wrapper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(405).send({ message: "Only POST requests allowed" });

  const body = req.body;

  const { abstract, question, parentId } = body;

  const isContinued = abstract === "continue" && parentId;
  if (isContinued && !parentId) return res.status(400).send("Bad request");
  const prompt = `
"${
    !isContinued
      ? abstract + "\n based on the extract"
      : "from the above extract provided"
  }"

answer the question.
${question}
`;

  wrapper(prompt, parentId).then((answer) =>
    res
      .status(200)
      .json({ answer: answer.text, parentId: answer.parentMessageId }),
  );
};
