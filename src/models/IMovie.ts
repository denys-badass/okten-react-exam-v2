export interface IMovie {
  backdrop_path: string;
  poster_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
}