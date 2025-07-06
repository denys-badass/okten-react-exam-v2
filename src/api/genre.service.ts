import type {IGenre, IGenreResponse} from "../models/IGenre.ts";
import {axiosMovieInstance} from "./api.service.ts";

export const genreService = {
    getGenres: async (): Promise<IGenre[]> => {
        const {data} = await axiosMovieInstance.get<IGenreResponse>('/genre/movie/list');
        return data.genres;
    }
}