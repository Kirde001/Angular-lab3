import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  public transform(data: IAmRealHero[], nameFilter: string): IAmRealHero[] {
    if (nameFilter.length < 3) {
      return data; 
    }
    const nameFilterLower = nameFilter.toLowerCase();

    return data.filter((hero: IAmRealHero) => {
      const heroNameLower = hero.name.toLowerCase();
      return heroNameLower.includes(nameFilterLower);
    });
  }
}
