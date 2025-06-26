import type {FC} from "react";
import {FaRegStar, FaRegStarHalfStroke, FaStar} from "react-icons/fa6";

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
        <div className="flex items-center">
            {Array(fullStars).fill(<span className="text-yellow-500"><FaStar/></span>)}
            {halfStar ? <span className="text-yellow-500"><FaRegStarHalfStroke/></span> : null}
            {Array(emptyStars).fill(<span className="text-yellow-500"><FaRegStar/></span>)}
        </div>
    );
};