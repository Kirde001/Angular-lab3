import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { IAmRealHero } from '../../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class heroFormService {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public createHero(data?: IAmRealHero): FormGroup {
    return this._formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-Яа-яЁё ]*'),
      ]),
      strength: new FormControl(1, Validators.required),
      level: new FormControl(1, Validators.required),
      skills: new FormControl('', Validators.required),
      newSkills: new FormControl(''),
    });
  }
}
