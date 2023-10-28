import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';

const routes: Routes = [
  { path: 'contact', component: ContactPageComponent },
  {path:'', component: HomePageComponent},
  {path:'about-me', component: AboutMePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
