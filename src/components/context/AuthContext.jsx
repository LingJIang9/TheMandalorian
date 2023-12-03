import React, { useEffect, useState, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = (user) => {
    setAuthUser(user);
    setIsLoggedIn(true);

    // Store user data in localStorage
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setAuthUser(null);

    // Remove user data from localStorage
    localStorage.removeItem("authUser");
  };

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
