import { Component } from '@angular/core';

import { FormGroup} from '@angular/forms';

import { IAmRealHero } from '../../interfaces/hero.interface';

import { heroFormService } from './temp';

import { INITIAL_DATA } from '../../const/table.const';

import { heroFormServiceSEC } from './temp2';

@Component({
  selector: 'app-test',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.scss']
})
export class MainPageComponent {
  
  public heroForm: FormGroup;
  public heroForm2: FormGroup;

  public skills: string[] = [
    'Поныл и забыл',
    'Лень ',
    'Несмешной',
    'Почти 20 лет',
    'Literally him'
  ]

  public arr: IAmRealHero[] = INITIAL_DATA

  filteredArr = this.arr;
  selectedSortMethod = 'ascending';
////////////////
    // Function to handle name search

    // onSearchName(event: any) {
    //   const inputElement = event.target as HTMLInputElement; // Typecast to HTMLInputElement
    //   const searchText = inputElement.value.toLowerCase();
    //   this.filteredArr = this.arr.filter(item => item.name.toLowerCase().includes(searchText));
    // }
    
    // Function to handle sort selection
    onSortChange(method: string) {
      this.selectedSortMethod = method;
      this.sortData();
    }
  
    // Function to sort data based on selected method
    sortData() {
      if (this.selectedSortMethod === 'ascending') {
        this.filteredArr.sort((a, b) => a.level - b.level);
      } else {
        this.filteredArr.sort((a, b) => b.level - a.level);
      }
    }

    ///
  panelOpenState = false;
  
  constructor(
    private readonly _formBuilder: heroFormService,
    private readonly _formBuilder2: heroFormServiceSEC,
  ) {
    this.heroForm = this._formBuilder.createHero();
    this.heroForm2 = this._formBuilder2.createHero2();
  }

  public onOkClick(): void {
    if (this.heroForm.valid) {
      this.arr.push(this.heroForm.value);
    }
  }

  public onOkClickSkills(): void { //хм мб тоже оптим нужен, но пока так.
    console.log(this.heroForm.value.newSkills)
    this.skills.push(this.heroForm.value.newSkills);
  }

  public deleteItem(item: IAmRealHero) { //вынести? и из таблы тогда 
    const index = this.arr.findIndex((existingItem) => existingItem === item);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
  }


}
