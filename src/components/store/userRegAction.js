import { userRegistrationSliceActions } from "./userRegistration-slice";
import { userRegistration } from "../api/user-api";

export const newUserRegistration = (user) => async (dispatch) => {
  try {
    dispatch(userRegistrationSliceActions.registrationPending());
    const res = await userRegistration(user);
    console.log(res);
    res.status === "success"
      ? dispatch(userRegistrationSliceActions.registrationSuccess(res.message))
      : dispatch(userRegistrationSliceActions.registrationError(res.message));
  } catch (error) {
    console.log(error.message);
    dispatch(userRegistrationSliceActions.registrationError(error.message));
  }
};
