"use client";
import React, { FC } from "react";
import Data from "../data/mbti.img.json";
import MbtiCard from "../components/static.mbtiCards";

const MbtiCards: FC<{}> = (props) => {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <>
      <div style={{ height: availableHeight, margin: "0px 50px 0px" }}>
        <div
          className="grid grid-cols-4 gap-6"
          style={{ height: availableHeight }}
        >
          {Data.map((data) => (
            <MbtiCard
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              backgroundImage={data.backgroundImage}
            />
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default MbtiCards;
