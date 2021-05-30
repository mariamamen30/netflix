import React, { useRef } from "react";
import firebase from "firebase";

import { auth } from "../firebase";

import "./SignupScreen.css";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="SignupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="SignupScreen__grey">
            New to Netflix? &nbsp;
            <span>
              <a className="SignupScreen__link" onClick={register}>
                Sign Up Now.
              </a>
            </span>
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignupScreen;
