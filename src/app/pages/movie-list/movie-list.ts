import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie';
import { IMovie } from '../../modelos/i-movie';
import { SearchBar } from '../../components/search-bar/search-bar';
import { MovieCard } from '../../components/movie-card/movie-card';
import { Pagination } from '../../components/pagination/pagination';
import { LoadingMessage } from '../../components/loading-message/loading-message';

@Component({
  selector: 'app-movie-list',
  imports: [SearchBar, MovieCard, Pagination, LoadingMessage],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private movieService = inject(MovieService);
  movies = signal<IMovie[]>([]);
  query = signal('');
  page = signal(1);
  totalPages = signal(0);
  totalResults = signal(0);
  loading = signal(false);
  errorMessage = signal('');

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const query = params.get('q') ?? '';
      const page = Number(params.get('page') ?? 1);
      this.query.set(query);
      this.page.set(page);

      if (query) {
        this.loadMovies(query, page);
      } else {
        this.movies.set([]);
      }
    });
  }

  onSearch(query: string): void {
    this.router.navigate([], { queryParams: { q: query, page: 1 } });
  }

  onPageChange(page: number): void {
    this.router.navigate([], { queryParams: { q: this.query(), page } });
    window.scrollTo(0, 0);
  }

  private loadMovies(query: string, page: number): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.movieService.searchMovies(query, page).subscribe({
      next: result => {
        this.movies.set(result.movies);
        this.totalPages.set(result.totalPages);
        this.totalResults.set(result.totalResults);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('No se pudieron cargar las películas. Intenta de nuevo.');
        this.loading.set(false);
      }
    });
  }
}