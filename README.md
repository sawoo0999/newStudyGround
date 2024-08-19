1. loader
loader 안에 직접 fetch 로 데이터 가져오는 함수를 입력해서 데이터 호출
createBrowserRouter({path:'',element:<Events>, loader:()=>{}  , children:[{}],})

useLoaderData 로 받은 데이터 출력

loader 함수 안에서는 JS 코드 모든 API 사용 가능하지만 useState 는 사용 불가능
