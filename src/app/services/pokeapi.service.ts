import { Injectable } from '@angular/core';
import { API, PokeGeneral, Pokemon } from '../pokemon';
import { Observable, of, tap, catchError } from 'rxjs';
import { HttpClient,  HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api
  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokeUrl}/${name}`)
      .pipe(
        catchError(this.handleError<Pokemon>())
      );
  }
  getPokemonsGeneral(): Observable<API> {
    return this.http.get<API>(`${this.pokeUrl}?limit=100`)
    .pipe(
        catchError(this.handleError<API>())
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}