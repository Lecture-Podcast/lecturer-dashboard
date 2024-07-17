import swal from "sweetalert";
import axios from "axios";

export const signUp = (userDetailsPhone, history) => {
    const fullname = userDetailsPhone.userDetails?.name;

    const email = userDetailsPhone.userDetails?.email;

    const phone_number = userDetailsPhone.phone;

    const area_of_expertise = userDetailsPhone.userDetails?.areaOfExpertise;

    const password = userDetailsPhone.userDetails?.password;

    const confirmPassword = userDetailsPhone.userDetails?.confirmPassword;

    const userData = {
      fullname,
      email,
      phone_number,
      password,
      confirm_password: confirmPassword,
      area_of_expertise
    };

    // console.log(userData, "userDatalecturer");

    return async function (dispatch, getState) {
      console.log("i am here")
      const res = await fetch(
        "https://lecture-podcast-auth.onrender.com/api/v1/auth/register-lecturer",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await res.json();

      dispatch({ type: "user/signup", payload: data });
      if (data.lecturer) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;
        localStorage.setItem("auth", JSON.stringify(data));
        history()
        swal("Good job!", "Sign up Successful!", "success");
        
      }else{
        swal(data?.error?.message)
      } 
    };
};

export function logIn(loginDetails, history) {
  return async function (dispatch, getState) {
    try {
        const userData = {
          email: loginDetails.email,
          password: loginDetails.password
        };

        const res = await fetch(
          "https://lecture-podcast-auth.onrender.com/api/v1/auth/login-lecturer",
          {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-Type": "application/json"
            }
          }
        );

        const data = await res.json();   
        dispatch({ type: "user/login", payload: data });
        if (data.token) {
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.token}`;
          localStorage.setItem("auth", JSON.stringify(data));
          history()
          swal("Good job!", "Log in Successful!", "success");
        }else{
          swal(data.error.message)
        }
    } catch (error) {
      swal(error.message);
    }
  };
}

export const LogOutAuthAction = (history) => {
  // logout();
  // clearTimeout(autoLogoutTimer)
  return async (dispatch) => {
    try {
      // const res = await axios.get("https://credio-api.herokuapp.com/api/v1/auth/login");
      // const { data } = res;
      dispatch({
        type: "user/logout",
        // payload: data.message,
      });
      history();
    } catch (error) {
      // if (error.response) {
      //   dispatch({
      //     type: AuthActionType.LOGOUT_FAIL,
      //     // payload: error.response.data.message,
      //   });
      // }
    }
  };
};