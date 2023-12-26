import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: string | undefined; // add this
  href: string | undefined; // add this

  constructor(private route: ActivatedRoute) { } // Modify this, to add the ActivatedRoute

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article'); // add this
    this.href = window.location.href; // add this
    this.post = './assets/posts/' +  articleName + '.md'; // add this
  }

}
