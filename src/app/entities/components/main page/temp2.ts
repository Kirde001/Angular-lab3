import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { IAmRealHero } from '../../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class heroFormServiceSEC {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public createHero2 (data?: IAmRealHero): FormGroup {
    return this._formBuilder.group({

        number1: new FormControl(1),
        number2: new FormControl(10),
        skill: new FormControl(''),
        nameSearch: new FormControl('Кирилл Поляков'),
        byMethod: new FormControl('ascending'),
    });
  }
  
}
