import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { BlogComponent } from './component/home/blog/blog.component';
import { PostsComponent } from './component/home/blog/posts/posts.component';
import { AboutComponent } from './component/home/about/about.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent },
  {path:'', component: HomeComponent},
  {path:'about-me', component: AboutComponent},
  {path:'blogs', component: BlogComponent},
  {path:'blogs/post/:article', component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
