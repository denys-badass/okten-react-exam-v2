import {useMovieParams} from "../../hooks/useMovieParams.ts";
import type {IMovieParams} from "../../models/IMovieParams.ts";
import {MovieList} from "../../components/movie-list/MovieList.tsx";
import {movieService} from "../../api/movie.service.ts";
import {SortBar} from "../../components/sort-bar/SortBar.tsx";
import {useGenreName} from "../../hooks/useGenreName.ts";
import {MovieInfo} from "../../components/movie-info/MovieInfo.tsx";
import {useSelectedMovie} from "../../hooks/useSelectedMovie.ts";
import {useEffect} from "react";
import {goToUpScreen} from "../../utils/goToUpScreen.ts";
import styles from "./MoviesPage.module.css";

export const MoviesPage = () => {
    const {params, setSortBy} = useMovieParams();
    const genreName = useGenreName(Number(params.with_genres));
    const selectedMovie = useSelectedMovie([genreName, params.page, params.sort_by]);

    useEffect(() => {
        goToUpScreen();
    }, [params.with_genres, selectedMovie, params.page, params.sort_by]);

    return (
        <div>
            {selectedMovie && <MovieInfo movie={selectedMovie}/>}

            <h1 className={styles.heading}>{params.with_genres ? `${genreName} movies` : 'Movies'}</h1>
            <div className={styles.pageNumber}>
                <div className={styles.line}></div>
                <p>Page {params.page}</p>
                <div className={`${styles.line} ${styles.rightLine}`}></div>
            </div>
            <div className={styles.sortBar}>
                <SortBar sort={params.sort_by} setSort={setSortBy}/>
            </div>
            <MovieList<IMovieParams>
                params={params}
                queryFn={movieService.getMovies}
                queryKey="movies"
            />
        </div>
    )
}