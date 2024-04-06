import { useState } from "react";


import { IoMdClose } from "react-icons/io";

import Misc from "../img/Misc icon.png";
import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import chevron from "../img/chevron-right.png";
import Mail from "../img/freepik--Mail--inject-20.png";

import "./css/forgetPassword.css";

function ForgetPassword() {
  const [openModal, setOpenModal] = useState(false);

  const [errMessage, setErrMessage] = useState(true);

  function submitForm() {
    setOpenModal(true);
    setOpenModal(true);
  }

  function removeErrMessage() {
    setErrMessage(false);
  }

  return (
    <div className="forget-pass-con">
      <div className="forget-pass-left-background-con">
        <div className="forget-pass-left-background-pic">
          <img src={LP} alt="" />
        </div>
        <p>Empower Content Creation with a User Friendly Platform</p>
      </div>

      <div className="forget-pass-form-con">
        <div className="back">
          <div>
            <img src={chevron} alt="" />
          </div>
          <p>Go back to Login</p>
        </div>

        {errMessage && (
          <div className="e-m">
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
          </div>
        )}
        <form>
          <div>
            <h1>Reset Password</h1>
            <p>Enter the registered email address below</p>
          </div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="ayodajialoba@gmail.com"
              required
            />
          </label>

          <button type="submit" className="reset-password" onClick={() => submitForm()}>
            Reset Password
          </button>
        </form>

        <div className="headset-p">
          <img src={headset} alt="" />
          <p>Help and support</p>
        </div>
      </div>
      {openModal && (
        <div className="modal-con">
          <div className="modal">
            <div>
              <img src={Mail} alt="" />
            </div>
            <h1>Check Your Mail Inbox</h1>
            <p className="message-sent">
              We&#39;ve sent a password reset link to{" "}
              <span className="user-email">johnsondoe@gmail.com</span>
            </p>
            <p className="wrong-e-address">
              Wrong email address?{" "}
              <span className="re-enter-e-address">
                Re-enter your email address
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
