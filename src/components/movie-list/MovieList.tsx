import type {IMovieResponse} from "../../models/IMovie.ts";
import {useQuery} from "@tanstack/react-query";

type MovieListProps<T> = {
    params: T;
    queryFn: (params: T) => Promise<IMovieResponse>;
    queryKey: string;
}

export const MovieList = <T,>({params, queryFn, queryKey}: MovieListProps<T>) => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: [queryKey, params],
        queryFn: async () => {
            return queryFn(params);
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;
    }

    return (
        <>
            {data?.results?.map((movie) => <div key={movie.id}>{movie.title}</div>)}
        </>
    );
};