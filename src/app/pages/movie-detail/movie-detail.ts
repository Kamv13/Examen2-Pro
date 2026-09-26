import { Component, OnInit, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieService } from '../../services/movie';
import { IMovieDetail } from '../../modelos/i-movie';
import { RatingBadge } from '../../components/rating-badge/rating-badge';
import { LoadingMessage } from '../../components/loading-message/loading-message';

@Component({
  selector: 'app-movie-detail',
  imports: [RatingBadge, LoadingMessage],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private movieService = inject(MovieService);
  movie = signal<IMovieDetail | null>(null);
  errorMessage = signal('');

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap(params => this.movieService.getMovieDetail(Number(params.get('id')))))
      .subscribe({
        next: data => this.movie.set(data),
        error: () => this.errorMessage.set('No se pudo cargar la película.')
      });
  }

  goBack(): void {
    this.location.back();
  }
}