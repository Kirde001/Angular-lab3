import { Injectable } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';
import { INITIAL_DATA } from '../const/table.const';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private _heroes = new BehaviorSubject<IAmRealHero[]>(INITIAL_DATA);
  public heroes$: Observable<IAmRealHero[]> = this._heroes.asObservable();

  //private _heroes: IAmRealHero[] = INITIAL_DATA;
  private _skills: string[] = [
    'Поныл и забыл',
    'Зол',
    'Повторение способностей для тестов',
  ];




  get heroes(): IAmRealHero[] {
    const heroes = this._heroes.getValue().slice();
    return this.heroes;
  }

  get skills(): string[] {
    return this._skills;
  }

  public sortData(method): void {
    // if (method === 'ascending') {
    //   this._heroes.sort((a, b) => a.level - b.level);
    // } else {
    //   this._heroes.sort((a, b) => b.level - a.level);
    // }

    if (method === 'ascending') {
      const heroes = this._heroes.getValue().slice(); 
      heroes.sort((a, b) => a.level - b.level);
      this._heroes.next(heroes);
    } else {
      const heroes = this._heroes.getValue().slice(); 
      heroes.sort((a, b) => b.level - a.level);
      this._heroes.next(heroes);
    }
  }

  public addHero(newHero: IAmRealHero): void {
    // this._heroes = this._heroes.concat(newHero);

    const heroes = this._heroes.getValue().slice(); 
    heroes.push(newHero);
    this._heroes.next(heroes);
  }

  public removeHero(hero: IAmRealHero): void {
    // const index: number = this._heroes.findIndex((existingHero: IAmRealHero) => existingHero === hero);
    // this._heroes.splice(index, 1);

    const heroes = this._heroes.getValue().slice(); 
    const index = heroes.findIndex((existingHero: IAmRealHero) => existingHero === hero);
    heroes.splice(index, 1);
    this._heroes.next(heroes);
  }

}