import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovie } from '../../modelos/i-movie';
import { RatingBadge } from '../rating-badge/rating-badge';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink, RatingBadge],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  movie = input.required<IMovie>();
}