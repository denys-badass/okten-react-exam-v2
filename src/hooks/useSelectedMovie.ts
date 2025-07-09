import {useEffect} from "react";
import {useSelectMovieStore} from "../store/useSelectMovieStore.ts";

export const useSelectedMovie = (deps: string[]) => {
    const clearSelectedMovie = useSelectMovieStore(state => state.clearSelectedMovie);
    const movie = useSelectMovieStore(state => state.movie);

    // Clear the selected movie when the component unmounts or dependencies change
    useEffect(() => {
        return () => {
        clearSelectedMovie();
        };
    }, [...deps]);

    return movie;
}