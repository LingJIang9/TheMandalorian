import Hero from "../components/Hero.jsx";
import HeroMyBooks from "../assets/hero2.png";
import Card from "../components/Card.jsx";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import CardData from "../components/CardData.jsx";
import FilterButton from "../components/FilterButton.jsx";

function MyBooks() {
  const [item, setItems] = useState(CardData);
  const bookItems = [...new Set(CardData.map((val) => val.category))];
  const filterItems = (cat) => {
    const newItems = CardData.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <>
      <Hero
        cName="hero"
        url={HeroMyBooks}
        // title="My Book Collection"
        // text="Search, Track, Rate and Review"
      />
      <FilterButton
        bookItems={bookItems}
        filterItems={filterItems}
        setItems={setItems}
      />

      <Card item={item} />
    </>
  );
}

export default MyBooks;
