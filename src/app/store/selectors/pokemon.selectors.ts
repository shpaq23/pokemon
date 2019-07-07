import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PokemonState} from '../state/pokemon.state';

const getPokemonFeatureState = createFeatureSelector<PokemonState>('pokemons');

export const getPokemonsBasic = createSelector(
  getPokemonFeatureState,
  state => state.pokemonsBasic
);
export const getPokemonsDetailed = createSelector(
  getPokemonFeatureState,
  state => state.pokemonsDetailed
);
export const getSelectedPokemonName = createSelector(
  getPokemonFeatureState,
  state => state.selectedPokemonName
);
export const getSelectedPokemon = createSelector(
  getPokemonFeatureState,
  getSelectedPokemonName,
  (state, selectedPokemonName) => state.pokemonsDetailed.find(pd => pd.name === selectedPokemonName) ||
    state.pokemonsBasic.find(pb => pb.name === selectedPokemonName) || null
);
export const getError = createSelector(
  getPokemonFeatureState,
  state => state.error
);
