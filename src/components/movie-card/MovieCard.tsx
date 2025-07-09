import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {RatingStars} from "../rating-stars/RatingStars.tsx";
import {useSelectMovieStore} from "../../store/useSelectMovieStore.ts";
import {fiveStarRating} from "../../utils/fiveStarRating.ts";
import {getYear} from "../../utils/getYear.ts";
import {GenreBadgesList} from "../genre-badges-list/GenreBadgesList.tsx";

type MovieCardProps = {
    movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
    const setSelectedMovie = useSelectMovieStore(state => state.setMovie);

    const {backdrop_path, genre_ids, title, release_date, vote_average, id} = movie;
    const year = getYear(release_date);
    const rating = fiveStarRating(vote_average);

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md
            hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
            ${id % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'} mb-5`} >
            <div className='cursor-pointer' onClick={() => setSelectedMovie(movie)}>
                {
                    backdrop_path ?
                        <img src={import.meta.env.VITE_MOVIE_IMAGE_URL + '/w500' + backdrop_path} alt={`${title} backdrop`}
                             loading='lazy' className='max-h-[180px]'/> :
                        <img src='/poster-placeholder.jpg' alt='placeholder poster' loading='lazy' className='max-h-[220px]'/>
                }
                <div className='p-4'>
                    <h3 className='font-(family-name:--font-limelight) text-2xl'>{title}</h3>
                    <p>{year} year</p>
                    <div className='flex gap-2 items-center'><RatingStars rating={rating}/> <p className='pt-0.5'>{rating}</p></div>

                </div>
            </div>

            <div className='p-4 pt-0'>
                <GenreBadgesList genreIds={genre_ids}/>
            </div>
        </div>
    );
};