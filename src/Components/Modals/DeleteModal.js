import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import coming from '../../Assets/animation/Coming.json'
import email from '../../Assets/animation/email.json'
const DeleteModal = ({togglemodal, handledelete, contentid}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className="onetime-modal">
                    <p className="create-payment">Are You Sure you want to delete this Content</p>
                    <div className="signup-buttons delete-button">
                        <button class="cancle-buttons" onClick={togglemodal}>Cancle</button>
                        <button class="submit-buttons" onClick={(id) => handledelete(contentid)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DeleteModal;