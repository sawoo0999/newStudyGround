export default function Tabs({ children, buttons, BtnContainer = "menu" }) {
  //   const BtnContainer = btnContainer; 변수를 이용해서 만들기 아니면 처음부터 대문자로 설정
  return (
    <>
      <BtnContainer>{buttons}</BtnContainer>
      {children}
    </>
  );
}
