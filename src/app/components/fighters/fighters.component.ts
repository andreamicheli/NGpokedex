import { Component, Input, OnInit } from '@angular/core';
import { Direction, Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss']
})
export class FightersComponent implements OnInit {

  @Input() fighters: Pokemon[];
  @Input() nav: Direction;
  @Input() change: any;
  @Input() setbattle: any;

  public gobattle = () => {
    if (this.fighters.length == 2) this.setbattle();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
