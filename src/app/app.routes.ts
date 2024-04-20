import { Routes } from '@angular/router';
import { MainPageComponent } from './entities/components/main page/main.page.component';
import { TableComponent } from './entities/components/table/table.component';
import { PageNotFoundComponent } from './entities/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'main', component: MainPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
