import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppContext from "..";

const DislikeButton = () => {
  //console.log(movie);
  //This state should be higher up. Maybe make context.
  const { dislikedMovies, likedMovies, setDislikedMovies, movie, setCounter, counter } = useContext(AppContext);
  const { user } = useAuth0();
  // This have to be changed to handle dislikes
  const sendList = () => {
    fetch('http://localhost:3001/movie', {  
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        user: user.email,
        likedMovies: {...likedMovies},
        dislikedMovies: {...dislikedMovies}
        }) 
    })
  }
  const handleLike = () => {
    const newDislikedMovie = {
      title: movie.title,
      image: movie.poster_path,
      category: [...movie.genre_ids],
      rating: movie.vote_average,
      id: movie.id,
    }
    
    const newDislikedMovies = dislikedMovies.slice() 
    newDislikedMovies.push(newDislikedMovie)
    setDislikedMovies(newDislikedMovies);
    console.log(newDislikedMovies);
     // This have to be changed to handle dislikes
    sendList();
    const newNum = counter + 1;
    setCounter(newNum);
  }
  
  //Add a like-icon later
  return <button onClick={() => handleLike()}>Dislike</button>;
};
export default DislikeButton;