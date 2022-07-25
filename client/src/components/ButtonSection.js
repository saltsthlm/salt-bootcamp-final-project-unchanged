import React, { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import "../App.css"


const ButtonSection = ({ counter, setCounter, dislikedMovies, setDislikedMovies, likedMovies, setLikedMovies, movie }) => {
  const { user } = useAuth0();
  const like = useRef(null);
  const dislike = useRef(null);
  
  const sendList = () => {
    fetch('http://localhost:3001/movie', {  
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        user: user.email,
        likedMovies: [...likedMovies],
        dislikedMovies: [...dislikedMovies]
      }) 
    })
  }
  
  const handleClick = (e) => {
    const newMovie = {
      title: movie.title,
      image: movie.poster_path,
      category: [...movie.genre_ids],
      rating: movie.vote_average,
      id: movie.id,
    }

    if(e.target === like.current){
      console.log(likedMovies);
      const newLikedMovies = likedMovies.slice() 
      newLikedMovies.push(newMovie)
      setLikedMovies(newLikedMovies);
    }
    if(e.target === dislike.current){
      const newDislikedMovies = dislikedMovies.slice() 
      newDislikedMovies.push(newMovie)
      setDislikedMovies(newDislikedMovies);
    }

    sendList();
    const newNum = counter + 1;
    setCounter(newNum);
  }

  return (
    <section className="voting-buttons">
      <button className="voting-buttons_btn" ref={dislike} onClick={(e) => handleClick(e)}>Dislike</button>
      <button className="voting-buttons_btn" ref={like} onClick={(e) => handleClick(e)}>Like</button>
    </section>
  )
}

export default ButtonSection;