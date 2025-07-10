import {type FC, useState} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {UserInfo} from "../user-info/UserInfo.tsx";

type UserProps = {
    user: IUser;
}

export const UserAvatar: FC<UserProps> = ({user}) => {
    const {firstName, lastName} = user;
    const avatarLetters = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
    const [infoIsVisible, setInfoIsVisible] = useState<boolean>(false);

    return (
        <div className='h-[100%] w-[100px] flex items-center justify-center'
             onMouseLeave={() => setInfoIsVisible(false)}>
            <div className='rounded-[50%] bg-indigo-600 text-white w-12 h-12 flex items-center justify-center cursor-pointer'
                 onClick={() => setInfoIsVisible(!infoIsVisible)}>
                <p>{avatarLetters}</p>
            </div>
            {infoIsVisible && <UserInfo user={user} isVisible={infoIsVisible} />}
        </div>
    );
};