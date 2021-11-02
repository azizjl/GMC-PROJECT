import "./App.css";
import React, { useState, useEffect } from "react";
import { Curtains } from "./component/Curtains";
import { Login } from "./component/Login";
import { Home } from "./component/Home";
import { MoviePlayer } from "./component/MoviePlayer";
import { Recorder } from "./component/Recorder";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./component/PrivateRoute/PrivateRoute";

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions/userAction";
import { Player } from "./component/Player";

function App() {
  //auth

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    dispatch(getProfile());
  }, [isAuth]);

  //

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
        // movieWaitLeft={movieWait.left}
        // movieWaitRight={movieWait.right}
        checked={checked}
        setChecked={setChecked}
      />

      <Switch>
        <PrivateRoute exact path="/" render={() => <Home />} />
        <Route
          path="/login"
          render={() => (
            <Login checked={checked} setChecked={setChecked} SignIn={true} />
          )}
        />
        <Route
          path="/register"
          render={() => (
            <Login checked={checked} setChecked={setChecked} SignIn={false} />
          )}
        />
        <Route path="/movie" render={() => <Player />} />
        <Route path="/waiting" render={() => <MoviePlayer />} />
      </Switch>
    </div>
  );
}

export default App;
