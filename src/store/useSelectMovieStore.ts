import {create} from "zustand/react";
import type {IMovie} from "../models/IMovie.ts";

type SelectMovieState = {
    movie: IMovie | null;
    setMovie: (movie: IMovie) => void;
    clearSelectedMovie: () => void;
}

export const useSelectMovieStore = create<SelectMovieState>((set) => ({
    movie: null,
    setMovie: (movie: IMovie) => {
        set({movie});
    },
    clearSelectedMovie: () => {
        set({movie: null});
    }
}))