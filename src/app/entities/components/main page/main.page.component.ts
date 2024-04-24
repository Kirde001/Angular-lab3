import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { MainFormService } from './main-form-builder.service.ts';
import { HeroService } from '../../service/hero-lib.service';

import { OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
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
  //public arr: IAmRealHero[];

  public arr$: Observable<IAmRealHero[]>; 
  public panelOpenState: Boolean = false;

  constructor(
    private readonly _formBuilder: MainFormService,
    private readonly _heroService: HeroService,
  ) {
    this.heroForm = this._formBuilder.createHero();
    this.filterForm = this._formBuilder.createFilter();
    this.skillsForm = this._formBuilder.createSkill();
    this.arr$ = this._heroService.heroes$;
    this.skills = this._heroService.skills;
    this._heroService.sortData('ascending');
  }

  public onSortChange(method: string): void {
    this._heroService.sortData(method);
    //this.arr = this._heroService.heroes;
  }

  public onOkClick(): void {
    // if (this.heroForm.valid) {
    //   const newHero = { ...this.heroForm.value };
    //   this.arr$ = this.arr$.concat(newHero);
    //   this._heroService.addHero(newHero); 
    //   this.heroForm.reset({
    //     level: 1,
    //     strength: 1,
    //   });
    // }

    if (this.heroForm.valid) {
      const newHero = { ...this.heroForm.value };
      this._heroService.addHero(newHero); 
      this.heroForm.reset({ level: 1, strength: 1 });
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

    // if (this.skillsForm.valid) {
    //   const newSkill = this.skillsForm.value.newSkills;
    //   if (!this.skills.includes(newSkill) && newSkill !== '') {
    //     this._heroService.addSkill(newSkill); // Assuming addSkill in HeroService
    //     this.skillsForm.reset();
    //   } else {
    //     alert("That skill already exists, or it's empty!"); // Informative message
    //   }
    // }

  }

  public deleteItem(item: IAmRealHero): void {
    // костыли для отображения

  //   const index: number = this.$arr.findIndex((existingItem: IAmRealHero) => existingItem === item);
  //   const copy = [...this.$arr]; 
  //   copy.splice(index, 1);
  //   this.arr$ = copy;
  //   this._heroService.removeHero(item); 
  // }
    this._heroService.removeHero(item);
  }

}
