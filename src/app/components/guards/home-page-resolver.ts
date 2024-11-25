import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../store/movies/movie.actions';

@Injectable({
  providedIn: 'root',
})
export class HomePageResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(): boolean {
    this.store.dispatch(loadMovies());
    return true;
  }
}
