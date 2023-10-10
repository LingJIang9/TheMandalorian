import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Introduction from "./Introduction.jsx";
import Book from "./BookData.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        url="src/assets/hero4.jpg"
        title="Bookhub"
        text="Track books you’ve read.
Save those you want to read.
Tell your friends what’s good.  "
      />
      <Introduction />
      <Book />
    </>
  );
}

export default Home;
