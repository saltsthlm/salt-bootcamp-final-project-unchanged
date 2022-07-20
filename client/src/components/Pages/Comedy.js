import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";

const imgComedy= "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg";
function Comedy({}) {

  const[movies,setMovies]=useState([])
  
  const id = "35"
    useEffect (()=>{
      fetch(`http://localhost:3001/movie/${id}`)
      .then(res => res.json())
      .then(data =>{ 
          console.log(data);
        setMovies(data.results);
      })
    
    }, [])
  
  return (
    <div className="action">
        <p>Comedy</p>
      <img src={imgComedy} className="img"></img>
      {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}
      
    </div>
  );
}
export default Comedy;