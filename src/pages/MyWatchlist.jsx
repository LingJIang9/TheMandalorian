import React, { useState, useEffect } from "react";
import Hero from "../components/Hero.jsx";
import HeroMyBooks from "../assets/hero2.png";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

//toast to show message
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  //delete movie from watchlist
  const HandleDeleteMovie = (id, username) => {
    if (!id || !username) {
      console.error("Invalid id or username:", id, username);
      toast.error("Invalid parameters for movie deletion");
      return;
    }
    {
      axios
        .delete(`/mywatchlist/${id}/${username}`)
        .then((response) => {
          console.log("movie deleted successfully", response.data);

          const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
          setWatchlist(updatedWatchlist);
          toast("movie deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting movie:", error);
          toast.error("movie deleted failed");
        });
    }
  };

  return (
    <>
      <Hero cName="hero" url={HeroMyBooks} />
      <h1>My Watchlist</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "30px",
        }}
      >
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div
              key={movie._id}
              className="movie-item"
              style={{
                width: "20%",
                padding: "10px",
                border: "0.5px solid grey",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                style={{ width: "100%", height: "auto" }}
              ></img>
              <h5 style={{ height: "2.6em" }}>{movie.title}</h5>
              <button
                className="btn btn-secondary"
                onClick={() => HandleDeleteMovie(movie.id, authUser.Name)}
              >
                Delete Movie
              </button>
            </div>
          ))
        ) : (
          <p>Your watchlist is empty.</p>
        )}
        <ToastContainer
          position="top-center"
          autoClose={200}
          hideProgressBar={true}
        />
      </div>
    </>
  );
}

export default MyWatchlist;
