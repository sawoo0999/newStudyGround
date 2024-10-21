import { useCallback, useState } from "react";
import QUESTION from "../../questions.js";
import completedLogo from "../assets/quiz-complete.png";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length; // 배열의 길이로 문제 넘기기기 answerState 값이 빈값이면 그대로 반환 값이 있으면 다음으로 넘어가지말고 그대로있기
  // answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTION.length; //서로 같아지면 퀴즈 종료

  //초기 상태 0 , 버튼 클릭시 배열생성, index는 1로 바뀌면서 다음문제
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((answer) => {
      return [...answer, selectedAnswer];
    });
  },
  []);
  //시간초과시 배열안에 값을 null을 넣어줌
  //handleSelectAnswer 실행 할때마다 재실행
  //onTimout으로 QuestionTimer를 재실행
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
        onSelectedAnswer={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}
