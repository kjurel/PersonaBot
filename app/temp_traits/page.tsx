"use client";
import React, { FC } from "react";
import * as Data from "../data/mbti.img.json";
import MbtiCard from "../components/static.mbtiCards";

const MbtiCards: FC<{}> = (props) => {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return (
    <>
      <div
        className="grid grid-cols-4 gap-6"
        style={{ height: availableHeight }}
      >
        {Data.map((data) => (
          <MbtiCard
            id={data.id}
            name={data.name}
            description={data.description}
            backgroundImage={data.backgroundImage}
          />
        ))}{" "}
      </div>
    </>
  );
};

export default MbtiCards;
