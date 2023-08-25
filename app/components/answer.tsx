"use client";
import React, { FC, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $anstts } from "./stats";

interface AnswerProps {}

const Answer: FC<AnswerProps> = (props) => {
  let anstt = useRef<HTMLParamElement>(null);
  const anstts = useStore($anstts);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          border: "1px solid white",
          padding:"1%",
          marginBottom: "15px"
        }}
        className="rounded-lg"
      >
        <p className="text-whitesmoke">{anstts}</p>
      </div>
    </>
  );
};

export default Answer;
