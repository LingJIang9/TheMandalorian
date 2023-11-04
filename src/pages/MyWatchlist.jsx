import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import HeroMyBooks from "../assets/hero2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import axios from "axios";

function MyWatchlist() {
  const [watchlist, setWatchlist] = useState([]); // You can use this state to store the movies in your watchlist
  const [selectedMovie, setSelectedMovie] = useState(null); // This state will be used to show details of a selected movie

  useEffect(() => {
    // Fetch the watchlist from your server when the component mounts
    axios.get("/watchlist").then((response) => {
      setWatchlist(response.data);
    });
  }, []);

  // Function to handle showing movie details
  const handleShowMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <Hero cName="hero" url={HeroMyBooks} />
      <h1>My Watchlist</h1>
      <div>
        {/* Display the movies in your watchlist */}
        {watchlist.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              className="movie-poster"
              src={movie.poster_path}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <button onClick={() => handleShowMovieDetails(movie)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for showing movie details */}
      <Modal
        show={selectedMovie !== null}
        onHide={() => setSelectedMovie(null)}
      >
        <Modal.Body>
          {selectedMovie && (
            <>
              <img
                className="card-img-top"
                style={{ width: "14em" }}
                src={selectedMovie.poster_path}
                alt={selectedMovie.title}
              />
              <h3>{selectedMovie.title}</h3>
              <h4>ImDb: {selectedMovie.vote_average}</h4>
              <h5>Release date: {selectedMovie.release_date}</h5>
              <br />
              <h6>Overview</h6>
              <p>{selectedMovie.overview}</p>
              <h6>ID</h6>
              <p>{selectedMovie.id}</p>
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyWatchlist;
