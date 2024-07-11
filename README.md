
  // 배열의 길이로 문제 넘어가기
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;  //초기 상태 0 , 버튼 클릭시 배열생성 index는 1로 바뀌면서 다음문제
  
