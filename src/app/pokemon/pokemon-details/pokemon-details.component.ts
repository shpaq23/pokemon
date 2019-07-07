import { Component, OnInit } from '@angular/core';
import {PokemonBasic, PokemonDetailed} from '../../interfaces/pokemon';
import {PokemonState} from '../../store/state/pokemon.state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromPokemonSelectors from '../../store/selectors/pokemon.selectors';
import * as fromPokemonActions from '../../store/actions/pokemon.actions';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  selectedPokemon: PokemonDetailed | PokemonBasic | null = null;
  componentActive = true;
  errorMessage$: Observable<string>;

  constructor(private store: Store<PokemonState>) { }

  ngOnInit() {
    this.errorMessage$ = this.store.pipe(select(fromPokemonSelectors.getError));
    this.store.pipe(
      select(fromPokemonSelectors.getSelectedPokemon),
      takeWhile(() => this.componentActive))
      .subscribe(
        pokemon => {
            console.log(pokemon);
            if (this.isPokemonBasic(pokemon)) {
              this.store.dispatch(new fromPokemonActions.GetPokemonDetails(pokemon));
            } else {
              this.selectedPokemon = pokemon;

            }
        }
      );
  }
  isPokemonBasic(pokemon: PokemonDetailed | PokemonBasic | null): pokemon is PokemonBasic {
    return pokemon === null ? false : (pokemon as PokemonBasic).url !== undefined;
  }
}
