import React from "react";
import "./content-library.css";
import LibraryCard from "../../Components/LibraryCard";

const ContentLibrary = () => {
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
            <LibraryCard status="draft" />
            <LibraryCard status="Upcomming" />
            <LibraryCard status="Completed" />
            <LibraryCard status="draft" />
            <LibraryCard status="Upcomming" />
            <LibraryCard status="Completed" />
            <LibraryCard status="draft" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentLibrary;
