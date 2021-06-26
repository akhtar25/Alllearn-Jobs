import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
  isLoading: false,
  error: "",
};

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    getApplicationsPending(state) {
      state.isLoading = true;
    },
    getApplicationsSuccess(state, action) {
      state.isLoading = false;
      state.applications = action.payload;
    },
    getApplicationsFail(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const appliactionsActions = applicationsSlice.actions;

export default applicationsSlice.reducer;
