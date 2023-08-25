"use client";
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Home() {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  const [text, setText] = useState("");
  const handle = () => {
    // console.log(text);
    fetch("/api/abstract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        abstract: text,
        question: "",
      }),
    });
  };
  return (
    <div>
      <Navbar />
      <div style={{ height: availableHeight }}>
        <div className="flex inset-x-0 bottom-0">
          <input
            type="text"
            style={{
              width: "85%",
              padding: "12px 20px",
              margin: "0",
              boxSizing: "border-box",
              color: "black",
            }}
            className="rounded-l-lg"
            id="inputted"
            placeholder="Type a message"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="bg-gray-700 hover:bg-gray-600 text-white py-4 px-8 text-center text-lg font-semibold rounded-r-lg w-[15%]"
            onClick={handle}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}
