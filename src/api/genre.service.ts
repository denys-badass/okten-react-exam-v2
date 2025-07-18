import type {IGenre, IGenreResponse} from "../models/IGenre.ts";
import {axiosMovieInstance} from "./api.service.ts";
import axios from "axios";

export const genreService = {
    getGenres: async (): Promise<IGenre[]> => {
        try {
            const {data} = await axiosMovieInstance.get<IGenreResponse>('/genre/movie/list');
            return data.genres;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Failed to fetch genres: ${error.response?.data.message}`);
            }
            throw new Error(`Unknown error: ${error}`);
        }

    }
}