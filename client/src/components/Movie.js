import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie({ movie }) { 
  // title, poster_path, vote_average, release_date,overview
  return (
    <div className="App">
      <img src={API_IMG+movie.poster_path} alt={movie.title}></img>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
        MOVIE INFO
    </div>
  );
}
export default Movie;