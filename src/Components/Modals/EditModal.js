import React from 'react';
import './Modal.css'
import { FaTimes } from 'react-icons/fa';
import LottieAnimation from '../../Lotties';
import coming from '../../Assets/animation/Coming.json'
import email from '../../Assets/animation/email.json'
import { connect } from 'react-redux';
import { editAudio, editFile, editvideo } from '../../Redux/Content/CotentAction';
const EditModal = ({togglemodal, contentTitle, contentDes, contentType}) => {
    return ( 
        <div className="modal-background">
            <div className="modalss">
                <div className="onetime-modal">
                    <div className="modalClose" onClick={togglemodal}>
                        <FaTimes/>
                    </div>
                    <form>
                        <div className="inputfield">
                            <label>Content Title</label>
                            <input
                                type="text"
                                placeholder="Content Title"
                                defaultValue={contentTitle}
                                // onChange={handleTitleChange}
                                // onBlur={handleTitleChange}
                            ></input>
                        </div>
                        <div className="content-form">
                            <div className="inputfield">
                                <label>Content Description</label>
                                <textarea
                                    type="text"
                                    placeholder="Content Description"
                                    defaultValue={contentDes}
                                    // onChange={handleDescriptionChange}
                                    // onBlur={handleDescriptionChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="signup-buttons">
                            <button class="submit-buttons">Submit</button>
                        </div>
                    </form>
                    {/* <div className="signup-buttons">
                        <button class="submit-buttons" onClick={togglemodal}>Ok</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        audioloading: state.editAudio.loading,
        audioerror: state.editAudio.error,
        audios: state.editAudio.data,
        videoloading: state.editVideo.loading,
        videoerror: state.editVideo.error,
        video: state.editVideo.data,
        fileloading: state.editFile.loading,
        fileerror: state.editFile.error,
        file: state.editFile.data,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        editAudio: (nameState, history, setErrorHandler) => {
            dispatch(editAudio(nameState, history, setErrorHandler));
        },
        editVideo: (nameState, history, setErrorHandler) => {
            dispatch(editvideo(nameState, history, setErrorHandler));
        },
        editFile: (nameState, history, setErrorHandler) => {
            dispatch(editFile(nameState, history, setErrorHandler));
        },
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(EditModal);