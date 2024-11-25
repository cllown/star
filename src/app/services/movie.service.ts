import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Movie, MovieApiModel } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieApiModel> {
    return this.http.get<MovieApiModel>(this.apiUrl);
  }
}
