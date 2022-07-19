import React, { useEffect, useState, Container } from "react";
import { BrowserRouter} from "react-router-dom"
// import MovieBox from "./MovieBox";
import Movies from "./Movies";


function Movie() {
  const [ movies, setMovies ] = useState([]);

  // useEffect (()=>{
  //   fetch('http://localhost:3001/movie')
  //   .then(res => res.json())
  //   .then(data =>{ 
  //       console.log(data);
  //     setMovies(data.results);
  //   })
  
  // },[])
  
  return (
     <BrowserRouter>
    
    <div className="App">
      {/* {movies.map(movie => 
      <MovieBox key={movie.id} {...movie}/>)} */}
     
      <Movies></Movies>

    </div>
   </BrowserRouter>
  );
}
export default Movie;