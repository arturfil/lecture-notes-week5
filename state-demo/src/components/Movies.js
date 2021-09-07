import { useState } from 'react';
import data from '../MoviesData.json'


const Movies = () => {
  const [movies, setMovies] = useState(data);
  const [loading, setLoading] = useState(false);

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== id;
    });
    setMovies(filteredMovies);
  }

  const moviesList = () => (
    movies.map(movie => {
      if (movie.IMDBRating > 8.8) {
        return (
          <div className="movieCard" key={movie._id}>
              <h3>{movie.title}</h3>
            <button 
              onClick={() => deleteMovie(movie._id)} 
              className="btn btn-danger">Delete
            </button>
          </div>
        )
      }
    })
  )
  

  return (
    <>
      <h2>Movies Component</h2>
      
      {/* Loader */}
      { loading && <h2 style={{color: 'red'}}>Loading...</h2>}
      
      <div className="container moviesContainer">
        {/* {moviesList()} */}
        

        {/* movies with oscars & without  */}
        { movies.map(movie => (
          movie.hasOscars == true ? (
            <div className="movieCard" key={movie._id}>
              <h3>Has Oscars: {movie.title}</h3>
            </div>
          ) : (
            <div className="movieCard" key={movie._id}>
              <h3>No Oscars: {movie.title}</h3>
            </div>
          )
        ))}


      </div>
      <button 
        onClick={() => setLoading(!loading)}
        className="btn-success">
        {loading ? 'stop' : 'start'}
      </button>
    </>
  )
}

export default Movies;