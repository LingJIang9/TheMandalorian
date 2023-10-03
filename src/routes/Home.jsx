import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        url="src/assets/hero.jpg"
        title="Trending this Week"
        text="Choose your favourite book"
      />
    </>
  );
}

export default Home;
