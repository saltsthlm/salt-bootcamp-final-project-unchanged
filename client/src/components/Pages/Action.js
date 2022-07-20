import React, { useState, useEffect } from "react";
 import MovieBox from "../MovieBox";

const imgAction= "https://i.pinimg.com/originals/85/94/4b/85944bb3cd30e85be64faa9988d31e47.jpg";
function Action() {
    const[movies,setMovies]=useState([])
  
  const id = "28"
    useEffect (()=>{
      fetch(`http://localhost:3001/movie/${id}`)
      .then(res => res.json())
      .then(data =>{ 
          console.log(data);
        setMovies(data.results);
      })
    
    },[])

  return (
    <div className="action">
        <p>Action</p>
        <img src={imgAction}  className="img"></img>
         {movies.map(movie => 
        <MovieBox key={movie.id} {...movie}/>)}
      
    </div>
  );
}
export default Action;
