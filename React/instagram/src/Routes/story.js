import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { animate, motion } from "framer-motion";
function Story() {
  return (
    <div className="story-container">
      <div className="story-nav">
        <img src="img/instagram-logo-white.png" width="100px" height="50px" />
      </div>

      <div className="story-feed">
        <button
          className="story-btn"
          onClick={() => {
            animate(".story-img", { scale: 0.5, x: -500, opacity: 0.5 });
            console.log("실행");
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          className="story-img"
          src="img/mon.jpg"
          width="20%"
          height="100%"
        />
        <button className="story-btn">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Story;
