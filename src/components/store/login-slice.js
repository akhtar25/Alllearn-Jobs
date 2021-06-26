import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
  isToken: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending(state) {
      state.isLoading = true;
    },
    loginSuccess(state) {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
      state.isToken = true;
    },
    loginFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isToken = false;
    },
    logout(state) {
      console.log("inside logout");
      state.isAuth = false;
      state.isToken = false;
    },
  },
});

export const loginSliceActions = loginSlice.actions;

export default loginSlice.reducer;
