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
import logo from "../../Assets/images/logo2.png"
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
    <div className="sign-up">
      {/* <div className="left-background-con">
        <div className="left-background-pic">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div> */}
      <div className="signup-logo">
        <img src={logo}></img>
      </div>
      <div className="right-side">
        <form onSubmit={submitLoginFtn}>
          <div>
            <h1>
              Welcome to <span>Lecture</span> <span>Podcast</span>
            </h1>
            {/* <p className="form-header">
              Enter your details below to create an account.
            </p> */}
          </div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
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

          <div className="login-support">
            <div>
              <p>
                Do not have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>

            {/* <div>
              <img src={headset} alt="" />
              <p>Help and support</p>
            </div> */}
          </div>
        </form>
      </div>
      <div className="blob2">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
              <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: "rgb(194, 229, 156)"}}></stop>
                  <stop offset="100%" style={{stopColor: "rgb(100, 179, 244)"}}></stop>
                  </linearGradient>
              </defs>
              <path id="blob"  fill="#01003a38">
                  <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                  
                  M459.5,316.5Q433,383,370.5,406Q308,429,249.5,429.5Q191,430,126.5,408.5Q62,387,36.5,318.5Q11,250,38.5,183Q66,116,129,93.5Q192,71,247.5,78.5Q303,86,357,109.5Q411,133,448.5,191.5Q486,250,459.5,316.5Z;

                  M443,304.5Q401,359,353,389.5Q305,420,248,425.5Q191,431,139,399.5Q87,368,49.5,309Q12,250,34.5,180Q57,110,119,74Q181,38,250,37.5Q319,37,350.5,95.5Q382,154,433.5,202Q485,250,443,304.5Z;

                  M469.5,319Q440,388,380,427Q320,466,261,431.5Q202,397,140.5,385.5Q79,374,59.5,312Q40,250,70,195.5Q100,141,150,118Q200,95,249,99Q298,103,347,123.5Q396,144,447.5,197Q499,250,469.5,319Z;

                  M425,304.5Q399,359,358.5,410Q318,461,246,473Q174,485,121.5,433.5Q69,382,82.5,316Q96,250,80,182.5Q64,115,120.5,71Q177,27,249.5,27.5Q322,28,351.5,91.5Q381,155,416,202.5Q451,250,425,304.5Z;

                  M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                  "></animate>
              </path>
          </svg>
      </div>
      <div className="blob3">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
              <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: "rgb(194, 229, 156)"}}></stop>
                  <stop offset="100%" style={{stopColor: "rgb(100, 179, 244)"}}></stop>
                  </linearGradient>
              </defs>
              <path id="blob"  fill="#ffa6001e">
                  <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                  
                  M459.5,316.5Q433,383,370.5,406Q308,429,249.5,429.5Q191,430,126.5,408.5Q62,387,36.5,318.5Q11,250,38.5,183Q66,116,129,93.5Q192,71,247.5,78.5Q303,86,357,109.5Q411,133,448.5,191.5Q486,250,459.5,316.5Z;

                  M443,304.5Q401,359,353,389.5Q305,420,248,425.5Q191,431,139,399.5Q87,368,49.5,309Q12,250,34.5,180Q57,110,119,74Q181,38,250,37.5Q319,37,350.5,95.5Q382,154,433.5,202Q485,250,443,304.5Z;

                  M469.5,319Q440,388,380,427Q320,466,261,431.5Q202,397,140.5,385.5Q79,374,59.5,312Q40,250,70,195.5Q100,141,150,118Q200,95,249,99Q298,103,347,123.5Q396,144,447.5,197Q499,250,469.5,319Z;

                  M425,304.5Q399,359,358.5,410Q318,461,246,473Q174,485,121.5,433.5Q69,382,82.5,316Q96,250,80,182.5Q64,115,120.5,71Q177,27,249.5,27.5Q322,28,351.5,91.5Q381,155,416,202.5Q451,250,425,304.5Z;

                  M420,298Q382,346,347,393.5Q312,441,249.5,442Q187,443,119,419Q51,395,50.5,322.5Q50,250,50,177.5Q50,105,118,79Q186,53,251.5,49Q317,45,384.5,74Q452,103,455,176.5Q458,250,420,298Z;
                  "></animate>
              </path>
          </svg>
      </div>
    </div>
  );
}

export default Login;
