import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
    name: 'filterByLevel'
  })
  export class FilterByLevelPipe implements PipeTransform {
  
    public transform(data: IAmRealHero[], levelFilter: { number1: number, number2: number }): IAmRealHero[] {
      if (!levelFilter) {
        return data;
      } // если уберу пресеты
      const { number1: minLevel, number2: maxLevel } = levelFilter;
      return data.filter(hero => hero.level >= minLevel && hero.level <= maxLevel);
    }
  }
  