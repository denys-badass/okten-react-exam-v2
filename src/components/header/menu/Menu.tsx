import {Link} from "react-router-dom";
import {GenreMenu} from "../genre-menu/GenreMenu.tsx";
import {useState} from "react";

export const Menu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <ul className='flex items-center justify-start gap-6 w-1/4 h-full px-4' onMouseLeave={() => setVisible(false)}>
                <li><Link to={'/movies'} className=" h-full hover:text-indigo-600 transition-colors" onClick={() => setVisible(false)}>Movies</Link></li>
                <li className='h-full cursor-pointer flex items-center'
                    onClick={() => setVisible(prev => !prev)}>
                    <span className="hover:text-indigo-600 transition-colors">Genres</span>
                    <GenreMenu isVisible={visible} />
                </li>
            </ul>
        </>
    );
};