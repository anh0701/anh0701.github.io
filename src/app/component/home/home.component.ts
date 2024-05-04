import { Component, OnInit } from '@angular/core';

const message = "Welcome ..."
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  message = "";

  private typing(): void {
    let count = 0;
    const id = setInterval(() => {
      if (this.message.length === message.length) {
        clearInterval(id); 
      }
      this.message += message.charAt(count);
      count += 1;
    }, 150);
  }
  
  ngOnInit(): void {
    this.typing();
  }
}
