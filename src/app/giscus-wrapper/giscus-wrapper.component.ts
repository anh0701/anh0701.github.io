import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-giscus-wrapper',
  templateUrl: './giscus-wrapper.component.html',
  styleUrls: ['./giscus-wrapper.component.css']
})
export class GiscusWrapperComponent implements OnInit{
  repo = 'your-repo'; 
  term = 'Post Title'; 
  lang = 'en'; 

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    
    const giscusElement = this.renderer.createElement('giscus');
    
    
    this.renderer.setAttribute(giscusElement, 'repo', this.repo);
    this.renderer.setAttribute(giscusElement, 'term', this.term);
    this.renderer.setAttribute(giscusElement, 'lang', this.lang);

    
    this.renderer.appendChild(document.body, giscusElement);

    
    const script = this.renderer.createElement('script');
    script.src = 'https://giscus.app/widgets.js';
    script.async = true;
    this.renderer.appendChild(document.body, script);
  }
}
