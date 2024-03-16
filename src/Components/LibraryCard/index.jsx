import React from "react";
import "./styles.css";

const LibraryCard = ({ status }) => {
  let statusColor = "";
  if (status === "draft") {
    statusColor = "#FBEAE9";
  } else if (status === "Upcomming") {
    statusColor = "#e3effc";
  } else if (status === "Completed") {
    statusColor = "#E7F6EC";
  }
  return (
    <div className="library-card-container">
      <div className="image-container"></div>
      <div className="content">
        <div className="wrap">
          <p className="name">ContentName</p>
          <p
            className="status"
            style={{
              backgroundColor: statusColor,
            }}
          >
            {status}
          </p>
        </div>
        <p className="text">
          Amet eget tellus condimentum molestie scelerisque a aliquam pretium.
          Ipsum id odio a duis. Porttitor auctor volutpat quis ullamcorper est.
        </p>
        <div>
          <p className="date">Uploaded 12/04/2024</p>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
