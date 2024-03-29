import React from "react";
import ReactPlayer from 'react-player'
const ContentModal = ({content_url}) => {
    console.log(content_url)
    return ( 
        <div className="modal-background">
            <div className="modalss">
            
                <div className="onetime-modal">
                    <ReactPlayer url={content_url} />
                    {/* <video src=></video> */}
                    <div className="animation">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContentModal;