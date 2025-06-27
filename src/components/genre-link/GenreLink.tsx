import type {FC} from "react";
import {useGenreQuery} from "../../api/query/useGenreQuery.ts";
import {useMovieParams} from "../../hooks/useMovieParams.ts";

type GenreProps = {
    genreId: number;
}

export const GenreLink: FC<GenreProps> = ({genreId}) => {
    const {genreMap} = useGenreQuery();
    const {setWithGenres} = useMovieParams();
    const genreName = genreMap.get(genreId) || 'Unknown';

    return (
        <span onClick={() => {setWithGenres(String(genreId))}}>
            {genreName}
        </span>
    );
};