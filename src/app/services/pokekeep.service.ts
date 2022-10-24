import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeGeneral, Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokekeepService {

  constructor() { }

  // pokemons$!: Observable<Pokemon[]>;
  pokemons!: PokeGeneral[];

  getpokemons(name: string) {
    return this.pokemons.filter(function (poke) { return poke.name.includes(name) })
  }

  setpokemons(input: PokeGeneral[]) {
    this.pokemons = input;
  }

}
