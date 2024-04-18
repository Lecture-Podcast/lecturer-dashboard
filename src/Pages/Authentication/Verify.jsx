import React, { useEffect } from "react";
import "./css/Verify.css";
import success from "../../Assets/animation/SUCCESS.json";
import loader from "../../Assets/animation/loading4.json";
import LottieAnimation from "../../Lotties";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { verifyaction } from "../../Redux/Verify/verifyAction";
import { connect } from "react-redux";

const Verify = ({ userType, loading, error, verifyaction }) => {
  //   const history = useHistory();
  const history = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    // verifyaction(tokenFromUrl, userType, history);
    verifyaction(tokenFromUrl, userType, history);
  }, [userType]); // Trigger the effect whenever userType changes

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/");
  };

  return (
    <div className="verify">
      <div className="verify-content">
        <div className="animation">
          <LottieAnimation data={success} />
        </div>
        {error && <p className="error-message">{error}</p>}
        {/* <p>Your account has been verified</p> */}
        {!error && <p>Your account has been verified</p>}
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <div className="spinner-btn">
              <LottieAnimation data={loader} />
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => ({
  loading: state.verify.loading,
  error: state.verify.error,
});

const mapDispatchToProps = (dispatch) => ({
  verifyaction: (token, userType, history) =>
    dispatch(verifyaction(token, userType, history)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Verify);
