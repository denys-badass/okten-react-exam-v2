import {type FC, useState} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {UserInfo} from "../user-info/UserInfo.tsx";
import styles from "./UserAvatar.module.css";

type UserProps = {
    user: IUser;
}

export const UserAvatar: FC<UserProps> = ({user}) => {
    const {firstName, lastName} = user;
    const avatarLetters = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    const [infoIsVisible, setInfoIsVisible] = useState<boolean>(false);

    return (
        <div className={styles.avatarContainer}
             onMouseLeave={() => setInfoIsVisible(false)}>
            <div className={styles.avatar}
                 onClick={() => setInfoIsVisible(!infoIsVisible)}>
                <p>{avatarLetters}</p>
            </div>
            {infoIsVisible && <UserInfo user={user} isVisible={infoIsVisible} />}
        </div>
    );
};