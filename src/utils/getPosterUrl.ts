export const getPosterUrl = (url: string, type: string): string => {
    return url ? import.meta.env.VITE_MOVIE_IMAGE_URL + '/' + type + url : '/poster-placeholder.jpg';
}