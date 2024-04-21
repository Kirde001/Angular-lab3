import { Component } from '@angular/core';
import { INITIAL_DATA } from '../../const/table.const';
import { IAmRealHero } from '../../interfaces/hero.interface';

import { HeroService } from '../../service/hero-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  
  public items = INITIAL_DATA;

  constructor(private readonly _heroService: HeroService) {
    this.items = this._heroService.heroes; 
  }
  public deleteItem(item: IAmRealHero): void {
    const index: number = this.items.findIndex((existingItem: IAmRealHero) => existingItem === item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
