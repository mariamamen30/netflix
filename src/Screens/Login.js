import React, { useState } from "react";
import "./Login.css";
import SignupScreen from "./SignupScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart you
              membership.
            </h3>

            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
