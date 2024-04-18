import axios from "axios";
import { VERIFY_FALIURE, VERIFY_REQUEST, VERIFY_SUCCESS } from "./verifyTypes";

export const profilerequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};
export const profilesuccess = (data) => {
  return {
    type: VERIFY_SUCCESS,
    payload: data,
  };
};
export const verifyFailure = (error) => {
  return {
    type: VERIFY_FALIURE,
    payload: error,
  };
};

const baseURl = "https://lecture-podcast-auth.onrender.com/api/v1/auth";
export const verifyaction = (token, userType, history) => {
  return async (dispatch) => {
    dispatch(profilerequest());
    const headers = {
      "Content-Type": "application/json",
    };
    let verifyURL = `${baseURl}/${userType}/verify-email?token=${token}`;
    axios
      .get(verifyURL, { headers: headers })
      .then((response) => {
        const data = response.data;
        console.log(data);
        history("/home"); // Redirect to home page after successful verification
        dispatch(profilesuccess(data));
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status === 400 &&
          error.response.data.message === "Verification token has expired"
        ) {
          dispatch(verifyFailure("Verification token has expired"));
        } else if (
          error.response &&
          error.response.status === 400 &&
          error.response.data.message === "Email is already verified."
        ) {
          dispatch(verifyFailure("Email is already verified"));
        } else {
          dispatch(verifyFailure("Internal Server Error"));
        }
      });
  };
};
