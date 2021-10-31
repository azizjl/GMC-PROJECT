import React from "react";
import { Movie } from "./Movie";
import "./MoviePlayer.css";

export const MoviePlayer = () => {
  return (
    <div className="MoviePlayer">
      <div
        style={{ backgroundImage: `url('titanic.jpg')` }}
        className="movieWaitWrapper">
        <img src="titanicLogo.png" className="logoMovieWait" />
        <span className="moviesTitles bold">Movie starts in 12:34:44</span>
        {/* <span className="moviesTitles">Vote down below</span> */}
        <div className="peoples">
          <div className="people">
            {/* <img src="photo.jpg" /> */}
            <video src="person.mov" loop autoplay="autoplay" muted></video>
          </div>
          <div className="people">
            <img src="photo.jpg" />
          </div>
          <div className="people">
            <img src="photo.jpg" />
          </div>
          <div className="people">
            <img src="photo.jpg" />
          </div>
          <div className="people">
            <img src="photo.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
