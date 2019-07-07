import {Injectable} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetPokemonDetailsSuccess,
  GetPokemonsBasicFail,
  GetPokemonsBasicSuccess,
  GetPokemonDetailsFail,
  PokemonActionsTypes, GetPokemonDetails
} from '../actions/pokemon.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PokemonBasic} from '../../interfaces/pokemon';

@Injectable()
export class PokemonEffects {

  constructor(private pokemonService: PokemonService,
              private actions$: Actions) { }

  @Effect()
  getPokemonsBasic: Observable<Action> = this.actions$.pipe(
    ofType(PokemonActionsTypes.GetPokemonsBasic),
    mergeMap(action =>
    this.pokemonService.getPokemons().pipe(
      map(pokemons => (new GetPokemonsBasicSuccess(pokemons))),
      catchError(err => of(new GetPokemonsBasicFail(err)))
    )));
  @Effect()
  getPokemonDetails: Observable<Action> = this.actions$.pipe(
    ofType(PokemonActionsTypes.GetPokemonDetails),
    map((action: GetPokemonDetails) => action.payload),
    mergeMap((pokemon: PokemonBasic) =>
      this.pokemonService.getPokemonDetails(pokemon).pipe(
        map(pokemonDetails => (new GetPokemonDetailsSuccess(pokemonDetails))),
        catchError(err => of(new GetPokemonDetailsFail(err)))
      )
    ));


}
