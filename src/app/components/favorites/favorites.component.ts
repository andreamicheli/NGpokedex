import { Component, Input, OnInit } from '@angular/core';
import { Direction, Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  @Input() favs: Pokemon[];
  @Input() nav: Direction;
  @Input() change: any;

  ngOnInit(): void {
  }

}
