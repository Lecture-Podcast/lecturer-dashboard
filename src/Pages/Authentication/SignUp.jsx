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
    areaOfExpertise: "",
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
      <div className="left-side">
        <div className="logo">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>
      <div className="right-side">
        {/* {errMessage && (
          <div className="error-message">
            <div>
              <div className="error-img">
                <img src={Misc} alt="" />
              </div>
              <p>
                Passwords do not match. Please ensure both entries are
                identical.
              </p>
              <IoMdClose
                className="cancel"
                onClick={() => removeErrMessage()}
              />
            </div>
          </div>
        )} */}
        <form onSubmit={submitForm}>
          <div>
            <h1>
              <span>Welcome to</span> <span>Lecture</span> Podcast
            </h1>
            <p>Enter your details below to create an account.</p>
          </div>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="Ayodaji Aloba"
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
              placeholder="ayodajialoba@gmail.com"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </label>
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
          {/* <div className="phone-num">
            <label htmlFor="number">
              <PhoneInput
                className="number"
                id="number"
                country={"ng"}
                onChange={(e) => setPhone(e)}
                inputProps={{
                  required: true
                }}
              />
            </label>
          </div> */}
          <label htmlFor="areaOfExpertise">
            <select
              id="areaOfExpertise"
              name="areaOfExpertise"
              value={userDetails.areaOfExpertise}
              onChange={handleChange}>
              <option>Area of expertise</option>
              {/* <option value="lecturer">Lecturer</option> */}
              {/* <option value="student">Student</option> */}
              <option value="Lecturer">Lecturer</option>
            </select>
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

          <div>
            <img src={headset} alt="" />
            <p>Help and support</p>
          </div>
        </div>
      </div>
      {modal && (<VerifyEmail/>)}
    </div>
  );
}

export default SignUp;
