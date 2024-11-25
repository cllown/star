import { createReducer, on } from '@ngrx/store';
import { initialState } from './movie.state';
import * as MovieActions from './movie.actions';

export const MovieReducer = createReducer(
  initialState,

  on(MovieActions.loadMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies,
  })),

  on(MovieActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    movies: null,
    error: error,
  }))
);
