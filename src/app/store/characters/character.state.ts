import { Character } from '../../mock-data';

export interface CharacterState {
  character: Character | null;
  loading: boolean;
  error: string | null;
}

export const initialCharacterState: CharacterState = {
  character: null,
  loading: false,
  error: null,
};
