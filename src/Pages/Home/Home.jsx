import React from 'react'
import "./Home.css"
import Card from '../../Components/Card/Card';
import BasicDateCalendar from '../../Components/Calendar/Calendar';
import Graph from '../../Components/Chart/Chart';

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
                
            </div>
        </div>
    );
}
 
export default Home;