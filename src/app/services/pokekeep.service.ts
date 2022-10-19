import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokekeepService {

  constructor() { }

  pokemons: Pokemon[] = [];
  currentPoke: Pokemon = this.pokemons[0];

  setpokemons(pokemons: Pokemon[]){
    this.pokemons=pokemons;
  }
  setCurrentPoke(pokemon: Pokemon){
    this.currentPoke=pokemon;
  }
  getpokemons(): Pokemon[]{
    return this.pokemons;
  }
  getCurrentPoke(): Pokemon{
    return this.currentPoke;
  }
  
}
