import {type FC, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {RatingStars} from "../rating-stars/RatingStars.tsx";
import {FaEye} from "react-icons/fa";
import {fiveStarRating} from "../../utils/fiveStarRating.ts";
import {getYear} from "../../utils/getYear.ts";
import {GenreBadgesList} from "../genre-badges-list/GenreBadgesList.tsx";
import {FaCamera} from "react-icons/fa6";
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";

type MovieInfoProps = {
    movie: IMovie;
}

export const MovieInfo: FC<MovieInfoProps> = ({movie}) => {
    const [showPoster, setShowPoster] = useState<boolean>(false);

    const {
        title,
        original_title,
        vote_average,
        release_date,
        genre_ids,
        vote_count,
        backdrop_path,
        poster_path,
        overview
    } = movie;
    const fiveStar = fiveStarRating(vote_average);
    const year = getYear(release_date);
    const backdropUrl: string = backdrop_path ? import.meta.env.VITE_MOVIE_IMAGE_URL + '/original' + backdrop_path : '/poster-placeholder.jpg';

    return (
        <div className={`relative -mt-10 mb-10 h-[600px]`}>
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat z-10 mask-b-from-20% mask-b-to-95%'
                 style={{backgroundImage: `url(${backdropUrl})`}}>
            </div>
            <div className='absolute inset-0 flex justify-end flex-col z-20 w-[90%] mx-auto gap-2'>
                <div>
                    <h2 className='font-(family-name:--font-limelight) text-4xl text-shadow-md text-shadow-gray-50 dark:text-shadow-gray-900'>{title}</h2>
                    <h3 className='text-2xl italic'>{original_title !== title && original_title}</h3>
                </div>
                <p className='font-light text-xl'>{year}</p>
                <p>{overview}</p>
                <div className='flex gap-2'>
                    <RatingStars rating={fiveStar}/>
                    <p>{fiveStar}</p>
                    <p className='flex items-center gap-1'>({vote_count} <span><FaEye/></span>)</p>
                </div>
                <div className='my-2.5 flex justify-between'>
                    <GenreBadgesList genreIds={genre_ids}/>
                    <div className='flex items-center gap-2 cursor-pointer hover:scale-105 hover:text-indigo-800 dark:hover:text-indigo-600 transition-all duration-300' onClick={() => setShowPoster(true)}>
                        <p>Show Poster</p>
                        <span><FaCamera /></span>
                    </div>
                </div>
                {showPoster && <PosterPreview posterUrl={poster_path} setShowPoster={setShowPoster} />}
            </div>

        </div>
    );
};