import useOauth from "../hooks/useOauth";

export default function OauthPage() {
  const { loading, error, handleOauthLogin } = useOauth();

  if (loading) return <p>Loading...</p>;

  const handleKakaoAuth = () => {
    handleOauthLogin("kakao");
  };
  const handleGoogleAuth = () => {
    handleOauthLogin("google");
  };
  const handleGithubAuth = () => {
    handleOauthLogin("github");
  };
  return (
    <>
      <div>
        <button onClick={handleKakaoAuth}>카카오버튼</button>
      </div>
      <div>
        <button onClick={handleGoogleAuth}>구글버튼</button>
      </div>
      <div>
        <button onClick={handleGithubAuth}>깃허브버튼</button>
      </div>
    </>
  );
}
