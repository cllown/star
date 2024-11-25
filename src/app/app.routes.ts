import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HomePageResolver } from './components/guards/home-page-resolver';
import { MovieDetailsPageComponent } from './components/pages/details-page/movie-details-page.component';
import { CharacterDetailsPageComponent } from './components/pages/character-details-page/character-details-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { movies: HomePageResolver },
  },
  { path: 'movie/:episode_id', component: MovieDetailsPageComponent },
  /*   { path: 'character/:id', component: CharacterDetailsPageComponent }, */
];
