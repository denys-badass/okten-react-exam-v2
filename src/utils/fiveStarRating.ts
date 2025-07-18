export const fiveStarRating = (tenStars: number): number => {
    return  Number((tenStars / 2).toFixed(1));
}