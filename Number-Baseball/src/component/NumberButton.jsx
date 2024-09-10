import "./Answer.css";

export default function NumberButton({ answer, onClick }) {
  return (
    <button className="calculator-button" onClick={() => onClick(answer)}>
      {answer}
    </button>
  );
}
