import { useContext, useState } from "react";
import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        < ThemeContext.Provider value={{ theme, toggleTheme } } >
            {children}
            </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);




