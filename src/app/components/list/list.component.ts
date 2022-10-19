import { Component, Input, OnInit } from '@angular/core';
import { PokeGeneral, Pokemon } from 'src/app/pokemon';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() pokemons: Pokemon[];
  @Input() change: any;
  @Input() setfav: any;
  @Input() selected: string | null;
  @Input() setfighter: any;

  ngOnInit(): void {
  }

}
