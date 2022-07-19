import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LikeButton = ( movie ) => {
  console.log(movie);
  const [likedMovies, setLikedMovies ] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    // Send data to the backend via POST
    // Endre dette til riktig path senere
    fetch('http://localhost:3001/likedMovieList', {  // Enter your IP address here
     method: 'POST', 
     mode: 'cors', 
     body: JSON.stringify({
      user: user.email,
      likedMovies: {...likedMovies}
     }) // body data type must match "Content-Type" header
  })
  }, [likedMovies]);

  const handleLike = () => {
    const newLikedMovie = {
      title: movie.title,
      image: movie.poster_path,
      category: [...movie.genre_ids],
      rating: movie.vote_average,
      id: movie.id,
    }
    const newLikedMovies = [...likedMovies].push(newLikedMovie);
    setLikedMovies(newLikedMovies);
  }
  
  //Add a like-icon later
  return <button onClick={() => handleLike()}>Like</button>;
};

export default LikeButton;