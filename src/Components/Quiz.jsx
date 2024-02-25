import { useState, useCallback } from "react";

import QUESTIONS from "../Questions.js";
import Question from "./Question";
import Summary from "./Summary";
export default function Quiz() {
  const [userAnswers, setuserAnswers] = useState([]);

  const nextQuestion = userAnswers.length;
  const isQuizcomplete = nextQuestion === QUESTIONS.length;

  const handleSelectanswer = useCallback(function handleSelectanswer(answer) {
    setuserAnswers((prevanswers) => {
      return [...prevanswers, answer];
    });
  }, []);

  const handleSkipanswer = useCallback(
    () => handleSelectanswer(null),

    [handleSelectanswer],
  );

  if (isQuizcomplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={nextQuestion}
        index={nextQuestion}
        onSkip={handleSkipanswer}
        onSelect={handleSelectanswer}
      />
    </div>
  );
}
