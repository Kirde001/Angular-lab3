import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { IAmRealHero } from '../../interfaces/hero.interface';

import { heroFormService } from './hero-form-builder.service.ts';

import { INITIAL_DATA } from '../../const/table.const';

import { filtrationFormService } from './filtration-form-builder.service.ts';

@Component({
  selector: 'app-test',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.scss'],
})
export class MainPageComponent {
  private _sortBy: string = 'ascending';
  public heroForm: FormGroup;
  public heroForm2: FormGroup;
  public skills: string[] = [
    //для лени добавлю начальные скиллы
    'Поныл и забыл',
    'Лень',
    'Несмешной',
    'Почти 20 лет',
    'Literally him',
    'АСУ',
  ];
  public arr: IAmRealHero[] = INITIAL_DATA;
  public panelOpenState: Boolean = false;

  constructor(
    private readonly _formBuilder: heroFormService,
    private readonly _formBuilder2: filtrationFormService
  ) {
    this.heroForm = this._formBuilder.createHero(); // не сказать, что я оригинальный
    this.heroForm2 = this._formBuilder2.createHero2();
  }

  filterByName(searchTerm: string): IAmRealHero[] {
    return this.arr.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); // офк все в нижнем регистре
  }

  public onSortChange(method: string): void {
    this._sortBy = method;
    this._sortData();
  }

  private _sortData(): void {
    if (this._sortBy === 'ascending') {
      this.arr.sort((a, b) => a.level - b.level);
    } else {
      this.arr.sort((a, b) => b.level - a.level);
    }
  }

  // this.arr.push(this.heroForm.value); - не обновляет, нужно найти иной способ
  // дело в том, что прямой пушинг сразу кидает все в массив, но по нему не идет новая итерация из ngFor, типа такого
  // как решение отдельная переменная для новой даты

  public onOkClick(): void {
    if (this.heroForm.valid) {
      const newHero = { ...this.heroForm.value };
      this.arr = this.arr.concat(newHero);
    }
  }

  public onOkClickSkills(): void {
    //хм мб тоже оптим нужен, но пока так.
    this.skills.push(this.heroForm.value.newSkills);
  }

  public deleteItem(item: IAmRealHero): void {
    //вынести? и из таблы тогда
    const index = this.arr.findIndex((existingItem) => existingItem === item);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
  }
}
