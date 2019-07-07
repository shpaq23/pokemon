export interface PokemonBasic {
  name: string;
  url: string;
}
export interface PokemonStats {
  hp: number;
  defense: number;
  attack: number;
  speed: number;
  specialDefense: number;
  specialAttack: number;
}
export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
export interface PokemonDetailed {
  name: string;
  id: number;
  base_experience: number;
  weight: number;
  height: number;
  stats: PokemonStats;
  sprites: PokemonSprites;
}
export interface PokemonDetailsHttp {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any;
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: any;
  moves: any[];
  name: string;
  order: number;
  species: any;
  sprites: PokemonSprites;
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  }[] | PokemonStats;
  types: any[];
  weight: number;
}
