import { useCallback, useState } from "react";
import Question from "./Question";
import QUESTION from "../../questions.js";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); //유저가 선택한 문제
  const activeQuestionIndex = userAnswers.length; // 현재 유저 문제 위치
  const quizIsComplete = userAnswers.length === QUESTION.length; // 총문제하고 유저 선택문제 가 같이지면 문제 종료

  //선택된 문제가 배열안에 삽입
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((answer) => {
      return [...answer, selectedAnswer];
    });
  },
  []);

  // 선택하지않고 넘어갈 경우 null 값이 배열에 삽입
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelected={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
