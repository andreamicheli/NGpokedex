import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  @Input() fighters: Pokemon[];
  @Input() colours: any;
  @Input() setbattle: any;

  hover: boolean = false;
  fight: boolean = false;
  winner: Pokemon | null = null;
  loser: Pokemon | null = null;
  tot0: number = 0;
  tot1: number = 0;
  totwin: number = 0;
  totlose: number = 0;
  flag: boolean = false;

  weaknesses: any = {
    'normal': ['fighting'],
    'fighting': ['flying', 'psychic', 'fairy'],
    'flying': ['rock', 'electric', 'ice'],
    'poison': ['ground', 'psychic'],
    'ground': ['water', 'grass', 'ice'],
    'rock': ['fighting', 'ground', 'steel', 'water', 'grass'],
    'bug': ['flying', 'rock', 'fire'],
    'ghost': ['ghost', 'dark'],
    'steel': ['fighting', 'ground', 'fire'],
    'fire': ['ground', 'rock', 'water'],
    'water': ['grass', 'electric'],
    'grass': ['flying', 'poison', 'bug', 'fire', 'ice'],
    'electric': ['ground'],
    'psychic': ['bug', 'ghost', 'dark'],
    'ice': ['fighting', 'rock', 'steel', 'fire'],
    'dragon': ['ice', 'dragon', 'fairy'],
    'fairy': ['poison', 'steel'],
    'dark': ['fighting', 'bug', 'fairy']
  }

  public calc = () => {

    this.flag = false;

    this.tot0 = this.fighters[0].base_experience + this.fighters[0].weight + this.fighters[0].height
    this.tot1 = this.fighters[1].base_experience + this.fighters[1].weight + this.fighters[1].height

    if (this.weaknesses[this.fighters[0].types[0].type.name].includes(this.fighters[1].types[0].type.name)) {
      this.tot0 = this.tot0 / 2;
      this.flag = true;
    }

    if (this.weaknesses[this.fighters[1].types[0].type.name].includes(this.fighters[0].types[0].type.name)) {
      this.tot1 = this.tot1 / 2;
      this.flag = true;
    }
    this.winner = (this.tot1 > this.tot0) ? this.fighters[1] : this.fighters[0]
    this.loser = (this.tot1 > this.tot0) ? this.fighters[0] : this.fighters[1]
    this.totwin = (this.tot1 > this.tot0) ? this.tot1 : this.tot0;
    this.totlose = (this.tot1 > this.tot0) ? this.tot0 : this.tot1;
  }

  constructor() { }

  ngOnInit(): void {
    this.calc();
    console.log(this.winner, this.loser)
  }

}
