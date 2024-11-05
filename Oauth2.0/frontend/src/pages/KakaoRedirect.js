import { useEffect } from "react";
import useOauth from "../hooks/useOauth";

export default function GitRedirectPage() {
  const { handleCallback, getAuthCode } = useOauth();
  useEffect(() => {
    const getAuth = async () => {
      const code = getAuthCode();
      await handleCallback("kakao", code);
    };
  }, []);
  return <h1>git 로그인 중입니다.</h1>;
}
