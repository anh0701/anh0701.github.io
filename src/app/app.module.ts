import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { PostsComponent } from './blog-page/posts/posts.component';
import { FloatButtonComponent } from './float-button/float-button.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactPageComponent,
    HomePageComponent,
    AboutMePageComponent,
    SlideshowComponent,
    BlogPageComponent,
    PostsComponent,
    FloatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
