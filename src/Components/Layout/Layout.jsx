import "./Layout.css";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Overlay from "../overlay";
import Uploads from "../uploads";
import { connect } from "react-redux";

const Layout = ({ overlay }) => {
  console.log("hey", overlay);
  return (
    <div className="layout">
      {overlay && (
        <Overlay>
          <Uploads />
        </Overlay>
      )}
      <div className="layout-left">
        <Sidebar />
      </div>
      <div className="layout-right">
        <Navbar />
        <div className="layout-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  console.log(state);
  return {
    overlay: state.overlay.overlay,
  };
};

export default connect(mapStoreToProps)(Layout);
