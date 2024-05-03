import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { MainFormService } from './main-form-builder.service.ts';
import { HeroService } from '../../service/hero-lib.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './main.page.component.html',
  styleUrls: ['./main.page.component.scss'],
})

export class MainPageComponent {

  public heroForm: FormGroup;
  public filterForm: FormGroup;
  public skillsForm: FormGroup;
  public skills: string[];
  public arr: Observable<IAmRealHero[]>; 
  public panelOpenState: Boolean = false;

  constructor(
    private readonly _formBuilder: MainFormService,
    private readonly _heroService: HeroService,
  ) {
    this.heroForm = this._formBuilder.createHero();
    this.filterForm = this._formBuilder.createFilter();
    this.skillsForm = this._formBuilder.createSkill();
    this.arr = this._heroService.heroes;
    this.skills = this._heroService.skillsInitial;
    this._heroService.sortData('ascending');
  }

  /**
   * 
   * @param { string } method 
   * @return { void }
   * @public
   * @description передаем в сервис переменную метод, то есть сортировку, затем в сервисе уже происходит непосредственный процесс сортировки
   */
  public onSortChange(method: string): void {
    this._heroService.sortData(method);
  }

  /**
   * @return { void }
   * @public
   * @description добавление героя после нажатия на кнопку: если форма валидна, добавляется значение из соответствующей форм группы, затем форма резетается, уровень и сила = 1 
   */
  public onOkClick(): void {
    if (this.heroForm.valid) {
      this._heroService.addHero(this.heroForm.value); 
      this.heroForm.reset({ level: 1, strength: 1 });
    }
  }
  
  /**
   * @return { void }
   * @public
   * @description добавление способностей, тут добавлена логика, чтобы нельзя было добавить способности, которые уже есть, после ветвления форма резетается
   */
  public onOkClickSkills(): void {
    if (this.skillsForm.valid) {
      if (this.skills.includes(this.skillsForm.value.newSkills)) {
        alert("Даже индусы не смогут добавить твою способность, дорогой друг!");
      }
      else {
        this.skills.push(this.skillsForm.value.newSkills)
      }
      this.skillsForm.reset()
    }
  }

  /**
   * 
   * @param { IAmRealHero } item 
   * @return { void }
   * @public
   * @description удаление героя, логика в сервисе, через него и работаем, передавая item
   */
  public deleteItem(item: IAmRealHero): void {
    this._heroService.removeHero(item);
  }
}
