import swal from "sweetalert";
import axios from "axios";

export const signUp = (userDetailsPhone, history) => {

  if (userDetailsPhone.userDetails?.areaOfExpertise === "student") {
    const userData = {
      fullname: userDetailsPhone.userDetails?.name,
      email: userDetailsPhone.userDetails?.email,
      phone_number: userDetailsPhone.phone,
      password: userDetailsPhone.userDetails?.password,
      confirm_password: userDetailsPhone.userDetails?.confirmPassword
    };

    // console.log(userData, "userData student");

    return async function (dispatch, getState) {
      const res = await fetch(
        "https://lecture-podcast-auth.onrender.com/api/v1/auth/register-student",
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

      if (data.token) {
        
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;
        localStorage.setItem("auth", JSON.stringify(data));
        history()
        swal("Good job!", "Sign up Successful!", "success");
      }
    };
  } else {
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
      area_of_expertise,
      password,
      confirm_password: confirmPassword
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
      if (data.token) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;
        localStorage.setItem("auth", JSON.stringify(data));
        history()
        swal("Good job!", "Sign up Successful!", "success");
        
      }
    };
  }
};

export function logIn(loginDetails, history) {
  return async function (dispatch, getState) {
    try {
      if (loginDetails?.areaOfExpertise === "lecturer") {
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
        }
      } else {
        const userData = {
          email: loginDetails.email,
          password: loginDetails.password
        };

        const res = await fetch(
          "https://lecture-podcast-auth.onrender.com/api/v1/auth/login-student",
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
        }
      }
    } catch (error) {
      swal(error.message);
    }
  };
}
