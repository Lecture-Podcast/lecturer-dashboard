import React, { useEffect } from "react";
import "./content-library.css";
import LibraryCard from "../../Components/LibraryCard";
import { fetchcontent } from "../../Redux/Content/CotentAction";
import { connect } from "react-redux";

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
