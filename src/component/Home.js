import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [firstMovie, setFirstMovie] = useState(false);
  const [secondtMovie, setSecondtMovie] = useState(false);
  const [thirdMovie, setThirdMovie] = useState(false);

  const first_video = useRef();
  const second_video = useRef();
  const third_video = useRef();

  useEffect(() => {
    if (firstMovie) {
      first_video.current.play();
    } else {
      first_video.current.pause();
      first_video.current.currentTime = 0;
    }
    if (secondtMovie) {
      second_video.current.play();
    } else {
      second_video.current.pause();
    }
    if (thirdMovie) {
      third_video.current.play();
    } else {
      third_video.current.pause();
    }
  }, [firstMovie, secondtMovie, thirdMovie]);

  return (
    <div className="movieWrapper">
      <div className="moviesList">
        <div
          onMouseOver={() => setFirstMovie(true)}
          onMouseOut={() => setFirstMovie(false)}
          style={
            firstMovie
              ? {
                  transform: "scale(1.5) translate(80%, 0px)",
                  backgroundImage: `url('titanic.jpg')`,
                }
              : { transform: "scale(1)", backgroundImage: `url('titanic.jpg')` }
          }
          className={firstMovie ? "movie shadow" : "movie"}>
          <video
            className={firstMovie ? "show" : "hide"}
            ref={first_video}
            controls={false}
            src="titanicTR.mp4"></video>
          <img src="titanicLogo.png" className="movieLogo" />
        </div>
        <div
          autoPlay={secondtMovie}
          onMouseOver={() => setSecondtMovie(true)}
          onMouseOut={() => setSecondtMovie(false)}
          style={
            secondtMovie
              ? { transform: "scale(1.5)" }
              : { transform: "scale(1)" }
          }
          className={secondtMovie ? "movie shadow" : "movie"}>
          <video ref={second_video} controls={false} src="video.mp4"></video>
          <span>Fast and furious</span>
        </div>
        <div
          autoPlay={thirdMovie}
          onMouseOver={() => setThirdMovie(true)}
          onMouseOut={() => setThirdMovie(false)}
          style={
            thirdMovie
              ? { transform: "scale(1.5) translate(-80%, 0px)" }
              : { transform: "scale(1)" }
          }
          className={thirdMovie ? "movie shadow" : "movie"}>
          <video ref={third_video} controls={false} src="TR.mp4"></video>
          <span>The notebook</span>
        </div>
      </div>
    </div>
  );
};
