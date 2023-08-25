import React, { FC, useRef } from "react";

interface QuestionProps {}

const Question: FC<QuestionProps> = (props) => {
  let qestt = useRef<HTMLInputElement>(null);
  const freezeAbstract = () => {
    abstt.current!.disabled = true;
  };
  const unlockFreeze = () => {
    abstt.current!.disabled = false;
  };
  return (
    <>
      <input ref={qestt} type="text" />
      <button
        onClick={() => {
          abstt.current!.disabled = true;
        }}
      >
        Freeze
      </button>
      <button
        onClick={() => {
          abstt.current!.disabled = false;
        }}
      >
        Unfreeze
      </button>
    </>
  );
};

export default Abstract;
