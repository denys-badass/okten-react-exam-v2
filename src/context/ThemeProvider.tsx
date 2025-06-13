import {type FC, type ReactNode, useEffect, useState} from "react";
import {type Theme, ThemeContext} from "./ThemeContext.ts";

export const ThemeProvider: FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme) || 'light';
    });

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const root = document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}