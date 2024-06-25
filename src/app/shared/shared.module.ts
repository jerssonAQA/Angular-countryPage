import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
