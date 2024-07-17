import React, { useEffect } from "react";
import logo from "../../../Assets/images/logo.png";
import "./Sidebar.css";
import { HiOutlineChartPie } from "react-icons/hi2";
import { FiFolder } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { TbBriefcase } from "react-icons/tb";
import { PiSignOutLight } from "react-icons/pi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOutAuthAction } from "../../../Redux/usersAuth/usersAction";
import { connect } from "react-redux";
// import { useState } from 'react';
const Sidebar = ({logout, open, toggleopen}) => {
  const location = useLocation();
  const history = useNavigate();
  const [timeoutId, setTimeoutId] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const handleChange = (event) => {
    setValue(event);
  };
  const handlelogout =()=>{
    logout(
      ()=>{ history(`/`)}
    )
  }

useEffect(() => {
    const id = setTimeout(() => {
        handlelogout();
    }, 900000);

    setTimeoutId(id);

    return () => {
        clearTimeout(timeoutId);
    };
}, []);
  return (
    <div className={open?"sidebaropen sidebar":"sidebar"}>
      <div className="sidebar-logo">
        <img src={logo}></img>
      </div>
      <div className="sidebar-nav">
        <nav>
          <ul>
            <Link to="/home">
              <li
                className={location.pathname === "/home" ? "active" : ""}
                onClick={() => {
                  toggleopen();
                  handleChange(0);
                }}
              >
                <span>
                  <HiOutlineChartPie />
                </span>
                Dashboard
              </li>
            </Link>
            <Link to='/home/create-library'>
              <li 
                className={location.pathname === "/home/create-library" === 1 ? "active" : ""}
                onClick={() => {
                  toggleopen();
                  handleChange(1);
                }}
              >
                <span>
                  <FiFolder />
                </span>
                Content Library
              </li>
            </Link>
            <Link to="/home/create">
              <li
                className={location.pathname === "/home/create" ? "active" : ""}
                onClick={() => {
                  toggleopen();
                  handleChange(2);
                }}
              >
                <span>
                  <RiAddCircleLine />
                </span>
                Create
              </li>
            </Link>
            {/* <li
              className={value === 3 ? "active" : ""}
              onClick={() => {
                handleChange(3);
              }}
            >
              <span>
                <TbMessage />
              </span>
              Messages
            </li> */}
            <Link to="/home/settings">
              <li
                className={location.pathname === "/home/settings" ? "active" : ""}
                onClick={() => {
                  toggleopen();
                  handleChange(4);
                }}
              >
                <span>
                  <FiSettings />
                </span>
                Settings
              </li>
            </Link>
            {/* <li
              className={value === 5 ? "active" : ""}
              onClick={() => {
                handleChange(5);
              }}
            >
              <span>
                <TbBriefcase />
              </span>
              Supports & Help
            </li> */}
            {/* <li
              className={value === 6 ? "active" : ""}
              onClick={() => {
                handleChange(6);
              }}
            >
              <span>
                <LiaMoneyBillWaveSolid />
              </span>
              Premimum
            </li> */}
          </ul>
        </nav>
        <div className="log-out" onClick={handlelogout}>
          <span>
            <PiSignOutLight />
          </span>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return{
  }
}

const mapDispatchToProps = dispatch => {
  return{
      logout: (history) => dispatch(LogOutAuthAction(history)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
