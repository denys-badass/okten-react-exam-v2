import {Link} from "react-router-dom";
import styles from "./Logo.module.css";

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                <img src="/main-logo.svg" alt="MovieHub logo"/>
            </Link>
        </div>
    );
};