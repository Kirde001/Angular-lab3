import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { MainFormService } from './main-form-builder.service.ts';
import { HeroService } from '../../service/hero-lib.service';

@Component({
  selector: 'app-test',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.scss'],
})

export class MainPageComponent {
  private _sortBy: string = 'ascending';
  public heroForm: FormGroup;
  public filterForm: FormGroup;
  public skillsForm: FormGroup;
  public skills: string[];
  public arr: IAmRealHero[];
  public panelOpenState: Boolean = false;

  constructor(
    private readonly _formBuilder: MainFormService,
    private readonly _heroService: HeroService,
  ) {
    this.heroForm = this._formBuilder.createHero();
    this.filterForm = this._formBuilder.createFilter();
    this.skillsForm = this._formBuilder.createSkill();
    this.arr = this._heroService.heroes;
    this.skills = this._heroService.skills;
  }

  public filterByName(searchTerm: string): IAmRealHero[] {
    return this.arr.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); 
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
      this._heroService.addHero(newHero); 
      this.heroForm.reset({
        level: 1,
        strength: 1,
      });
    }
  }
    
  public onOkClickSkills(): void {
    if (this.skillsForm.valid) {
      if (this.skills.includes(this.skillsForm.value.newSkills) || this.skillsForm.value.newSkills === '') {
        this.skillsForm.reset()
        alert("Даже индусы не смогут добавить твою способность, дорогой друг!");
      }
      else {
        this.skills.push(this.skillsForm.value.newSkills)
        this.skillsForm.reset()
      }
    }
  }

  public deleteItem(item: IAmRealHero): void {
    // костыли для отображения
    const index: number = this.arr.findIndex((existingItem: IAmRealHero) => existingItem === item);
    const copy = [...this.arr]; 
    copy.splice(index, 1);
    this.arr = copy;
    this._heroService.removeHero(item); 
  }
}
