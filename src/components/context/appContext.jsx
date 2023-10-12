import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Appcontext must be within provider");
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [haveread, setHaveread] = useState([]);
  const [toread, setToread] = useState([]);
  const [reading, setReading] = useState([]);
  //add function
  const addToHaveread = (book) => {
    const oldHaveread = [...haveread];
    const newHaveread = oldHaveread.concat(book);
    setHaveread(newHaveread);
  };

  const addToToread = (book) => {
    const oldToread = [...toread];
    const newToread = oldToread.concat(book);
    setToread(newToread);
  };

  const addToReading = (book) => {
    const oldReading = [...reading];
    const newReading = oldReading.concat(book);
    setReading(newReading);
  };
  //remove function
  const removeFromHaveread = (id) => {
    const oldHaveread = [...haveread];
    const newHaveread = oldHaveread.filter((book) => book.id !== id);
    setHaveread(newHaveread);
  };
  const removeFromToread = (id) => {
    const oldToread = [...toread];
    const newToread = oldToread.filter((book) => book.id !== id);
    setToread(newToread);
  };
  const removeFromReading = (id) => {
    const oldReading = [...reading];
    const newReading = oldReading.filter((book) => book.id !== id);
    setReading(newReading);
  };

  return (
    <AppContext.Provider
      value={
        ({
          haveread,
          addToHaveread,
          removeFromHaveread,
        },
        {
          toread,
          addToToread,
          removeFromToread,
        },
        {
          reading,
          addToReading,
          removeFromReading,
        })
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
