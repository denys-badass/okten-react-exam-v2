import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {RatingStars} from "../rating-stars/RatingStars.tsx";
import {GenreLink} from "../genre-link/GenreLink.tsx";

type MovieCardProps = {
    movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
    const {backdrop_path, genre_ids, title, release_date, vote_average, id} = movie;
    const date = new Date(release_date);
    const rating = Number((vote_average / 2).toFixed(1));

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md
            hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
            ${id % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'} mb-5`}>
            {
                backdrop_path ?
                    <img src={import.meta.env.VITE_MOVIE_IMAGE_URL + '/w500' + backdrop_path} alt={`${title} backdrop`}
                         loading='lazy' className='max-h-[180px]'/> :
                    <img src='/poster-placeholder.jpg' alt='placeholder poster' loading='lazy' className='max-h-[180px]'/>
            }
            <div className='p-4'>
                <h3 className='font-(family-name:--font-limelight) text-2xl'>{title}</h3>
                {date ? <p>{date.getFullYear()} year</p> : <p>Unknown Release Date</p>}
                <div className='flex gap-2 items-center'><RatingStars rating={rating}/> <p className='pt-0.5'>{rating}</p></div>
                <ul className='flex flex-wrap gap-2'>
                    {genre_ids.map((genreId) => (
                        <li
                            key={genreId}
                            className='bg-gray-800 text-gray-50 hover:text-indigo-600 dark:text-gray-800 dark:bg-gray-50 rounded-xl flex items-center justify-center px-2 cursor-pointer'>
                            <GenreLink genreId={genreId} />
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};