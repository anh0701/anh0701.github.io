import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Project 1: Personal Website',
      description: 'A personal portfolio website to showcase my skills and projects.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Angular'],
      date: '10/2023 - present',
      githubLink: 'https://github.com/anh0701/anh0701.github.io',
    },
    {
      title: 'Project 2: Food Supply',
      description: 'This is a personal project. In this project, I aim to create an online food ordering platform.',
      techStack: ['Next Js', 'Spring boot', 'PostgreSQL'],
      date: '12/2024 - present',
      githubLink: 'https://github.com/anh0701/food'
    },
    {
      title: 'Project 3: Electronics-store',
      description: 'This project involved the development of a website designed to introduce and support the electronic product business. Users can browse products, make purchases, and manage their accounts, create and publish articles, leave comments on existing posts, handle their stock or inventory,... The team consisted of three members.',
      techStack: ['Laravel', 'MySQL', 'MVC architecture', 'Ajax', 'HTML', 'CSS', 'JavaScript'],
      date: '3/2024 - 6/2024',
      githubLink: 'https://github.com/anh0701/electronics-store',
    },
    {
      title: 'Project 4: Cat Store',
      description: 'This is a personal project. The primary goal of this project is to create a web application that facilitates the management and sale of cat supplies. Users can browse products, make purchases, and manage their accounts,... The project utilizes several technologies: Laravel, MySQL, RESTful API, Docker.',
      techStack: ['Laravel', 'Docker', 'MySQL'],
      date: '4/2023 - 6/2024',
      githubLink: 'https://github.com/anh0701/cat-store',
    },
    {
      title: 'Project 5: Shopping App',
      description: 'This is a personal project. In this project, I aim to create an online food ordering platform using Flutter and following the principles of Atomic Design. By leveraging Flutter’s powerful widgets and Atomic Design’s component hierarchy, I’ll build a robust and user-friendly application. Users will be able to browse menus, select dishes, and place orders seamlessly.',
      techStack: ['Flutter'],
      date: '4/2023 - 3/2024',
      githubLink: 'https://github.com/anh0701/shopping-app'
    },
  ];

}
