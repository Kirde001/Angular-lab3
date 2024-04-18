import { Component } from '@angular/core';

import { FormGroup} from '@angular/forms';

import { IAmRealHero } from '../../interfaces/hero.interface';

import { heroFormService } from './temp';


import { INITIAL_DATA } from '../../const/table.const';

@Component({
  selector: 'app-test',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.scss']
})
export class MainPageComponent {
  
  public heroForm: FormGroup;

  public arr: IAmRealHero[] = INITIAL_DATA

  constructor(
    private readonly _formBuilder: heroFormService,
  ) {
    this.heroForm = this._formBuilder.createHero();
  }

  public onOkClick(): void {
    if (this.heroForm.valid) {
      this.arr.push(this.heroForm.value);
    }
  }


}
