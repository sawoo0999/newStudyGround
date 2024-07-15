import QuestionTimer from "./QuestionTimer";
import QUESTION from "../../questions.js";
import Answers from "./Answers.jsx";
import { useState } from "react";
export default function Question({ index, onSelectedAnswer, onSkip }) {
  const [answer, setAnswer] = useState({
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

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  //selectedAnswer 에 값이 있고 isCorrect 가 null 아니면 State 변경
  //selectedAnswer 에만  값이 있으면 State를 '선택됨'으로 변경해줌
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  //key을 넣는걸로 컨포넌트 간단히 재실행 가능, 대신 컨포넌트들끼리 같은 키를 가지면 안됨
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkip : null}
        mode={answerState}
      />
      <h2>{QUESTION[index].text} </h2>
      <Answers
        answer={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelected={handleSelectAnswer}
      />
    </div>
  );
}
