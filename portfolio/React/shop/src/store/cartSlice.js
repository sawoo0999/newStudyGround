import { createSlice } from "@reduxjs/toolkit";

let data = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    plus(state, action) {
      let newid = state.findIndex((a) => {
        return a.id == action.payload;
      });
      state[newid].count += 1;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { plus, addItem } = data.actions;
export default data;
