import type {IMovie} from "../models/IMovie.ts";
import {axiosInstance} from "./api.service.ts";

export const MovieService = {
    getMovies: async (queryParams: string): Promise<IMovie[]> => {
        const {data} = await axiosInstance.get<IMovie[]>('/discover/movie?' + queryParams);
        return data;
    },
    getSearchMovies: async (query: string): Promise<IMovie[]> => {
        const {data} = await axiosInstance.get<IMovie[]>('/search/movie?query=' + query);
        return data;
    }
}