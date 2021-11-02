import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/userAction";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Header = ({ user }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <div className="Header uperIndex">
      <div className="left">
        <span>Tickets</span>
        <span>Upcoming</span>
        <span>Help</span>
      </div>
      <div className="right">
        <span>Contact Us</span>
        <Link to="/login" onClick={() => dispatch(logout())}>
          <span>Logout</span>
        </Link>
        <Link to="/movie">
          <span>Watch</span>
        </Link>
        <span className="profilImg">
          {user && user.fullName}
          <img src="https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg" />
        </span>
      </div>
    </div>
  );
};
