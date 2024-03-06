import React from 'react'
import "./Card.css"
import { HiOutlineCube } from "react-icons/hi";
import { BiChart } from "react-icons/bi";
import { MdOutlineErrorOutline } from "react-icons/md";
import stat from "../../Assets/images/state-pro.png"
const Card = () => {
    return ( 
        <div className="card">
            <p className="card-title">
                Total Views
            </p>
            <div className="card-body">
                <p className="card-value">
                    93,342,705
                </p>
                <div className="card-icon">
                    <HiOutlineCube/>
                </div>
            </div>

            <div className="card-footer">
                <div className="card-reading"> 
                    <BiChart/>
                    <img src={stat}></img>
                    <p>5%</p>
                    <MdOutlineErrorOutline/>
                </div>
                <p className="card-state">high today</p>
            </div>
        </div>
    );
}
 
export default Card;