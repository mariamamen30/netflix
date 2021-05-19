import React, { useState, useEffect, Component } from "react";
import "./Row.css";
import axios from "./axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      //get data from APIs
      const request = await axios.get(fetchUrl);
      //spread oppreator used for the double asyncronous code
      //set data to movies
      setMovies([...request.data.results]);

      return request;
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="row">
        <h3 className="row__title">{title}</h3>

        <div className="row__posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row__poster ${isLargeRow && "row__poster-large"}`}
                  key={movie.id}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                />
              )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Row;
