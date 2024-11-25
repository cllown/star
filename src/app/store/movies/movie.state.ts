import { Movie } from '../../mock-data';

export interface MovieState {
  movies: Movie[] | null;
}

export const initialState: MovieState = {
  movies: null,
};
