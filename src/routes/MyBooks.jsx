import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
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
