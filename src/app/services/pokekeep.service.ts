import { Injectable } from '@angular/core';
import { PokeGeneral } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokekeepService {

  constructor() { }

  pokemons!: PokeGeneral[];

  getpokemons(name: string) {
    return this.pokemons.filter(function (poke) { return poke.name.includes(name.trim()) })
  }

  setpokemons(input: PokeGeneral[]) {
    this.pokemons = input;
  }

}
