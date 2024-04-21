import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './entities/components/main page/main.page.component';
import { TableComponent } from './entities/components/table/table.component';
import { PageNotFoundComponent } from './entities/components/page-not-found/page-not-found.component';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
} from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilterByLevelPipe } from './entities/pipe/filter-by-level.pipe';
import { FilterByNamePipe } from './entities/pipe/filter-by-name.pipe';
import { FilterBySkillPipe } from './entities/pipe/filter-by-skill.pipe';

import { NgArrayPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TableComponent,
    PageNotFoundComponent,
    FilterByLevelPipe,
    FilterBySkillPipe,
    FilterByNamePipe,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,

    NgArrayPipesModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
