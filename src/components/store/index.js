import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./card-slice";
import loginReducer from "./login-slice";
import userReducer from "./user-slice";
import userRegistrationReducer from "./userRegistration-slice";
import profileReducer from "./profile-slice";
import applicationsReducer from "./applicationTracking-slice";
import jobApplicationsReducer from "./JobApplications-slice";

const store = configureStore({
  reducer: {
    card: cardReducer,
    login: loginReducer,
    user: userReducer,
    registration: userRegistrationReducer,
    profile: profileReducer,
    applications: applicationsReducer,
    jobApplications: jobApplicationsReducer,
  },
});

export default store;
