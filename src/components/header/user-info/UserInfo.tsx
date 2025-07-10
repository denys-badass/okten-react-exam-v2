import type {FC} from "react";
import type {IUser} from "../../../models/IUser.ts";
import {useLoginStore} from "../../../store/useLoginStore.ts";

type UserInfoProps = {
    user: IUser;
    isVisible: boolean;
}

export const UserInfo:FC<UserInfoProps> = ({user, isVisible}) => {
    const {email, firstName, lastName, username} = user;
    const logout = useLoginStore(state => state.setLogout);

    return (
        <div className={`absolute top-[100px] right-0 w-[300px] p-4 bg-gray-50 border-gray-200 
            dark:bg-gray-800 dark:border-gray-700 border-b shadow-lg
            transform transition-all duration-300 ease-in-out z-10
            ${isVisible ? ' opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <ul className='flex flex-col items-start gap-2 text-lg mb-4 font-light text-lg'>
                <li>{username}</li>
                <li>{firstName} {lastName}</li>
                <li>{email}</li>
            </ul>
            <div className='my-4 h-[1px] bg-gray-300'></div>
            <div className='hover:text-indigo-600 cursor-pointer text-lg' onClick={() => logout()}>
                Logout
            </div>
        </div>
    );
};