import {useSearchParams} from "react-router-dom";
import type {ISearchParams} from "../models/IMovieParams.ts";

export const useSearchMovieParams = () => {
    const [query] = useSearchParams({page: '1'});

    const params: ISearchParams = {
        query: query.get('query') || '',
        page: query.get('page') || '1',
    }

    return {
        params,
    };
}