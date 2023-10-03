import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Browse() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-browse"
        url="src/assets/browse.jpg"
        title="Search Books"
        text="Manage books you are reading, want to read and have read"
      />
    </div>
  );
}

export default Browse;
