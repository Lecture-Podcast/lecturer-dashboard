import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import success from '../../Assets/animation/SUCCESS.json'
const Loadingmodal = ({message, togglemodal}) => {
    return ( 
        <div className="modal-background">
            <div className="modalsss">
                <div className="onetime-modal">
                    <div className="animation">
                        <LottieAnimation data={success}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Loadingmodal;