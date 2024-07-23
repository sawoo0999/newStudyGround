
const fd = new FormData(event.terget) 

Http 내장함수 
<form onSubmit={handleSubmit}></form>  에서 event 타겟값 가져옴

<input name='email'>  name 속성이 있어야함
fd.get('email')
