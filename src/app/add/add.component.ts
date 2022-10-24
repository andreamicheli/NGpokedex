import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() setadd: any;
  @Input() types: string[];
  @Input() colours: any;


  selected: string | null = '';
  modal: boolean = false;
  hovered: number = -1;
  image: string = ''

  constructor(private pokeService: PokeapiService) { }

  public setmodal = () => {
    this.modal = !this.modal;
  }

  pokemonForm = new FormGroup({
    name: new FormControl("", Validators.required),
    type: new FormControl("", Validators.required),
    base_exp: new FormControl("", Validators.required),
    height: new FormControl("", Validators.required),
    weight: new FormControl("", Validators.required),
  })

  public setType = (param: string) => {
    if (this.selected !== param) {
      this.selected = param;
      this.setmodal();
      this.pokemonForm.get('type')?.setValue(param);
      this.pokemonForm.get('type')?.setErrors(null);
    } else {
      this.selected = null;
      this.setmodal();
      this.pokemonForm.get('type')?.setValue('');
      this.pokemonForm.get('type')?.setErrors(null);
    }

    console.log(this.selected)
  }

  public getImage = () => {
    this.pokeService.getImage().subscribe((response) => { console.log(response); this.image = response[0].sprite })
  }

  onSubmit() {
    console.log(this.pokemonForm)
    console.log(this.selected)
  }

  ngOnInit(): void {
    this.getImage();
  }

}
