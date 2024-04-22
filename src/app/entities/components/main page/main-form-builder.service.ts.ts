import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MainFormService {
  constructor(private readonly _formBuilder: FormBuilder) {}

  public createHero(): FormGroup {
    return this._formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-ZА-Яа-яЁё ]*'),
      ]),
      strength: new FormControl(1, Validators.required),
      level: new FormControl(1, Validators.required),
      skills: new FormControl('', Validators.required),
    });
  }

  public createSkill(): FormGroup {
    return this._formBuilder.group({
      newSkills: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  public createFilter(): FormGroup {
    return this._formBuilder.group({
      number1: new FormControl(1),
      number2: new FormControl(10),
      skill: new FormControl(''),
      nameSearch: new FormControl(''),
      byMethod: new FormControl('ascending'),
    });
  }
}
