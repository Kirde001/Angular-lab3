import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(data: IAmRealHero[], nameFilter: string): IAmRealHero[] {
    if (!data || !nameFilter) {
      return data; 
    }
    const filterValue = nameFilter || '';

    if (filterValue.length < 3) {
      return data; 
    }

    const lowercaseFilter = filterValue.toLowerCase();

    return data.filter((hero: IAmRealHero) => {
      const heroNameLowercase = hero.name.toLowerCase();
      return heroNameLowercase.includes(lowercaseFilter);
    });
  }
}
