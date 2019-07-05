import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Pokemon} from '../interfaces/pokemon';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getPokemons() {
    const params = new HttpParams().set('offset', '0').set('limit', '151');
    return this.http.get<{count: number, next: string, previous: string, results: Pokemon[]}>(this.url + 'pokemon', {params})
      .pipe(
        map(data => data.results)
      );
  }
}
