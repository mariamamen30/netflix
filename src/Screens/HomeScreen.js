import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Navbar from "../Navbar";
import Row from "../Row";
import requests from "../Requests";

const HomeScreen = () => {
  return (
    <nav className="homeScreen">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <Banner />
      {/* Movies' Rows */}

      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Theater" fetchUrl={requests.fetchTheatre} />
      {/* <Row title="Documentries" fetchUrl={requests.fetchDocumentries} /> */}
    </nav>
  );
};

export default HomeScreen;
