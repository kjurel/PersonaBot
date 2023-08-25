import React, { FC } from "react";
import Abstract from "../components/abstract";
import Answer from "../components/answer";
import Question from "../components/question";
import Mic from "../components/mic";

interface TempPageProps {}

const TempPage: FC<TempPageProps> = (props) => {
  return (
    <>
      <Abstract />
      <Question />
      <Mic />
      <Answer />
    </>
  );
};

export default TempPage;
