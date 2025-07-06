import {Link, useNavigate} from "react-router-dom";
import {useLoginStore} from "../store/useLoginStore.ts";
import {useEffect} from "react";

export const WelcomePage = () => {
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

    return (
        <div className="-my-10 min-h-[90dvh] bg-linear-205 from-gray-50 from-40% via-indigo-300 via-80% to-indigo-600/50 dark:bg-linear-205 dark:from-gray-900 dark:from-50% dark:via-indigo-900 dark:via-90% dark:to-indigo-600/50">
            <div className="flex flex-col items-center justify-center min-h-[80dvh] px-4">
                <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-gray-50">
                        Welcome to
                    </h1>
                    <img src="/main-logo.svg" alt="MovieHub" className="w-[300px] mx-auto mb-12"/>
                    <div className="flex flex-col gap-4 items-center">
                        <Link
                            to="/login"
                            className="text-gray-50 bg-indigo-600/90 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/50 rounded-2xl min-w-[300px] min-h-[40px] text-lg flex items-center justify-center transition-all duration-300"
                        >
                            Log In
                        </Link>
                        <button
                            onClick={continueAsGuest}
                            className="text-indigo-600 bg-transparent border-2 border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-2xl min-w-[300px] min-h-[40px] text-lg transition-all duration-300 cursor-pointer"
                        >
                            Continue as Guest
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};