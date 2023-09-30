import { useState } from "react";

function Id(props) {
  let [id, setid] = useState("");
  let [password, setpassword] = useState("");
  let validation = id.includes("@") && password.length > 4; //id @ 포함 AND password 길이 4이상

  return (
    <div className="id-container">
      <div className="id-row">
        <div className="id-iphone"></div>
        <div className="id-email">
          <div className="id-logo"></div>
          <input
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <div>
            {/* true 면 클래스 추가 */}
            <button
              className={`id-btn ${validation ? "id-active" : null}`}
              onClick={() => {
                let getid = localStorage.getItem("ID");
                let getpassword = localStorage.getItem("Password");
                if (getid == id && getpassword == password) {
                  props.navigate("/detail");
                } else {
                  alert("아이디 또는 비밀번호를 제대로 입력해주세요");
                }
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
      <div className="id-about">
        <div className="id-endvar">
          <div className="id-end">Meta</div>
          <div className="id-end">소개</div>
          <div className="id-end">블로그</div>
          <div className="id-end">채용 정보</div>
          <div className="id-end">도움말</div>
          <div className="id-end">API</div>
          <div className="id-end">개인정보처리방침</div>
          <div className="id-end">약관</div>
          <div className="id-end">위치</div>
        </div>
        <div className="id-comment">
          <div className="id-endcomment">sawoo0999@naver.com</div>
        </div>
      </div>
    </div>
  );
}

export default Id;
