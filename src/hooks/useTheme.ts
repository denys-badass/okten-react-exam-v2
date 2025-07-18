import {useThemeStore} from "../store/useThemeStore.ts";
import {useEffect} from "react";

export const useTheme = () => {
    const theme = useThemeStore(state => state.theme);
    const toggleTheme = useThemeStore(state => state.toggleTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme]);

    return {theme, toggleTheme};
}