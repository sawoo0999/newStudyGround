import { createSlice } from "@reduxjs/toolkit";

let data = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plus(state, a) {
      state.count += 1;
    },
  },
});

export let { plus } = data.actions;
export default data;
