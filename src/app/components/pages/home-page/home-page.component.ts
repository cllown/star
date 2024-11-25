import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieState } from '../../../store/movies/movie.state';
import { CommonModule } from '@angular/common';
import { Movie } from '../../../mock-data';
import { MovieListComponent } from '../../movie-list/movie-list.component';
import { selectMovies } from '../../../store/movies/movie.selectors';
import { loadMovies } from '../../../store/movies/movie.actions';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, MovieListComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  movies$!: Observable<Movie[] | null>;

  constructor(private store: Store<MovieState>) {}
  ngOnInit() {
    this.movies$ = this.store.select(selectMovies);
  }
}
