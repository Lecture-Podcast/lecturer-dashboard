import React, { useEffect, useRef, useState } from "react";
import './Upload.css';
import { FaRegFilePdf, FaUpload } from "react-icons/fa";
import { connect } from "react-redux";
import loader from '../../Assets/animation/loading.json'
import { createAudio, createFile, createvideo } from "../../Redux/Content/CotentAction";
import LottieAnimation from "../../Lotties";
const Uplaod = ({
        createAudio, 
        createVideo, 
        createFile,
        audioloading,
        audioerror,
        videoloading,
        videoerror,
        fileloading,
        fileerror
    }) => {
    const [audio, setAudio] = useState(null);
    const [content_category, setcontent_category] = useState('');
    const [course_title, setcourse_title] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [kbInput, setKbInput] = useState('');
    const [mbOutput, setMbOutput] = useState('');
    const [files, setFiles] = useState([]);
    const [selectedfile, setselectedfile] = useState(null);
    const [success, setSuccess] = useState(false);
    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // let data = event.target.files[0]
        setFiles([...files, event.target.files[0]])
        const formData = new FormData();
        formData.append('audio', event.target.files[0]);
        formData.append('content_category', "studies");
        formData.append('course_title', "geography");
        event.preventDefault();
        if(event.target.files[0].type.split('/')[0]=="audio"){
            try{ 
                await createAudio(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }
        if(event.target.files[0].type.split('/')[0]=="video"){
            try{ 
                await createVideo(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }
        if(event.target.files[0].type.split('/')[0]=="application"){
            try{ 
                await createFile(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }
    };
    const handleDrop = async (event) => {
        event.preventDefault();
        let data = event.dataTransfer.files[0]
        setFiles([...files, data])
        const formData = new FormData();
        formData.append('audio', event.dataTransfer.files[0]);
        formData.append('content_category', "studies");
        formData.append('course_title', "geography");
        event.preventDefault();
        if(event.dataTransfer.files[0].type.split('/')[0]=="audio"){
            try{ 
                await createAudio(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }
        if(event.dataTransfer.files[0].type.split('/')[0]=="video"){
            try{ 
                await createVideo(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }
        if(event.dataTransfer.files[0].type.split('/')[0]=="application"){
            try{ 
                await createFile(formData, ()=>{ 
                   
                }, ()=>{ 
                    
                });
            }catch(error){
            
            }
        }

    };
    useEffect(()=>{
        if(files.length !== 0){
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
                        {(audioloading || videoloading || fileloading) ? (
                            <div className="upload-loading">
                                <LottieAnimation data={loader}/>
                                <p className="upload-file">Uploading</p>
                            </div>
                        ): (
                            <>
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
                            </>
                        )}
                        
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
                            {(audioloading || videoloading || fileloading) ? (
                                <div className="upload-loading">
                                    <LottieAnimation data={loader}/>
                                    <p className="upload-file">Uploading</p>
                                </div>
                            ) : (
                                <>
                                    <input type="file" name="file" ref={inputRef} onChange={handleSubmit} hidden></input>
                                    <div className="upload-icon">
                                        <FaUpload/>
                                    </div>
                                    <p className="upload-text"><span onClick={(e) => {inputRef.current.click(); e.preventDefault();}}>click to upload</span> or drag and drop</p>
                                    <p className="upload-file">PDF, JPG, MP3 or Video </p>
                                </>
                            )}
                            
                        </div>
                    </div>
                    <div className="uploaded-documents">
                        <p className="uploaded-text">Uploaded Files</p>
                        <div className="file-lists">
                        {files.map((file, idx) => {
                            return(
                                <div className="file">
                                    <div className="file-left">
                                        <div className="file-icon">
                                            <FaRegFilePdf/>
                                        </div>
                                        <div className="file-details">
                                            <h5>{file.name}</h5>
                                            <p>11 Sep, 2023 | 12:24pm . {(((parseFloat(file.size)/1000).toFixed(2))/1024).toFixed(2)}MB</p>
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
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        audioloading: state.createAudio.loading,
        audioerror: state.createAudio.error,
        audio: state.createAudio.data,
        videoloading: state.createVideo.loading,
        videoerror: state.createVideo.error,
        video: state.createVideo.data,
        fileloading: state.createFile.loading,
        fileerror: state.createFile.error,
        file: state.createFile.data,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        createAudio: (nameState, history, setErrorHandler) => {
            dispatch(createAudio(nameState, history, setErrorHandler));
        },
        createVideo: (nameState, history, setErrorHandler) => {
            dispatch(createvideo(nameState, history, setErrorHandler));
        },
        createFile: (nameState, history, setErrorHandler) => {
            dispatch(createFile(nameState, history, setErrorHandler));
        },
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Uplaod);