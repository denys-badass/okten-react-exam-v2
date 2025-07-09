import {useMovieParams} from "../hooks/useMovieParams.ts";
import type {IMovieParams} from "../models/IMovieParams.ts";
import {MovieList} from "../components/movie-list/MovieList.tsx";
import {movieService} from "../api/movie.service.ts";
import {SortBar} from "../components/sort-bar/SortBar.tsx";
import {useGenreName} from "../hooks/useGenreName.ts";
import {MovieInfo} from "../components/movie-info/MovieInfo.tsx";
import {useSelectedMovie} from "../hooks/useSelectedMovie.ts";
import {useEffect} from "react";
import {goToUpScreen} from "../utils/goToUpScreen.ts";

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

            <h1 className='text-4xl font-medium text-gray-900 dark:text-gray-100 mb-6 text-center'>{params.with_genres ? `${genreName} movies` : 'Movies'}</h1>
            <div className='flex items-center justify-center h-8 gap-6'>
                <div className='w-1/3 h-[2px] bg-linear-to-r from-indigo-600 to-gray-50 dark:to-gray-900'></div>
                <p>Page {params.page}</p>
                <div className='w-1/3 h-[2px] bg-linear-to-l from-indigo-600 to-gray-50 dark:to-gray-900'></div>
            </div>
            <div className='w-3/4 mx-auto py-6'>
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