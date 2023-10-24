import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel numquam facere qui dicta veniam sapiente hic laudantium quod similique, ad facilis quisquam officia repudiandae! Possimus doloribus dicta autem exercitationem?"

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
