import {LoginForm} from "../../components/login-form/LoginForm.tsx";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    return (
        <div className={styles.loginContainer}>
            <LoginForm/>
        </div>
    );
};