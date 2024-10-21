1. loader
loader 안에 직접 fetch 로 데이터 가져오는 함수를 입력해서 데이터 호출
createBrowserRouter({path:'',element:<Events>, loader:()=>{}  , children:[{}],})

useLoaderData 로 받은 데이터 출력

loader 함수 안에서는 JS 코드 모든 API 사용 가능하지만 useState 는 사용 불가능


2. useRouteError()
오류 메세지를 직접 설정한걸 보여주는 hook

  event.js
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });

   status(상태): 오류 종류(500 || 404)
   message : 상황마다 오류 메세지설정

  Error.js
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

   
  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
   
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  간소화 하기 
  react-router-dom 에 있는 json 사용하면 요약 가능
  throw json({ message: "Could not fetch events." }, { status: 500 });

  Error.js
   message = error.data.message;


3.action
fetch에서 post 할때 사용
export async function action({ request, params }) {
const data = request.formData()
const eventData = {title: data.get('title}
}

redirect를 하면 패치 마무리후 지정 경로로 이동
return redirect("/events");


useSubmit 으로 delete 메소드 사용하기

  EventItem.js
 const submit = useSubmit();
 submit(null, { method: "delete" });

  현재위치 id를 불러와서 요청하는 method를 실행
  EventDetail.js
    const id = params.id;
    const res = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });
 


   
