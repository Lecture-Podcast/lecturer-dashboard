import React, { useEffect } from "react";
import "./content-library.css";
import Empty from "../../Assets/images/Empty.svg";
import LibraryCard from "../../Components/LibraryCard";
import { fetchcontent } from "../../Redux/Content/CotentAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import loading2 from "../../Assets/animation/loadingmain.json"
import LottieAnimation from "../../Lotties";
const ContentLibrary = ({
  fetchcontent,
  loading,
  error,
  data
}) => {
  console.log(data)
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
        {(data.contents) ? (
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
                      return(
                        <LibraryCard status="draft" title={content.course_title} type={content.content_type} time={content.timestamp.slice(0,10)}/>
                      )
                    })}
                    {/* <LibraryCard status="draft" />
                    <LibraryCard status="Upcomming" />
                    <LibraryCard status="Completed" />
                    <LibraryCard status="draft" />
                    <LibraryCard status="Upcomming" />
                    <LibraryCard status="Completed" />
                    <LibraryCard status="draft" /> */}
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
                <Link to='/create/upload'><button className="content-button">Create content</button></Link>
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
