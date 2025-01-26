import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    const header = document.querySelector('nav');  
    const headerHeight = header ? header.clientHeight : 0;  

    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,  
        behavior: 'smooth'
      });
    }
  }

}
