import {Link} from "react-router-dom";
import {UserAvatar} from "../user-avatar/UserAvatar.tsx";
import {useLoginStore} from "../../../store/useLoginStore.ts";
import styles from "./LoginInfo.module.css";

export const LoginInfo = () => {
    const user = useLoginStore(state => state.user);
    const loginType = useLoginStore(state => state.loginType);

    if (user) {
        return <UserAvatar user={user}/>
    }

    return (
        <div className={styles.loginLink}>
            <Link to={'/login'}>{loginType === 'guest' ? 'Welcome, Guest' : 'Login'}</Link>
        </div>
    );
};