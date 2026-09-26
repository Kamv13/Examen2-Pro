import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IMovie, IMovieDetail, ISearchResult } from '../modelos/i-movie';
import { IMovieData, IMovieDetailData, ISearchData } from '../modelos/i-movie-data';
import { apiConfig } from '../utils/api-config';
import { formatRuntime, getImageUrl } from '../utils/movie-helpers';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);

  searchMovies(query: string, page: number): Observable<ISearchResult> {
    return this.http
      .get<ISearchData>(`${apiConfig.url}/search/movie`, {
        params: { api_key: apiConfig.key, query, language: apiConfig.language, page }
      })
      .pipe(
        map(data => ({
          movies: data.results.map(movie => this.toMovie(movie)),
          page: data.page,
          totalPages: Math.min(data.total_pages, 500),
          totalResults: data.total_results
        }))
      );
  }

  getMovieDetail(id: number): Observable<IMovieDetail> {
    return this.http
      .get<IMovieDetailData>(`${apiConfig.url}/movie/${id}`, {
        params: { api_key: apiConfig.key, language: apiConfig.language }
      })
      .pipe(map(data => this.toMovieDetail(data)));
  }

  private toMovie(data: IMovieData): IMovie {
    return {
      id: data.id,
      title: data.title,
      year: data.release_date ? data.release_date.slice(0, 4) : 'N/A',
      poster: getImageUrl(data.poster_path, 'w500'),
      rating: data.vote_average,
      overview: data.overview || 'Sin descripción disponible.'
    };
  }

  private toMovieDetail(data: IMovieDetailData): IMovieDetail {
    return {
      ...this.toMovie(data),
      backdrop: data.backdrop_path ? getImageUrl(data.backdrop_path, 'w1280') : '',
      tagline: data.tagline,
      runtime: formatRuntime(data.runtime),
      releaseDate: data.release_date || 'N/A',
      voteCount: data.vote_count,
      genres: data.genres.map(genre => genre.name),
      homepage: data.homepage
    };
  }
}