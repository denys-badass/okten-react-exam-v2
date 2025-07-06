import {Link} from "react-router-dom";
import {UserAvatar} from "../user-avatar/UserAvatar.tsx";
import {useLoginStore} from "../../../store/useLoginStore.ts";

export const LoginInfo = () => {
    const user = useLoginStore(state => state.user);
    const loginType = useLoginStore(state => state.loginType);

    if (user) {
        return <UserAvatar user={user}/>
    }
    if (loginType === 'guest') {
        return <Link to={'/login'} className='hover:text-indigo-600'>Welcome, Guest</Link>;
    }

    return <Link to={'/login'} className='hover:text-indigo-600'>Login</Link>;
};