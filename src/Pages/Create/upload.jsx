import React, { useEffect, useRef, useState } from "react";
import './Upload.css';
import { FaRegFilePdf, FaUpload } from "react-icons/fa";
const Uplaod = () => {
    const [files, setFiles] = useState(null);
    const [success, setSuccess] = useState(false);
    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setFiles(event.target.files)
        let data ={file:event.target.files[0]}
       
    };
    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
        let data ={file:event.dataTransfer.files[0]}
       
    };
    useEffect(()=>{
        if(files !== null){
            setSuccess(true)
        }else{
            setSuccess(false)
        }
    }, [files])
    console.log(files)
    return ( 
        <div className="upload">
            <h4 className="page-title">Create</h4>
            <p className="page-body">Here’s an overview of your content’s performance</p>
            {!success && (
                    <div 
                    className="upload-box"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    >
                        <div className="drag-upload">
                            <input type="file" name="file" ref={inputRef} onChange={handleSubmit} hidden></input>
                            <div className="upload-icon">
                                <FaUpload/>
                            </div>
                            <p className="upload-text"><span>click to upload</span> or drag and drop</p>
                            <p className="upload-file">PDF, JPG, MP3 or Video </p>
                            <p className="or">OR</p>
                        </div>
                        <hr></hr>
                        <div className="browse-upload">
                            <button onClick={(e) => {inputRef.current.click(); e.preventDefault();}}>Browse Files</button>
                        </div>
                </div>
            )}
            {success && (
                <div className="upload-box-2">
                    <h3>Upload Documents</h3>
                    <div className="upload-space">
                        <div 
                            className="drag-upload drag-upload-2"
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <input type="file" name="file" ref={inputRef} onChange={handleSubmit} hidden></input>
                            <div className="upload-icon">
                                <FaUpload/>
                            </div>
                            <p className="upload-text"><span onClick={(e) => {inputRef.current.click(); e.preventDefault();}}>click to upload</span> or drag and drop</p>
                            <p className="upload-file">PDF, JPG, MP3 or Video </p>
                        </div>
                    </div>
                    <div className="uploaded-documents">
                        <p className="uploaded-text">Uploaded Files</p>
                        <div className="file-lists">
                        {Array.from(files).map((file, idx) => {
                            return(
                                <div className="file">
                                    <div className="file-left">
                                        <div className="file-icon">
                                            <FaRegFilePdf/>
                                        </div>
                                        <div className="file-details">
                                            <h5>{file.name}</h5>
                                            <p>11 Sep, 2023 | 12:24pm . 13MB</p>
                                        </div>
                                    </div>
                                    <div className="file-right">

                                    </div>
                                </div>
                            )
              
                        } )}
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Uplaod;