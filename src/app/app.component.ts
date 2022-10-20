import { Component, OnInit } from '@angular/core';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
import { PokeGeneral, Pokemon, Direction } from './pokemon';
import { PokeapiService } from './services/pokeapi.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private pokeService: PokeapiService) { }

  title = 'pokedex';

  colours = {
    "normal": '#A8A77A',
    "fire": '#EE8130',
    "water": '#6390F0',
    "electric": '#F7D02C',
    "grass": '#7AC74C',
    "ice": '#96D9D6',
    "fighting": '#C22E28',
    "poison": '#A33EA1',
    "ground": '#E2BF65',
    "flying": '#A98FF3',
    "psychic": '#F95587',
    "bug": '#A6B91A',
    "rock": '#B6A136',
    "ghost": '#735797',
    "dragon": '#6F35FC',
    "dark": '#705746',
    "steel": '#B7B7CE',
    "fairy": '#D685AD',
  };



  battle: boolean = false;
  pokemonsGeneral: PokeGeneral[] = [];
  pokemon: Pokemon | undefined = undefined;
  pokemons: Pokemon[] = [];
  favs: Pokemon[] = [];
  types: string[] = [];
  selected: string | null = null;
  fighters: Pokemon[] = [];
  nav: Direction = { current: 'list', prev: null };

  ngOnInit(): void {
    let db = localStorage.getItem('ARRAY')
    this.getPokemons();
    if (!!db) {
      this.favs = JSON.parse(db)
    }
    else { this.favs = []; console.log("db not worked") }
  }
  public setlist = () => {
    if (this.nav.current === 'list') { return }
    else { this.nav.prev = this.nav.current; this.nav.current = 'list' }

  }

  public change = (event: Event, pokemon: Pokemon) => {
    this.pokemon = pokemon;
    if (this.nav.current === 'view') { this.nav.current = this.nav.prev!; this.nav.prev = 'list' }
    else { this.nav.prev = this.nav.current; this.nav.current = 'view' }

  }

  public setadd = () => {
    if (this.nav.current === 'add') { this.nav.current = this.nav.prev!; this.nav.prev = 'list' }
    else { this.nav.prev = this.nav.current; this.nav.current = 'add' }
  }

  public setbattle = () => {
    if (this.nav.current === 'fight') { this.nav.current = this.nav.prev!; this.nav.prev = 'list' }
    else { this.nav.prev = this.nav.current; this.nav.current = 'fight' }
  }

  public setfav = (pokemon: Pokemon) => {
    if (this.favs.includes(pokemon)) {
      this.favs.splice(this.favs.indexOf(pokemon), 1)
    }
    else {
      this.favs.push(pokemon)
      if (this.favs.length > 3) {
        let temp: Pokemon | undefined = this.favs.shift()
        if (!!temp) temp.fav = false
      }
    }
    localStorage.setItem('ARRAY', JSON.stringify(this.favs))
  }

  public setfighter = (pokemon: Pokemon) => {
    if (this.fighters.includes(pokemon)) {
      this.fighters.splice(this.fighters.indexOf(pokemon), 1)
    }
    else {
      this.fighters.push(pokemon)
      if (this.fighters.length > 2) {
        let temp: Pokemon | undefined = this.fighters.shift()
        if (!!temp) temp.fight = false
      }
    }
  }

  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  public setTypes = (pokemons: Pokemon[]) => {
    for (let pokemon of pokemons) {
      if (!this.types.includes(pokemon.types[0].type.name)) {
        this.types.push(pokemon.types[0].type.name)
      }
    }
  }

  public setPokemons = (pokemons: Pokemon[]) => {
    this.pokemons = pokemons;
  }

  public setSelected = (selected: string | null) => {
    this.selected = selected;
  }



  getPokemons(): void {
    this.pokeService.getPokemonsGeneral()
      .subscribe(response => {
        this.pokemonsGeneral = response.results;
        // console.log(this.pokemonsGeneral);
        this.pokemonsGeneral = this.shuffle(this.pokemonsGeneral)
        response.results.forEach(pokemonGeneral => {
          this.pokeService.getPokemon(pokemonGeneral.name)
            .subscribe((response) => {
              this.pokemons.push(
                {
                  name: response.name,
                  types: response.types,
                  sprites: response.sprites,
                  image: [response.sprites.other.home.front_default,
                  response.sprites.other['official-artwork'].front_default],
                  color: this.colours[response.types[0].type.name as keyof typeof this.colours],
                  base_experience: response.base_experience,
                  height: response.height,
                  weight: response.weight,
                  fav: false,
                  fight: false,
                }
              );
              this.setTypes(this.pokemons)
            })
        })
      });
  }





}
