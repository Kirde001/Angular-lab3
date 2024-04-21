import { Injectable } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

import { INITIAL_DATA } from '../const/table.const';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _heroes: IAmRealHero[] = INITIAL_DATA;

  get heroes(): IAmRealHero[] {
    return this._heroes;
  }

  addHero(newHero: IAmRealHero): void {
    this._heroes = this._heroes.concat(newHero);
  }

  removeHero(hero: IAmRealHero): void {
    const index = this._heroes.findIndex((existingHero) => existingHero === hero);
    this._heroes.splice(index, 1);
  }
}