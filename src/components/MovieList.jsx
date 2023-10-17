import React from "react";
import "../components/MovieList.css";

function MovieList(props) {
  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
