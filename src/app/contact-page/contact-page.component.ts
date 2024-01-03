import { Component, OnInit } from '@angular/core';
const message = "Contact me by ...";
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
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
