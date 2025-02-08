import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  posts:  any[] = [];

  constructor(private http: HttpClient) { }

  isPostDetail = false;
  selectedPost: any;

  ngOnInit(): void {
    this.http.get<any[]>('assets/posts.json')
      .subscribe(data => {
        this.posts = data;
      });
  }

  viewPost(post: any) {
    this.selectedPost = post;
    this.isPostDetail = true;
  }
  goBack() {
    this.isPostDetail = false;
    this.selectedPost = null;
  }
}
