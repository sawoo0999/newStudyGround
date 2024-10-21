import "./App.css";
import Answer from "./component/Answer";
import Header from "./component/Header";

/* 숫자 야구
  
    -룰-
  답이랑 제출한 답이랑 비교해서 위치는 다르지만 숫자가 포함되어있으면 볼, 위치 숫자 전부 같으면 스트라이크, 전부 틀리면 아웃
    
  ex) 답 3658
      제출한답 5643
    출력: 2볼 1스트라이크 

      답 3658
      제출한답 6457
    출력: 1볼 1스트라이크 


1. 랜덤 숫자 받기
2. 답 입력 받기
3. 비교해서 결과 출력
*/
function App() {
  return (
    <>
      <Header />
      <Answer />
    </>
  );
}

export default App;
