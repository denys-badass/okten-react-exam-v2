import type {IQueryParams} from "../../models/IQueryParams.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {movieService} from "../movie.service.ts";
import type {IMovieResponse} from "../../models/IMovie.ts";

export const useMovieQuery = (params: IQueryParams) => {
    return useQuery({
        queryKey: ['movies', params],
        queryFn: async (): Promise<IMovieResponse> => {
            return movieService.getMovies(params);
        },
        placeholderData: keepPreviousData,
    })
}