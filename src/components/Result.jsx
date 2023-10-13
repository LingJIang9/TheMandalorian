import React from "react";

function Result({ result }) {
  return (
    <div>
      <img src={result.Poster} alt="" />
      <h5>{result.Title}</h5>
    </div>
  );
}

export default Result;
