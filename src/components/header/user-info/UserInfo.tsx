import type {FC} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {useLoginStore} from "../../../store/useLoginStore.ts";
import styles from "./UserInfo.module.css";

type UserInfoProps = {
    user: IUser;
    isVisible: boolean;
}

export const UserInfo:FC<UserInfoProps> = ({user, isVisible}) => {
    const {email, firstName, lastName, username} = user;
    const logout = useLoginStore(state => state.setLogout);

    return (
        <div className={`${styles.infoContainer} ${!isVisible && styles.hiddenInfoContainer}`}>
            <ul className={styles.infoList}>
                <li>{firstName} {lastName} "{username}"</li>
                <li>{email}</li>
            </ul>
            <hr className={styles.hr} />
            <div className={styles.logoutLink} onClick={() => logout()}>
                Logout
            </div>
        </div>
    );
};