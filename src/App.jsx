import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Slideshow from "./components/Slideshow.jsx";
import Introduction from "./components/Introduction.jsx";
import Course from "./components/Course.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Introduction />
      <Course />
    </div>
  );
}

export default App;
