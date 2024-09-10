import NumberButton from "./NumberButton";
import "./Answer.css";
import { useState, useEffect } from "react";

const NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default function Answer() {
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState([]);
  const [compareResult, setCompareResult] = useState("");

  function getRandomNumbers() {
    const newResult = [];
    for (let i = 0; i < 4; i++) {
      newResult.push(Math.floor(Math.random() * 10));
    }
    setResult(newResult);
  }

  useEffect(() => {
    if (result.length === 0) {
      getRandomNumbers();
    }
  }, [result]);

  function handleReset() {
    setAnswer([]);
    setCompareResult("");
    getRandomNumbers();
  }

  function handlerClick(number) {
    if (answer.length <= 3) {
      setAnswer((prevNumber) => [...prevNumber, number]);
    } else {
      setAnswer([]);
      setCompareResult("");
    }
  }

  function compareAnswers() {
    let strikes = 0;
    let balls = 0;

    answer.forEach((num, i) => {
      if (num === result[i]) {
        strikes++;
      } else if (result.includes(num)) {
        balls++;
      }
    });

    if (strikes === 0 && balls === 0) {
      setCompareResult("아웃");
    } else if (strikes === 4) {
      setCompareResult("정답");
    } else {
      setCompareResult(`${"❎".repeat(balls)} ${"🔴".repeat(strikes)}`);
    }
  }

  useEffect(() => {
    if (answer.length === 4) {
      compareAnswers();
    }
  }, [answer]);

  console.log(result);

  return (
    <>
      {compareAnswers === "정답" && <div>정답: {result.join("")}</div>}
      <div>입력한 답: {answer.join("")}</div>
      <div>결과: {compareResult}</div>
      <div className="calculator-container">
        {NUMBER.map((number) => (
          <NumberButton key={number} answer={number} onClick={handlerClick} />
        ))}
      </div>
      <button className="reset" onClick={handleReset}>
        리셋
      </button>
    </>
  );
}
