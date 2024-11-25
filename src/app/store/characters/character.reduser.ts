import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from './character.actions';
import { initialCharacterState } from './character.state';

export const characterReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
  })),
  on(CharacterActions.loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
