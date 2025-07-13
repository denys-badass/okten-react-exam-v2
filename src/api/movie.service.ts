import type {IMovieResponse} from "../models/IMovie.ts";
import {axiosMovieInstance} from "./api.service.ts";
import type {IMovieParams, ISearchParams} from "../models/IMovieParams.ts";
import axios from "axios";

export const movieService = {
    getMovies: async (params: IMovieParams): Promise<IMovieResponse> => {
        try {
            const {data} = await axiosMovieInstance.get<IMovieResponse>('/discover/movie', {params});
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to fetch movies: ${error.response?.data.message}`);
            }
            throw new Error(`Unknown error: ${error}`);
        }

    },
    getSearchMovies: async (params: ISearchParams): Promise<IMovieResponse> => {
        try {
            const {data} = await axiosMovieInstance.get<IMovieResponse>('/search/movie', {params});
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to search movies: ${error.response?.data.message}`);
            }
            throw new Error(`Unknown error: ${error}`);
        }

    }
}