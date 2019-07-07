import {Action} from '@ngrx/store';
import {PokemonBasic, PokemonDetailed} from '../../interfaces/pokemon';

export enum PokemonActionsTypes {
  GetPokemonsBasic = '[Pokemon] Get Pokemons Basic',
  GetPokemonsBasicSuccess = '[Pokemon] Get Pokemons  Basic Success',
  GetPokemonsBasicFail = '[Pokemon] Get Pokemons Basic Fail',

  GetPokemonDetails = '[Pokemon] Get Pokemon Details',
  GetPokemonDetailsSuccess = '[Pokemon] Get Pokemon Details Success',
  GetPokemonDetailsFail = '[Pokemon] Get Pokemon Details Fail',

  SetCurrentPokemon = '[Pokemon] Set Current Pokemon',
}
export class GetPokemonsBasic implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonsBasic;
}
export class GetPokemonsBasicSuccess implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonsBasicSuccess;
  constructor(public payload: PokemonBasic[]) { }
}
export class GetPokemonsBasicFail implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonsBasicFail;
  constructor(public payload: string) { }
}

export class GetPokemonDetails implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonDetails;
  constructor(public payload: PokemonBasic) { }
}
export class GetPokemonDetailsSuccess implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonDetailsSuccess;
  constructor(public payload: PokemonDetailed) { }
}
export class GetPokemonDetailsFail implements Action {
  public readonly type = PokemonActionsTypes.GetPokemonDetailsFail;
  constructor(public payload: string) { }
}
export class SetCurrentPokemon implements Action {
  public readonly type = PokemonActionsTypes.SetCurrentPokemon;
  constructor(public payload: string) { }
}
export type PokemonActions = GetPokemonsBasic | GetPokemonsBasicSuccess |GetPokemonsBasicFail |
  GetPokemonDetails | GetPokemonDetailsSuccess | GetPokemonDetailsFail | SetCurrentPokemon;
