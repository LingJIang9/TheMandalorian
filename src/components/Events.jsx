import Navbar from "./Navbar";
import Hero from "./Hero";

function Events() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        url="src/assets/hero2.jpg"
        title="Events"
        text="Join the local book club in Dublin and connect with mind-liked people"
      />
    </div>
  );
}

export default Events;
