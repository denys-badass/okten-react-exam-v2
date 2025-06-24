import type {IMovieResponse} from "../../models/IMovie.ts";
import {useQuery} from "@tanstack/react-query";
import {MovieCard} from "../movie-card/MovieCard.tsx";

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
        <div className='grid grid-cols-4 gap-6 w-3/4 mx-auto'>
            {data?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
};