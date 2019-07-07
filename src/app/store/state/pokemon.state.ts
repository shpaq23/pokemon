import {PokemonBasic, PokemonDetailed} from '../../interfaces/pokemon';

export interface PokemonState {
  pokemonsBasic: PokemonBasic[];
  pokemonsDetailed: PokemonDetailed[];
  selectedPokemonName: string | null;
  error: string;
}
export const initialPokemonState: PokemonState = {
  pokemonsBasic: [],
  pokemonsDetailed: [],
  selectedPokemonName: null,
  error: ''
};
