import {Link} from "react-router-dom";
import {useAppWelcome} from "./useAppWelcome.ts";
import styles from "./WelcomePage.module.css";

export const WelcomePage = () => {
    const {continueAsGuest} = useAppWelcome();

    return (
        <div className={styles.welcomeContainer}>
            <div className={styles.welcomeTextContainer}>
                    <h1 className={styles.welcomeHeader}>
                        Welcome to
                    </h1>
                    <img src="/main-logo.svg" alt="MovieHub" className={styles.welcomeLogo}/>
                    <div className={styles.buttonContainer}>
                        <Link
                            to="/login"
                            className={`${styles.button} ${styles.loginButton}`}
                        >
                            Log In
                        </Link>
                        <button
                            onClick={continueAsGuest}
                            className={`${styles.button} ${styles.guestButton}`}
                        >
                            Continue as Guest
                        </button>
                    </div>
            </div>
        </div>
    );
};