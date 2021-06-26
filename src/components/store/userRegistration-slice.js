import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    registrationPending(state) {
      state.isLoading = true;
    },
    registrationSuccess(state, action) {
      state.isLoading = false;
      state.status = "success";
      state.message = action.payload;
    },
    registrationError(state, action) {
      state.isLoading = false;
      state.status = "error";
      state.message = action.payload;
    },
  },
});

export const userRegistrationSliceActions = userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
