import "./App.css";
import React, { useState, useEffect } from "react";
import { Curtains } from "./component/Curtains";
import { Login } from "./component/Login";
import { Home } from "./component/Home";
import { MoviePlayer } from "./component/MoviePlayer";
import { Recorder } from "./component/Recorder";

function App() {
  const [checked, setChecked] = useState(true);

  const logoStyleBig = {
    width: "358px",
    top: "50%",
  };

  let logoStyleSmall = { width: "150px", top: "10%" };
  let movieWait = {
    left: "translateX(-80%)",
    right: "translateX(80%)",
  };
  return (
    <div className="App">
      <img
        style={checked ? logoStyleBig : logoStyleSmall}
        className="logo"
        src="fame.png"
        onClick={() => setChecked(!checked)}
      />
      <Curtains
        movieWaitLeft={movieWait.left}
        movieWaitRight={movieWait.right}
        checked={checked}
        setChecked={setChecked}
      />
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <MoviePlayer /> */}
      <Recorder />
    </div>
  );
}

export default App;
