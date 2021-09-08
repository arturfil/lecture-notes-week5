import { useState } from "react";

import './AddMovie.css'

const AddMovie = () => {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({
    title: "",
    director: "",
    IMDBRating: "",
    hasOscars: "",
  });

  const handleChange = (name) => (event) => {
    setSingleMovie({
      ...singleMovie,
      [name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovies([...movies, singleMovie]);
    setSingleMovie({
      title: "",
      director: "",
      IMDBRating: "",
      hasOscars: "",
    })
  }

  return (
    <>
      <h2 style={{marginBottom: '40px'}}>Add Movie Component</h2>

      { movies.length > 0 && movies.map((movie, i) => (
        <div key={i}>
          <h3>{movie.title}</h3>
          <p>{movie.director}</p>
          <p>{movie.IMDBRating}</p>
          <p>{movie.hasOscars}</p>
        </div>
      ))}

      { movies.length == 0 && (
        <h2>No movies added yet, please add movies</h2>
      )}


      <form className="addMovieBox">
        <h3>Add Movie</h3>
        <input
          onChange={handleChange('title')}
          value={singleMovie.title}
          className="form-control" 
          type="text" 
          placeholder="title" 
        />
        <input
          onChange={handleChange('director')}
          value={singleMovie.director}
          className="form-control" 
          type="text" 
          placeholder="director" 
        />
        <input
          onChange={handleChange('IMDBRating')}
          value={singleMovie.IMDBRating}
          className="form-control" 
          type="number" 
          placeholder="IMDBRating" 
        />
        <input
          onChange={handleChange('hasOscars')}
          value={singleMovie.hasOscars}
          className="form-control" 
          type="text" 
          placeholder="hasOscars" 
        />
        <button onClick={handleSubmit} className="btn btn-outline-primary">Create</button>
      </form>
    </>
  );
};

export default AddMovie;
