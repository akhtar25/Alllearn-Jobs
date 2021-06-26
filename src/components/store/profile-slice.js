import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {},
  isLoading: false,
  error: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfilePending(state) {
      state.isLoading = true;
    },
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.profile = action.payload;
      state.error = "";
    },
    getProfileFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const profileSliceAction = profileSlice.actions;

export default profileSlice.reducer;
