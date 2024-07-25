
const fd = new FormData(event.terget) 

Http 내장함수 
<form onSubmit={handleSubmit}></form>  에서 event 타겟값 가져옴

<input name='email'>  name 속성이 있어야함
fd.get('email')


  const data = Object.fromEntries(fd.entries()); input 안에 있는 모든 name 속성 값을 가져옴

<input onBlur={fn}/>  input에서 다른곳으로 포커스가 가면 실행
