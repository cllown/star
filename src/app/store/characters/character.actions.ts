import { createAction, props } from '@ngrx/store';
import { Character } from '../../mock-data';

export const loadCharacters = createAction('[Character List] Load Characters');

export const loadCharactersSuccess = createAction(
  '[Character List] Load Characters Success',
  props<{ characters: Character[] }>()
);

export const loadCharactersFailure = createAction(
  '[Character List] Load Characters Failure',
  props<{ error: any }>()
);
