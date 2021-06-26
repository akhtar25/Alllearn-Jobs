import { jobApplicationSliceActions } from "./JobApplications-slice";
import { fetchJobApplications } from "../api/user-api";

const jobApplicationsData = (jobId) => async (dispatch) => {
  try {
    dispatch(jobApplicationSliceActions.getJobApplicationsPending());
    const response = await fetchJobApplications(jobId);
    console.log(response);
    dispatch(jobApplicationSliceActions.getJobApplicationsSuccess(response));
  } catch (error) {
    console.log(error.message);
    dispatch(jobApplicationSliceActions.getJobApplicationsFail(error.message));
  }
};

export default jobApplicationsData;
