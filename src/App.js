import "./App.css";
import React, { useState, useEffect } from "react";
import { Curtains } from "./component/Curtains";
import { Login } from "./component/Login";
import { Home } from "./component/Home";

function App() {
  const [checked, setChecked] = useState(true);

  const logoStyleBig = {
    width: "358px",
    top: "50%",
  };

  let logoStyleSmall = { width: "150px", top: "15%" };

  return (
    <div className="App">
      <img
        style={checked ? logoStyleBig : logoStyleSmall}
        className="logo"
        src="fame.png"
        onClick={() => setChecked(!checked)}
      />
      <Curtains checked={checked} setChecked={setChecked} />
      <Login />
      {/* <Home /> */}
    </div>
  );
}

export default App;
