import { createSlice } from "@reduxjs/toolkit";
// import store from "./index";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    replaceCard(state, action) {
      state.items = action.payload.data;
    },
  },
});

export const cardSliceActions = cardSlice.actions;

export default cardSlice.reducer;
