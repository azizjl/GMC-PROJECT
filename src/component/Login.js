import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [SignIn, setSignIn] = useState(true);
  return (
    <div
      className="login_wrapper"
      style={{
        backgroundImage: `url("popcorn.png")`,
      }}>
      {SignIn ? (
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          <span>
            Don't have an account ?{" "}
            <span
              onClick={() => setSignIn(false)}
              style={{ fontWeight: "bold", cursor: "pointer" }}>
              Sign up here
            </span>
          </span>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Sign up</button>
          <span>
            Already have an account ?{" "}
            <span
              onClick={() => setSignIn(true)}
              style={{ fontWeight: "bold", cursor: "pointer" }}>
              Sign in here
            </span>
          </span>
        </form>
      )}
    </div>
  );
};
