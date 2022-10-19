import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  @Input() favs: Pokemon[];
  @Input() list: boolean;
  @Input() change: any;

  ngOnInit(): void {
  }

}
