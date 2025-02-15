import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'assets/posts.json';  

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    return this.http.get<Post[]>(this.postsUrl).pipe(
      map(posts => posts.find(post => post.slug === slug))
    );
  }

  getPostContent(contentFile: string): Observable<string> {
    return this.http.get(`assets/posts/${contentFile}`, { responseType: 'text' });
  }
}
