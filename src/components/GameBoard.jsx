export default function GameBoard({ onSelectSquare, board }) {
  //State를 기본 보드반으로 설정
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(x, y) {
  //   //배열이나 오브젝트는 무조건 카피변수를 생성 해야한다.
  //   //gameBoard 를 prevGameBoard로 생성 후 카피변수 생성 후 setState에 반환
  //   setGameBoard((prevGameBoard) => {
  //     let copyPrevGameBoard = [
  //       ...prevGameBoard.map((innerArr) => [...innerArr]), //이중배열을 두번 분해 해서 카피 생성
  //     ];
  //     copyPrevGameBoard[x][y] = activePlayerSymbol; //activePlayerSymbol props로 설정해서 가져온걸 삽입
  //     return copyPrevGameBoard;
  //   });
  //   onSelectSuqare(); //가져온 props 함수 실행
  // }

  return (
    //가짜 함수를 만들어서 handleSelectSquare(x,y) 인수값 넣어주기
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
