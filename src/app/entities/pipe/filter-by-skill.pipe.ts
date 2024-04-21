import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
    name: 'filterBySkill'
  })
  export class FilterBySkillPipe implements PipeTransform {
  
    public transform(data: IAmRealHero[], skillFilter: string[]): IAmRealHero[] {
      if (!skillFilter) {
        return data; 
      }
      return data.filter((hero: IAmRealHero) => { 
        return skillFilter.every(filter => hero.skills.some(skill => skill.includes(filter)));
      });
    }
  }
  