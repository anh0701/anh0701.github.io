import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  posts = [
    {
      title: 'How to transfer repositories from GitLab to GitHub',
      author: 'Quynh Anh',
      time: 'Jan 29, 2025',
      excerpt: 'Transferring repositories from GitLab to GitHub can seem... Click to read more.',
      content: `
        <p>Transferring repositories from GitLab to GitHub can seem like a daunting task, but with the right steps, it’s actually quite simple. This guide will walk you through the process of moving your projects, preserving all your commit history, branches, and tags, ensuring a smooth transition between the two platforms.</p>
        <img style="display: flex; margin: 0 auto;" src="assets/images/Git.svg" alt="Image" >
        <p>Step 1: create an empty repo on GitHub</p>
        <p>Step 2: repo on Gitlab, run command: </p>
        <pre><code>git remote add github URL-repo-github;</code></pre>

        <pre><code>git push --mirror github</code></pre>

      `,
      image: 'assets/images/Git.svg',
      tags: ['Tech', 'Git', 'GitLab', 'GitHub']
    },
    {
      title: 'How to install Spring boot',
      author: 'Quynh Anh',
      time: 'Jan 29, 2025',
      excerpt: 'How to install Spring boot... Click to read more.',
      content: `
        <p></p>
        <img style="display: flex; margin: 0 auto;" src="assets/images/spring-boot.png" alt="Image" >
        <p>Step 1: install scoop</p>
        <pre><code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code></pre>
        <pre><code>Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression</code></pre>
        <p>Step 2: install java </p>
        <pre><code>scoop bucket add java extras main</code></pre>

        <pre><code>scoop install java/openjdk21 extras/springboot main/maven main/gradle</code></pre>
        <p>Step 3: install IntelliJ IDEA ultimate</p>
        <pre><code>scoop install extras/idea-ultimate</code></pre>

      `,
      image: 'assets/images/spring-boot.png',
      tags: ['Tech', 'Scoop', 'Spring boot', 'Java']
    },
    {
      title: 'How to Setup a Laravel Project You Cloned from Github',
      author: 'Quynh Anh',
      time: 'Jan 29, 2025',
      excerpt: 'How to Setup a Laravel Project You Cloned from Github... Click to read more.',
      content: `
        <p></p>
        <img style="display: flex; margin: 0 auto;" src="assets/images/Laravel.svg" alt="Image" >
        <p>Step 1: Install <strong>Composer</strong> Dependencies</p>
        <pre><code>composer install</code></pre>
        <p>Step 2: Create a copy of your <strong>.env</strong> file </p>
        <pre><code>cp .env.example .env</code></pre>
        <p>Step 3: Generate an app encryption <strong>key</strong></p>
        <pre><code>php artisan key:generate</code></pre>
        <p>Step 4: In the <strong>.env</strong> file, add database information to allow Laravel to connect to the database
     In the <strong>.env</strong> file fill in the <strong>DB_CONNECTION, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD</strong> options</p>
        <p>Step 5: Migrate the <strong>database</strong></p>
        <pre><code>php artisan migrate</code></pre>
      `,
      image: 'assets/images/Laravel.svg',
      tags: ['Tech', 'Git', 'Laravel']
    },


  ];

  constructor() { }

  isPostDetail = false;
  selectedPost: any;

  ngOnInit(): void {
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
