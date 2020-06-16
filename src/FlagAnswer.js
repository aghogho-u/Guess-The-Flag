import React from "react";
import StyledButton from "./StyledButton";
import "./FlagAnswer.css";

const FlagAnswer = ({ correct, answer, onNext }) => {
  return (
    <div>
      {correct
        ? `Correct! : ${answer}`
        : `Incorrect! Correct answer: ${answer}`}
      <StyledButton text="Next" onClick={onNext} />
    </div>
  );
};

export default FlagAnswer;
