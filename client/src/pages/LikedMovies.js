// import "../App.css"


const LikedMovies = ({ likedMovies, setLikedMovies }) => {
  // TODO: Delete list button ?? 
  // TODO: Return message if no liked movies
  
  const MovieCard = ({ movie }) => {
    const removeCard = () =>{
      console.log("button");
      const filterMovie = likedMovies.filter(el => el.id !== movie.id)
      console.log("filter",filterMovie);
      setLikedMovies(filterMovie)
      return (
       <div>
         {likedMovies.map(el => <MovieCard key={el.id} movie={el} />)}
       </div>
         
      );
    }

    return (
      <div className="liked-movie">
        <img className="liked-movie_img" src={`https://image.tmdb.org/t/p/w500/${movie.image}`} />
        <div className="liked-movie_info">
          <h2>{movie.title}</h2>
          <button className="remove-btn" onClick={removeCard}>Remove</button>
        </div>
      </div>
    )
  }

  return (
    <section className="liked-movies_section">
      <h1 className="liked-movies_heading">My Movies</h1>
      <div className="liked-movies_list">
      {likedMovies.map(el => <MovieCard key={el.id} movie={el} />)}
      </div>
    </section>
  );
};

export default LikedMovies;