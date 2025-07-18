import {useLoginStore} from "../store/useLoginStore.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {userService} from "../api/user.service.ts";

export const useLogin = () => {
    const setUserLogin = useLoginStore(state => state.setUserLogin);
    const setLogout = useLoginStore(state => state.setLogout);
    const [loginError, setLoginError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLogout();
    }, []);

    const loginHandler = async (data: {username: string, password: string}) => {
        const {username, password} = data;
        try {
            const loginResponse = await userService.userLogin(username, password);
            setUserLogin(loginResponse);
            setLoginError(null);
            navigate('/movies');
        } catch (e) {
            const error = e as Error;
            console.error('Login Error', error.message || 'Unknown error');
            setLoginError('Failed to log in. Wrong username or password.');
            return e;
        }
    }

    return {
        loginHandler,
        loginError
    };
};