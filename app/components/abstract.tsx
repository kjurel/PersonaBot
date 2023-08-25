import React, { FC, useRef } from "react";

interface AbstractProps {}

const Abstract: FC<AbstractProps> = (props) => {
  let abstt = useRef<HTMLInputElement>(null);
  const freezeAbstract = () => {
    abstt.current!.disabled = true;
  };
  const unlockFreeze = () => {
    abstt.current!.disabled = false;
  };
  return (
    <>
      <input ref={abstt} type="text" />
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
