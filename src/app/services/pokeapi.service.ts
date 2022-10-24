import { Injectable } from '@angular/core';
import { API, PokeGeneral, Pokemon } from '../pokemon';
import { Observable, of, tap, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api
  private imageUrl = '/api/images'; //URL to static local api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeUrl}/${name}`)
      .pipe(
        catchError(this.handleError<Pokemon>())
      );
  }

  getPokemonNew(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeUrl}/${name}`)
  }
  getPokemonsGeneral(): Observable<API> {
    return this.http.get<API>(`${this.pokeUrl}?limit=100`)
      .pipe(
        catchError(this.handleError<API>())
      );
  }

  getImage(): Observable<{ id: number, sprite: string }[]> {
    return this.http.get<{ id: number, sprite: string }[]>(this.imageUrl)
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}
