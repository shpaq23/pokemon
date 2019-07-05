import {PokemonStats} from './pokemon-stats';

export interface Pokemons {
  name: string;
  id: number;
  weight: number;
  height: number;
  stats: PokemonStats;
  img: string;
}
