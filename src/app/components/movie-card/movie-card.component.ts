import { Component, Input } from '@angular/core';
import { Movie } from '../../mock-data';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterModule, CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor() {}
}
