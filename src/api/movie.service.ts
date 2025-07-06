import type {IMovieResponse} from "../models/IMovie.ts";
import {axiosMovieInstance} from "./api.service.ts";
import type {IMovieParams, ISearchParams} from "../models/IMovieParams.ts";

export const movieService = {
    getMovies: async (params: IMovieParams): Promise<IMovieResponse> => {
        const {data} = await axiosMovieInstance.get<IMovieResponse>('/discover/movie', {params});
        return data;
    },
    getSearchMovies: async (params: ISearchParams): Promise<IMovieResponse> => {
        const {data} = await axiosMovieInstance.get<IMovieResponse>('/search/movie', {params});
        return data;
    }
}