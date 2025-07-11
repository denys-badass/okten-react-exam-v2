import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators/login-validator.ts";
import {useLogin} from "../../hooks/useLogin.ts";
import styles from "./LoginForm.module.css";

type LoginFormProps = {
    login: string;
    password: string;
}

export const LoginForm = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<LoginFormProps>({mode: 'onChange', resolver: joiResolver(loginValidator)});
    const {loginHandler, loginError} = useLogin();

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.formHeader}>Log In</h1>
            {loginError && <p className={styles.loginError}>{loginError}</p>}
            <form onSubmit={handleSubmit(loginHandler)} className={styles.form}>
                <label className={styles.labelContainer}>
                    {errors.login ? <span className={`${styles.label} ${styles.errorLabel}`}>{errors.login.message}</span> : <span className={styles.label}>Username: </span>}
                    <input type="text" {...register('login')} className={styles.input}/>
                </label>
                <label className={styles.labelContainer}>
                    {errors.password ? <span className={`${styles.label} ${styles.errorLabel}`}>{errors.password.message}</span> : <span className={styles.label}>Password: </span>}
                    <input type="password" {...register('password')} className={styles.input}/>
                </label>
                <button type="submit" disabled={!isValid} className={styles.submitButton}>LogIn</button>
            </form>
        </div>
    );
};