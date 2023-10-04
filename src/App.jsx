import "./App.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "../src/routes/Home";
import MyBooks from "./routes/MyBooks";
import Browse from "./routes/Browse";
import Events from "./routes/Events";
import Register from "./routes/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mybooks" element={<MyBooks />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
