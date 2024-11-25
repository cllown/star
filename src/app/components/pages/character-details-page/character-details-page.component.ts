import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-details-page.component.html',
  styleUrl: './character-details-page.component.scss',
})
export class CharacterDetailsPageComponent {}
