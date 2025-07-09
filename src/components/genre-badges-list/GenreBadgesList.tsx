import type {FC} from "react";
import {GenreLink} from "../genre-link/GenreLink.tsx";

type GenreBadgesListProps = {
    genreIds: number[];
}

export const GenreBadgesList: FC<GenreBadgesListProps> = ({genreIds}) => {
    if (!genreIds || genreIds.length === 0) {
        return;
    }

    return (
        <ul className='flex flex-wrap gap-2'>
            {genreIds.map((genreId) => (
                <li
                    key={genreId}
                    className='bg-gray-800 text-gray-50 hover:text-indigo-600 dark:text-gray-800 dark:bg-gray-50 rounded-xl flex items-center justify-center px-2 cursor-pointer'>
                    <GenreLink genreId={genreId} />
                </li>
            ))}
        </ul>
    );
};