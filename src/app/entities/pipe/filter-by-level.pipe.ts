import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterByLevel'
})
export class FilterByLevelPipe implements PipeTransform {
  
  /**
   * Фильтр по уровню
   * 
   * @param { Object[] } data 
   * @param { Object } levelFilter 
   * @return { IAmRealHero[] }
   * @public
   * @description создание пайпы для сортировки по уровню, логика такова: получаем два числа из инпута, минимальное и максимальное, по ним через встроенный метод для массивов .filter соответственно преобразуем массив по ключевому условию - для нас по больше/ меньше нужного уровня
   */
  public transform(data: IAmRealHero[], levelFilter: { number1: number, number2: number }): IAmRealHero[] {
    const { number1: minLevel, number2: maxLevel } = levelFilter;
    return data.filter(hero => hero.level >= minLevel && hero.level <= maxLevel);
  }
}
  