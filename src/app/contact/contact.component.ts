import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: '',
    // phone: '+1234567890',
    linkedin: '',
    github: '',
    gitlab: ''
  };
}
