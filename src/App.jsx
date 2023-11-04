import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWatchlist from "./pages/MyWatchlist";
import Browse from "./pages/Browse";
import Search from "./pages/Search";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import React, { useState } from "react";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = false;

function App() {
  const [userName, setUserName] = useState("");
  return (
    <div className="App">
      <Navbar userName={userName} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mywatchlist" element={<MyWatchlist />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/login"
          element={<Login setUserName={setUserName} />}
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
