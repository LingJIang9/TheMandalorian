import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyBooks from "./components/MyBooks";
import Browse from "./pages/Browse";
import Events from "./components/Events";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
// import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = false;

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mybooks" element={<MyBooks />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
