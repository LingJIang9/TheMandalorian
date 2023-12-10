import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyWatchlist from "./pages/MyWatchlist";
import MyReviewlist from "./pages/MyReviewlist";
import Search from "./pages/Search";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import axios from "axios";
import React, { useState, useEffect } from "react";

//useauth

import { useAuth } from "./components/context/AuthContext.jsx";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = false;

function App() {
  const [userName, setUserName] = useState("");

  // Retrieve user info from local storage when component mounts
  const { setAuthUser, setIsLoggedIn } = useAuth();
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, [setAuthUser, setIsLoggedIn]);

  return (
    <div className="App">
      <Navbar userName={userName} />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mywatchlist" element={<MyWatchlist />}></Route>
        <Route path="/myreviewlist" element={<MyReviewlist />}></Route>
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
