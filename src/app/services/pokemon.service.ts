import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PokemonBasic, PokemonDetailed, PokemonDetailsHttp, PokemonStats} from '../interfaces/pokemon';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokemonBasic[]> {
    const params = new HttpParams().set('offset', '0').set('limit', '151');
    return this.http.get<{count: number, next: string, previous: string, results: PokemonBasic[]}>(this.url + 'pokemon', {params})
      .pipe(
        map(data => data.results)
      );
  }
  getPokemonDetails(pokemon: PokemonBasic): Observable<PokemonDetailed> {
    return this.http.get<PokemonDetailsHttp>(pokemon.url)
      .pipe(
        map(data => {
          const stats: PokemonStats = {hp: data.stats[5].base_stat,
            speed: data.stats[0].base_stat, specialAttack: data.stats[2].base_stat,
            specialDefense: data.stats[1].base_stat, attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat};
          const pokemonDetails: PokemonDetailed = {stats, sprites: data.sprites, height: data.height, weight: data.weight,
          id: data.id, name: data.name, base_experience: data.base_experience};

          return pokemonDetails;
        })
      );
  }
}
