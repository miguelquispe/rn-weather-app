import React, { useState } from 'react';

export const ThemeContext = React.createContext(null);

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (theme) => {
    setTheme(theme)
  }

  const value = {theme, toggleTheme}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}