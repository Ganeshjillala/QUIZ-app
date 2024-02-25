import { useRef } from "react";
export default function Answers({
  answers,
  answerState,
  userAnswers,
  onSelect,
}) {
  const shuffleAnswers = useRef();

  //copying the answers of all questions and rearranging the answers of each question
  shuffleAnswers.current = [...answers];
  shuffleAnswers.current.sort(() => Math.floor() - 0.5);

  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer) => {
        let cssClass = "";
        const isSelected = userAnswers === answer;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
