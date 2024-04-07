import React from 'react';
import './css/Verify.css'
import success from "../../Assets/animation/SUCCESS.json"
import LottieAnimation from '../../Lotties';
const Verify = () => {
    return ( 
        <div className="verify">
            <div className="verify-content">
                <div className="animation">
                    <LottieAnimation data={success}/>
                </div>
                <p>your account have been Verified</p>
                <button>Continue</button>
            </div>
        </div>
     );
}
 
export default Verify;