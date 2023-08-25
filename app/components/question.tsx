"use client";
import React, { FC, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $abstts, $anstts, $pidtts } from "./stats";

interface QuestionProps {}

const Question: FC<QuestionProps> = (props) => {
  let qestt = useRef<HTMLInputElement>(null);
  const abstts = useStore($abstts);
  return (
    <>
      <input ref={qestt} type="text" />
      <button
        onClick={() => {
          if (abstts === "") {
            // normal question
            fetch(
              "/api?" +
                new URLSearchParams({
                  prompt: qestt.current!.value,
                }).toString(),
            )
              .then((res) => res.json())
              .then((txt) => $anstts.set(txt));
          } else {
            // question with abstract
            fetch("/api/abstract", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                abstract: abstts,
                question: qestt.current!.value,
              }),
            })
              .then((res) => res.json())
              .then(({ answer, parentId }) => {
                $anstts.set(answer);
                $pidtts.set(parentId);
              });
          }
        }}
      >
        Answer
      </button>
    </>
  );
};

export default Question;
