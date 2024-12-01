import { createContext, useEffect, useState } from "react";
import data from "../data/data";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  const [language, setLanguage] = useState("pl");

  useEffect(() => {
    console.log(data.theme);
    setTheme(data.theme);
  }, [data]);

  const updateTheme = (newTheme) => {
    setTheme((prev) => ({
      ...prev,
      ...newTheme,
    }));
  };

  const updateLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, updateTheme, language, updateLanguage }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
