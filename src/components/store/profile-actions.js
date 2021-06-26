import { profileSliceAction } from "./profile-slice";
import { fetchProfileData } from "../api/user-api";

const getProfileData = () => async (dispatch) => {
  try {
    console.log("inside getProfileData");
    dispatch(profileSliceAction.getProfilePending());

    const response = await fetchProfileData();
    console.log(response);
    dispatch(profileSliceAction.getProfileSuccess(response.profile_data));
  } catch (error) {
    console.log(error.message);
    dispatch(profileSliceAction.getProfileFail(error.message));
  }
};

export default getProfileData;
