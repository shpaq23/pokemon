import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {PokemonModule} from './pokemon/pokemon.module';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'POKEMON demo app',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    PokemonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
