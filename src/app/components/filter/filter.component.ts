import { BooleanInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() list: boolean;
  @Input() types: string[];
  @Input() pokemons: Pokemon[];
  @Input() setPokemons: any;
  @Input() colours: any;
  @Input() setSelected: any;

  
  selected: string|null = null;
  modal: boolean = false;
  hovered: number = -1;
  
  constructor() { }
  
  public setmodal = ()=>{
    this.modal = !this.modal;
    console.log(this.modal)
  }

  public setType = (type:string)=>{
    if(this.selected!==type){
      this.selected=type;
      this.setmodal();
      this.setSelected(type)
    }
    else if(this.selected===type){
      this.selected=null;
      this.setmodal();
      this.setSelected(null);
    }
  }

  // public filter = (type: string)=>{
  //  this.filtered = (this.pokemons.filter((pokemon)=>pokemon.types[0].type.name===type || (!!pokemon.types[1] && pokemon.types[1].type.name===type)))
  // }

  ngOnInit(): void {
  }

}
