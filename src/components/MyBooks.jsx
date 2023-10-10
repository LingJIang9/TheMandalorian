import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import HeroMyBooks from "../assets/hero1.jpg";

function MyBooks() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        url={HeroMyBooks}
        title="My Book Collection"
        text="Search, Track, Rate and Review"
      />
    </>
  );
}

export default MyBooks;
