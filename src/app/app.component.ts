import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

const message = "Welcome to my page."

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message = "";
  constructor(private title: Title){
    title.setTitle('Anh0701\'s portfolio')
  };

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
