import Hero from "../components/Hero";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

import Result from "../components/Result.jsx";
import "../components/Browse.css";
// import { response } from "express";

function Browse() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {},
  });
  const handleSearch = (e) => {
    let search = e.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  const searchResult = (e) => {
    if (e) {
      axios
        .get(
          "http://www.omdbapi.com/?i=tt3896198&apikey=eacfea2b" +
            "&s=" +
            state.search
        )
        .then((res) => {
          console.log(res);
          setState((prevState) => {
            return { ...prevState, results: res.data.Search };
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Hero
        cName="hero-browse"
        url="src/assets/hero1.png"
        // title="Search Books"
        // text="Manage books you are reading, want to read and have read"
      />

      <SearchBar handleSearch={handleSearch} searchResult={searchResult} />
      <div>
        <div className="search-result-container">
          {state.results &&
            state.results.map((result) => (
              <div key={result.imdbID} className="result-card">
                <Result result={result} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
