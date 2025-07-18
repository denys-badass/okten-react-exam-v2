import {Logo} from "./logo/Logo.tsx";
import {ToggleTheme} from "../toggle-theme/ToggleTheme.tsx";
import {Menu} from "./menu/Menu.tsx";
import {SearchBar} from "./search-bar/SearchBar.tsx";
import {LoginInfo} from "./login-info/LoginInfo.tsx";
import styles from "./Header.module.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {useState} from "react";

export const Header = () => {
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

    const hamburgerHandler = () => {
        setIsMobileOpen(prevState => !prevState);
    }

    return (
        <div className={styles.header}>
            <div className={styles.wrapper} onMouseLeave={() => setIsMobileOpen(false)}>
                    <div onClick={hamburgerHandler} className={styles.hamburgerMenu}>
                        <GiHamburgerMenu size={32}/>
                    </div>
                    {isMobileOpen && <div className={`${styles.subMenu}`}> <Menu/> </div>}
                <Logo/>
                <div className={styles.desktopHeader}>
                    <Menu/>
                </div>
                <SearchBar/>
                <LoginInfo/>
            </div>
            <ToggleTheme/>
        </div>
    )
        ;
};