
import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";


const imgRomance= "https://i.pinimg.com/originals/3b/27/40/3b2740afadbc1ffed4546ce1b7169e67.jpg";
function Romance({ }) {
  
  const[movies,setMovies]=useState([])
  
  const id = "10749"
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
        <p>Romance</p>
      <img src={imgRomance} className="img"></img>
      {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}

      
    </div>
  );
}
export default Romance;