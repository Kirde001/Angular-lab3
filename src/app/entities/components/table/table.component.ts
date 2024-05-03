import { Component } from '@angular/core';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../service/hero-lib.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  public items: Observable<IAmRealHero[]>;
  constructor(
    private readonly _heroService: HeroService,
  ) {
    this.items = this._heroService.heroes;
  }

  /**
   * 
   * @param item 
   * @interface IAmRealHero
   * @return { void }
   */
  public deleteItem(item: IAmRealHero): void {
    this._heroService.removeHero(item);
  }
}
