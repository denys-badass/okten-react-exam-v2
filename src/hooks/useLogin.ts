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

    const loginHandler = async (data: {login: string, password: string}) => {
        const {login, password} = data;
        try {
            const loginResponse = await userService.userLogin(login, password);
            setUserLogin(loginResponse);
            setLoginError(null);
            navigate('/movies');
        } catch (e) {
            setLoginError('Failed to log in. Wrong username or password.');
            return e;
        }
    }

    return {
        loginHandler,
        loginError
    };
};