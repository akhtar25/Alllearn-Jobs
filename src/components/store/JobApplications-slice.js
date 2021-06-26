import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobApplications: [],
  isLoading: false,
  error: "",
};

const jobApplicationSlice = createSlice({
  name: "jobApplications",
  initialState,
  reducers: {
    getJobApplicationsPending(state) {
      state.isLoading = true;
    },
    getJobApplicationsSuccess(state, action) {
      state.isLoading = false;
      state.jobApplications = action.payload;
      state.error = "";
    },
    getJobApplicationsFail(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const jobApplicationSliceActions = jobApplicationSlice.actions;

export default jobApplicationSlice.reducer;
