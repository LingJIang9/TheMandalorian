import React from "react";
import "../components/Result.css";

function Result({ result, openDetail }) {
  return (
    <div>
      <div
        onClick={(e) => openDetail(result.omdbID)}
        className="result-img-container"
      >
        <img src={result.Poster} alt="" className="result-img" />
        <h5>{result.Title}</h5>
      </div>
    </div>
  );
}

export default Result;
