useRef() // 제어하는 값이 UI에 영향을 미치지 않으면 사용 

const component = forwardRef(function({props},ref){})     export default  component //Ref 값을 다른 컴포넌트에 넘겨주고 싶을때 사용

useImperativeHandle(ref,()=>{ method(){ ref.current.showModal()}})  //기본 메서드를 원하는 이름으로 변경할수 있다.

createPortal(JSX 코드, document.getElementById('id'))  //컴포넌트에 렌더링이 될HTML 코드를 DOM 내에 다른곳으로 이동 시켜줌
