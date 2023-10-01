import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Introduction from "./components/Introduction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <Introduction />
    </div>
  );
}

export default App;
