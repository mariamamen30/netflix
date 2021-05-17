import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  //getting a random movie form apis
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopular);
      console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      // console.log(movie);
      return request;
    }
    fetchData();
  }, []);

  //For trimming long strings
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        // color: "black",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie?.original_title}</h1>
        <div className="banner__buttons">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>
        <h1 className="banner__descreption">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
