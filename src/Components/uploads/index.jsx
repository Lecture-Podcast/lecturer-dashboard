import React from "react";
import "./styles.css";
import { FaXmark } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";
import { toggleOverlay } from "../../Redux/overlay/actions";
import { connect } from "react-redux";

const Uploads = ({ handleOverlay }) => {
  return (
    <div className="upload-container">
      <div className="heading">
        <h2>Create content</h2>
        <FaXmark onClick={() => handleOverlay(false)} />
      </div>

      <div>
        <div className="content" onClick={() => handleOverlay(false)}>
          <div className="icon-bg">
            <img src="/video-icon.svg" />
          </div>
          <div className="details">
            <div>
              <p className="text1">Upload video</p>
              <p className="text2">Find a doctor and specialization</p>
            </div>
            <IoChevronForwardOutline />
          </div>
        </div>
        <div className="content" onClick={() => handleOverlay(false)}>
          <div className="icon-bg">
            <img src="/voice-note.svg" />
          </div>
          <div className="details">
            <div>
              <p className="text1">Upload Audio</p>
              <p className="text2">Talk to a specialist</p>
            </div>
            <IoChevronForwardOutline />
          </div>
        </div>
        <div className="content" onClick={() => handleOverlay(false)}>
          <div className="icon-bg">
            <img src="/document-icon.svg" />
          </div>
          <div className="details">
            <div>
              <p className="text1">Upload/Create document</p>
              <p className="text2">Find closest hospitals</p>
            </div>
            <IoChevronForwardOutline />
          </div>
        </div>
        <div className="content" onClick={() => handleOverlay(false)}>
          <div className="icon-bg">
            <img src="/schedule-icon.svg" />
          </div>
          <div className="details">
            <div>
              <p className="text1">Schedule live class</p>
              <p className="text2">Request immediate help</p>
            </div>
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlay: (paylaod) => dispatch(toggleOverlay(paylaod)),
  };
};

export default connect(null, mapDispatchToProps)(Uploads);
