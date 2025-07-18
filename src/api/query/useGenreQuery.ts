import {useQuery} from "@tanstack/react-query";
import {genreService} from "../genre.service.ts";

export const useGenreQuery = () => {
    const genreMap = new Map<number, string>();
    const {data, error, isError} = useQuery({
        queryKey: ['genres'],
        queryFn: async () => {
            return genreService.getGenres();
        }
    })

    data?.forEach(genre => {
        genreMap.set(genre.id, genre.name);
    });

    return {genres: data, genreMap, error, isError};
}