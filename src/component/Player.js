import React, { useEffect, useRef } from "react";
import "./Player.css";
import { Chat } from "./Chat";

export const Player = ({ user, roomname, socket }) => {
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
        // autoPlay="autoplay"
        controls=""></video>
      <div style={{ position: "fixed", bottom: 0, right: 0 }}>
        {user && <Chat user={user} roomname={roomname} socket={socket} />}
      </div>
    </div>
  );
};
