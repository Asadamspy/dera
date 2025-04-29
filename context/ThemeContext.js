import React, { createContext, useContext, useState } from 'react';

// Create a context for managing theme
const ThemeContext = createContext();

// Custom hook to access theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap around the app and provide theme state
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  // Toggle between dark and light modes
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
