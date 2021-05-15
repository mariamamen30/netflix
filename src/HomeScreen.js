import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Navbar from "./Navbar";

const HomeScreen = () => {
  return (
    <nav className="homeScreen">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Banner />
      {/* Movies' Rows */}
    </nav>
  );
};

export default HomeScreen;
