import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Introduction from "../components/Introduction.jsx";
import Book from "../components/BookData.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        url="src/assets/hero4.jpg"
        title="Trending this Week"
        text="Choose your favourite book"
      />
      <Introduction />
      <Book />
    </>
  );
}

export default Home;
