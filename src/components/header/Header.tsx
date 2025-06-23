import {Logo} from "./logo/Logo.tsx";
import {ToggleTheme} from "../toggle-theme/ToggleTheme.tsx";
import {Menu} from "./menu/Menu.tsx";
import {SearchBar} from "./search-bar/SearchBar.tsx";

export const Header = () => {
    return (
        <header className='relative'>
            <div className='h-[100px] w-full flex items-center justify-around sticky top-0 z-30 bg-gray-50 border-b border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                <Logo/>
                <Menu/>
                <SearchBar/>
                <ToggleTheme/>
                <p>Login</p>
            </div>
        </header>
    );
};