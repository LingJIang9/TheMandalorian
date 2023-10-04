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
        title="Bookhub"
        text="Track films you’ve watched.
Save those you want to see.
Tell your friends what’s good.  "
      />
      <Introduction />
      <Book />
    </>
  );
}

export default Home;
