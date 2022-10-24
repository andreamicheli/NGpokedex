import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Direction, Pokemon } from 'src/app/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() nav: Direction;
  @Input() colours: any;
  @Input() change: any;

  modal: boolean = false;

  loading: boolean = false;
  image: string = '';
  error: string = '';
  pokemon: Pokemon | null = null;

  name = new FormControl('');

  constructor(private pokeService: PokeapiService) { }


  getPokemon() {
    this.error = '';
    this.image = 'loading';
    if (typeof (this.name.value) === 'string' && this.name.value !== '') {
      this.pokeService.getPokemonNew(this.name.value.toLowerCase()).subscribe(
        (response) => {
          console.log(response)
          this.pokemon =
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
            new: false
          }
          this.image = this.pokemon.image[0]
        },
        (error) => {
          this.image = ''
          this.error = 'Attenzione! Non esiste un pokemon con questo nome'
        }
      )
    }
    else {
      this.image = '';
      this.error = 'Attenzione! Inserire un nome valido'
    }
  }

  ngOnInit(): void {
  }

}
