import React, { useEffect, useState } from "react";
import "./content-library.css";
import Empty from "../../Assets/images/Empty.svg";
import LibraryCard from "../../Components/LibraryCard";
import { fetchcontent } from "../../Redux/Content/CotentAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import loading2 from "../../Assets/animation/loadingmain.json"
import audio from '../../Assets/animation/audio.json';
import video from '../../Assets/animation/video.json';
import file from '../../Assets/animation/file.json';
import LottieAnimation from "../../Lotties";
import ContentModal from "../../Components/Modals/ContentModal";
const ContentLibrary = ({
  fetchcontent,
  loading,
  error,
  data
}) => {
  const [modal, setmodal] = useState(false)
  const [selectedContent, setSelectedContent] = useState(null); // State to track the selected content

  // Function to handle the click event when a content item is clicked
  const handleContentClick = (content) => {
      setSelectedContent(content); // Set the selected content
  };
  console.log(data)
  const togglemodal = ()=>{
    setmodal(true)
  }
  useEffect(()=>{
    fetchcontent()
  },[])
  return (
    <>
    {loading ? (
      <div className="modal-background-2">
        <div className="loading-animation-2">
            <LottieAnimation data={loading2}/>
        </div>
      </div>
    ):(
      <>
        {(data?.contents?.length !== 0) ? (
          <section>
              <div>
                <h1>Content Library</h1>
                <p className="overview">
                  Heres an overview of your contents performance
                </p>
              </div>

              <div className="content-library-container">
                <div className="">
                  <div className="content-library-container-status">
                    <p className="content-library-status">All</p>
                    <p className="content-library-status">Status</p>
                    <p className="content-library-status">type</p>
                  </div>

                  <div className="cl-card-container">
                    {data?.contents?.map(content => {
                      let anime
                      if (content.content_type === "Audio") {
                        anime = audio;
                      } else if (content.content_type === "Video") {
                        anime = video;
                      } else if (content.content_type === "File") {
                        anime = file;
                      }
                      return(
                        // <div key={content._id}>
                        //   <LibraryCard togglemodal={togglemodal} modal={modal} status="draft" id={content._id} title={content.course_title} type={content.content_type} time={content.timestamp.slice(0,10)} url={content.content_url}/>
                        // </div>
                        <>
                          <a href={content.content_url}>
                          <div className="library-card-container" key={content._id} onClick={() => {handleContentClick(content.content_url); togglemodal()}}>
                          <div className="image-container">
                            <div className="content-animation">
                              <LottieAnimation data={anime}/>
                            </div>
                          </div>
                          <div className="content">
                            <div className="wrap">
                              <p className="name">{content.course_title}</p>
                              {/* <p
                                className="status"
                                style={{
                                  backgroundColor: statusColor,
                                }}
                              >
                                {status}
                              </p> */}
                            </div>
                            <p className="text">
                              Amet eget tellus condimentum molestie scelerisque a aliquam pretium.
                              Ipsum id odio a duis. Porttitor auctor volutpat quis ullamcorper est.
                            </p>
                            <div>
                              <p className="date">Uploaded {content.timestamp.slice(0,10)}</p>
                            </div>
                          </div>
                        </div>
                        </a>
                      </>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
        ):(
          <section>
            <div>
              <h1>Content Library</h1>
              <p className="overview">
                Heres an overview of your contents performance
              </p>
            </div>

            <div className="content-container">
              <div className="empty-state">
                <img className="image" src={Empty} alt="empty file" />
              </div>
              <div className="content-message">
                <p className="content-paragraph">
                  You have not added any content. Click the <br /> button below to
                  create one.
                </p>
                <Link to='/home/create/upload'><button className="content-button">Create content</button></Link>
              </div>
            </div>
          </section>
        )}
      </>
    )}
      
    </>
  );
};


const mapStoreToProps = (state) => {
  console.log(state)
  return {
    loading: state.content.loading,
    error: state.content.error,
    data: state.content.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchcontent: () => {
          dispatch(fetchcontent());
      },
  };
};
export default connect(mapStoreToProps, mapDispatchToProps)(ContentLibrary);
