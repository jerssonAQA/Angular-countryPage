import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';

const routes:Routes=[{
  path:'home',
  component: HomePageComponent
},{
  path:'about',
  component: AboutPageComponent
},{
  path:'**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
