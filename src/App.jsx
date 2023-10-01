import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Introduction from "./components/Introduction.jsx";
import Course from "./components/Course.jsx";
import Footer from "./components/Footer.jsx";
// import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Introduction />
      <Course />
      <Footer />
    </div>
  );
}

export default App;
