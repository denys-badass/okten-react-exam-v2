import {useGenreQuery} from "../../../api/query/useGenreQuery.ts";
import type {FC} from "react";
import {GenreLink} from "../../genre-link/GenreLink.tsx";
import styles from './GenreMenu.module.css';

type GenreMenuProps = {
    isVisible: boolean;
}

export const GenreMenu: FC<GenreMenuProps> = ({isVisible}) => {
    const {genres} = useGenreQuery();

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