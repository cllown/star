import { Component, Input, input } from '@angular/core';
import { Movie } from '../../mock-data';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  trackById(index: number, movie: Movie): number {
    return movie.episode_id;
  }
}
