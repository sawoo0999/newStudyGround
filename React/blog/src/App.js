/* eslint-disable */
// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [like, plu] = useState(0);

  function plus() {
    plu(like + 1);
  }

  function woman() {
    글제목[0] = "여자 코트 추천";
    b([...글제목]);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={woman}>여자</button>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={plus}>❤</span> {like}
        </h4>
        <p>8월 28일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>8월 28일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>8월 28일 발행</p>
      </div>
    </div>
  );
}

export default App;
