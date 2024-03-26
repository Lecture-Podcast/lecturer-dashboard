import React from "react";
import { connect } from "react-redux";
import Empty from "../../Assets/images/Empty.svg";
import "./content.css";
import { Link } from "react-router-dom";
import { toggleOverlay } from "../../Redux/overlay/actions";

const Content = ({ handleOverlay }) => {
  return (
    <section>
      <div>
        <h1>Content Library</h1>
        <p className="overview">
          Heres an overview of your contents performance
        </p>
      </div>

      <div className="content-container">
        <div className="empty-state">
          <img className="image" src={Empty} alt="empty file" />
        </div>
        <div className="content-message">
          <p className="content-paragraph">
            You have not added any content. Click the <br /> button below to
            create one.
          </p>
          <button
            className="content-button"
            onClick={() => handleOverlay(true)}
          >
            Create content
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStoreToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    handleOverlay: (payload) => dispatch(toggleOverlay(payload)),
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Content);
