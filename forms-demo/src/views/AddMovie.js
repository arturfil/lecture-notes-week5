import { useState } from "react";

import './AddMovie.css'

const AddMovie = () => {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState({
    title: "",
    director: "",
    IMDBRating: "",
    hasOscars: null,
  });

  return (
    <>
      <h2>Add Movie Component</h2>

      <form className="addMovieBox">
        <h3>Add Movie</h3>
        <input
          className="form-control" 
          type="text" 
          placeholder="title" 
        />
        <input
          className="form-control" 
          type="text" 
          placeholder="director" 
        />
        <input
          className="form-control" 
          type="number" 
          placeholder="IMDBRating" 
        />
        <input
          className="form-control" 
          type="text" 
          placeholder="hasOscars" 
        />
      </form>
    </>
  );
};

export default AddMovie;
