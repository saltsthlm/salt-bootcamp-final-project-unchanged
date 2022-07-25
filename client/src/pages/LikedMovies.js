// import "../App.css"


const LikedMovies = ({ likedMovies }) => {
  // TODO: Delete list button ?? 
  
  const MovieCard = ({ movie }) => {
    return (
      <div className="moveList">
        {/* <h2>{movie.title}</h2> */}
        <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} />
        <p>Rating: {movie.rating}/10</p>
      </div>
    )
  }

  return (
    <section>
      {/* <h1>My Movies</h1> */}
      {likedMovies.map(el => <MovieCard key={el.id} movie={el} />)}
    </section>
  );
};

export default LikedMovies;