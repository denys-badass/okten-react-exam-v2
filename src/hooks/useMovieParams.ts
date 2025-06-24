import {useSearchParams} from "react-router-dom";
import type {Sort} from "../models/IQueryParams.ts";

export const useMovieParams = () => {
    const [query, setQuery] = useSearchParams({page: '1', sort_by: 'popularity.desc'});

    const params = {
        page: query.get('page') || '1',
        sort_by: query.get('sort_by') as Sort || 'popularity.desc' as Sort,
        with_genres: query.get('with_genres') || undefined,
    }

     const setPage = (newPage: string) => {
        setQuery({...query, page: newPage});
     }

     const setSortBy = (newSortBy: Sort) => {
        setQuery({...query, sort_by: newSortBy as string, page: '1'});
     }

     const setWithGenres = (newWithGenres: string) => {
        setQuery({...query, with_genres: newWithGenres, page: '1', sort_by: 'popularity.desc'});
     }

     return {
        params, setPage, setSortBy, setWithGenres,
     };
};