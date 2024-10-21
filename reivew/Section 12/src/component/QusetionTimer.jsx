import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timer, setTimer] = useState(timeout);

  useEffect(() => {
    const time = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(time);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const remainingTime = setInterval(() => {
      setTimer((time) => time - 100);
    }, 100);

    return () => {
      clearInterval(remainingTime);
    };
  }, []);

  return (
    <progress value={timer} max={timeout} id="question-time" className="mode" />
  );
}
