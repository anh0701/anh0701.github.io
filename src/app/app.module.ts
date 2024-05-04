import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityContext } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FooterComponent } from './component/general/footer/footer.component';
import { HeaderComponent } from './component/general/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/home/about/about.component';
import { BlogComponent } from './component/home/blog/blog.component';
import { ContactComponent } from './component/home/contact/contact.component';
import { MenuComponent } from './component/general/menu/menu.component';
import { SlideshowComponent } from './component/general/slideshow/slideshow.component';
import { FloatButtonComponent } from './component/general/float-button/float-button.component';
import { PostsComponent } from './component/home/blog/posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SlideshowComponent,
    PostsComponent,
    FloatButtonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
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
