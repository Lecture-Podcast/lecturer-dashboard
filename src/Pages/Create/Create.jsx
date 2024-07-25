import React, { useState } from "react";
import typeicon from '../../Assets/images/Empty State.png'
import "./Create.css"
import { Link } from "react-router-dom";
import Comingmodal from "../../Components/Modals/Comingmodal";
const Create = () => {
    const [modal, setmodal]= useState(false);
    const toggleModal = ()=>{
        setmodal(!modal)
    }
    return ( 
        <div className="create">
            <div className="create-types">
                <img src={typeicon}></img>
                <h4>Schedule a class</h4>
                <p>Instantly schedule and class and get <br></br>notified few.minutes to the time</p>
                <button onClick={toggleModal}>Schedule a Class</button>
            </div>
            <div className="create-types">
                <img src={typeicon}></img>
                <h4>Upload Document</h4>
                <p>Upload lecture materials as WORD,<br></br> PDF, Video or Audio format</p>
                <Link to="/home/create/upload">
                    <button>Upload Document</button>
                </Link>
            </div>
            <div className="create-types">
                <img src={typeicon}></img>
                <h4>Create Playlist</h4>
                <p>Upload lecture materials as WORD,<br></br> PDF, Video or Audio format</p>
                <Link to="/home/create-playlist">
                    <button>Create Playist</button>
                </Link>
            </div>
            {modal && (<Comingmodal togglemodal={toggleModal}/>)}
        </div>
    );
}
 
export default Create;