import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
    name: 'filterBySkill'
  })
  export class FilterBySkillPipe implements PipeTransform {
  
    transform(data: IAmRealHero[], skillFilter: string[]): IAmRealHero[] {
      if (!data || !skillFilter || skillFilter.length === 0) {
        return data; 
      }
  
      const lowercaseFilters = skillFilter.map(skill => skill.toLowerCase()); 
  
      return data.filter((hero: IAmRealHero) => {
        const heroSkillsLowercase = hero.skills.map(skill => skill.toLowerCase()); 
        return lowercaseFilters.every(filter => heroSkillsLowercase.some(skill => skill.includes(filter)));
      });
    }
  }
  