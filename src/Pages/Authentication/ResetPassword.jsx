import { useState } from "react";

import { IoMdClose } from "react-icons/io";

import Misc from "../img/Misc icon.png";
import LP from "../img/LP Logo.png";
import headset from "../img/headset.png";
import chevron from "../img/chevron-right.png";
import success from "../img/undraw_completing_re_i7ap 1.png";

function ResetPassword() {
  const [openModal, setOpenModal] = useState(false);

  const [errMessage, setErrMessage] = useState(true);

  function removeErrMessage() {
    setErrMessage(false);
  }

  function submitForm() {
    setOpenModal(true);
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
            <h1>Set new password</h1>
            <p>
              Must be at least 8 characters, must contain at least one number
              and <span>one special character</span>
            </p>
          </div>

          <div className="password">
            <label htmlFor="password"></label>
            <input id="password" type="password" placeholder="Password" />
          </div>

          <div className="password">
            <label htmlFor="confirm-password"></label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

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
              <img src={success} alt="" />
            </div>
            <h1>Password changed </h1>
            <p className="message-sent">
              Your password has been reset successfully
            </p>
            <p className="wrong-e-address">
              Wrong email address?
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

export default ResetPassword;
