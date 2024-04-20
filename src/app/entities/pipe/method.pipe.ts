import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
    name: 'filterByLevel'
  })
  export class FilterByLevelPipe implements PipeTransform {
  
    transform(data: IAmRealHero[], filterData: { number1: number, number2: number }): IAmRealHero[] {
      if (!data || !filterData) {
        return data;
      }
      const { number1: minLevel, number2: maxLevel } = filterData;
      return data.filter(hero => hero.level >= minLevel && hero.level <= maxLevel);
    }
  }
  