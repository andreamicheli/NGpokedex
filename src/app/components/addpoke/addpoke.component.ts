import { Component, Input, OnInit } from '@angular/core';
import { Direction } from '../../pokemon';

@Component({
  selector: 'app-addpoke',
  templateUrl: './addpoke.component.html',
  styleUrls: ['./addpoke.component.scss']
})
export class AddpokeComponent implements OnInit {

  @Input() setadd: any;
  @Input() nav: Direction;

  constructor() { }

  ngOnInit(): void {
  }

}
