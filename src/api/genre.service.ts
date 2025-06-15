import type {IGenre, IGenreResponse} from "../models/IGenre.ts";
import {axiosInstance} from "./api.service.ts";

export const genreService = {
    getGenres: async (): Promise<IGenre[]> => {
        const {data} = await axiosInstance.get<IGenreResponse>('/genre/movie/list');
        return data.genres;
    }
}