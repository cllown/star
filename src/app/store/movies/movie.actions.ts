import { createAction, props } from '@ngrx/store';
import { Movie } from '../../mock-data';

export const loadMovies = createAction('[Movie] Load Popular Movies ');

export const loadMoviesSuccess = createAction(
  '[Movie] Load Popular Movies Success',
  props<{ movies: Movie[] | null }>()
);
export const loadMoviesFailure = createAction(
  '[Movie] Load Popular Movies Failure',
  props<{ error: any }>()
);
