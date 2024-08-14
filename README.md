
1. children
모든 자식요소 페이지에 부모요소가 고정으로 있음
 
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ]  
  },
]);

Root.js

import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet /> // 부모에 자식요소
    </>
  );
}

export default RootLayout;

2.navigate 
버튼 이벤트, 타이머 이벤트로 지정 페이지 이동하고 싶을경우 사용

const navigate = useNavigate();

navigate('/products')

3. params
 동적인 라우터

app.js
{ path: "/products/:productId", element: <ProductDetailPage /> },

productDetail.js

const params = useParams();

<p>{params.productId}</p>



4. relative
relative는 기본값은 route로 되있고 path 로 변경가능
path : 현재 주소에 세그먼트 제거 형제요소 주소로 이동 시킴
route: 현재 주소에 형제요소 세그먼트를 다지움 부모요소 주소로 이동
<Link to='..' relative='route'>

path 사용시
before : http://localhost:3000/products/p1
after : http://localhost:3000/products

route 사용시
before : http://localhost:3000/products/p1
after : http://localhost:3000
