import React from "react";
import "./styles.css";
import LottieAnimation from "../../Lotties";
import audio from '../../Assets/animation/audio.json';
import video from '../../Assets/animation/video.json';
import file from '../../Assets/animation/file.json';
import ContentModal from "../Modals/ContentModal";
const LibraryCard = ({ status, title, type, time, togglemodal, modal, url }) => {
  let statusColor = "";
  let anime
  if (status === "draft") {
    statusColor = "#FBEAE9";
  } else if (status === "Upcomming") {
    statusColor = "#e3effc";
  } else if (status === "Completed") {
    statusColor = "#E7F6EC";
  }
  if (type === "Audio") {
    anime = audio;
  } else if (type === "Video") {
    anime = video;
  } else if (type === "File") {
    anime = file;
  }
  return (
    <div className="library-card-container" onClick={togglemodal}>
      <div className="image-container">
        <div className="content-animation">
          <LottieAnimation data={anime}/>
        </div>
      </div>
      <div className="content">
        <div className="wrap">
          <p className="name">{title}</p>
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
          <p className="date">Uploaded {time}</p>
        </div>
      </div>
      {modal && (<ContentModal content_url={url}/>)}
    </div>
  );
};

export default LibraryCard;
