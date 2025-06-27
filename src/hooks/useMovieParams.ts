import {useSearchParams} from "react-router-dom";
import type {Sort} from "../models/IQueryParams.ts";

export const useMovieParams = () => {
    const [query, setQuery] = useSearchParams({page: '1', sort_by: 'popularity.desc'});

    const updateQueryParams = (updates: Record<string, string>) => {
        setQuery((prev) => {
            const params = new URLSearchParams(prev);
            Object.entries(updates).forEach(([key, value]) => {
                if (value) {
                    params.set(key, value);
                } else {
                    params.delete(key);
                }
            });
            return params;
        });
    };

    const params = {
        page: query.get('page') || '1',
        sort_by: query.get('sort_by') as Sort || 'popularity.desc' as Sort,
        with_genres: query.get('with_genres') || undefined,
    }

    const setPage = (newPage: string) => {
        updateQueryParams({ page: newPage });
    }

    const setSortBy = (newSortBy: Sort) => {
        updateQueryParams({
            page: '1',
            sort_by: newSortBy,
            with_genres: query.get('with_genres') || ''
        });
    }

    const setWithGenres = (newWithGenres: string) => {
        updateQueryParams({
            page: '1',
            sort_by: 'popularity.desc',
            with_genres: newWithGenres
        });
    }

    return {
        params, setPage, setSortBy, setWithGenres,
    };
};