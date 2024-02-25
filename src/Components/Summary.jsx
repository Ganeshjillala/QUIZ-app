import quizCompleteimg from "../assets/quiz-complete.png";
import QUESTIONS from "../Questions.js";
export default function Summary({ userAnswers }) {
  const skippedanswers = userAnswers.filter((answer) => answer === null);
  const correctanswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  );
  const skippedanswershare = Math.round(
    (skippedanswers.length / userAnswers.length) * 100,
  );
  const correctanswershare = Math.round(
    (correctanswers.length / userAnswers.length) * 100,
  );

  const wronganswershare = 100 - skippedanswershare - correctanswershare;
  return (
    <div id="summary">
      <img src={quizCompleteimg} alt="quiz complete" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedanswershare}%</span>
          <span className="text">skipped answers</span>
        </p>
        <p>
          <span className="number">{correctanswershare}%</span>
          <span className="text">correct answers</span>
        </p>
        <p>
          <span className="number">{wronganswershare}%</span>
          <span className="text">wrong answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
