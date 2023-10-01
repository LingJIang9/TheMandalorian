import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Slideshow from "./components/Slideshow.jsx";
import Introduction from "./components/Introduction.jsx";
import Course from "./components/Course.jsx";
import Footer from "./components/Footer.jsx";
// import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Slideshow />
      <Introduction />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
