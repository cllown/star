import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';
import * as MovieActions from './movie.actions';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private movieService = inject(MovieService);
  private store = inject(Store);

  loadPopularMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      mergeMap(() =>
        this.movieService.getMovies().pipe(
          map((movies) =>
            MovieActions.loadMoviesSuccess({
              movies: movies.results,
            })
          ),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error })))
        )
      )
    )
  );
  constructor() {}
}
