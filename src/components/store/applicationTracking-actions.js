import { fetchApplicationTrackingData } from "../api/user-api";
import { appliactionsActions } from "./applicationTracking-slice";

const fetchApplications = () => async (dispatch) => {
  try {
    dispatch(appliactionsActions.getApplicationsPending());
    const response = await fetchApplicationTrackingData();
    console.log(response);
    dispatch(
      appliactionsActions.getApplicationsSuccess(response.data.jobTracking)
    );
  } catch (error) {
    console.log(error.message);
    dispatch(appliactionsActions.getApplicationsFail(error.message));
  }
};

export default fetchApplications;
