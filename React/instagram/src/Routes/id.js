import { useState } from "react";

function Id() {
  let [id, setid] = useState("");
  let [password, setpassword] = useState("");
  let validation = id.includes("@") && password.length > 4;

  console.log(validation);
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
            <button className={`id-btn ${validation ? "id-active" : null}`}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
