import React, { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";
import "../components/SearchBar.css";
import "../components/Search.css";

//fetching popular movies
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3d11b45598d7855ede089fb154e694e8";
//for searching movies
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=3d11b45598d7855ede089fb154e694e8&query";
//for fetching genre data
const API_GENRES =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=3d11b45598d7855ede089fb154e694e8";

function Search() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  //filter
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=3d11b45598d7855ede089fb154e694e8&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  //filter
  useEffect(() => {
    // Fetch genre data
    fetch(API_GENRES)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGenres(data.genres);
      });
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      return selectedGenre === null || movie.genre_ids.includes(selectedGenre);
    });
    setFilteredMovies(filtered);
  }, [selectedGenre, movies]);

  return (
    <>
      <Form className="search-bar-container" onSubmit={searchMovie}>
        <FormControl
          type="search"
          placeholder="search movie"
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler}
        ></FormControl>
        <Button type="submit" className="search-button">
          Search{" "}
        </Button>
      </Form>
      {/* genre filter buttons */}
      <div>
        {genres.map((genre) => (
          <button
            className="btn btn-sm btn-outline-secondary"
            style={{ margin: "4px" }}
            key={genre.id}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="grid">
          {selectedGenre
            ? filteredMovies.map((movie) => (
                <MovieBox key={movie.id} {...movie} />
              ))
            : movies.map((movie) => <MovieBox key={movie.id} {...movie} />)}
        </div>
      </div>
    </>
  );
}

export default Search;
