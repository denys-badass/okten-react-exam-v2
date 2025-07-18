import {useGenreQuery} from "../../../api/query/useGenreQuery.ts";
import type {FC} from "react";
import {GenreLink} from "../../genre-link/GenreLink.tsx";
import styles from './GenreMenu.module.css';

type GenreMenuProps = {
    isVisible: boolean;
}

export const GenreMenu: FC<GenreMenuProps> = ({isVisible}) => {
    const {genres, isError, error} = useGenreQuery();

    if (isError) {
        return <div className={styles.error}>Error: {error instanceof Error ? error.message : 'Failed to load genres'}</div>
    }

    return (
        <div className={`${styles.container} ${!isVisible && styles.hiddenContainer}`}>
            <ul className={styles.genreList}>
                {genres?.map((genre) => (
                        <li
                            key={genre.id}
                            className={styles.genreItem}>
                            <GenreLink genreId={genre.id}/>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};