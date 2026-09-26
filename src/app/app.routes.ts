import { Routes } from '@angular/router';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieDetail } from './pages/movie-detail/movie-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path: 'peliculas', component: MovieList },
  { path: 'pelicula/:id', component: MovieDetail },
  { path: '**', redirectTo: 'peliculas' }
];