export type Sort =
    'title.asc'
    | 'title.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc'
    | 'popularity.desc'
    | 'popularity.asc';

export interface ISearchParams {
    page: string;
    query: string;
}

export interface IMovieParams extends Omit<ISearchParams, 'query'> {
    with_genres?: string;
    sort_by: Sort;
}


