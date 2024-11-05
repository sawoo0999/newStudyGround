import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoRedirect() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_K_REDIRECT_URL}/?code=${code}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    };

    kakaoLogin();
  }, []);

  return <h1>kakao 로그인 중입니다.</h1>;
}
