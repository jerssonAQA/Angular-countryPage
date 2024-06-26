import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
