import type {FC} from "react";
import {FaRegStar, FaRegStarHalfStroke, FaStar} from "react-icons/fa6";
import styles from "./RatingStars.module.css";

type RatingProps = {
    rating: number;
}

export const RatingStars: FC<RatingProps> = ({rating}) => {
    let fullStars = Math.floor(rating);
    const difference = rating - fullStars;

    fullStars += difference >= 0.8 ? 1 : 0;
    const halfStar = difference >= 0.3 && difference < 0.8 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className={styles.starList}>
            {fullStars > 0 && Array(fullStars).fill(<FaStar/>).map((star, index) => (<span key={index} className={styles.star}>{star}</span>))}
            {halfStar ? <span className={styles.star}><FaRegStarHalfStroke/></span> : null}
            {emptyStars > 0 && Array(emptyStars).fill(<FaRegStar/>).map((star, index) => (<span key={index} className={styles.star}>{star}</span>))}
        </div>
    );
};