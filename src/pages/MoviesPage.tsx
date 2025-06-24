import {useMovieParams} from "../hooks/useMovieParams.ts";
import type {IQueryParams, Sort} from "../models/IQueryParams.ts";
import {MovieList} from "../components/movie-list/MovieList.tsx";
import {movieService} from "../api/movie.service.ts";

export const MoviesPage = () => {
    const {params, setSortBy} = useMovieParams();

    return (
        <div className='py-10 bg-gray-50'>
            <h1>{params.with_genres ? `${params.with_genres} movies` : 'Movies'}</h1>
            <div className='flex items-center justify-center h-8 gap-6'>
                <div className='w-1/3 h-[2px] bg-linear-to-r from-indigo-600 to-gray-50'></div>
                <p>Page {params.page}</p>
                <div className='w-1/3 h-[2px] bg-linear-to-l from-indigo-600 to-gray-50'></div>
            </div>
            <label>Sort by:
                <select value={params.sort_by} onChange={(e) => setSortBy(e.target.value as Sort)}>
                    <option value='popularity.desc'>Popularity ↓</option>
                    <option value='popularity.asc'>Popularity ↑</option>
                    <option value='title.desc'>Title ↓</option>
                    <option value='title.asc'>Title ↑</option>
                    <option value='primary_release_date.desc'>Release Date ↓</option>
                    <option value='primary_release_date.asc'>Release Date ↑</option>
                    <option value='vote_average.desc'>Rating ↓</option>
                    <option value='vote_average.asc'>Rating ↑</option>
                    <option value='vote_count.desc'>Review ↓</option>
                    <option value='vote_count.asc'>Review ↑</option>
                </select>
            </label>
            <MovieList<IQueryParams>
                params={params}
                queryFn={movieService.getMovies}
                queryKey="movies"
            />
        </div>
    )
}