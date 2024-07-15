import QUESTIONS from "../../questions";
import completedLogo from "../assets/quiz-complete.png";
export default function Summary({ userAnswers }) {
  //배열안에 스킵한문제 찾기
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  //배열안에 맞은 문제 찾기
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );
  //(스킵한 문제 수 / 문제 총 수) * 100
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  //(맞은 문제 수 / 문제 총 수) * 100
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  //100 - 스킵한 문제 - 맞은문제
  const incorrectAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div id="summary">
      <img src={completedLogo} alt="Quiz End" />
      <h2>Quiz Completed!</h2>
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
          // 정답유형에 따라 클래스 추가
          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[i].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
