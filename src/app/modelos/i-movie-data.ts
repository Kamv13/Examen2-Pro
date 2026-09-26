export interface IMovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface ISearchData {
  page: number;
  results: IMovieData[];
  total_pages: number;
  total_results: number;
}

export interface IGenreData {
  id: number;
  name: string;
}

export interface IMovieDetailData extends IMovieData {
  backdrop_path: string | null;
  tagline: string;
  runtime: number;
  vote_count: number;
  genres: IGenreData[];
  homepage: string;
}