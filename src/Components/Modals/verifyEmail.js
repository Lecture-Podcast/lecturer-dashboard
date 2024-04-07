import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import coming from '../../Assets/animation/Coming.json'
import email from '../../Assets/animation/email.json'
const VerifyEmail = ({togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={email}/>
                    </div>
                    <p className="create-payment">A verification link have been sent to your mail</p>
                    <div className="signup-buttons">
                        <button class="submit-buttons" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default VerifyEmail;