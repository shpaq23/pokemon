import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../store/state/pokemon.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    StoreModule.forFeature('pokemons', reducer)
  ]
})
export class PokemonModule { }
