import type {IMovieResponse} from "../models/IMovie.ts";
import {axiosInstance} from "./api.service.ts";
import type {IQueryParams, ISearchParams} from "../models/IQueryParams.ts";

export const movieService = {
    getMovies: async (params: IQueryParams): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/discover/movie', {params});
        return data;
    },
    getSearchMovies: async (params: ISearchParams): Promise<IMovieResponse> => {
        const {data} = await axiosInstance.get<IMovieResponse>('/search/movie', {params});
        return data;
    }
}