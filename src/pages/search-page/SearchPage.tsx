import {useSearchMovieParams} from "../../hooks/useSearchMovieParams.ts";
import {MovieList} from "../../components/movie-list/MovieList.tsx";
import type {ISearchParams} from "../../models/IMovieParams.ts";
import {movieService} from "../../api/movie.service.ts";
import {MovieInfo} from "../../components/movie-info/MovieInfo.tsx";
import {useSelectedMovie} from "../../hooks/useSelectedMovie.ts";
import {useEffect} from "react";
import {goToUpScreen} from "../../utils/goToUpScreen.ts";
import styles from "./SearchPage.module.css";

export const SearchPage = () => {
    const {params} = useSearchMovieParams();
    const selectedMovie = useSelectedMovie([params.query, params.page]);

    useEffect(() => {
        goToUpScreen();
    }, [selectedMovie, params.page, params.query]);

    return (
        <div>
            {selectedMovie && <MovieInfo movie={selectedMovie} />}

            <h1 className={styles.searchTitle}>Search Results for: {params.query}</h1>
            <div className={styles.pageInfo}>
                <div className={styles.line}></div>
                <p>Page {params.page}</p>
                <div className={`${styles.line} ${styles.rightLine}`}></div>
            </div>

            <MovieList<ISearchParams>
                params={params}
                queryFn={movieService.getSearchMovies}
                queryKey='search'
            />
        </div>
    );
};