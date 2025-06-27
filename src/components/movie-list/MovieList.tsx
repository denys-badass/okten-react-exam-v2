import type {IMovieResponse} from "../../models/IMovie.ts";
import {useQuery} from "@tanstack/react-query";
import {MovieCard} from "../movie-card/MovieCard.tsx";
import Masonry from "react-masonry-css";

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
        <div className='w-6/7 mx-auto'>
            <Masonry
                className='flex -ml-5 p-6 w-auto'
                columnClassName='pl-5 bg-clip-padding'
                breakpointCols={{default: 4, 1200: 3, 800: 2, 500: 1}}>
                {data?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </Masonry>
        </div>
    );
};