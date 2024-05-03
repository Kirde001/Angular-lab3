import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { IAmRealHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {

  /**
   * Фильтр по имени
   * 
   * @param { Object[] } data 
   * @param { string } nameFilterName 
   * @return { IAmRealHero[] }
   * @public
   * @description создание пайпы для сортировки по имени, логика такова: получаем строку из инпута, приводим дату из массива и инпут в нижний регистр, затем фильтруем через встроенный метод .filter и выводим то, что будет входить через .includes; доп условие - дата вернется, если кол-во символов в инпуте менее 3, плюс там также есть валидация для этого
   */
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
