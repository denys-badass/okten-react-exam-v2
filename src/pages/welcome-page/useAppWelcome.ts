import {useNavigate} from "react-router-dom";
import {useLoginStore} from "../../store/useLoginStore.ts";
import {useEffect} from "react";

export const useAppWelcome = () => {
    const navigate = useNavigate();
    const setLogout = useLoginStore(store => store.setLogout);
    const setGuestLogin = useLoginStore(store => store.setGuestLogin);

    useEffect(() => {
        setLogout();
    }, []);

    const continueAsGuest = () => {
        setGuestLogin();
        navigate('/movies');
    };

    return {continueAsGuest};
}