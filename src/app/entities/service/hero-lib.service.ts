import { Injectable } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';
import { INITIAL_DATA } from '../const/table.const';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public skillsInitial: string[] = [
    'Поныл и забыл',
    'Зол',
    'Повторение способностей для тестов',
  ];
  public heroesObs = new BehaviorSubject<IAmRealHero[]>(INITIAL_DATA);
  public heroes: Observable<IAmRealHero[]> = this.heroesObs.asObservable();

  /**
   * 
   * @param {string} method 
   * @return { void }
   * @public
   * @description сортировка даты, вся логика в этом сервисе, получаем строку или метод сортировки, как тут описано по переменной, затем через встроенный метод для массивов .sort сортируем дату через определенную мини функцию, передавая параметры a и b как переменные
   */
  public sortData(method: string): void {
    if (method === 'ascending') {
      const heroes = this.heroesObs.getValue().slice(); 
      heroes.sort((a, b) => a.level - b.level);
      this.heroesObs.next(heroes);
    } else {
      const heroes = this.heroesObs.getValue().slice(); 
      heroes.sort((a, b) => b.level - a.level);
      this.heroesObs.next(heroes);
    }
  }

  /**
   * 
   * @param { IAmRealHero} newHero 
   * @return { void }
   * @public
   * @description создаем константу, чтобы работать с обзервабл, иначе никак, через эту константу все добавляем, затем через .next показываем обновление массива 
   */
  public addHero(newHero: IAmRealHero): void {
    const heroes = this.heroesObs.getValue().slice(); 
    heroes.push(newHero);
    this.heroesObs.next(heroes);
  }

  /**
   * 
   * @param { IAmRealHero } hero 
   * @return { void }
   * @public
   * @description удаляем героя, как в предыдущих лабах по поиску индекса, тут тоже создаем константу именно для работы с массивом
   */
  public removeHero(hero: IAmRealHero): void {
    const heroes = this.heroesObs.getValue().slice(); 
    const index = heroes.findIndex((existingHero: IAmRealHero) => existingHero === hero);
    heroes.splice(index, 1);
    this.heroesObs.next(heroes);
  }

  /**
   * Геттер для способностей
   * 
   * @return { string[] }
   * @returns возвращает список способностей
   */
    get skills(): string[] {
      return this.skillsInitial;
    }
  
}