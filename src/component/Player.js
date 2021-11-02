import React, { useEffect, useRef } from "react";
import "./Player.css";

export const Player = () => {
  useEffect(() => {
    console.log("play");
    videoRef.current.play();
    videoRef.current.muted = false;
  }, []);

  const videoRef = useRef();
  return (
    <div className="Player">
      <video
        ref={videoRef}
        src="http://localhost:5000/video"
        autoPlay="autoplay"
        controls=""></video>
    </div>
  );
};
