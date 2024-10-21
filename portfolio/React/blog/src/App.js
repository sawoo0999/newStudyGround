/* eslint-disable */
// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, b] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [like, plu] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [tilte, settitle] = useState(0);
  let [content, setcontent] = useState("");

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

  function arr() {
    let copy = [...글제목];
    if (content != "") {
      copy.unshift(content);
    }
    b(copy);
    console.log(글제목);
  }

  function likecopy() {
    let copy = [...like];
    copy.unshift(0);
    plu(copy);
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
            <h4
              onClick={() => {
                view();
                settitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  let copylike = [...like];
                  copylike[i] += 1;
                  plu(copylike);
                  console.log(copylike);
                  e.stopPropagation();
                }}
              >
                ❤
              </span>
              {like[i]}
            </h4>
            <p>현재 날짜</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                let copyplu = [...like];
                copyplu.splice(i, 1);
                copy.splice(i, 1);
                b(copy);
                plu(copyplu);
                console.log(글제목);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setcontent(e.target.value);
        }}
      />
      <button
        onClick={() => {
          arr();
          likecopy();
        }}
      >
        발행
      </button>

      {modal == true ? (
        <Modal nam={글제목} tilte={tilte} woman={woman} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.nam[props.tilte]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.woman}>글수정</button>
    </div>
  );
}

export default App;
