import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostDetailComponent  implements OnInit{
  selectedPost: Post | null = null;
  postContent: string = '';

  constructor(private route: ActivatedRoute, private postService: PostService, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadPostDetail(slug);
    });
  }


  loadPostDetail(slug: string): void {
    this.postService.getPostBySlug(slug).subscribe((post) => {
      if (post) {
        this.selectedPost = post;
        this.postService.getPostContent(post.content).subscribe(htmlContent => {
          this.postContent = htmlContent;
        });
      }
    });
  }
}
