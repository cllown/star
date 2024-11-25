import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.state';

export const selectState = createFeatureSelector<MovieState>('movieState');

export const selectMovies = createSelector(
  selectState,
  (state) => state.movies || []
);
export const selectMovieByEpisodeId = (episodeId: number) =>
  createSelector(
    selectState,
    (state: MovieState) =>
      state.movies?.find((movie) => movie.episode_id === episodeId) || null
  );
