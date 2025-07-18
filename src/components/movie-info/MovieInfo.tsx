import {type FC, useState} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import {RatingStars} from "../rating-stars/RatingStars.tsx";
import {FaEye} from "react-icons/fa";
import {fiveStarRating} from "../../utils/fiveStarRating.ts";
import {getYear} from "../../utils/getYear.ts";
import {GenreBadgesList} from "../genre-badges-list/GenreBadgesList.tsx";
import {FaCamera} from "react-icons/fa6";
import {PosterPreview} from "../poster-preview/PosterPreview.tsx";
import styles from "./MovieInfo.module.css";
import {getPosterUrl} from "../../utils/getPosterUrl.ts";

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
    const backdropUrl = getPosterUrl(backdrop_path, 'original');

    return (
        <div className={styles.infoContainer}>
            <div className={styles.infoBg} style={{backgroundImage: `url(${backdropUrl})`}}>
            </div>
            <div className={styles.describeContainer}>
                <div>
                    <h2 className={styles.mainTitle}>{title}</h2>
                    <h3 className={styles.subTitle}>{original_title !== title && original_title}</h3>
                </div>
                <p className={styles.year}>{year}</p>
                <p>{overview}</p>
                <div className={styles.rating}>
                    <RatingStars rating={fiveStar}/>
                    <p>{fiveStar}</p>
                    <p className={styles.vote}>({vote_count} <span><FaEye/></span>)</p>
                </div>
                <div className={styles.genresList}>
                    <GenreBadgesList genreIds={genre_ids}/>
                    <div className={styles.posterLink} onClick={() => setShowPoster(true)}>
                        <p>Poster</p>
                        <span><FaCamera /></span>
                    </div>
                </div>
                {showPoster && <PosterPreview posterUrl={poster_path} setShowPoster={setShowPoster} />}
            </div>

        </div>
    );
};