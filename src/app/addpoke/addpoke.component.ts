import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpoke',
  templateUrl: './addpoke.component.html',
  styleUrls: ['./addpoke.component.scss']
})
export class AddpokeComponent implements OnInit {

  @Input() setadd:any;
  @Input() list:boolean;
  @Input() add:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}