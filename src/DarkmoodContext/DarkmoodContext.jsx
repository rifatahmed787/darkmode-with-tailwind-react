/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    setDarkMode(darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !darkMode;
    setDarkMode(updatedMode);
    localStorage.setItem("darkModeEnabled", updatedMode.toString());
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
