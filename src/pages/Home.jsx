import Hero from "../components/Hero.jsx";
import Introduction from "../components/Introduction.jsx";
import Movie from "../components/BookData.jsx";

function Home() {
  return (
    <>
      <Hero cName="hero" url="src/assets/hero1.png" />
      <Introduction />
      <Movie />
    </>
  );
}

export default Home;
