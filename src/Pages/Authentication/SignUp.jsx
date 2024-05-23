import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import loader from "../../Assets/animation/loading4.json";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import logo from "../../Assets/images/logo2.png"
// import { IoMdClose } from "react-icons/io";

// import Misc from "../img/Misc icon.png";
import LP from "../../Assets/images/logo.png";
import headset from "../../Assets/images/headset.png";

import swal from "sweetalert";

import "./css/signUp.css";

import { signUp } from "../../Redux/usersAuth/usersAction";
import VerifyEmail from "../../Components/Modals/verifyEmail";
import LottieAnimation from "../../Lotties";

function SignUp() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { message } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(false);


  const [visible, setVisible] = useState(true);
  const [modal, setModal] = useState(false);
  // const [email, setEmail] = useState("")

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    // areaOfExpertise: "",
    affiliatedInstitution: "",
    password: "",
    confirmPassword: ""
  });

  const [phone, setPhone] = useState("");

  const [isChecked, setIsChecked] = useState(true);

  const [confirmPassVisible, setConfirmPassVisible] = useState(true);

  // const [errMessage, setErrMessage] = useState(false);

  function handleChange(e) {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  }

  const handlePhone = (e)=>{
    const value = e.target.value
    let formattedNumber = value.trim().replace(/\D/g, ''); // Remove non-numeric characters

    // Check if the first digit is '0' and remove it, then prepend '+234'
    if (formattedNumber.charAt(0) === '0') {
      formattedNumber = '+234' + formattedNumber.slice(1);
    }
    setPhone(formattedNumber)

  }
  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    if (userDetails.password === userDetails.confirmPassword) {
      dispatch(signUp({userDetails, phone},()=>{
        setModal(true)
        setIsLoading(false);
        console.log("i am here ooooo")
      })).then(() => {
        setIsLoading(false);
        if (message) {
          console.log("hey i got here", message)
          swal(message);
        }
      });
    } else {
      setIsLoading(false);
      // setErrMessage(true)
    }
  }
  const toggelModal =()=>{
    setModal(!modal)
  }
  // function removeErrMessage() {
  //   setErrMessage(false);
  // }

  const style = {
    backgroundColor: isChecked ? "rgba(255, 165, 0, 0.6)" : "red"
  };

  return (
    <div className="sign-up">
      {/* <div className="left-side">
        <div className="logo">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div> */}
      <div className="signup-logo">
        <img src={logo}></img>
      </div>
      <div className="right-side">
        <form onSubmit={submitForm}>
          <div>
            <h1>
              <span>Welcome to</span> <span>Lecture</span> Podcast
            </h1>
            <p>Enter your details below to create an account.</p>
          </div>
          <div className="signup-form">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="signup-form">
            <label htmlFor="phone">
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                name="Phone Number"
                onChange={handlePhone}
                onBlur={handlePhone}
                maxLength={11}
                required
              />
            </label>
            <label htmlFor="affiliatedInstitution">
              <select
                id="affiliatedInstitution"
                name="affiliatedInstitution"
                value={userDetails.affiliatedInstitution}
                onChange={handleChange}>
                <option>Affiliated Institution</option>
                <option value="Abubakar Tafawa Balewa University (ATBU)">
                  Abubakar Tafawa Balewa University (ATBU)
                </option>
                <option value="Alex Ekwueme Federal University Ndufu-Alike, Ebonyi">
                  Alex Ekwueme Federal University Ndufu-Alike, Ebonyi
                </option>
                <option value="University of Abuja">University of Abuja</option>
                <option value="University of Ibadan (UI)">
                  University of Ibadan (UI)
                </option>
                <option value="University of Lagos (UNILAG)">
                  University of Lagos (UNILAG)
                </option>
                <option value="Lagos State University (LASU)">
                  Lagos State University (LASU)
                </option>
                <option value="Account settings">Account settings</option>
                <option value="Account settings">Account settings</option>
              </select>
            </label>
          </div>
          <div className="password">
            <label htmlFor="password"></label>
            <input
              id="password"
              type={visible ? "password" : "text"}
              placeholder="Password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              required
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

          <div className="password">
            <label htmlFor="confirm-password"></label>
            <input
              id="confirm-password"
              type={confirmPassVisible ? "password" : "text"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={userDetails.confirmPassword}
              onChange={handleChange}
              required
            />
            <div
              className="input-absolute"
              onClick={() => setConfirmPassVisible(!confirmPassVisible)}>
              {confirmPassVisible ? (
                <FaRegEye className="eyes" />
              ) : (
                <FaEyeSlash className="eyes" />
              )}
            </div>
          </div>

          <div className="check-con">
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            <p>Agree to terms of service and privacy policy</p>
          </div>
          <button
            type="submit"
            className="signup"
            disabled={!isChecked}
            style={style}>
            {isLoading ? (  
              <div className="spinner-btn">
                  <LottieAnimation data={loader}/>
              </div>
            ): (
              <span>Sign up</span>
            )}
          </button>
          {/* <div className="google-btn">
            <div>
              <FcGoogle />
            </div>
            <p>Sign up with google</p>
          </div> */}
        </form>

        <div className="login-support">
          <div>
            Already have an account? <Link to="/">Login</Link>
          </div>

          {/* <div>
            <img src={headset} alt="" />
            <p>Help and support</p>
          </div> */}
        </div>
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
      {modal && (<VerifyEmail/>)}
    </div>
  );
}

export default SignUp;
