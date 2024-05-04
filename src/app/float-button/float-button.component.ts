import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.css']
})
export class FloatButtonComponent {
  public openMenu: boolean = false;
  isOver = false;

  clickMenu() {
    this.openMenu = !this.openMenu;
    // When the user scrolls down 20px from the top of the document, show the button

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn")!.style.display = "block";
    } else {
      document.getElementById("myBtn")!.style.display = "none";
    }
  }

  goToTop() {

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
    this.openMenu = !this.openMenu;
  }

  darkMode() {
    
    var elements = document.getElementsByClassName("btnSwitch");
    for (var i = 0; i < elements.length; i++)
    elements[i].addEventListener('click', () => {
      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
        document.getElementById('sun')!.classList.add('bi-sun')
        document.getElementById('sun')!.classList.remove('bi-moon-fill')
      }
      else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        document.getElementById('sun')!.classList.remove('bi-sun')
        document.getElementById('sun')!.classList.add('bi-moon-fill')

      }
    })
  }
  
}
