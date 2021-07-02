import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Navbar from "../Navbar";
import "./ProfileScreen.css";

//STRIPE

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <React.Fragment>
      <div className="profileScreen">
        <Navbar />
        <div className="profileScreen__body">
          <h1>Edit profile</h1>
          <div className="profileScreen__info">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="Netflix Logo"
            />
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <h3>Plans</h3>

              <p>Renewal Date: 04/04/2021</p>

              <div className="profileScreen__plans">
                <div className="profileScreen__plan">
                  <div className="profileScreen__plan-details">
                    <h4>Netflix Standard</h4>
                    <span>1800p</span>
                  </div>
                  <button
                    className="profileScreen__plan-btn"
                    onClick={history.push("/payment")}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__plan">
                  <div className="profileScreen__plan-details">
                    <h4>Netflix Standard</h4>
                    <span>480p</span>
                  </div>
                  <button
                    className="profileScreen__plan-btn"
                    onClick={history.push("/payment")}
                  >
                    Subscribe
                  </button>
                </div>

                <div className="profileScreen__plan">
                  <div className="profileScreen__plan-details">
                    <h4>Netflix Standard</h4>
                    <span>480p</span>
                  </div>
                  <button className="subscribed">current package</button>
                </div>
              </div>

              <button
                onClick={() => {
                  auth.signOut();
                  // history.location("/");
                }}
                className="profileScreen__sign-out"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileScreen;
