import React from "react";
import "./Banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://interprete.me/wp-content/uploads/2018/12/you-netflix-series-stalker-maniac-lover-header.jpg')`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">Title</h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__descreption">
          {truncate(
            "This is a test. This is a test. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.",
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
