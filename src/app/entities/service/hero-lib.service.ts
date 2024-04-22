import { Injectable } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

import { INITIAL_DATA } from '../const/table.const';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _heroes: IAmRealHero[] = INITIAL_DATA;
  private _skills: string[] = [
    'Поныл и забыл',
    'Зол',
    'Повторение способностей для тестов',
  ];

  get heroes(): IAmRealHero[] {
    return this._heroes;
  }
  get skills(): string[] {
    return this._skills;
  }

  public addHero(newHero: IAmRealHero): void {
    this._heroes = this._heroes.concat(newHero);
  }

  public removeHero(hero: IAmRealHero): void {
    const index: number = this._heroes.findIndex((existingHero: IAmRealHero) => existingHero === hero);
    this._heroes.splice(index, 1);
  }
}