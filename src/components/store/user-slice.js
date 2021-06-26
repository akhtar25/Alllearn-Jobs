import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending(state) {
      state.isLoading = true;
    },
    getUserSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    },
    getUserFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeUser(state) {
      state.user = {};
      state.error = "";
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
