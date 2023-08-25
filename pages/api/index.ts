import { NextApiRequest, NextApiResponse } from "next";
import { wrapper } from "./_wrapper";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { prompt, parentId },
    method,
  } = request;

  if (!prompt) return response.status(404).send("`prompt` is required.");
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
