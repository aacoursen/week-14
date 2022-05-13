import React from 'react';
import Movie from './Movie.jsx';

const MovieList = ({ movies }) => {
  return (
    <div>
      { movies.map((movie) => { return <Movie name={ movie.name} genre={movie.genre}/>})}
    </div>
  );
};
  
export default MovieList;