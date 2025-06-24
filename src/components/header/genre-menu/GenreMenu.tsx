import {useGenreQuery} from "../../../api/query/useGenreQuery.ts";
import type {FC} from "react";

type GenreMenuProps = {
    isVisible: boolean;
}

export const GenreMenu: FC<GenreMenuProps> = ({isVisible}) => {
    const {genres} = useGenreQuery();

    return (
        <div
            className={`absolute top-[100px] left-0 right-0 w-full p-10 bg-gray-50 border-gray-200 
            dark:bg-gray-800 dark:border-gray-700 border-b shadow-lg
            transform transition-all duration-300 ease-in-out z-10
            ${isVisible ? ' opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <ul className='grid grid-cols-4 gap-4 text-center max-w-7xl mx-auto'>
                {/*TODO: To make separate genre link component*/}
                {genres?.map((genre) => <li key={genre.id} className="hover:text-indigo-600 transition-colors">{genre.name}</li>)}
            </ul>
        </div>
    );
};