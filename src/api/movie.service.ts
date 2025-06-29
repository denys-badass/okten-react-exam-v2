import type {IMovieResponse} from "../models/IMovie.ts";
import {axiosInstance} from "./api.service.ts";
import type {IMovieParams, ISearchParams} from "../models/IMovieParams.ts";

export const movieService = {
    getMovies: async (params: IMovieParams): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie', {params});
        return data;
    },
    getSearchMovies: async (params: ISearchParams): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/search/movie', {params});
        return data;
    }
}