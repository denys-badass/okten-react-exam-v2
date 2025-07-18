import type {IMovieResponse} from "../../models/IMovie.ts";
import {useQuery} from "@tanstack/react-query";
import {MovieCard} from "../movie-card/MovieCard.tsx";
import Masonry from "react-masonry-css";
import {Pagination} from "../pagination/Pagination.tsx";
import {PreLoader} from "../pre-loader/PreLoader.tsx";
import styles from "./MovieList.module.css";

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

    const {results, total_pages, page} = data || {};

    if (isLoading) return <PreLoader/>

    if (isError) return <div>Error: {error instanceof Error ? error.message : 'An error occurred'}</div>;


    if (!results || results.length === 0) {
        return <div className={styles.notFound}>No movies found</div>;
    }

    return (
        <div className={styles.wrapper}>
            <Masonry
                className={styles.masonry}
                columnClassName={styles.masonryColumn}
                breakpointCols={{default: 5, 1300: 4, 1100: 3, 800: 2, 440: 1}}>
                {results.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </Masonry>
            <div>
                <Pagination currentPage={page || 1} totalPages={total_pages || 1} />
            </div>
        </div>
    );
};