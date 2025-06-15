import type {IMovieResponse} from "../models/IMovie.ts";
import {axiosInstance} from "./api.service.ts";

export const movieService = {
    getMovies: async (): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie');
        return data;
    },
    getSearchMovies: async (query: string): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/search/movie?query=' + query);
        return data;
    }
}