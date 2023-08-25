"use client";
import React, { FC, useRef } from "react";
import { useStore } from "@nanostores/react";
import { $abstts, $anstts, $pidtts, $usrtts } from "./stats";

interface QuestionProps {}

const Question: FC<QuestionProps> = (props) => {
  let qestt = useRef<HTMLInputElement>(null);
  const abstts = useStore($abstts);
  return (
    <>
      <div className="relative flex h-10 w-full min-w-[200px] my-2">
        <input
          ref={qestt} type="text"
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-white focus:border-t-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=""
          required
        />
        <button
          className=" rounded-lg !absolute right-1 top-1 z-10 select-none bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
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
                .then((txt) => $anstts.set(txt.answer));
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
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Ask me anything!
        </label>
      </div>


    </>
  );
};

export default Question;
