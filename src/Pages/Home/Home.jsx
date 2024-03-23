import React from 'react'
import "./Home.css"
import Card from '../../Components/Card/Card';
import { FiCalendar } from "react-icons/fi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsChatText } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import messages from '../../Assets/images/state-pro.png'
import BasicDateCalendar from '../../Components/Calendar/Calendar';
import Graph from '../../Components/Chart/Chart';
import { fetchprofile } from '../../Redux/Profile/ProfileAction';
import { connect } from 'react-redux';

const Home = () => {
    return ( 
        <div className="home">
            <h4 className="page-title">Dashboard</h4>
            <p className="page-body">Here’s an overview of your content’s performance</p>
            <div className="home-body">
                <div className="home-body-top">
                    <div className="home-chart">
                        <div className="home-cards">
                            <div className="i">
                                <Card/>
                            </div>
                            <div className="i">
                                <Card/>
                            </div>
                            <div className="i">
                                <Card/>
                            </div>
                        </div>
                        <div className="chart-container">
                            <p className="chart-head">Content Performance</p>
                            <p className="chart-body">Track your content growth and performance.</p>
                            <div className="graph-con">
                                <Graph/>
                            </div>
                        </div>
                    </div>
                    <div className="home-calendar">
                        <p className="chart-head">Content Performance</p>
                        <div className="calendar">
                            <BasicDateCalendar/>
                        </div>
                        <div className="schedule-card">
                            <div className="schedule-image">
                                <p>9</p>
                            </div>
                            <div className="schedule-details">
                                <h4>CIT305 Live class</h4>
                                <p>12:00 pm - 1:30 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-body-bottom">
                    <div className="quick-action">
                        <div className="quick-head">
                            <p className='quick-head-text'>Quick Actions</p>
                        </div>
                        <div className="quick-action-con">
                            <div className="action">
                                <div className="action-left">
                                    <div className="action-icon">
                                        <FiCalendar/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Create Live Class</h3>
                                        <p>Schedule a live class session</p>
                                    </div>
                                </div>
                                <div className="action-right">
                                    <HiOutlineChevronRight/>
                                </div>
                            </div>
                            <div className="action">
                                <div className="action-left">
                                    <div className="action-icon">
                                        <BsChatText/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Create Group Chat</h3>
                                        <p>A platform to connect with students</p>
                                    </div>
                                </div>
                                <div className="action-right">
                                    <HiOutlineChevronRight/>
                                </div>
                            </div>
                            <div className="action">
                                <div className="action-left">
                                    <div className="action-icon">
                                        <IoLocationOutline/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Upload Lecture Documents</h3>
                                        <p>Schedule a live class sessionDisplay your lecture note for student access</p>
                                    </div>
                                </div>
                                <div className="action-right">
                                    <HiOutlineChevronRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recent-message">
                        <div className="quick-head">
                            <p className='quick-head-text'>Recent Messages</p>
                            <div className="see-all">
                                <p>See All</p>
                                <HiOutlineChevronRight/>
                            </div>
                        </div>
                        <div className="messages">
                            <div className="messages-left">
                                    <div className="message-con">
                                        <img src={messages}/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Dr. Alison Ogaga</h3>
                                        <p>Message Preview</p>
                                    </div>
                                </div>
                                <div className="messages-right">
                                    <button>
                                        View Message
                                    </button>
                                </div>
                        </div>
                        <div className="messages">
                            <div className="messages-left">
                                    <div className="message-con">
                                        <img src={messages}/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Dr. Alison Ogaga</h3>
                                        <p>Message Preview</p>
                                    </div>
                                </div>
                                <div className="messages-right">
                                    <button>
                                        View Message
                                    </button>
                                </div>
                        </div>
                        <div className="messages">
                            <div className="messages-left">
                                    <div className="message-con">
                                        <img src={messages}/>
                                    </div>
                                    <div className="action-text">
                                        <h3>Dr. Alison Ogaga</h3>
                                        <p>Message Preview</p>
                                    </div>
                                </div>
                                <div className="messages-right">
                                    <button>
                                        View Message
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        loading: state.profile.loading,
        error: state.profile.error,
        profile: state.profile.data,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchprofile: () => dispatch(fetchprofile()),
    };
};
 
export default connect(mapStoreToProps, mapDispatchToProps)(Home);