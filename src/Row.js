import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const BASE_URL = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //Snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
    // [], run once when the row loads, and dont run again
    //We have to use fetchUrl becouse now is a dependency
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row-poster"
            src={`${BASE_URL}${movie.poster_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
