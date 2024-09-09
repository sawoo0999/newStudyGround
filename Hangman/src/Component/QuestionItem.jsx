import { useEffect, useState } from "react";

export default function QuestionItem() {
  const [word, setWord] = useState("");
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //랜덤 단어 가져오기, 가져온 단어 * 로 변환
  const getWord = async () => {
    try {
      const res = await fetch("https://random-word-api.herokuapp.com/word");
      const data = await res.json();
      if (!res.ok) {
        throw new Error("Failed");
      }
      console.log(data);
      setWord(data[0]);
      setPuzzle("*".repeat(data[0].length));
    } catch (err) {
      console.log(err);
    }
  };

  // 게임 리셋 함수
  const resetGame = () => {
    setGuessedLetter([]);
    setAttempts(6);
    setGameOver(false);
    setIsSuccess(false);
    getWord();
  };

  useEffect(() => {
    getWord();
  }, []);

  //키 입력 감지 및 게임 로직 처리
  useEffect(() => {
    const handleKeydown = (e) => {
      //게임 오버가 false 면 함수 실행
      if (gameOver) return;
      const inputKey = e.key.toLowerCase();

      //맞춘 문자를 퍼즐에 반영
      if (word.includes(inputKey)) {
        setGuessedLetter((prevLetter) => {
          if (!prevLetter.includes(inputKey)) {
            return [...prevLetter, inputKey];
          }
          return prevLetter;
        });
      } else {
        setAttempts((prevAttempt) => prevAttempt - 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [word, gameOver]);

  // 퍼즐 갱신 및 게임 종료 처리
  useEffect(() => {
    if (word) {
      const newPuzzle = word
        .split("")
        .map((letter) => (guessedLetter.includes(letter) ? letter : "*"))
        .join("");

      setPuzzle(newPuzzle);
      if (newPuzzle === word) {
        setGameOver(true);
        setIsSuccess(true);
      } else if (attempts <= 0) {
        setGameOver(true);
        setIsSuccess(false);
      }
    }
  }, [guessedLetter, word, attempts]);

  return (
    <div className="question-item-container">
      {gameOver && (
        <div
          className={`question-item-game-over ${
            isSuccess ? "question-item-success" : "question-item-failure"
          }`}
        >
          <h2>
            {isSuccess
              ? "축하합니다! 정답을 맞추셨습니다!"
              : "아쉽습니다. 다음 기회에!"}
          </h2>
          <p>정답은: {word}</p>
        </div>
      )}
      {!gameOver && <p className="question-item-puzzle">{puzzle}</p>}
      <p className="question-item-attempts">남은 시도: {attempts}</p>
      <button className="question-item-button" onClick={resetGame}>
        게임 리셋
      </button>
    </div>
  );
}
