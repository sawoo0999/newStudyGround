import { useCallback, useState } from "react";
const useOauth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const oauthConfig = {
    // 소셜 로그인 설정값
    kakao: {
      clientId: process.env.REACT_APP_KAKAO_CLIENT_ID,
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
      authUrl: "https://kauth.kakao.com/oauth/authorize",
    },
    google: {
      clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      redirectUri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
      authUrl: "https://accounts.google.com/o/oauth2/v2/auth",
      scope: "email profile",
    },
    github: {
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
      redirectUri: process.env.REACT_APP_GITHUB_REDIRECT_URI,
      authUrl: "https://github.com/login/oauth/authorize",
      scope: "user",
    },
  };

  // 소셜 로그인 URL 생성 함수
  const generateLoginUrl = useCallback((provider) => {
    const config = oauthConfig[provider];
    if (!config) throw new Error(`Unsupported provider: ${provider}`);

    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      response_type: "code",
      ...(config.scope && { scope: config.scope }),
    });

    return `${config.authUrl}?${params.toString()}`;
  }, []);

  // 소셜 로그인 처리 함수
  const handleOauthLogin = useCallback(
    async (provider) => {
      try {
        setLoading(true);
        setError(null);

        const loginUrl = generateLoginUrl(provider);
        window.location.href = loginUrl;
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [generateLoginUrl]
  );

  // OAuth 콜백 처리 함수
  const handleCallback = useCallback(async (provider, code) => {
    try {
      setLoading(true);
      setError(null);

      // 백엔드 서버로 인증 코드 전송
      const response = await fetch("/api/auth/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ provider, code }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      setToken(data.token);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // 현재 URL에서 인증 코드 추출
  const getAuthCode = useCallback(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    return code;
  }, []);

  // 로그아웃 처리 함수
  const handleLogout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // 백엔드 서버에 로그아웃 요청
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      // 로컬 스토리지 및 상태 초기화
      localStorage.removeItem("token");
      setToken(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  return {
    loading,
    error,
    token,
    handleOauthLogin,
    handleCallback,
    handleLogout,
    getAuthCode,
  };
};

export default useOauth;
