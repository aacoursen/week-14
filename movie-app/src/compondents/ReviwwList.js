import React from "react";
import Movie from "./Movie.jsx";

const ReviewList = ({ movies }) => {
    return (
      <div>
        { movies.map((movie) => { return movie.name}) }
      </div>
    );
  };
    
  export default ReviewList;