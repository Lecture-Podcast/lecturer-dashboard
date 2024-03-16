import React from "react";

import Empty from "../../Assets/images/Empty.svg";
import "./content.css";
import { Link } from "react-router-dom";

const Content = () => {
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
          <Link to='/create-library'><button className="content-button">Create content</button></Link>
        </div>
      </div>
    </section>
  );
};

export default Content;
