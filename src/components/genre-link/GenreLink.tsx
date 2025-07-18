import type {FC} from "react";
import {useMovieParams} from "../../hooks/useMovieParams.ts";
import {useGenreName} from "../../hooks/useGenreName.ts";

type GenreProps = {
    genreId: number;
}

export const GenreLink: FC<GenreProps> = ({genreId}) => {
    const genreName = useGenreName(genreId);
    const {setWithGenres} = useMovieParams();

    return (
        <span onClick={() => {
            setWithGenres(String(genreId));

        }}>
            {genreName}
        </span>
    );
};