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
  let [like, plu] = useState([0, 0, 0]);
  let [modal, setModal] = useState([false, false, false]);
  function view() {
    setModal(!modal);
  }

  // function woman() {
  //   글제목[0] = "여자 코트 추천";
  //   b([...글제목]);
  // }
  function sort() {
    let copysort = [...글제목];
    copysort.sort();
    b(copysort);
  }

  function woman() {
    let copy = [...글제목];
    copy[0] = "여자 코트 추천";
    b(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={sort}>가나다</button>
      <button onClick={woman}>여자</button>
      {/* <div className="list">
        <h4 onClick={view}>
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
      </div> */}
      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={view}>
              {a}
              <span
                onClick={() => {
                  let copylike = [...like];
                  copylike[i] += 1;
                  plu(copylike);
                  console.log(copylike);
                }}
              >
                ❤
              </span>
              {like[i]}
            </h4>
            <p>8월 28일 발행</p>
          </div>
        );
      })}

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
