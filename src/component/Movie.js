import React, { useState, useEffect } from "react";
import "./Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Movie = ({
  movie,
  setMovie,
  video,
  title,
  logo,
  videoSource,
  backgroundUrl,
  scale,
  voted,
  setVoted,
  movieId,
}) => {
  const [movieClass, setMovieClass] = useState("");

  //   let movieClass_ = ["movie shadow", "movie", "movie votedByUser"];
  useEffect(() => {
    if (movie) {
      setMovieClass("movie shadow");
    } else if (voted) {
      setMovieClass("movie votedByUser");
    } else {
      setMovieClass("movie");
    }
  }, [movie, voted]);

  var interval = "";

  const handleMouseIn = () => {
    interval = setTimeout(() => {
      setMovie(true);
    }, 4000);
  };

  const handleMouseOut = () => {
    clearTimeout(interval);
    setMovie(false);
  };

  return (
    <div
      //   onClick={() => setVoted(movieId)}
      //   onMouseEnter={() => {
      //     handleMouseIn();
      //   }}
      //   onMouseLeave={() => handleMouseOut()}
      style={
        movie
          ? {
              transform: scale,
              zIndex: 999,
              backgroundImage: `url('${backgroundUrl}')`,
            }
          : { transform: "scale(1)", backgroundImage: `url('titanic.jpg')` }
      }
      className={movieClass}>
      <video
        className={movie ? "show" : "hide"}
        ref={video}
        controls={false}
        src={videoSource}></video>
      <img src={logo} className="movieLogo" />
      {!movie ? (
        <>
          <div className="voters">
            <span>120</span>
            <img src="https://image.flaticon.com/icons/png/512/561/561163.png" />
          </div>
          <div className="playBtn">
            <button
              onClick={() => {
                setMovie(true);
              }}>
              Watch trailer
            </button>
            <FontAwesomeIcon
              onClick={() => setVoted(movieId)}
              className="voteBtn"
              icon={faHeart}
              color={voted ? "black" : "rgb(155, 2, 2)"}
            />
          </div>
        </>
      ) : (
        // <div className="voteWrapper">
        //   <button>Vote for this</button>
        // </div>
        <div className="closeWrapper">
          <button onClick={() => handleMouseOut()}>X</button>
        </div>
      )}
    </div>
  );
};
