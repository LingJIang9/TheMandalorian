import "./SearchBar.css";
import React, { useState } from "react";

function SearchBar({ handleSearch, searchResult }) {
  const [searchText, setSearchText] = useState(""); // Use a state to store the search text

  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Update the search text in the state
    handleSearch(e); // Call handleSearch to update the state in the parent component
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="search movies"
        name="search"
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={searchResult}>search</button>
    </div>
  );
}

export default SearchBar;
