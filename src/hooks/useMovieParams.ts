import {useNavigate, useSearchParams} from "react-router-dom";
import type {IMovieParams, Sort} from "../models/IMovieParams.ts";

export const useMovieParams = () => {
    const [query, setQuery] = useSearchParams({page: '1', sort_by: 'popularity.desc'});
    const navigate = useNavigate();

    const allowedKeys: (keyof IMovieParams)[] = ['page', 'sort_by', 'with_genres'];

    const getParams = (): IMovieParams => {
        return {
            page: query.get('page') || '1',
            sort_by: query.get('sort_by') as Sort || 'popularity.desc',
            with_genres: query.get('with_genres') || undefined,
        } as IMovieParams;
    }

    const updateParams = (updates: Record<string, string>) => {
        setQuery(() => {
            const params = new URLSearchParams();
            const currentParams = getParams();
            const newParams: IMovieParams = {...currentParams, ...updates};

            Object.entries(newParams).forEach(([key, value]) => {
                if (allowedKeys.includes(key as keyof IMovieParams) && value !== undefined && value !== '') {
                    params.set(key, value);
                }
            });
            navigate(`/movies?${params.toString()}`, {replace: true});
            return params;
        })
    };

    const params = getParams();

    const setSortBy = (sort: Sort) => {
        updateParams({
            page: '1',
            sort_by: sort,
        });
    }

    const setWithGenres = (withGenres: string) => {
        updateParams({page: '1', with_genres: withGenres, sort_by: 'popularity.desc' as Sort});
    }

    return {
        params,
        setSortBy,
        setWithGenres,
    };
};