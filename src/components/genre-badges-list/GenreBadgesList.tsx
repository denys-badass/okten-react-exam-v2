import type {FC} from "react";
import {GenreLink} from "../genre-link/GenreLink.tsx";
import styles from './GenreBadgesList.module.css';

type GenreBadgesListProps = {
    genreIds: number[];
}

export const GenreBadgesList: FC<GenreBadgesListProps> = ({genreIds}) => {
    if (!genreIds || genreIds.length === 0) {
        return null;
    }

    return (
        <ul className={styles.genreList}>
            {genreIds.map((genreId) => (
                <li
                    key={genreId}
                    className={styles.genreItem}>
                    <GenreLink genreId={genreId} />
                </li>
            ))}
        </ul>
    );
};