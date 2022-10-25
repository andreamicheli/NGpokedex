import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../pokemon';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() setadd: any;
  @Input() types: string[];
  @Input() colours: any;
  @Input() pokemons: Pokemon[];


  selected: string | null = '';
  modal: boolean = false;
  hovered: number = -1;
  image: string = '';
  hover: boolean = false;
  loading: boolean = false;

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
  }

  public getImage = () => {
    this.pokeService.getImage().subscribe((response) => { this.image = response.sprite; this.loading = false })
  }

  onSubmit() {

    if (!(!!this.image)) this.image = "https://upload.wikimedia.org/wikipedia/en/5/5a/Black_question_mark.png"
    this.pokemons.push({
      ...this.pokemonForm.value,
      name: this.pokemonForm.get('name')!.value!,
      height: +this.pokemonForm.get('height')!.value!,
      weight: +this.pokemonForm.get('weight')!.value!,
      types: [{ slot: 1, type: { name: this.pokemonForm.get('type')!.value!, url: '' } }],
      image: [this.image, this.image],
      color: this.colours[this.selected!],
      base_experience: +this.pokemonForm.get('base_exp')!.value!,
      sprites: {
        back_default: this.image,
        front_default: this.image,
        other: {
          home: {
            front_default: this.image,
          },
          'official-artwork': {
            front_default: this.image,
          },
        }
      },
      new: true
    })
    this.setadd();
  }

  ngOnInit(): void {
    this.getImage();
  }

}
