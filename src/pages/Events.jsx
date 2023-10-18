import React, { useEffect, useState } from "react";
import MovieBox from "../components/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=3d11b45598d7855ede089fb154e694e8";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=3d11b45598d7855ede089fb154e694e8&query";

function Events() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

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
  return (
    <>
      <Form className="d-flex" onSubmit={searchMovie}>
        <FormControl
          type="search"
          placeholder="search movie"
          className="me-2"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler}
        ></FormControl>
        <Button type="submit">Search </Button>
      </Form>
      <div className="container">
        <div className="grid">
          {movies.map((movieReq) => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Events;
