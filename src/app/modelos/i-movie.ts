export interface IMovie {
  id: number;
  title: string;
  year: string;
  poster: string;
  rating: number;
  overview: string;
}

export interface ISearchResult {
  movies: IMovie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface IMovieDetail extends IMovie {
  backdrop: string;
  tagline: string;
  runtime: string;
  releaseDate: string;
  voteCount: number;
  genres: string[];
  homepage: string;
}