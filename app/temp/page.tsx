import React, { FC } from "react";
import Abstract from "../components/abstract";
import Answer from "../components/answer";
import Question from "../components/question";

interface TempPageProps {}

const TempPage: FC<TempPageProps> = (props) => {
  return (
    <>
      <Abstract />
      <Answer />
      <Question />
    </>
  );
};

export default TempPage;
