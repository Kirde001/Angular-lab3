import { Component } from '@angular/core';
import { IAmRealHero } from '../../interfaces/hero.interface';
import { HeroService } from '../../service/hero-lib.service';

import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  
  public items: IAmRealHero[] = [];

  constructor(
    private readonly _heroService: HeroService,
    private readonly _dialog: MatDialog,
    private readonly _destroyRef: DestroyRef
  ) {
    this.items = this._heroService.heroes; 
    
  }

  public deleteItem(item: IAmRealHero): void {
    this._heroService.removeHero(item);
  }

  public onChange(currItem: IAmRealHero): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      height: '450px',
      width: '600px',
      data: { // костыльная передача...
        name: currItem.name,
        level: currItem.level,
        strength: currItem.strength,
        skills: currItem.skills,
        newSkills: currItem.newSkills
      }
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((data: IAmRealHero) => {
        if (data) {
          const index: number = this.items.findIndex((item: IAmRealHero) => item === currItem);
          this.items[index] = data;
        }
    });
  }
}
