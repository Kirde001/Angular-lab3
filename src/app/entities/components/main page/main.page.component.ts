import { Component } from '@angular/core';

import { FormGroup } from '@angular/forms';

import { IAmRealHero } from '../../interfaces/hero.interface';

import { heroFormService } from './hero-form-builder.service.ts';

import { INITIAL_DATA } from '../../const/table.const';

import { filtrationFormService } from './filtration-form-builder.service.ts';

import { HeroService } from '../../service/hero-storage.service';

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
    'Зол',
    'Это потому что я рыжий?',
    'Биг Бро',
    'Почти 20 лет',
    'Literally him',
    'АСУ',
  ];
  public arr: IAmRealHero[] = INITIAL_DATA;
  public panelOpenState: Boolean = false;

  constructor(
    private readonly _formBuilder: heroFormService,
    private readonly _formBuilder2: filtrationFormService,
    private readonly _heroService: HeroService,
  ) {
    this.heroForm = this._formBuilder.createHero(); // не сказать, что я оригинальный
    this.heroForm2 = this._formBuilder2.createHero2();
    this.arr = this._heroService.heroes;
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
      this._heroService.addHero(newHero); 
      this.arr = this.arr.concat(newHero);
    }
  }
    
  public onOkClickSkills(): void {
    //хм мб тоже оптим нужен, но пока так.
    this.skills.push(this.heroForm.value.newSkills);
  }

  public deleteItem(item: IAmRealHero): void {
    //вынести? и из таблы тогда
    const index: number = this.arr.findIndex((existingItem: IAmRealHero) => existingItem === item);
    const copy = [...this.arr]; 
    copy.splice(index, 1);
    this.arr = copy;
    this._heroService.removeHero(item); 
  }
}
