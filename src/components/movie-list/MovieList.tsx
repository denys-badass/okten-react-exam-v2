import type {IMovieResponse} from "../../models/IMovie.ts";
import {useQuery} from "@tanstack/react-query";
import {MovieCard} from "../movie-card/MovieCard.tsx";
import Masonry from "react-masonry-css";
import {Pagination} from "../pagination/Pagination.tsx";
import {ScaleLoader} from "react-spinners";

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

    const {results, total_pages} = data || {};

    if (isLoading) {
        return (
            <div className='w-full flex items-center justify-center'>
                <ScaleLoader
                    color="#372aac"
                    height={57}
                    margin={2}
                    radius={2}
                    width={5}
                    speedMultiplier={2}
                />
            </div>
        );
    }

    if (isError) {
        return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;
    }

    if (!results || results.length === 0) {
        return <div className='text-center text-gray-500 font-(family-name:--font-limelight) text-2xl mt-10 h-[100dvh] dark:bg-gray-900'>No movies found</div>;
    }

    return (
        <div className='w-6/7 mx-auto'>
            <Masonry
                className='flex -ml-5 p-6 w-auto'
                columnClassName='pl-5 bg-clip-padding'
                breakpointCols={{default: 4, 1200: 3, 800: 2, 500: 1}}>
                {results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </Masonry>
            <div>
                <Pagination currentPage={data?.page || 1} totalPages={total_pages || 1} />
            </div>
        </div>
    );
};