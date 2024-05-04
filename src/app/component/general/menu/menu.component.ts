import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isCollapse = false;
  
  check(): void{
    // setTimeout(() => {
    //   this.isCollapse = false;
    // }, 50);
    this.isCollapse = false;
  }

  ngOnInit(): void {
    document.getElementById('btnSwitch')!.addEventListener('click',()=>{
      if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
          document.documentElement.setAttribute('data-bs-theme','light')
          document.getElementById('sun')!.classList.add('bi-sun')
          document.getElementById('sun')!.classList.remove('bi-moon-fill')
        }
        else {
          document.documentElement.setAttribute('data-bs-theme','dark')
          document.getElementById('sun')!.classList.remove('bi-sun')
          document.getElementById('sun')!.classList.add('bi-moon-fill')

      }
  })
  }
}

