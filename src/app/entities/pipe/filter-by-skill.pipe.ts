import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
    name: 'filterBySkill'
  })
  export class FilterBySkillPipe implements PipeTransform {
  
  /**
   * Фильтр по имени
   * 
   * @param { Object[] } data 
   * @param { string[] } skillFilter 
   * @return { IAmRealHero[] }
   * @public
   * @description получаем на вход для фильтрации нужный параметр в виде массива строк, который представляет способности; если фильтр пустой, вернем дату, если он не пуст, то работаем по логике, как и в других пайпах, через .filter по некоторому условию получаем отфильтрованный массив, конкретно тут проверяем вхождение способности из инпута в каждом из объектов
   */
    public transform(data: IAmRealHero[], skillFilter: string[]): IAmRealHero[] {
      if (!skillFilter) {
        return data; 
      }
      return data.filter((hero: IAmRealHero) => { 
        return skillFilter.every(filter => hero.skills.some(skill => skill.includes(filter)));
      });
    }
  }
  