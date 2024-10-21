import { useState } from "react";
export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing) => !editing);
    //setIsEditing(!isEditing)   이렇게 사용하면 아무리 여러개를 써도 상태값은 처음 쓴 결과랑 똑같이 나온다
    //setIsEditing(!isEditing) false -> true
    //setIsEditing(!isEditing) false -> true
    //setIsEditing((editing) => !editing); false -> true
    //setIsEditing((editing) => !editing); true -> false
    if (isEditing) onChangeName(symbol, playerName); //Save 버튼 누르면  변경된 이름 전달
  }

  //input value가 변경될때 마다 setPlayerName에 value 값 반환
  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );
  let btnCaption = !isEditing ? "Edit" : "Save";
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
