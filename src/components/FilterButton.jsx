import React from "react";
import CardData from "./CardData";
import "./FilterButton.css";

function FilterButton({ bookItems, filterItems, setItems }) {
  return (
    <div className="button-container">
      {bookItems.map((val) => (
        <button key={val.id} onClick={() => filterItems(val)}>
          {val}
        </button>
      ))}
      <button onClick={() => setItems(CardData)}>all</button>
    </div>
  );
}

export default FilterButton;
