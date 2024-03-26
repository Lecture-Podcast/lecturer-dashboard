import React from "react";
import "./styles.css";

const Overlay = ({ children }) => {
  return <div className="overlay-container">{children}</div>;
};

export default Overlay;
