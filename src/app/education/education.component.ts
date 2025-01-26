import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList = [
    {
      school: 'Vietnam Maritime University',
      degree: 'Bachelor of Software Engineering',
      startDate: '2020',
      endDate: '2024',
      description: 'Studied various aspects of software development, algorithms, and data structures.',
      logo: 'assets/images/logo-school.svg' 
    },
  ];
}
