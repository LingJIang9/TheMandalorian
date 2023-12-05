import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import HeroMyBooks from "../assets/hero2.png";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { useAuth } from "../components/context/AuthContext.jsx";
function MyWatchlist() {
  const { authUser } = useAuth();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (authUser && authUser.Name) {
      axios
        .get(`/mywatchlist/${authUser.Name}`) // Ensure this matches your endpoint
        .then((response) => {
          setWatchlist(response.data);
        })
        .catch((error) => {
          console.error("Error fetching watchlist:", error);
        });
    }
  }, [authUser]);

  return (
    <>
      <Hero cName="hero" url={HeroMyBooks} />
      <h1>My Watchlist</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {watchlist.map((movie) => (
          <div
            key={movie._id}
            className="movie-item"
            style={{ width: "25%", padding: "10px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              style={{ width: "100%", height: "auto" }}
            ></img>
            <h5>{movie.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyWatchlist;
