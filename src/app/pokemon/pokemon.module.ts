import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {PokemonEffects} from '../store/effects/pokemon.effects';
import {pokemonReducer} from '../store/reducers/pokemon.reducers';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material';
import {NgScrollbarModule} from 'ngx-scrollbar';

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailsComponent],
  exports: [
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    StoreModule.forFeature('pokemons', pokemonReducer),
    EffectsModule.forFeature([PokemonEffects]),
    HttpClientModule,
    MatButtonModule,
    NgScrollbarModule
  ]
})
export class PokemonModule { }
