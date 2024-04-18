import { Component } from '@angular/core';

import { INITIAL_DATA } from '../../const/table.const';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  items = INITIAL_DATA;
}
