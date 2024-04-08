import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

import LP from "../../Assets/images/logo.png";
import headset from "../../Assets/images/headset.png";
// import Misc from "../img/Misc icon.png";

import "./css/login.css";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../Redux/usersAuth/usersAction";
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animation/loading4.json";

import swal from 'sweetalert';


function Login() {
  const { message } = useSelector((state) => state.auth);
  // console.log(message);

  const dispatch = useDispatch();
  const history = useNavigate();
  const [visible, setVisible] = useState(true);

  // const [errMessage, setErrMessage] = useState(true);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    areaOfExpertise: ""
  });

  const [isChecked, setIsChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  // const [disableBtn, setIsDisableBtn] = useState(false)

  useEffect(() => {

    // It is the user's email we are getting back to the email input
    const rememberUserEmail = JSON.parse(
      localStorage.getItem("getUserEmail")
    );

    if (rememberUserEmail) {
      setLoginDetails({...loginDetails, email: rememberUserEmail})

      // The checked box and the p tag will not show in the frontend because the user has made the email be remembered.
      setIsChecked(false);
    }
  }, []);

  function handleCheck(e) {

    const box = e.target.checked;
    setIsChecked(box);
  }

  function handleChange(e) {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  }
  // function rememberMe() {
  //   // What I did here is when the checked box is checked by the user and then log in, the user's email is stored in the localStorage and then gotten back in the useEffect. If not checked and then logged in, there will be nothing in the localStorage, which is the else part of the code.

  //   //When it is time for the logOut function, remember to remove the localStorage so there won't be any user's email being store
  //   if (isChecked) {
  //     localStorage.setItem("getUserEmail", JSON.stringify(loginDetails.email));
  //   } else {
  //     return;
  //   }
  // }
  function submitLoginFtn(e) {
    e.preventDefault();
    setIsLoading(true);
    dispatch(logIn(loginDetails,()=>{
      history("/home")
    })).then(() => {
      setIsLoading(false);
      if (message) {
        swal(message);
      } 
    });
  }
  

  // function removeErrMessage() {
  //   setErrMessage(false);
  //   console.log(1);
  // }

  const style = {
    backgroundColor: "rgba(255, 165, 0, 0.6)" 
  };

  return (
    <div className="login-con sign-up">
      <div className="left-background-con">
        <div className="left-background-pic">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>

      <div className="form-con">
        <form onSubmit={submitLoginFtn}>
          {/* {errMessage && (
            <div className="error-message">
              <div>
                <div className="error-img">
                  <img src={Misc} alt="" />
                </div>
                <p>{message}</p>
                <IoMdClose
                  className="cancel"
                  onClick={() => removeErrMessage()}
                />
              </div>
            </div>
          )} */}
          <div>
            <h1>
              Welcome to <span>Lecture</span> <span>Podcast</span>
            </h1>
            <p className="form-header">
              Enter your details below to create an account.
            </p>
          </div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="ayodajialoba@gmail.com"
              onChange={handleChange}
              name="email"
              value={loginDetails.email}
              required
            />
          </label>

          <div className="password">
            <label htmlFor="password"></label>
            <input
              id="password"
              type={visible ? "password" : "text"}
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={loginDetails.password}
            />
            <div
              className="input-absolute"
            onClick={() => setVisible(!visible)}>
              {visible ? (
                <FaRegEye className="eyes" />
              ) : (
                <FaEyeSlash className="eyes" />
              )}
            </div>
          </div>

          <label htmlFor="areaOfExpertise">
            <select
              id="areaOfExpertise"
              name="areaOfExpertise"
              value={loginDetails.areaOfExpertise}
              onChange={handleChange}>
              <option>Area of expertise</option>
              {/* <option value="lecturer">Lecturer</option> */}
              {/* <option value="student">Student</option> */}
              <option value="lecturer">Lecturer</option>
            </select>
          </label>

          <div className="check-p-con">
            {/* <div>
              <div>
                <input type="checkbox" onChange={handleCheck} />
              </div>
              <p>Remember me?</p>
            </div> */}
            <p className="forget-para">Forgot Password ?</p>
          </div>
          <button
            type="submit"
            className="login-btn"
            style={style}>
            {isLoading ? (  
              <div className="spinner-btn">
                  <LottieAnimation data={loader}/>
              </div>
            ): (
              <span>Login</span>
            )}

          </button>
          {/* <div className="google-btn">
            <div>
              <FcGoogle />
            </div>
            <div>
              <button>Sign up with google</button>
            </div>
          </div> */}

          <div className="login-link-headset">
            <div>
              <p>
                Already have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>

            <div>
              <img src={headset} alt="" />
              <p>Help and support</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
