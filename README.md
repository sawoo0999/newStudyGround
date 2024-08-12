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
