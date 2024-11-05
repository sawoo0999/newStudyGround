import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GitRedirectPage() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const GitLogin = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_REDIRECT_URL}/?code=${code}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    };
  }, []);

  return <h1>git 로그인 중입니다.</h1>;
}
