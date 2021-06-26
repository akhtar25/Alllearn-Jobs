import { userSliceActions } from "./user-slice";
import { fetchUser } from "../api/user-api";

const getUserProfile = () => async (dispatch) => {
  try {
    console.log("inside getUserProfile");
    dispatch(userSliceActions.getUserPending());

    const user = await fetchUser();
    console.log("user", user);
    dispatch(userSliceActions.getUserSuccess(user.decode));
  } catch (error) {
    dispatch(userSliceActions.getUserFail(error.message));
  }
};

export default getUserProfile;
