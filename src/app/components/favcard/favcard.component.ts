import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-favcard',
  templateUrl: './favcard.component.html',
  styleUrls: ['./favcard.component.scss']
})
export class FavcardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() change: any;
  @Input() setfav: any;
  @Input() selected: string | null;
  @Input() setfighter: any;

  show: boolean = false;

  changeshow = () => {
    this.show = true;

    setTimeout(() => {
      this.show = false;
    }, 2000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
