import {MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import {useTheme} from "../../hooks/useTheme.ts";

export const ToggleTheme = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <>
            <div
                className='rounded-[50%] w-[30px] h-[26px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer hover:bg-indigo-800 hover:text-gray-50'
                onClick={toggleTheme}>
                {
                    theme === 'light' ? <MdOutlineLightMode/> : <MdDarkMode/>
                }
            </div>
        </>
    );
};