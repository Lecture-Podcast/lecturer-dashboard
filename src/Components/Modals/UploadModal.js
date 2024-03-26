import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import success from '../../Assets/animation/SUCCESS.json'
const Uploadmodal = ({message, togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={success}/>
                    </div>
                    <p className="create-payment">{message}</p>
                    <div className="signup-buttons">
                        <button class="submit-button" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Uploadmodal;