import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";

const imgAnimation= "https://www.liveabout.com/thmb/HiKmFTriz9GQr-JxoToyFSDhtPQ=/338x500/filters:fill(auto,1)/TheNutJob-56a575333df78cf772887292.jpg";
function Animate() {

  const[movies,setMovies]=useState([])
  
  const id = "16"
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
        <p>Animation</p>
      <img src={imgAnimation} className="img"></img>
      {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}
      
    </div>
  );
}
export default Animate;