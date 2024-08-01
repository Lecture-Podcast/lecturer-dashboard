import React, { useRef, useState } from "react";
import"./Playlist.css"
import { FaPlus, FaUpload } from "react-icons/fa";
import { createContent, createPlayist, createSection } from "../../Redux/Playlist/PlaylistAction";
import { connect } from "react-redux";
import swal from 'sweetalert';
import LottieAnimation from "../../Lotties";
import loader from "../../Assets/animation/loading4.json";
import file from "../../Assets/images/file.png"
import video from "../../Assets/images/Video.png"
const Playlist = ({
    loading,
    contentloading,
    error,
    data,
    createPlayist,
    createSection,
    createContent,
    sectionloading,
    sectionerror,
    sectiondata,
    contentData,
    playlistData
}) => {
    const inputRefs = useRef([]);
    const [playlistTitle, setPlaylistTitle] = useState("")
    const [playlistCode, setPlaylistCode] = useState("")
    const [SectionTitle, setSectionTitle] = useState("")
    const [ContentDescription, setContentDescription] = useState("")
    const [ContentType, setContentType] = useState("")
    const [duration, setDuration] = useState("")
    const [selectedfile, setselectedfile] = useState(null);
    const [dropedFile, setdropedfile] = useState(null)
    const [files, setFiles] = useState([]);
    const [modal, setModal] = useState(false)
    const [postState, setPostState] = useState({})
    const [sectionState, setSectionState] = useState({})
    const [contentState, setContentState] = useState({})
    const [playlistSuccess, setPlaylistSuccess] = useState(false)
    const [sectionSuccess, setsectionSuccess] = useState(false)
    const [lectures, setLectures] = useState([{ files: [] }]);
    const handlePlaylistTitle = (e)=>{
        const value = e.target.value
        setPlaylistTitle(value)
        setPostState({...postState, ...{course_title: playlistTitle}})
    }
    const handlePlaylistCode = (e)=>{
        const value = e.target.value
        setPlaylistCode(value)
        setPostState({...postState, ...{course_code: playlistCode, content_category: "lecture"}})
    }
    const handleSectionTitle = (e)=>{
        const value = e.target.value
        setSectionTitle(value)
        setSectionState({...sectionState, ...{section_title: SectionTitle}})
    }
    const handleContentType = (e)=>{
        const value = e.target.value
        setContentType(value)
        setContentState({...contentState, ...{content_types: ContentType}})
    }
    const handleContentDescription = (e)=>{
        const value = e.target.value
        setContentDescription(value)
        setContentState({...contentState, ...{descriptions: ContentDescription}})
    }
    const handleContentDuration = (e)=>{
        const value = e.target.value
        setDuration(value)
        setContentState({...contentState, ...{titles: duration, duration: "N/A"}})
    }
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = async (event, index) => {
        event.preventDefault();
        let file = event.dataTransfer.files[0]
        const updatedLectures = lectures.map((lecture, idx) =>
            idx === index ? { ...lecture, files: [...lecture.files, file] } : lecture
        );
        setLectures(updatedLectures); 
        setModal(true)
    };
    const handleSubmit = async (event,index) => {
        event.preventDefault();
        const file = event.target.files[0];
        const updatedLectures = lectures.map((lecture, idx) =>
            idx === index ? { ...lecture, files: [...lecture.files, file] } : lecture
        );
        setLectures(updatedLectures);
        setModal(true)
    };
    console.log(files)
    const handlePlaylistSubmit = async (e)=>{
        e.preventDefault()
        try{
            await createPlayist(postState, ()=>{
                swal("Playlist created Successfully");
                setPlaylistSuccess(true)
            },()=>{
                swal(error)
            })
        }catch(error){

        }
    }
    const handleSectionSubmit = async (e)=>{
        e.preventDefault()
        console.log("i am stuck")
        try{
            await createSection(playlistData?._id, sectionState, ()=>{
                swal("Section created Successfully");
                setsectionSuccess(true)
            },()=>{
                swal(error)
            })
        }catch(error){

        }
    }
    console.log(playlistData)
    console.log(sectiondata)
    console.log(playlistData?._id, sectiondata?._id)
    const handleContentSubmit = async (e)=>{
        e.preventDefault()
        console.log("i am stuck")
        const formData = new FormData();
        for (const lecture of lectures) {
            for (const file of lecture.files) {
              formData.append('documents', file);
              formData.append('content_types', ContentType);
              formData.append('descriptions', ContentDescription);
              formData.append('titles', duration);
              formData.append('durations', "N/A");
            } 
        }
        try{
            await createContent(
                playlistData._id,
                sectiondata[0]._id,
                formData,
                () => {swal("Content created successfully")},
                () => {swal(error)}
            );
        }catch(error){

        }
    }
    // const handleContentSubmit = async (e)=>{
    //     e.preventDefault()
    //     console.log("not again")
    //     const formData = new FormData();
    //     formData.append('documents', dropedFile||selectedfile);
    //     formData.append('content_types', ContentType);
    //     formData.append('descriptions', ContentDescription);
    //     formData.append('titles', duration);
    //     formData.append('durations', "N/A");
    //     formData.append('content_types', ContentType);
    //     formData.append('descriptions', ContentDescription);
    //     formData.append('titles', duration);
    //     formData.append('durations', "N/A");
    //     try{
    //         console.log("please")
    //         await createContent(playlistData._id,sectiondata._id,formData, ()=>{
    //             swal("Section created Successfully");
    //             handleAddLecture()
    //         },()=>{
    //             swal(error)
    //         })
    //     }catch(error){

    //     }
    // }
    const handleAddLecture = (e) => {
        e.preventDefault()
        setLectures([...lectures, { files: [] }]);
    };
    return ( 
        <>
            <div className="upload">
                <h4 className="page-title">Create Course Content</h4>
                <p className="page-body">Here’s an overview of your content’s performance</p>
                <div className="playlist-container">
                    <div className="playlist-title">
                        <p className="playlist-head">Playlist Title</p>
                        <form className="course-form" onSubmit={handlePlaylistSubmit}>
                            <div className="inputfield">
                                <label>Main Topic</label>
                                <input
                                    type="text"
                                    placeholder="Enter the topic title"
                                    onChange={handlePlaylistTitle}
                                    onBlur={handlePlaylistTitle}
                                ></input>
                            </div>
                            <div className="inputfield">
                                <label>Course Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter the course code"
                                    onChange={handlePlaylistCode}
                                    onBlur={handlePlaylistCode}
                                ></input>
                            </div>
                            <button
                                type="submit"
                                className="login-btn"
                            >
                                {loading ? (  
                                <div className="spinner-btn">
                                    <LottieAnimation data={loader}/>
                                </div>
                                ): (
                                <span>Create</span>
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="playlist-sub">
                        {playlistSuccess && (
                            <div className="sub-topic">
                                <p className="playlist-head">Sub Topic</p>
                                <div className="sub-topic-inner">
                                    <form >
                                        <div className="inputfield">
                                            <label>Sub Topic</label>
                                            <input
                                                type="text"
                                                placeholder="Enter Sub-topic title"
                                                onChange={handleSectionTitle}
                                                onBlur={handleSectionTitle}
                                            ></input>
                                        </div>
                                        <button
                                            className="login-btn"
                                            onClick={handleSectionSubmit}
                                        >
                                            {sectionloading ? (  
                                            <div className="spinner-btn">
                                                <LottieAnimation data={loader}/>
                                            </div>
                                            ): (
                                            <span>Create</span>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                         )} 
                        {sectionSuccess && (
                            <div className="lecture-content">
                                {lectures.map((lecture, index) => (
                                    <div className="lecture-contents">
                                        <p className="playlist-head">Lecture {index + 1}</p>
                                        <form>
                                            <div className="course-form">
                                                <div className="inputfield">
                                                    <label>Lecture Content</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter title for this lecture content"
                                                        onChange={handleContentDuration}
                                                        onBlur={handleContentDuration}
                                                    ></input>
                                                </div>
                                                <div className="inputfield">
                                                    <label>Lecture Format</label>
                                                    <select 
                                                        onChange={handleContentType}
                                                        onBlur={handleContentType}
                                                    >
                                                        <optgroup>
                                                            <option>Audio</option>
                                                            <option>Video</option>
                                                            <option>File</option>
                                                        </optgroup>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="inputfield">
                                                <label>Lecture Description</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter title for this lecture content"
                                                    onChange={handleContentDescription}
                                                    onBlur={handleContentDescription}
                                                ></input>
                                            </div>
                                            {lecture.files.length!=0 ? <div className="file-display">
                                                <div className="file-name">
                                                    <img src={lecture.files[0]?.type.includes("application")? file : video}></img>
                                                    <p>{lecture.files[0]?.name}</p>
                                                </div>
                                            </div> : 
                                            <div 
                                                className="upload-box upload-box-3"
                                                onDragOver={handleDragOver}
                                                onDrop={(e) => handleDrop(e, index)}
                                            >
                                                <>
                                                    <div className="drag-upload">
                                                        <input type="file" name="file" ref={(el) => (inputRefs.current[index] = el)} onChange={(e) => handleSubmit(e, index)} hidden></input>
                                                        <div className="upload-icon">
                                                            <FaUpload/>
                                                        </div>
                                                        <p className="upload-text"><span>click to upload</span> or drag and drop</p>
                                                        <p className="upload-file">PDF, JPG, MP3 or Video </p>
                                                        <p className="or">OR</p>
                                                    </div>
                                                    <hr></hr>
                                                    <div className="browse-upload">
                                                        <button onClick={(e) => { inputRefs.current[index].click(); e.preventDefault(); }}>Browse Files</button>
                                                    </div>
                                                </>
                                            </div>
                                            }
                                                <button 
                                                    className="add-lecture"
                                                    onClick={handleAddLecture}
                                                >
                                                    {contentloading ? (  
                                                        <div className="spinner-btn">
                                                            <LottieAnimation data={loader}/>
                                                        </div>
                                                        ): (
                                                        <span>+ Add Lecture</span>
                                                    )}
                                                </button>
                                                
                                        </form>
                                    </div>
                                ))}
                                <button
                                    type="submit"
                                    className="login-btn"
                                    onClick={handleContentSubmit}
                                >
                                    {loading ? (  
                                    <div className="spinner-btn">
                                        <LottieAnimation data={loader}/>
                                    </div>
                                    ): (
                                    <span>Submit</span>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                    {playlistSuccess && ( <div className="add-section">
                        <div className="add-section-inner">
                            <div className="add-button">
                                <FaPlus/>
                            </div>
                            <p>Add Section</p>
                        </div>
                    </div> )}
                </div>
            </div>
        </>
    );
}
const mapStoreToProps = (state) => {
    console.log(state)
    return {
        loading: state.playlist.loading,
        contentloading: state.playlist.contentloading,
        sectionloading: state.playlist.sectionloading,
        error: state.playlist.error,
        data: state.playlist.playlistData,
        sectionerror: state.playlist.error,
        playlistData: state.playlist.playlistData?.data?.data,
        sectiondata: state.section.sectionData?.data?.data?.sections,
        contentdata: state.playlist.contentData
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        createPlayist: (nameState, history, setErrorHandler) => {
            dispatch(createPlayist(nameState, history, setErrorHandler));
        },
        createSection: (id, nameState, history, setErrorHandler) => {
            dispatch(createSection(id, nameState, history, setErrorHandler));
        },
        createContent: (id, sectionid, nameState, history, setErrorHandler) => {
            dispatch(createContent(id, sectionid, nameState, history, setErrorHandler));
        },
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Playlist);