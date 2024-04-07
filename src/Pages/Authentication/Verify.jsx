import React from 'react';
import './css/Verify.css'
import success from "../../Assets/animation/SUCCESS.json"
import loader from "../../Assets/animation/loading.json"
import LottieAnimation from '../../Lotties';
import { verifyaction } from '../../Redux/Verify/verifyAction';
const Verify = ({loading, error, verifyaction}) => {

    const urlParams = new URLSearchParams(window.location.search);
    // Extract the token parameter from the URL
    const tokenFromUrl = urlParams.get('token');

    console.log(tokenFromUrl)
    const handleSubmit = (e) =>{
        e.preventDefault()
        verifyaction(tokenFromUrl)
    }
    return ( 
        <div className="verify">
            <div className="verify-content">
                <div className="animation">
                    <LottieAnimation data={success}/>
                </div>
                <p>your account have been Verified</p>
                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? (
                        <div className="spinner-btn">
                            <LottieAnimation data={loader}/>
                        </div>
                    ):"Continue"
                    }
                </button>
            </div>
        </div>
     );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        loading: state.verify.loading,
        error: state.verify.error,
        // profiledata: state.profile.data,
        // changeprofileloading: state.changeprofileimage.loading
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        verifyaction: (token) => dispatch(verifyaction(token)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Verify);