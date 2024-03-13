import React from "react";
import "./Settings.css";
import profile from '../../Assets/images/profile.jpeg'
import Inputfield from "../../Components/Fields/Inputfield";
import TextArea from "../../Components/Fields/TextArea";
import {FaCheck, FaTimes} from 'react-icons/fa'
import { RadioGroup } from "@mui/material";
const Settings = () => {
    const radius = 70
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * 70) / 100
    return ( 
        <div className="settings">
            <h4 className="page-title">Settings</h4>
            <div className="settings-navigation">
                <div className="setting-nav active-nav">
                    <p>My Profile</p>
                </div>
                <div className="setting-nav">
                    <p>Account Information</p>
                </div>
                <div className="setting-nav">
                    <p>Notifications</p>
                </div>
                <div className="setting-nav">
                    <p>Privacy and Security</p>
                </div>
                <div className="setting-nav">
                    <p>Language</p>
                </div>
                <div className="setting-nav">
                    <p>Help and Support</p>
                </div>
            </div>
            <div className="settings-body">
                <div className="settings-body-inner">
                    <div className="personal-information">
                        <div className="quick-head">
                            <p className='quick-head-text'>Personal Information</p>
                        </div>
                        <div className="personal-body">
                            <div className="profile-image">
                                <img src={profile}></img>
                                <div className="upload-image">
                                    <button>Upload new Photo</button>
                                    <p>At least 800x800 px recommended.<br></br>Must be PNG or JPG file </p>
                                </div>
                            </div>
                            <div className="personal-form">
                                <form>
                                    <div className="form-1">
                                        <Inputfield
                                            type="text"
                                            placeholder="Professor"
                                            label="Title/Position"
                                        />
                                        <Inputfield
                                         type="text"
                                         placeholder="David Jones Adeleke"
                                         label="Full name"
                                        />
                                    </div>
                                    <div className="form-2">
                                        <Inputfield
                                            type="email"
                                            placeholder="davidjones@gmail.com"
                                            label="Email Address"
                                        />
                                    </div>
                                    <div className="form-2">
                                        <Inputfield
                                            type="text"
                                            placeholder="Plot 8 Royal Palm Dr, Ikoyi, Lagos State"
                                            label="Residential Address"
                                        />
                                    </div>
                                    <div className="form-2">
                                        <Inputfield
                                            type="text"
                                            placeholder="903 846 8429"
                                            label="Phone number"
                                        />
                                    </div>
                                    <div className="submit-button">
                                        <button>Edit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="personal-information complete-profile">
                        <div className="quick-head">
                            <p className='quick-head-text'>Complete Your Profile</p>
                        </div>
                        <div className="circular-progressbar">
                            <svg
                                width="200px"
                                height="200px"
                                viewBox={"0 0 200px 200px"}
                            >
                                <circle
                                    cx={200/2} 
                                    cy={200/2} 
                                    strokeWidth="15px" 
                                    r="70" 
                                    className="circle-background"
                                ></circle>
                                <circle
                                    cx={200/2} 
                                    cy={200/2} 
                                    strokeWidth="15px" 
                                    r={radius}
                                    className="circle-progress"
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset: dashOffset
                                    }}
                                    transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
                                ></circle>
                                <text 
                                    x="50%" 
                                    y="50%" 
                                    dy="0.3em" 
                                    textAnchor="middle" 
                                    className="circular-text"
                                >70%</text>
                            </svg>
                        </div>
                        <div className="profile-tasks">
                            <div className="task">
                                <div className="task-status">
                                    <FaCheck/>
                                </div>
                                <p>Add Profile Photo</p>
                            </div>
                            <div className="task">
                                <div className="task-status">
                                    <FaCheck/>
                                </div>
                                <p>Add Professional summary</p>
                            </div>
                            <div className="task">
                                <div className="task-status">
                                    <FaCheck/>
                                </div>
                                <p>Address</p>
                            </div>
                            <div className="task">
                                <div className="task-status">
                                    <FaCheck/>
                                </div>
                                <p>Contact Information</p>
                            </div>
                            <div className="task task-uncomplete">
                                <div className="task-status task-uncomplete-status">
                                    <FaTimes/>
                                </div>
                                <p>Contact Information</p>
                            </div>
                            <div className="task task-uncomplete">
                                <div className="task-status task-uncomplete-status">
                                    <FaTimes/>
                                </div>
                                <p>Bank Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="setting-body-inner-2">
                <div className="personal-information professional-information">
                        <div className="quick-head">
                            <p className='quick-head-text'>Professional Information</p>
                        </div>
                        <div className="personal-body">
                            <div className="personal-form">
                                <form>
                                    <div className="form-2">
                                        <Inputfield
                                            type="text"
                                            placeholder="Ajayi Crowder University"
                                            label="Affiliated Institution"
                                        />
                                    </div>
                                    <div className="form-2">
                                        <Inputfield
                                            type="text"
                                            placeholder="Computer Science and Information Technology"
                                            label="Course / Subject of expertise"
                                        />
                                    </div>
                                    <div className="form-2">
                                        <TextArea
                                            type="text"
                                            placeholder="Urna elementum ridiculus odio commodo. Elementum nunc et eleifend pharetra sodales metus amet sed. Aliquam eleifend nec proin non velit sollicitudin at penatibus ut."
                                            label="Professional Summary"
                                        />
                                    </div>
                                    <div className="submit-button">
                                        <button>Edit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Settings;