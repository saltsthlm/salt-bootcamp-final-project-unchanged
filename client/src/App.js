import React, { useEffect, useState } from "react";
import "./App.css";
import MovieBox from "./components/MovieBox";

function App() {
  const[movies,setMovies]=useState([])
  // const  example = ["one", "two"]


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
export default App;