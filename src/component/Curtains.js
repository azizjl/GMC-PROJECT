import React, { useState } from "react";
import "./Curtains.css";

export const Curtains = ({ checked, setChecked }) => {
  return (
    <div
      style={checked ? {} : { pointerEvents: "none" }}
      class="curtain"
      onClick={() => setChecked(!checked)}>
      <div class="curtain__wrapper">
        <input type="checkbox" checked={checked} />
        <div class="curtain__panel curtain__panel--left"></div>
        {/* ///////// */}
        {/* <div class="curtain__content">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/trophy.svg" />
          <h2>Achievement Unlocked!</h2>
        </div> */}
        {/* ///////// */}

        <div class="curtain__panel curtain__panel--right"></div>
        {/* ///////// */}
      </div>
    </div>
  );
};
