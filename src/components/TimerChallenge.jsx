import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function Timerchallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  //   const [check, setCheck] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  //시간 초과 하면 자동으로 모달창 나오는 조건문
  if (timeRemaining <= 0) {
    //현재시간이 0초면 Interval 함수 정지
    clearInterval(timer.current);
    //모달창 실행
    dialog.current.open();
  }

  //모달 창 닫으면 값 초기화 함수
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    //구버전
    // timer.current = setTimeout(() => {
    //   setTimerExpired(true);
    //   dialog.current.open();
    //   setCheck(false);
    // }, targetTime * 1000);

    //시간 계산 버전
    timer.current = setInterval(() => {
      //0.01초 마다 계속 실행하고 현재 시간에 0.01초를 계속 빼줌
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  //시간초과 전에 멈추고 모달창 나오는 함수
  function handleStop() {
    // clearTimeout(timer.current);
    // setCheck(false);

    //
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result="lost"
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
