import './Navbar.css'
import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { TfiBell } from "react-icons/tfi";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import profile from "../../../Assets/images/profile.jpeg"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar-search">
                <RiSearchLine/>
                <input type='text'></input>
            </div>
            <div className="navbar-profile">
                <div className="notification-bell">
                    <TfiBell/>
                </div>
                <div className="profile-details">
                    <div className="dp">
                        <img src={profile}></img>
                        <div className="tick">
                            <FaCheck/>
                        </div>
                    </div>
                    <div className="profile-name">
                        <h4>Alison Eliot</h4>
                        <p>alison.e@rayna.ui</p>
                    </div>
                    <div className="profile-more">
                        <FaChevronDown/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;