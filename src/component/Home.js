import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { Movie } from "./Movie";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [time_r, setTime_r] = useState("00:00:00");

  //timer

  useEffect(() => {
    var timer = setInterval(function () {
      var now = new Date();
      var then = new Date(now);
      then.setDate(then.getDate() + 1);
      then.setHours(20);
      then.setMinutes(0);
      then.setSeconds(0);
      then.setMilliseconds(0);
      let left = then.getTime() - now.getTime();

      let duration = left;
      var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

      setTime_r(
        `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`
      );
    }, 1000);
  });

  //timer end

  const [voted, setVoted] = useState(0);

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
      second_video.current.currentTime = 0;
    }
    if (thirdMovie) {
      third_video.current.play();
    } else {
      third_video.current.pause();
      third_video.current.currentTime = 0;
    }
  }, [firstMovie, secondtMovie, thirdMovie]);

  return (
    <>
      <Header user={user} />
      <div className="movieWrapper">
        {/* style={{ backgroundImage: "url('popcorn.png')" }}> */}
        <span style={{ textAlign: "center" }} className="moviesTitles bold">
          Next movie starts in <br /> {time_r}
        </span>
        <span className="moviesTitles">Vote down below</span>
        <div className="moviesList">
          <Movie
            video={first_video}
            movie={firstMovie}
            setMovie={setFirstMovie}
            title="Fast and furious"
            videoSource="video.mp4"
            backgroundUrl="titanic.jpg"
            scale="scale(1.5) translate(80%, 0px) translateY(-45px)"
            logo="titanicLogo.png"
            voted={voted === 1}
            setVoted={setVoted}
            movieId={1}
          />
          <Movie
            video={second_video}
            movie={secondtMovie}
            setMovie={setSecondtMovie}
            title="titanic"
            videoSource="titanicTR.mp4"
            backgroundUrl="titanic.jpg"
            scale="scale(1.5) translateY(-45px)"
            logo="titanicLogo.png"
            voted={voted === 2}
            setVoted={setVoted}
            movieId={2}
          />
          <Movie
            video={third_video}
            movie={thirdMovie}
            setMovie={setThirdMovie}
            title="After"
            videoSource="video.mp4"
            backgroundUrl="titanic.jpg"
            scale="scale(1.5) translate(-80%, 0px) translateY(-45px)"
            logo="titanicLogo.png"
            voted={voted === 3}
            setVoted={setVoted}
            movieId={3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
