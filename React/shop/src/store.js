import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "./store/cartSlice";
// let user = createSlice({
//   name: "user",
//   initialState: "kim",
//   reducers: {
//     함수1(state) {
//       return "John" + state;
//     },
//   },
// });

// export let { 함수1 } = user.actions;

export default configureStore({
  reducer: {
    data: data.reducer,
  },
});
