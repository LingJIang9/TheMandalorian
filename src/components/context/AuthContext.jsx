import React, { useEffect, useState, useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initialize the auth state based on localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    console.log("Stored User:", storedUser); // Debugging line
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log("Parsed User Data:", userData); // Debugging lines
      setAuthUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const logIn = (user) => {
    setAuthUser(user);
    setIsLoggedIn(true);
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setAuthUser(null);
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
