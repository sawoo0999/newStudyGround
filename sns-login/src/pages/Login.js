import { useState } from "react";
import logoImg from "../asset/kakao.png";
import "./login.css";
import { GoogleLogin } from "@react-oauth/google";
export default function HomePage() {
  const [isLogin, setIsLogin] = useState(false);
  const K_REST_API_KEY = process.env.REACT_APP_K_API_KEY;
  const K_REDIRECT_URL = process.env.REACT_APP_K_REDIRECT_URL;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URL}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const G_REST_API_KEY = process.env.REACT_APP_G_API_KEY;
  const G_REDIRECT_URL = process.env.REACT_APP_G_REDIRECT_URL;
  const gitURL = `https://github.com/login/oauth/authorize?client_id=${G_REST_API_KEY}&redirect_uri=${G_REDIRECT_URL}`;

  const handleGitLogin = () => {
    window.location.href = gitURL;
  };

  console.log(K_REST_API_KEY);
  console.log(gitURL);

  const handleGoogleLogin = (credentialResponse) => {
    console.log(credentialResponse);
    setIsLogin(true);
  };

  const handleGoogleLogout = () => {
    // Google 원클릭 로그인 데이터 삭제
    setIsLogin(false);
    const google = window.google;
    if (google && google.accounts && google.accounts.id) {
      google.accounts.id.disableAutoSelect();
    }
  };

  return (
    <>
      <h1>
        <button onClick={handleLogin} className="logo">
          <img src={logoImg} alt="Kakao Login" />
        </button>
      </h1>
      <h1>
        <button onClick={handleGitLogin}>GitHub</button>
      </h1>
      {!isLogin ? (
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log("Error")}
          width={"300px"}
          useOneTap
        />
      ) : (
        <button onClick={handleGoogleLogout}>로그아웃</button>
      )}
    </>
  );
}
