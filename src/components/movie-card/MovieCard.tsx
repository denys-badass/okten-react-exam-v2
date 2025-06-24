import type {FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";

type MovieCardProps = {
    movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({movie}) => {
    const {backdrop_path, genre_ids, title, release_date, vote_average} = movie;

    return (
        <div>
            {
                backdrop_path ?
                    <img src={import.meta.env.VITE_MOVIE_IMAGE_URL + '/w300' + backdrop_path} alt={`${title} backdrop`}
                         loading='lazy'/> :
                    <img src='/poster-placeholder.jpg' alt='placeholder poster' loading='lazy'/>
            }
            <h3>{title}</h3>
            <p>{release_date}</p>
            <ul>
                {genre_ids.map((genreId) => (
                    <li key={genreId}>
                        <span>{genreId}</span>
                    </li>
                ))}
            </ul>
            <p>Rating: {vote_average}</p>
        </div>
    );
};