import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timer, setTimer] = useState(timeout);
  useEffect(() => {
    const time = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(time);
    };
  }, [timeout, onTimeout]);

  //useEffect에 사용하면 Interval 함수는 따로 의존성이 없기 때문에 한번 만 실행되고 끝남 재실행 X
  useEffect(() => {
    const remainingTime = setInterval(() => {
      setTimer((time) => time - 100);
    }, 100);

    return () => {
      clearInterval(remainingTime);
    };
  }, []);

  return (
    <progress id="question-time" value={timer} max={timeout} className={mode} />
  );
}
