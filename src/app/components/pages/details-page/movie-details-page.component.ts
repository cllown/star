import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovieByEpisodeId } from '../../../store/movies/movie.selectors';
import { Movie } from '../../../mock-data';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-movie-details-page',
  imports: [CommonModule],
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
})
export class MovieDetailsPageComponent implements OnInit {
  movie$!: Observable<Movie | null>;
  episodeId: number | null = null;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.episodeId = +params.get('episode_id')!;
    });
  }
}
