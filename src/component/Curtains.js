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

        <div class="curtain__panel curtain__panel--right"></div>
      </div>
    </div>
  );
};
