import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Introduction from "./components/Introduction.jsx";
import Book from "./components/Book.jsx";
import Footer from "./components/Footer.jsx";
// import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Introduction />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
