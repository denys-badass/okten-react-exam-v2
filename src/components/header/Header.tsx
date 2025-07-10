import {Logo} from "./logo/Logo.tsx";
import {ToggleTheme} from "../toggle-theme/ToggleTheme.tsx";
import {Menu} from "./menu/Menu.tsx";
import {SearchBar} from "./search-bar/SearchBar.tsx";
import {LoginInfo} from "./login-info/LoginInfo.tsx";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <div
            className={styles.header}>
            <Logo/>
            <Menu/>
            <div className={styles.rightSideHeader}>
                <SearchBar/>
                <ToggleTheme/>
                <LoginInfo/>
            </div>
        </div>
    );
};