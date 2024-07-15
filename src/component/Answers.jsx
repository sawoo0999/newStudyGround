import { useRef } from "react";

export default function Answers({
  answer,
  selectedAnswer,
  answerState,
  onSelected,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answer];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // 정렬 매소드 사용, 랜덤숫자에  0.5 빼서 음수,양수로 오름차순,내림차순 정하기
  }
  //
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) cssClass = "selected";

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelected(answer)}
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
