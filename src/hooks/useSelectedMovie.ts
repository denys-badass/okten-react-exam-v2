import {useEffect} from "react";
import {useSelectMovieStore} from "../store/useSelectMovieStore.ts";

export const useSelectedMovie = (deps: string[]) => {
    const clearSelectedMovie = useSelectMovieStore(state => state.clearSelectedMovie);
    const movie = useSelectMovieStore(state => state.movie);

    useEffect(() => {
        clearSelectedMovie();
    }, [...deps]);

    return movie;
}