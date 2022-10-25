import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';
import { PokekeepService } from 'src/app/services/pokekeep.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(private pokeKeep: PokekeepService) { }

  @Input() pokemon: Pokemon | undefined;
  @Input() change: any;
  @Input() setfav: any;
  @Input() setview: any;


  ngOnInit(): void {
  }

}
