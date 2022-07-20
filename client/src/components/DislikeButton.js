import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppContext from "..";

const DislikeButton = () => {
  //console.log(movie);
  //This state should be higher up. Maybe make context.
  const { dislikedMovies, setDislikedMovies, movie, setCounter, counter } = useContext(AppContext);
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
    const newDislikedMovies = [...dislikedMovies].push(newDislikedMovies);
    setDislikedMovies(newDislikedMovies);
     // This have to be changed to handle dislikes
    sendList();
    const newNum = counter + 1;
    setCounter(newNum);
  }
  
  //Add a like-icon later
  return <button onClick={() => handleLike()}>Like</button>;
};

export default DislikeButton;