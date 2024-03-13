import React from 'react'
import logo from '../../../Assets/images/logo.png'
import "./Sidebar.css"
import { HiOutlineChartPie } from "react-icons/hi2";
import { FiFolder } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
import { TbMessage } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { TbBriefcase } from "react-icons/tb";
import { PiSignOutLight } from "react-icons/pi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
// import { useState } from 'react';
const Sidebar = () => {
    const [value, setValue] = React.useState(0);
    const  handleChange = (event) => {
        setValue(event)
    }
    return ( 
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo}></img> 
            </div>
            <div className="sidebar-nav">
                <nav>
                    <ul>
                        <Link to='/'>
                            <li className={(value===0)?'active':''} onClick={()=>{handleChange(0)}}>
                                <span><HiOutlineChartPie/></span>
                                Dashboard
                            </li>
                        </Link>
                        <li className={(value===1)?'active':''} onClick={()=>{handleChange(1)}}>
                            <span><FiFolder/></span>
                            Content Library
                        </li>
                        <Link to="/create">
                            <li className={(value===2)?'active':''} onClick={()=>{handleChange(2)}}>
                                <span><RiAddCircleLine/></span>
                                Create
                            </li>
                        </Link>
                        <li className={(value===3)?'active':''} onClick={()=>{handleChange(3)}}>
                            <span><TbMessage/></span>
                            Messages
                        </li>
                        <Link to="/settings">
                            <li className={(value===4)?'active':''} onClick={()=>{handleChange(4)}}>
                                <span><FiSettings/></span>
                                Settings
                            </li>
                        </Link>
                        <li className={(value===5)?'active':''} onClick={()=>{handleChange(5)}}>
                            <span><TbBriefcase/></span>
                            Supports & Help
                        </li>
                        <li className={(value===6)?'active':''} onClick={()=>{handleChange(6)}}>
                            <span><LiaMoneyBillWaveSolid/></span>
                            Premimum
                        </li>
                    </ul>
                </nav>
                <div className="log-out">
                    <span><PiSignOutLight/></span>
                    <p>Log Out</p>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;