import Layout from "./components/Layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import { React, useEffect } from "react";
import Home from "./components/Pages/Home";
import JobDetails from "./components/Pages/JobDetails";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import getUserProfile from "./components/store/user-actions";
import { loginSliceActions } from "./components/store/login-slice";
import Profile from "./components/Pages/Profile";
import JobApplication from "./components/Pages/JobApplication";
import getProfileData from "./components/store/profile-actions";
import ApplicationTracking from "./components/Pages/ApplicationTracking";
import fetchApplications from "./components/store/applicationTracking-actions";
// import jobApplicationsData from "./components/store/JobApplications-actions";

import { useSelector } from "react-redux";

axios.defaults.baseURL = "https://alllearnreview-pr-255.herokuapp.com/";

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login);
  const isToken = !!localStorage.getItem("token");
  console.log(window.location.href);
  const location = window.location.href;
  if (
    !location.includes("/register") &&
    !(location === "/" && !isToken && !isAuth)
  ) {
    // useEffect(() => {
    console.log("before dispatch user success");
    dispatch(getUserProfile());
    console.log("before dispatch login success");
    dispatch(loginSliceActions.loginSuccess());
  }

  // if (location.includes("/jobApplications")) {
  //   useEffect(() => {
  //     dispatch(jobApplicationsData(jobId));
  //   }, [dispatch, jobId]);
  // }

  useEffect(() => {
    dispatch(getProfileData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchApplications());
  }, [dispatch]);
  console.log("isToken", isToken);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/jobDetails/:job_id/:school_id">
          <JobDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile">
          {isAuth || isToken ? <Profile /> : <Redirect to="/" />}
        </Route>
        <Route path="/jobApplications/:job_id">
          {isAuth || isToken ? <JobApplication /> : <Redirect to="/" />}
        </Route>
        {/* <Route path="/jobApplications">
          {isAuth || isToken ? <JobApplication /> : <Redirect to="/" />}
        </Route> */}
        <Route path="/applicationTracking">
          {isAuth || isToken ? <ApplicationTracking /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
