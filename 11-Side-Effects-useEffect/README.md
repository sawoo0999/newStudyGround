useEffect() 사용

useEffect(()=>{비동기 함수},[])


사용이유
1. 부수효과로 사용하는 함수들을 맨마지막에 처리해서 최적화
2. useState로 가져왔을때 재실행 무한루프 발생 방지
3. 단 한번만 실행
4.DomAPI,useRef showModal(),close()의 속성값,상태값 동기화 도와 



const a = useCallBack(function a(),[])

사용이유
1. 재실행할때 함수를 재생성을 방지
