import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header uperIndex">
      <div className="left">
        <span>Tickets</span>
        <span>Upcoming</span>
        <span>Help</span>
      </div>
      <div className="right">
        <span>Contact Us</span>
        <span>Logout</span>
        <span className="profilImg">
          Aziz Jl
          <img src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg" />
        </span>
      </div>
    </div>
  );
};
