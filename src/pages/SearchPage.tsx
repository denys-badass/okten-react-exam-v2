import {useSearchMovieParams} from "../hooks/useSearchMovieParams.ts";
import {MovieList} from "../components/movie-list/MovieList.tsx";
import type {ISearchParams} from "../models/IMovieParams.ts";
import {movieService} from "../api/movie.service.ts";

export const SearchPage = () => {
    const {params} = useSearchMovieParams();


    return (
        <div>
            <h1 className='text-4xl font-medium text-gray-900 dark:text-gray-100 mb-6 text-center'>Search Results for: {params.query}</h1>
            <div className='flex items-center justify-center h-8 gap-6'>
                <div className='w-1/3 h-[2px] bg-linear-to-r from-indigo-600 to-gray-50 dark:to-gray-900'></div>
                <p>Page {params.page}</p>
                <div className='w-1/3 h-[2px] bg-linear-to-l from-indigo-600 to-gray-50 dark:to-gray-900'></div>
            </div>

            <MovieList<ISearchParams>
                params={params}
                queryFn={movieService.getSearchMovies}
                queryKey='search'
            />
        </div>
    );
};