"use client";
import React, { FC, useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $abstts } from "./stats";

interface AbstractProps {}

const Abstract: FC<AbstractProps> = (props) => {
  let abstt = useRef<HTMLInputElement>(null);
  const abstts = useStore($abstts);
  useEffect(() => {
    abstt.current!.value = abstts;
  }, [abstts]);
  return (
    <>
      <input ref={abstt} type="text" />
      <button
        onClick={() => {
          abstt.current!.disabled = true;
          $abstts.set(abstt.current!.value);
        }}
      >
        Freeze
      </button>
      <button
        onClick={() => {
          abstt.current!.disabled = false;
          $abstts.set("");
        }}
      >
        Unfreeze
      </button>
    </>
  );
};

export default Abstract;
