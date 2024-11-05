// components/CallbackPage.js
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import useOauth from "../hooks/useOauth";

const GoogleRedirectPage = () => {
  //   const navigate = useNavigate();
  //   const { loading, error, handleCallback, getAuthCode } = useOauth();

  //백엔드서버가 없음
  //   useEffect(() => {
  //     const processCallback = async () => {
  //       try {
  //         const code = getAuthCode();
  //         if (!code) {
  //           throw new Error("Authentication code not found");
  //         }

  //         // URL에서 provider 정보 추출 (구현 필요)
  //         const provider = "google"; // 예시

  //         const data = await handleCallback(provider, code);

  //         // 로그인 성공 후 처리
  //         localStorage.setItem("token", data.token);
  //         navigate("/dashboard");
  //       } catch (err) {
  //         console.error(err);
  //         navigate("/login");
  //       }
  //     };

  //     processCallback();
  //   }, [handleCallback, getAuthCode, navigate]);

  //   if (loading) return <div>처리 중...</div>;
  //   if (error) return <div>에러: {error}</div>;

  return <div>로그인 처리 중...</div>;
};

export default GoogleRedirectPage;
