import React from "react";

const Movie = ({ name, genre }) => {
    return (
      <div>
      <h1>Movie Title</h1>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
    );
  };
    
  export default Movie;