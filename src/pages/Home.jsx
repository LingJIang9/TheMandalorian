import Hero from "../components/Hero.jsx";
import Introduction from "../components/Introduction.jsx";
import Book from "../components/BookData.jsx";

function Home() {
  return (
    <>
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
