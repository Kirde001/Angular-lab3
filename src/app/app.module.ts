import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

import { RouterLink, RouterLinkActive, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    

  ],
  providers: [ provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
