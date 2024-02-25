import { useState } from "react";
import QUESTIONS from "../Questions";
import Answers from "./Answers";
import Timerquiz from "./Timerquiz";
export default function Question({ index, onSkip, onSelect }) {
  const [answer, setanswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectanswer(answer) {
    setanswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setanswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <Timerquiz
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer == "" ? onSkip : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        userAnswers={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectanswer}
      />
    </div>
  );
}
