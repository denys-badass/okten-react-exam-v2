import {Logo} from "./logo/Logo.tsx";
import {ToggleTheme} from "../toggle-theme/ToggleTheme.tsx";
import {Menu} from "./menu/Menu.tsx";
import {SearchBar} from "./search-bar/SearchBar.tsx";
import {LoginInfo} from "./login-info/LoginInfo.tsx";

export const Header = () => {
    return (
        <header className='relative w-full'>
            <div className='h-[100px] w-5/6 px-6 mx-auto flex items-center justify-around fixed top-0 z-30 opacity-97 bg-gray-50 border-b border-gray-200 drop-shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:drop-shadow-indigo-600/20'>
                <Logo/>
                <Menu/>
                <SearchBar/>
                <ToggleTheme/>
                <LoginInfo />
            </div>
        </header>
    );
};