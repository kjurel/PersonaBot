"use client";
import React, { FC } from "react";
import Data from "../data/mbti.img.json";
import MbtiCard from "../components/static.mbtiCards";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { $usrtts } from "../components/stats";

const MbtiCards: FC<{}> = (props) => {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  // $usrtts.subscribe((val) => {
  //   if (val) {
  //     console.log("changin");
  //     const { push } = useRouter();
  //     useEffect(() => {
  //       push("/");
  //     }, []);
  //   }
  // });
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-500 to-indigo-500 via-blue-500 md:bg-gradient-to-r from-cyan-500 to-indigo-500 via-blue-500">
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
      </div>
    </>
  );
};

export default MbtiCards;
