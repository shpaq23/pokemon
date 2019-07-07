import {initialPokemonState, PokemonState} from '../state/pokemon.state';
import {PokemonActions, PokemonActionsTypes} from '../actions/pokemon.actions';

export function pokemonReducer(state = initialPokemonState, action: PokemonActions): PokemonState {
  switch (action.type) {
    case PokemonActionsTypes.SetCurrentPokemon:
      return {
        ...state,
        selectedPokemonName: action.payload
      };
    case PokemonActionsTypes.GetPokemonsBasicSuccess:
      return {
        ...state,
        pokemonsBasic: action.payload,
        error: ''
      };
    case PokemonActionsTypes.GetPokemonsBasicFail:
      return {
        ... state,
        error: action.payload
      };
    case PokemonActionsTypes.GetPokemonDetailsSuccess:
      return {
        ... state,
        pokemonsDetailed: [... state.pokemonsDetailed, action.payload],
        error: ''
      };
    case PokemonActionsTypes.GetPokemonDetailsFail:
      return {
        ... state,
        error: action.payload
      };
    default:
      return state;
  }
}
