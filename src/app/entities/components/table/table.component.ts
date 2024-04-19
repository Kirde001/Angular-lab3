import { Component } from '@angular/core';

import { INITIAL_DATA } from '../../const/table.const';

import { IAmRealHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  public items = INITIAL_DATA;

  public deleteItem(item: IAmRealHero) {
    const index = this.items.findIndex((existingItem) => existingItem === item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

}
