import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";

import "./App.css";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  let user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        // user = userAuth;
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
