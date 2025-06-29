import {useGenreQuery} from "../api/query/useGenreQuery.ts";

export const useGenreName = (genreId: number) => {
    const {genreMap} = useGenreQuery();
    return genreMap.get(genreId) || 'Unknown';
}