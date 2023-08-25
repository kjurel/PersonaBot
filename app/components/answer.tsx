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
      <p className="text-whitesmoke">{anstts}</p>
    </>
  );
};

export default Answer;
