import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import coming from '../../Assets/animation/Coming.json'
import success from '../../Assets/animation/SUCCESS.json'
const Comingmodal = ({togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={coming}/>
                    </div>
                    <p className="create-payment">Coming Soon</p>
                    <div className="signup-buttons">
                        <button class="submit-buttons" onClick={togglemodal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Comingmodal;