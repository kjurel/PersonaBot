import { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const url = request.body.query;
  const form = new FormData();
  form.append("file", url);
  form.append("model", "whisper-1");

  const retval = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
      "Content-Type": "multipart/form-data",
    },
    body: form,
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json["text"];
    })
    .then((txt) => response.status(200).json({ answer: txt }));
};
