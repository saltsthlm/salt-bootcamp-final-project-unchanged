import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";

const imgHorror= "https://i.pinimg.com/736x/c1/13/81/c11381c6da7bfa31b4e7e49bccd15e97.jpg";
function Horror() {

  const[movies,setMovies]=useState([])
  
  const id = "27"
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
        <p>Horror</p>
      <img src={imgHorror} className="img"></img>
      {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}
      
    </div>
  );
}
export default Horror;