import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";

const imgDrama= "https://i.pinimg.com/736x/30/12/34/30123417c776ac9f62d447d1e6dff12a.jpg";
function Drama() {

  const[movies,setMovies]=useState([])
  
  const id = "18"
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
        <p>Drama</p>
      <img src={imgDrama} className="img"></img>
      {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}
      
    </div>
  );
}
export default Drama;