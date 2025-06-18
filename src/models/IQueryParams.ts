type Sort =
    'title.asc'
    | 'title.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';

export interface IQueryParams {
    page: number;
    with_genres?: string;
    search?: string;
    sort_by?: Sort;
}