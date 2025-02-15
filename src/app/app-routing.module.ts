import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {path: 'posts', component: PostComponent},
  { path: 'post/:slug', component: PostDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
