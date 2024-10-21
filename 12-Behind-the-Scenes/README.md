//부모컨포넌트가 재실행했을때 props 값이 이전값이랑 새로운값이 변화가 없을때 재실행 제지

memo() 

const Counter = Memo(function Counter({props}){})

*주의*

모든컨포넌트에 memo를 사용하는건 적합하지 않다 

왠만하면 재실행 방지할려고 컨포넌트의 최상위에 사용

//컨포넌트안에 있는 일반함수 재실행 제지

useMomo() 

useMemo(()=> isPrime(),[])
