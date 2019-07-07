import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonBasic} from '../../interfaces/pokemon';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {PokemonState} from '../../store/state/pokemon.state';
import * as fromPokemonSelectors from '../../store/selectors/pokemon.selectors';
import * as fromPokemonActions from '../../store/actions/pokemon.actions';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  title = 'Pokemon Generation I';
  selectedPokemonName: string;
  pokemons$: Observable<PokemonBasic[]>;
  componentActive = true;
  errorMessage$: Observable<string>;
  constructor(private store: Store<PokemonState>) { }

  ngOnInit(): void {
    this.pokemons$ = this.store.pipe(select(fromPokemonSelectors.getPokemonsBasic)) as Observable<PokemonBasic[]>;
    this.errorMessage$ = this.store.pipe(select(fromPokemonSelectors.getError));

    this.store.dispatch(new fromPokemonActions.GetPokemonsBasic());

    this.store.pipe(
      select(fromPokemonSelectors.getSelectedPokemonName),
      takeWhile(() => this.componentActive))
      .subscribe(
        name => this.selectedPokemonName = name
      );
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
  selectPokemon(name: string) {
    console.log(name);
    this.store.dispatch(new fromPokemonActions.SetCurrentPokemon(name));
  }

}
