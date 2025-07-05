import {Link} from "react-router-dom";
import {UserAvatar} from "../user-avatar/UserAvatar.tsx";
import type {IUser} from "../../../models/IUser.ts";

export const LoginInfo = () => {
    const loginType = localStorage.getItem('loginType');
    const user: IUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (!loginType || loginType === 'guest') {
        return <Link to={'/login'} className='hover:text-indigo-600'>Login</Link>;
    }
    return (
        <>
            <UserAvatar user={user} />
        </>
    );
};