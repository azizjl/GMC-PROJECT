import React, { useState } from "react";
import "./Curtains.css";

export const Curtains = ({
  checked,
  setChecked,
  movieWaitLeft,
  movieWaitRight,
}) => {
  return (
    <div
      style={checked ? {} : { pointerEvents: "none" }}
      class="curtain"
      onClick={() => setChecked(!checked)}>
      <div class="curtain__wrapper">
        <input type="checkbox" checked={checked} />
        <div
          class="curtain__panel curtain__panel--left"
          style={movieWaitLeft ? { transform: movieWaitLeft } : {}}></div>

        <div
          class="curtain__panel curtain__panel--right"
          style={movieWaitRight ? { transform: movieWaitRight } : {}}></div>
      </div>
    </div>
  );
};
