import {Routes} from '@angular/router';
import { Test2Component } from './test2/test2.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [ //задать тип важно
    {path: '', redirectTo: '/test', pathMatch: 'full'},
    {path: 'test', component: TestComponent },
    {path: 'test2', component: Test2Component },
    {path: '**', component: PageNotFoundComponent},
];