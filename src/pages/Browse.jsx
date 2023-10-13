import Hero from "../components/Hero";

import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Browse() {
  const [search, setSearch] = useState({
    input: "",
    result: [],
  });
  const handleInput = (e) => {
    let input = e.target.value;
    setSearch((prevSearch) => {
      return { ...prevSearch, input: input };
    });
  };
  return (
    <div>
      <Hero
        cName="hero-browse"
        url="src/assets/browse.jpg"
        title="Search Books"
        text="Manage books you are reading, want to read and have read"
      />
      <SearchBar handleInput={handleInput} />
    </div>
  );
}

export default Browse;
