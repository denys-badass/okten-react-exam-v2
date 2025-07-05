import type {FC} from "react";
import type {IUser} from "../../../models/IUser.ts";

type UserProps = {
    user: IUser;
}

export const UserAvatar: FC<UserProps> = ({user}) => {
    const {firstName, lastName} = user;
    const avatarLetters = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;

    return (
        <div>
            <div className='rounded-[50%] bg-indigo-600 text-white w-12 h-12 flex items-center justify-center'>
                <p>{avatarLetters}</p>
            </div>
        </div>
    );
};