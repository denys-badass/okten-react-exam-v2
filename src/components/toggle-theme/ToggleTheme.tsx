import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import {useTheme} from "../../hooks/useTheme.ts";
import styles from "./ToggleTheme.module.css";

export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <div
                className={styles.toggle}
                onClick={toggleTheme}>
                {
                    theme === 'light' ? <MdOutlineLightMode size={20}/> : <MdDarkMode size={20}/>
                }
            </div>
        </>
    );
};