import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {RatingStars} from "../rating-stars/RatingStars.tsx";
import {useSelectMovieStore} from "../../store/useSelectMovieStore.ts";
import {fiveStarRating} from "../../utils/fiveStarRating.ts";
import {getYear} from "../../utils/getYear.ts";
import {GenreBadgesList} from "../genre-badges-list/GenreBadgesList.tsx";
import styles from "./MovieCard.module.css";
import {getPosterUrl} from "../../utils/getPosterUrl.ts";

type MovieCardProps = {
    movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
    const setSelectedMovie = useSelectMovieStore(state => state.setMovie);

    const {backdrop_path, genre_ids, title, release_date, vote_average, id} = movie;
    const year = getYear(release_date);
    const rating = fiveStarRating(vote_average);
    const backdropUrl = getPosterUrl(backdrop_path, 'w500');

    return (
        <div className={`${styles.cardContainer} ${id % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}`} >
            <div className={styles.cardLink} onClick={() => setSelectedMovie(movie)}>
                        <img src={backdropUrl} alt={`${title} backdrop`}
                             loading='lazy' className={styles.img}/> :
                <div className={styles.cardTextContainer}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p>{year} year</p>
                    <div className={styles.ratingStars}><RatingStars rating={rating}/> <p className={styles.ratingNumber}>{rating}</p></div>

                </div>
            </div>

            <div className={styles.genreBadges}>
                <GenreBadgesList genreIds={genre_ids}/>
            </div>
        </div>
    );
};