import React, { useEffect, useState } from "react";
import MovieBox from "./MovieBox";

function Movie() {
  const[movies,setMovies]=useState([])


  useEffect (()=>{
    fetch('http://localhost:3001/movie')
    .then(res => res.json())
    .then(data =>{ 
        console.log(data);
      setMovies(data.results);
    })
  
  },[])

  
  
  return (
    <div className="App">
      {movies.map(movie => 
      <MovieBox key={movie.id} {...movie}/>)}

    </div>
  );
}
export default Movie;