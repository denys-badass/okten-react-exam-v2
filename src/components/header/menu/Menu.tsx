import {Link} from "react-router-dom";
import {GenreMenu} from "../genre-menu/GenreMenu.tsx";
import {useState} from "react";
import styles from "./Menu.module.css";

export const Menu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.menuWrapper}>
            <ul className={styles.menuList} onMouseLeave={() => setVisible(false)}>
                <li className={styles.menuItem} onClick={() => setVisible(false)}>
                    <Link to={'/movies'}>Movies</Link>
                </li>
                <li className={styles.menuItem} onClick={() => setVisible(prev => !prev)}>
                    Genres
                    <GenreMenu isVisible={visible} />
                </li>
            </ul>
        </div>
    );
};