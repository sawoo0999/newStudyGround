import completedLogo from "../assets/quiz-complete.png";
import QUESTION from "../../questions.js";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTION[i].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const incorrectAnswersShare = Math.round(
    100 - skippedAnswersShare - correctAnswersShare
  );

  return (
    <div id="summary">
      <img src={completedLogo} alt="Quiz End" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrectAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClasses = "user-answer";

          if (answer === QUESTION[i].answers[0]) {
            cssClasses += " correct";
          } else if (answer === null) {
            cssClasses += " skipped";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={i}>
              <h1>{i + 1}</h1>
              <p className="qusetion">{QUESTION[i].text}</p>
              <p className={cssClasses}>{answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
