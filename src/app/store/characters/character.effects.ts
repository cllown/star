import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { CharacterService } from '../../services/character.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as CharacterActions from './character.actions';
import { of } from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.loadCharacters),
      mergeMap(() =>
        this.characterService.getAllCharacters().pipe(
          map((characters) =>
            CharacterActions.loadCharactersSuccess({ characters })
          ),
          catchError((error) =>
            of(CharacterActions.loadCharactersFailure({ error }))
          )
        )
      )
    )
  );
}
