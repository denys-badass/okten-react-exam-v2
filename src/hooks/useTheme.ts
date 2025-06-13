import {ThemeContext, type ThemeContextProps} from "../context/ThemeContext.ts";
import {useContext} from "react";

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}