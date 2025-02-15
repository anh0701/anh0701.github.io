import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }


  loadPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  viewPostDetail(slug: string): void {
    this.router.navigate(['/post', slug]);
  }

}
