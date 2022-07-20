import React, { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppContext from "..";

const LikeButton = () => {
  //console.log(movie);
  //This state should be higher up. Maybe make context.
  const { movie, setCounter, counter, likedMovies, setLikedMovies } = useContext(AppContext);
  const { user } = useAuth0();

  const sendList = () => {
    fetch('http://localhost:3001/movie', {  
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        user: user.email,
        likedMovies: {...likedMovies}
        }) 
    })
  }

  const handleLike = () => {
    const newLikedMovie = {
      title: movie.title,
      image: movie.poster_path,
      category: [...movie.genre_ids],
      rating: movie.vote_average,
      id: movie.id,
    }
    const newLikedMovies = likedMovies.slice();
    newLikedMovies.push(newLikedMovie);
    setLikedMovies(newLikedMovies);
    sendList();
    const newNum = counter + 1;
    setCounter(newNum);
  }
  
  //Add a like-icon later
  return <button onClick={() => handleLike()}>Like</button>;
};

export default LikeButton;