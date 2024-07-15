
  // 배열의 길이로 문제 넘어가기
  
  const [userAnswers, setUserAnswers] = useState([]);

  
 //초기 상태 0 , 버튼 클릭시 배열생성 index는 1로 바뀌면서 다음문제
 
 const activeQuestionIndex = userAnswers.length; 


 //useEffect에 사용하면 Interval 함수는 따로 의존성이 없기 때문에 한번 만 실행되고 끝남
 
   useEffect(() => {
    const remainingTime = setInterval(() => {
      setTimer((time) => time - 100);
    }, 100);

  return () => {
      clearInterval(remainingTime);
    };
  }, []);

//useCallback 으로 재실행 하게 만들어

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );


  

  //질문을 선택했으면 비활성화

  Button disabled={answerState !== ""} 
