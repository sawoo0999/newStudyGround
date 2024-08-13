 Redux 사용법


npm install @reduxjs/toolkit  // 설치
npm install react-redux    //설치

index.js 설정

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



주의사항 
redux를 사용할때는 원래 객체를 직접변경 하면 안된다. 할려면 reduxjs/tookit 설치후

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {quantity: 1},
  reducers: {
	addCart(state){
	state.quantity++
}
}


export const cartActions = cartSlice.actions
export defalut cartSlice.reducer

를 사용해야 바로 수정가능

component에서는 불가능


redux 비동기 사용방

useEffect
component 에 useEffect를 사용해서 데이터 저장



예시)
useEffect(() => {
    // const sendCartData = async function () {
    //   cart-slice.js 로 옮김
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data!",
    //     })
    //   );
    //   const res = await fetch(
    //     "https://test-mode-eb497-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );
    //   if (!res.ok) {
    //     throw new Error("Sending cart data failed.");
    //   }
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "Sent cart data successfully!",
    //     })
    //   );
    // };
    // if (isInitial) {
    //  isInitial = false;
    //  return;
    // }
    // sendCartData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error!",
    //       message: "Sending cart data failed!",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

또는 cart-slice.js 직접 실행

함수를 반환해서 직접 dispatch 를 사용가능
export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!",
//       })
//     );

//     const sendRequest = async () => {
//       const res = await fetch(
//         "https://test-mode-eb497-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       if (!res.ok) {
//         throw new Error("Sending cart data failed.");
//       }
//     };

//     try {
//       await sendRequest();
//       dispatch(
//         uiActions.showNotification({
//           status: "success",
//           title: "Success!",
//           message: "Sent cart data successfully!",
//         })
//       );
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           status: "error",
//           title: "Error!",
//           message: "Sending cart data failed!",
//         })
//       );
//     }
//   };
// };

  
